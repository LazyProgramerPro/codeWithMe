import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { isEmpty } from 'lodash'
import { Spin, Table} from 'antd'
import ButtonComponent from '../Button/Button'


export default function ListPost() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res?.data)
            setPosts(res?.data)
        } )
    }, [])
    if(isEmpty(posts)) {
        return <Spin></Spin>

    }
    const columns = [
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Body',
          dataIndex: 'body',
          key: 'body',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: '',
            render: () => <div>
                <ButtonComponent/>
            </div>
        }
      ];
      


  return (
    <div>
      ListPost
      <Table dataSource={posts} columns={columns} />
    </div>
  )
}
