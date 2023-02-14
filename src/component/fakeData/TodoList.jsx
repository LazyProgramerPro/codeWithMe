import { Divider, List, Typography } from "antd";

const TodoList = ({ todos }) => {
    return (<div>
        {/* <ul>
            {todos.map((todo) => (<li key={todo.id}>{todo.title}</li>))}
        </ul> */}

        <Divider orientation="left">Default Size</Divider>
        <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={todos}
            // dataSource={data}
            renderItem={todos.map((todo) => (
                console.log(todo),
                <List.Item key={todo.id}>
                    <Typography.Text mark>[ITEM]</Typography.Text>{todo.title}
                </List.Item>
    ))}
        />

        </div> );
}

export default TodoList;