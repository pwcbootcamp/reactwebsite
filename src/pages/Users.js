import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users))
      .catch((error) => console.log(error));
  }, [users]);

  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
};

export default Users;
