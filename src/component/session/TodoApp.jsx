import {Spin} from 'antd';
import Loading from '../fakeData/Loading';
import TodoList from '../fakeData/TodoList';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { isEmpty } from 'lodash';

export default function TodoApp() {

  const [todos, setTodos] = useState([])
  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
          console.log(res?.data)
          setTodos(res?.data)
      } )
  }, [])
  if(isEmpty(todos)) {
      return <Spin></Spin>
  }
  return <div>{ todos ? <TodoList todos = {todos}/> : <Loading />}</div>
}