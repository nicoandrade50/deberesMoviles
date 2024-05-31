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

export const CustomerList: React.FC = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const { data: categoryData, isLoading: categoryIsLoading } = useMany({
    resource: "categories",
    ids: tableProps?.dataSource?.map((item) => item?.category?.id).filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="name" title="Name" />
        <Table.Column dataIndex="email" title="Email" />
        <Table.Column
          dataIndex="category"
          title="Category"
          render={(value) =>
            categoryIsLoading ? (
              <>Loading...</>
            ) : (
              categoryData?.data?.find((item) => item.id === value?.id)?.name
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
