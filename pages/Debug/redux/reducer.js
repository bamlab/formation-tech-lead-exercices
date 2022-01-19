import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'todolist',
  initialState: {
    todos: [],
    lastID: 0,
  },
  reducers: {
    addTodo: (state, {payload}) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todos.push({...payload.todo, id: state.lastID});
      state.lastID += 1;
    },
    removeTodo: (state, {payload}) => {
      const position = state.todos.findIndex(
        todo => todo.id === payload.todoID,
      );
      state.todos.splice(position, 1);
    },
  },
});

export const {addTodo, removeTodo} = counterSlice.actions;

export const counterSelector = state => {
  return state.todos.reduce((total, todo) => `${total} ${todo.text}`, '');
};

export const todosSelector = state => {
  return state.todos;
};
