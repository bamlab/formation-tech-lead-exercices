import {Alert} from 'react-native';
import {put, takeEvery} from 'redux-saga/effects';
import {addTodo} from './reducer';

function* addTodoWithSaga(action) {
  yield put(addTodo(action.payload));
  Alert.alert('todo created', action.payload.todo.text);
}

export function* mainSaga() {
  yield takeEvery('ADD_TODO_SAGA', addTodoWithSaga);
}
