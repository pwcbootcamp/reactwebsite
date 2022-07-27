import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((res) => res.json())
  //       .then((todos) => setTodos(todos));
  //   }, []);
  const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo, index) => (
        <h3 key={todo.id}>{todo.name}</h3>
      ))}
    </div>
  );
};

export default Todos;
