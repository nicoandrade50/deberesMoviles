// src/components/VariedComponents.tsx
import React from 'react';
import { Button, DatePicker, Input, Select, Switch, Table } from 'antd';

const { Option } = Select;

const VariedComponents: React.FC = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  return (
    <div>
      <h1>Varied Components</h1>
      
      <div style={{ marginBottom: '16px' }}>
        <Button type="primary">Primary Button</Button>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <DatePicker />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <Input placeholder="Basic input" />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <Select defaultValue="Option1" style={{ width: 120 }}>
          <Option value="Option1">Option 1</Option>
          <Option value="Option2">Option 2</Option>
        </Select>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <Switch defaultChecked />
      </div>

      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default VariedComponents;
