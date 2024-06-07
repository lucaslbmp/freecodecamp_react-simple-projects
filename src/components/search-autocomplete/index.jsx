import { useEffect, useState } from "react";
import { getUsers } from "./services";
import "./styles.css";
import UserList from "./users-list";
import Sugestions from "./suggestions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  function handleInputChange(e) {
    let _search = e.target.value;
    setSearch(_search);
    setShowSuggestions(true);
  }

  function handleClickSuggestion(suggestion) {
    console.log(suggestion);
    setSearch(suggestion);
    setShowSuggestions(false);
  }

  // function getFilteredUsers(){
  //     if(search && users?.length)
  //         return users
  //         .filter(user => search && user.firstName.toLowerCase().includes(search))
  //     else
  //         return users
  // }

  async function fetchUsers() {
    try {
      setLoading(true);
      const _users = await getUsers();

      if (_users && _users.length) {
        setUsers(_users);
        setFilteredUsers(_users);
        setLoading(false);
        setErrorMsg(null);
      }
    } catch (err) {
      console.log(err);
      setErrorMsg(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      search && users?.length
        ? users.filter(
            (user) =>
              search &&
              user.firstName.toLowerCase().includes(search.toLocaleLowerCase())
          )
        : users
    );
  }, [search]);

  return (
    <div className="search-autocomplete-container">
      <input
        value={search}
        onChange={handleInputChange}
        name="search-users"
        placeholder="Search users here ..."
      />
      <Sugestions
        list={filteredUsers?.map((user) => user.firstName)}
        onClick={handleClickSuggestion}
        showSuggestions={showSuggestions}
      />
      <div className="users-list-container">
        {filteredUsers && filteredUsers.length ?
        filteredUsers.map((user, index) => (
          <UserList key={`user-${index}`} user={user} />
        ))
        : <div>No users found!</div>
      }
      </div>
    </div>
  );
}
