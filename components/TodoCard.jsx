/* eslint-disable react/prop-types */
const TodoCard = ({ todo }) => {
  return (
    <div className="card-container">
      <h4>
        {todo.id} . {todo.name}
      </h4>
    </div>
  );
};

export default TodoCard;
