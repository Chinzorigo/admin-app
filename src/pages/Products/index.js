import React, { useEffect, useState } from "react";
import { Table, Form, Input, InputNumber, Typography, Popconfirm } from "antd";
import axios from "axios";

// Editable cell

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

function Products() {
  const [product, setProduct] = useState([]);

  // Get user list from database using express
  const getProduct = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/api/product`);
      setProduct(result.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);



  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record._id === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      ...record,
    });
    setEditingKey(record._id);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (_id) => {
    try {
      const row = await form.validateFields();
      const response = await axios.put(
        `http://localhost:8000/api/product/${_id}`,
        row
      );

      console.log("Product updated successfully", response.data);
      setEditingKey("");
      getProduct();
      
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };



  // Columns
  const columns = [
    {
      title: "Product name",
      dataIndex: "title",
      key: "1",
      fixed: "left",
      editable: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "2",
      fixed: "left",
      editable: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "3",
      editable: true,
    },
    {
      title: "Discount",
      dataIndex: "discountPercentage",
      key: "4",
      editable: true,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "5",
      editable: true,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "6",
      editable: true,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "7",
      editable: true,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "8",
      editable: true,
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "9",
      editable: true,
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "10",
      editable: true,
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "11",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record._id,save)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a href="#section">Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "price" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (

    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={product}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
}

export default Products;
