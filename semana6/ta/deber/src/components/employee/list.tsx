import React from "react";
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
  MarkdownField,
} from "@refinedev/antd";
import { BaseRecord, useMany } from "@refinedev/core";
import { Space, Table } from "antd";

export const EmployeeList: React.FC = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: departmentData, isLoading: departmentIsLoading } = useMany({
    resource: "departments",
    ids: tableProps?.dataSource?.map((item) => item?.department?.id).filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="role" title="Role" />
        <Table.Column
          dataIndex="department"
          title="Department"
          render={(value) =>
            departmentIsLoading ? (
              <>Loading...</>
            ) : (
              departmentData?.data?.find((item) => item.id === value?.id)?.name
            )
          }
        />
        <Table.Column dataIndex="createdAt" title="Created at" render={(value) => <DateField value={value} />} />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
