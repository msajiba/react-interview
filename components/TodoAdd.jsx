/* eslint-disable react/prop-types */
const TodoAdd = () => {
  return (
    <div className="custom-input-box">
      <form>
        <input
          type="text"
          placeholder="Enter something..."
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
