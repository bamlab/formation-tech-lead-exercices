import React, {useState} from 'react';
import {View, Text, Button, TextInput, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, removeTodo, todosSelector} from './redux/reducer';

export const Debug = () => {
  const todos = useSelector(todosSelector);
  return (
    <FlatList
      data={todos}
      keyExtractor={todo => todo.id}
      renderItem={data => <Todo todo={data.item} />}
      ListHeaderComponent={Header}
    />
  );
};

const Header = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  return (
    <>
      <TextInput onChangeText={text => setValue(text)} value={value} />
      <Button
        onPress={() => {
          dispatch({
            type: 'ADD_TODO_SAGA',
            payload: {
              todo: {
                text: value,
              },
            },
          });
          setValue('');
        }}
        title="add todo"
      />
      <Button
        onPress={() => {
          for (let i = 0; i < 200; i++) {
            dispatch(
              addTodo({
                todo: {
                  text: `blabka ${Math.random()}`,
                },
              }),
            );
          }
        }}
        title="Populate todos"
      />
    </>
  );
};

const Todo = ({todo}) => {
  console.log('🚀 ~ file: Debug.js ~ line 43 ~ Todo ~ todo', todo);
  const dispatch = useDispatch();

  return (
    <View style={{flexDirection: 'row'}}>
      <Text>{todo.text}</Text>
      <Button
        title="remove"
        onPress={() => dispatch(removeTodo({todoID: todo.id}))}
      />
    </View>
  );
};
