import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const TodoList = ({ todo, todos, handleEdit, handleDelete }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <span className="todoText">{t.todo}</span>

          <button onClick={() => handleEdit(t.id)}>
            <BiEdit />
          </button>
          <button onClick={() => handleDelete(t.id)}>
            <AiOutlineDelete />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
