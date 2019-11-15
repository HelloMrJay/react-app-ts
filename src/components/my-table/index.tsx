import React from 'react';
import { Table, Divider, Tag } from 'antd';
import { Link } from 'react-router-dom';

interface MyTableProps {
  children?: React.ReactNode,
  data: any[]
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <Link to="#">Invite {text}</Link>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: string, record: any) => (
      <span>
        <Link to="#">Invite {record.name}</Link>
        <Divider type="vertical" />
        <Link to="#">Delete</Link>
      </span>
    ),
  },
];

const MyTable: React.FC<MyTableProps> = (props) => {
  return (
    <Table columns={columns} dataSource={props.data} />
  )
};

// 或者
// class MyTable extends React.Component<MyTableProps> {
//   constructor(props: MyTableProps) {
//     super(props)
//   }
//   render() {
//     return (
//       <Table columns={columns} dataSource={this.props.data} />
//     )
//   }
// };

export default MyTable;