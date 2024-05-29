import React from "react";
import { useTable, List } from "@pankod/refine-antd";
import { Table } from "antd";
import { IResourceComponentsProps } from "@refinedev/core"; 

interface IEmployee {
    id: number;
    name: string;
    email: string;
}

const Employees: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable<IEmployee>({
        resource: "users",
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

export default Employees;
