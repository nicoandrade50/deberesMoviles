import React from "react";
import { Create, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";

export const EmployeeCreate: React.FC = () => {
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: departmentSelectProps } = useSelect({
    resource: "departments",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input the name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Please input the role!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Department"
          name={["department", "id"]}
          rules={[{ required: true, message: "Please select a department!" }]}
        >
          <Select {...departmentSelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};
