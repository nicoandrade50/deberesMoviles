import { Create, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";

export const ProductCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: categorySelectProps } = useSelect({
    resource: "categories",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Nmae"
          name="name"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input the description!" }]}
        >
          <MDEditor data-color-mode="light" />
        </Form.Item>
        <Form.Item
          label="Category"
          name={["category", "id"]}
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
        <Form.Item
          label="Status"
          name="status"
          initialValue="draft"
          rules={[{ required: true, message: "Please select a status!" }]}
        >
          <Select
            defaultValue="draft"
            options={[
              { value: "draft", label: "Draft" },
              { value: "published", label: "Published" },
              { value: "rejected", label: "Rejected" },
            ]}
            style={{ width: 120 }}
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
