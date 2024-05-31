import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";

export const CustomerEdit: React.FC = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});
  const customerData = queryResult?.data?.data;

  const { selectProps: categorySelectProps } = useSelect({
    resource: "categories",
    defaultValue: customerData?.category?.id,
    queryOptions: {
      enabled: !!customerData?.category?.id,
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
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input the email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category"
          name={["category", "id"]}
          initialValue={formProps?.initialValues?.category?.id}
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
