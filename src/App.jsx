/* eslint-disable react/jsx-key */
import { useState } from "react";
import TodoAdd from "../components/TodoAdd";
import TodoCard from "../components/TodoCard";
import "./App.css";

// INITIAL TODOS MAIN ARRAY
const todoList = [
  {
    id: 1,
    name: "Pearl Warner",
  },
  {
    id: 2,
    name: "Jeffery Rogers",
  },
];

function App() {
  const [todos, setTodos] = useState(todoList);
  const [name, setName] = useState("");



  const handleAddTodo = (e) => {
    e.preventDefault();

    if (name === "") {
      return alert("Input box is empty");
    }

    if (todos.length >= 10) {
      return alert("You can't add more than 10 todos.");
    }

    setTodos([
      ...todos,
      {
        name: name,
        id: todos.length + 1,
      },
    ]);
    setName("");
  };
  return (
    <>
      <main className="main-container">
        <h3 className="heading"> TODO APPLICATION</h3>

        {/*Todo Add Component*/}
        <TodoAdd name={name} setName={setName} handleAddTodo={handleAddTodo} />

        {/* You can use grid className for responsive todo card */}
        <div className="grid">
          {todos.map((todo) => ( <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
