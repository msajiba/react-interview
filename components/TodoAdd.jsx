/* eslint-disable react/prop-types */
const TodoAdd = ({ name, setName, handleAddTodo }) => {
  return (
    <div className="custom-input-box">
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter something..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoAdd;
