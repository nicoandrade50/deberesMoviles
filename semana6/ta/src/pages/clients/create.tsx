import { Create, useForm } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";
import React from "react";

export const ClientCreate: React.FC = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          name="nombre"
          label="Nombre"
          rules={[{ required: true, message: "Por favor, ingrese el nombre" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Por favor, ingrese un correo electrónico válido",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="edad"
          label="Edad"
          rules={[{ required: true, message: "Por favor, ingrese la edad" }]}
        >
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item
          name="genero"
          label="Género"
          rules={[{ required: true, message: "Por favor, seleccione el género" }]}
        >
          <Select>
            <Select.Option value="masculino">Masculino</Select.Option>
            <Select.Option value="femenino">Femenino</Select.Option>
            <Select.Option value="otro">Otro</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Create>
  );
};
