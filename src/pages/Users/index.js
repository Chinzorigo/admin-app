import { Popconfirm, Space, Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";


function Users() {
  const [user, setUser] = useState([]);
//Get user list
  const getUsers = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/api/users`);
      setUser(result.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);


// Delete user by Id
  const deleteUser = async (_id) => {
    try {
      await axios.delete(`http://localhost:8000/api/users/${_id}`);
    //   console.log('User deleted successfully');
      // Call getUsers() again to update the list of users
    
      getUsers();
    } catch (error) {
      console.log(error.message);
    }
  };


// Column name
  const columns = [
    {
      title: "First Name",
      width: '12.5%',
      dataIndex: "firstName",
      key: "1",
      fixed: "left",
      
    },
    {
      title: "Last Name",
      width: '12.5%',
      dataIndex: "lastName",
      key: "2",
      fixed: "left",
    },
    {
      title: "Email",
      width: '17%',
      dataIndex: "email",
      key: "3",
    },
    {
      title: "Phone",
      width: '8%',
      dataIndex: "phone",
      key: "4",
    },
    {
      title: "Gender",
      width: '6%',
      dataIndex: "gender",
      key: "5",
    },
    {
      title: "Address",
      width: '19%',
      dataIndex: "address",
      key: "6",
    },
    {
      title: "Created At",
      width: '12.5%',
      dataIndex: "createdAt",
      key: "7",
    },
    {
      title: "Action",
      width: '12.5%',
      key: "8",
      render: (_, record) => user.length >= 1 ? (
        <Space size="middle">
          <a href="#section">Update</a>
          <Popconfirm title="Sure to delete?" onConfirm={() => deleteUser(record._id)}>
          <a href="#section">Delete</a>
          </Popconfirm>
        </Space>
      ) : null
    },
  ];
  
  

  return (
    <Table
      columns={columns}
      dataSource={user}
      title={() => "User list - Only delete button works for now."}
      scroll={{ x: 600, y: 580 }}
      bordered
    />
  );
}

export default Users;
