import React from "react";
import {
  DateField,
  MarkdownField,
  NumberField,
  Show,
  TextField,
} from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const CustomerShow: React.FC = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: categoryData, isLoading: categoryIsLoading } = useOne({
    resource: "categories",
    id: record?.category?.id || "",
    queryOptions: {
      enabled: !!record,
    },
  });

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <NumberField value={record?.id ?? ""} />
      <Title level={5}>Name</Title>
      <TextField value={record?.name} />
      <Title level={5}>Email</Title>
      <TextField value={record?.email} />
      <Title level={5}>Category</Title>
      <TextField
        value={
          categoryIsLoading ? <>Loading...</> : <>{categoryData?.data?.name}</>
        }
      />
      <Title level={5}>Created At</Title>
      <DateField value={record?.createdAt} />
    </Show>
  );
};
