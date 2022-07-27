import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  async function fetchData() {
    try {
      await fetch("http://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((todoList) => setTodoList(todoList));
    } catch (error) {
      console.log(error);
    }
  }

  //   useEffect(() => {
  //     fetch("http://jsonplaceholder.typicode.com/todos")
  //       .then((res) => res.json())
  //       .then((todoList) => setTodoList(todoList))
  //       .catch((error) => console.log(error));
  //   }, [todoList]);
  useEffect(() => {
    fetchData();
  }, [todoList]);

  return (
    <div>
      <h2>Todo List</h2>
      {todoList.map((todo) => (
        <h3 key={todo.id}>{todo.title}</h3>
      ))}
    </div>
  );
};

export default TodoList;
