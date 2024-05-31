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

export const EmployeeShow: React.FC = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;
  const record = data?.data;

  const { data: departmentData, isLoading: departmentIsLoading } = useOne({
    resource: "departments",
    id: record?.department?.id || "",
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
      <Title level={5}>Role</Title>
      <TextField value={record?.role} />
      <Title level={5}>Department</Title>
      <TextField
        value={
          departmentIsLoading ? <>Loading...</> : <>{departmentData?.data?.name}</>
        }
      />
      <Title level={5}>Created At</Title>
      <DateField value={record?.createdAt} />
    </Show>
  );
};
