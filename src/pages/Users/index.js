import { Space, Table } from "antd";
import { useEffect, useState} from "react";
import axios from 'axios';
const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "CreatedAt",
        dataIndex: "CreatedAt",
        key: "CreatedAt"
    },
    

]


function Users () {
    return (
        <div>Users</div>
    )
}

export default Users;