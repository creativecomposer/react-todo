import { useMemo } from "react";
import { filterTodos } from "./utils.js";

export default function TodoList({ todos, theme, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  return (
    <div className={theme}>
      <h3>{tab} TODOs</h3>
      <ul>
        {visibleTodos.map((todo) => (
          <li>{todo.completed ? <s>{todo.text}</s> : todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
