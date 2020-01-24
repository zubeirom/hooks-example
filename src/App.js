import React, { useState } from "react";
import "./App.css";

const Todo = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => toggleTodo(index)}>
          {todo.isCompleted ? "Undone" : "Done"}
        </button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) return;

    addTodo(value);

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add todo..."
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn about react",
      isCompleted: true
    },
    {
      text: "Learn about redux",
      isCompleted: true
    },
    {
      text: "Learn about hooks",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const NewTodos = [...todos, { text }];
    setTodos(NewTodos);
  };

  const toggleTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !todos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
