import { NumberField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography, Spin } from "antd";
import React from "react";

const { Title } = Typography;

export const EmployeesShow: React.FC = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  if (isLoading) {
    return <Spin />;
  }

  return (
    <Show>
      <Title level={4}>Detalles del Empleado</Title>
      <div>
        <Title level={5}>ID</Title>
        <NumberField value={record?.id ?? ""} />
      </div>
      <div>
        <Title level={5}>Nombre</Title>
        <TextField value={record?.nombre} />
      </div>
      <div>
        <Title level={5}>Email</Title>
        <TextField value={record?.email} />
      </div>
      <div>
        <Title level={5}>Edad</Title>
        <TextField value={record?.edad} />
      </div>
      <div>
        <Title level={5}>Género</Title>
        <TextField value={record?.genero} />
      </div>
    </Show>
  );
};
