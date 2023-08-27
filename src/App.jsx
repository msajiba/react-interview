/* eslint-disable react/jsx-key */
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
  return (
    <>
      <main className="main-container">
        <h3 className="heading"> TODO APPLICATION</h3>

        {/*Todo Add Component*/}
        <TodoAdd />

        {/* You can use "grid" className for responsive todo card */}
        <div className="grid">
          {todoList.map((todo) => (
            <TodoCard todo={todo} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
