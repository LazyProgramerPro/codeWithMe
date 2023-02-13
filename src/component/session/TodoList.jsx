import { Button, List, Typography } from 'antd';
import React, { useState } from 'react';
import { todoList } from '../fakeData/todoListFake';
import styled from 'styled-components';
import { CheckOutlined } from '@ant-design/icons';

export default function TodoList() {

  const [list, setList] = useState(todoList)

  useState(()=>{

    // lấy data từ server
    // sử dụng data để setTodoList (dùng axios)

    //gọi api với axios + jsonplaceholder

    // const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))

    // setTodoList

  },[])

  const checkDone = list?.every(l => l?.complete === true)

  const handleCompleteWork = (id) => {
    const index = todoList?.findIndex((x) => x.id === id);

    if (index < 0) return;

    list.splice(index, 1, {
      id: id,
      task: list[index]?.task,
      complete: true
    });

    setList([...list])

  };


  return (
    <>

      <HeaderTodoList checkDone={checkDone}>
        {!checkDone ? "TodoList" : "Chúc mừng hoàn thiện công việc"}
      </HeaderTodoList>

      <ListStyled
        bordered
        dataSource={list}
        renderItem={(item) => (
          <ListItemStyed>
            <TypographyTextStyled checkData={item?.complete}>{item?.task} {item?.complete ? <CheckOutlined></CheckOutlined> : <Button onClick={() => handleCompleteWork(item?.id)}>work</Button>}</TypographyTextStyled>
          </ListItemStyed>
        )}
      />
    </>
  )
}


const HeaderTodoList = styled.div`
  /* css cho div */

  display: flex;
  justify-content: center;

  color: red;

  color: ${props => props.checkDone ? "blue" : "red"};

`

const ListStyled = styled(List)``

const ListItemStyed = styled(List.Item)`

`
const TypographyTextStyled = styled(Typography.Text)`
  color: ${props => props.checkData ? "blue" : "red"};
`

