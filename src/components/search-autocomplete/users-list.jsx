export default function UserList({ user }) {
  return (
    <div className="user-tile">
      <div className="user-avatar">
        <img className="user-avatar-img" src={user.image} alt="" />
      </div>
      <div>{`${user.lastName}, ${user.firstName}`}</div>
      <div>{`Gender: ${user.gender.at(0).toUpperCase()}`}</div>
      <div>{`Age: ${user.age}`}</div>
    </div>
  );
}
