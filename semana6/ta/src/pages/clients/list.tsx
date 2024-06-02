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

interface Client extends BaseRecord {
  id: number;
  nombre: string;
  email: string;
  edad: number;
  genero: string;
}

const data: Client[] = [
  {
    id: 1,
    nombre: "Muñeca Andrade",
    email: "muñeca.andrade@google.com",
    edad: 30,
    genero: "masculino",
  },
  {
    id: 2,
    nombre: "Suca Andrade",
    email: "suca.andrade@google.com",
    edad: 35,
    genero: "femenino",
  },
];

export const ClientList: React.FC = () => {
  const { tableProps } = useTable<Client>({
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
          render={(text, record: Client) => (
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
