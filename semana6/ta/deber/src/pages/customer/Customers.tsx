import React from "react";
import { useTable, List } from "@pankod/refine-antd";
import { Table } from "antd";
import { IResourceComponentsProps } from "@refinedev/core"; 

interface ICustomer {
    id: number;
    name: string;
    email: string;
}

const Customers: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable<ICustomer>({
        resource: "customers",
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="ID" />
                <Table.Column dataIndex="name" title="Name" />
                <Table.Column dataIndex="email" title="Email" />
            </Table>
        </List>
    );
};

export default Customers;
