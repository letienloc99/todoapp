import React, { useState } from "react";

function EditTodoForm({ editTodo, todo }) {
  const [value, setValue] = useState(todo.todo);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, todo.id);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Sửa công việc...."
        className="todo-input"
      />
      <button className="todo-btn" type="submit">
        Update
      </button>
    </form>
  );
}
export default EditTodoForm;
