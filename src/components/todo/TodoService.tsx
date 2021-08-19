import { useState, useEffect } from 'react';
import { localStorageHelper } from 'utils';
import { LS_KEY } from 'utils/constants';

export type Itodo = {
  id: number;
  text: string;
  done: boolean;
  date: string;
};

let initialTodos: Itodo[] = [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState(initialTodos);
  let nextIdState = 0;

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const incrementNextId = () => {
    nextIdState = nextIdState + 1;
  };

  const toggleTodo = (id: number) => {
    setTodoState(prevState =>
      prevState.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const removeTodo = (id: number) => {
    setTodoState(prevState =>
      prevState.filter((todo: Itodo) => todo.id !== id),
    );
  };

  const createTodo = (todo: Itodo) => {
    const nextId = todoState.length + 1;
    setTodoState(prevState =>
      prevState.concat({
        ...todo,
        id: nextId,
      }),
    );
  };

  const loadData = () => {
    const initialTodos = localStorageHelper.getItem(LS_KEY.TODOS) ?? '';
    initialTodos?.length >= 1 && incrementNextId();
    initialTodos && setTodoState(initialTodos);
  };

  const saveData = () => {
    localStorageHelper.setItem(LS_KEY.TODOS, todoState);
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
  };
};
