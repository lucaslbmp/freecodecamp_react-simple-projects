import { useRef, useState } from "react";
import "./styles.css";
import { getUser } from "./services";
import { FaUsers, FaExternalLinkAlt } from "react-icons/fa";

export default function GithubFinder() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState();
  const inputRef = useRef();

  function handleSearchValueChange(e) {
    //console.log(e.target?.value)
    setSearch(e.target?.value || "");
  }

  async function handleSearch() {
    console.log(search);
    if (search && typeof search === "string") {
      try {
        let _user = await getUser(search);
        console.log(_user);
        setUser(_user);
      } catch (err) {
        throw err;
      }
    }
  }

  return (
    <div className="github-finder-container">
      <div className="search-container">
        <input
          type="text"
          value={search}
          onChange={handleSearchValueChange}
          placeholder="Type the profile you want to search here ..."
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {user && (
        <div className="profile-container">
          <div className="github-avatar">
            <img className="github-avatar-img" src={user.avatar_url} alt="" />
          </div>
          <section style={{width: '100%'}}>
            <section className="github-text-section">
              <h2 className="github-user-name">{user.name}</h2>
              <div>
                <span className="github-user-username">{user.login}</span>
                <a href={user.html_url} className="redirect-icon"><FaExternalLinkAlt /></a>
              </div>

            </section>

            <div className="github-stats">
              <FaUsers className="users-icon" />
              <span>{`${user.followers} followers \xb7 ${user.following} following`}</span>
            </div>
            <hr className="separator"/>
            <div className="github-bio">{user.bio}</div>
          </section>
        </div>
      )}
    </div>
  );
}
