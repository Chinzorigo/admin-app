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
      console.log('User deleted successfully');
      // Call getUsers() again to update the list of users
    
      getUsers();
    } catch (error) {
      console.log(error.message);
    }
  };




  const columns = [
    {
      title: "First Name",
      width: 100,
      dataIndex: "firstName",
      key: "1",
      fixed: "left",
    },
    {
      title: "Last Name",
      width: 100,
      dataIndex: "lastName",
      key: "2",
      fixed: "left",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "3",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "4",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "5",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "6",
    },
    {
      title: "Үйлдэл",
      key: "action",
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
      title={() => "User list"}
      scroll={{ x: 600, y: 580 }}
    />
  );
}

export default Users;
