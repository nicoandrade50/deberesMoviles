import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";

export const EmployeeEdit: React.FC = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});
  const employeeData = queryResult?.data?.data;

  const { selectProps: departmentSelectProps } = useSelect({
    resource: "departments",
    defaultValue: employeeData?.department?.id,
    queryOptions: {
      enabled: !!employeeData?.department?.id,
    },
  });

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
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
          initialValue={formProps?.initialValues?.department?.id}
          rules={[{ required: true, message: "Please select a department!" }]}
        >
          <Select {...departmentSelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
