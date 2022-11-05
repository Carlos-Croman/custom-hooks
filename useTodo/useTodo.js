import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

  const [todos, dispatchToDo] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleTodo = (todo) => {
    const action = {
      type: '[TODO] Add TODO',
      payload: todo
    }

    dispatchToDo(action);
  }

  const handleRemoveTodo = (id) => {
    const action = {
      type: '[TODO] Remove TODO',
      payload: id
    }

    dispatchToDo(action);
  }

  const handleToggleTodo = (id) => {
    const action = {
      type: '[TODO] Toggle todo',
      payload: id
    }

    dispatchToDo(action);
  }

  return {
    todos,
    totalTodo: todos.length,
    totalPendingTodo: todos.filter((todo) => !todo.done).length,
    handleTodo,
    handleToggleTodo,
    handleRemoveTodo
  }
}