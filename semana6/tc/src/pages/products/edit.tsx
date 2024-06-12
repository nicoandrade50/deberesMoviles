import { Edit, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select } from "antd";

export const ProductEdit = () => {
  const { formProps, saveButtonProps, queryResult, formLoading } = useForm({});

  const productData = queryResult?.data?.data;

  const { selectProps: categorySelectProps } = useSelect({
    resource: "categories",
    defaultValue: productData?.category?.id,
    queryOptions: {
      enabled: !!productData?.category?.id,
    },
  });

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
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
          initialValue={formProps?.initialValues?.category?.id}
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
        <Form.Item
          label="Status"
          name="status"
        
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
    </Edit>
  );
};



