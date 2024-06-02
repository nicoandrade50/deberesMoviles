import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";
import React from "react";

interface Employee extends BaseRecord {
  id: number;
  nombre: string;
  email: string;
  edad: number;
  genero: string;
}

const data: Employee[] = [
  {
    id: 1,
    nombre: "Lili Andrade",
    email: "lili.andrade21@empresa.com",
    edad: 40,
    genero: "femenino",
  },
  {
    id: 2,
    nombre: "Cica Andrade",
    email: "cica.andrade@empresa.com",
    edad: 32,
    genero: "femenino",
  },
];

export const EmployeesList: React.FC = () => {
  const { tableProps } = useTable<Employee>({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id" dataSource={data}>
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="nombre" title="Nombre" />
        <Table.Column dataIndex="email" title="Email" />
        <Table.Column dataIndex="edad" title="Edad" />
        <Table.Column dataIndex="genero" title="Género" />
        <Table.Column
          title="Acciones"
          render={(text, record: Employee) => (
            <Space>
              <EditButton size="small" recordItemId={record.id} />
              <ShowButton size="small" recordItemId={record.id} />
              <DeleteButton size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
