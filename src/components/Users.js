import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((users) => setUsers(users));
  //   }, []);
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {users.map((user, index) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
};

export default Users;
