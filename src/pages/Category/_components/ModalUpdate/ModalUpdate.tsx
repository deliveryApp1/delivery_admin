import { Button, Col, Form, Input, Row } from "antd";
import { FormElements, Modal as AntdModal } from "components/index";
import { useEffect } from "react";
import { useCategoryUpdateMutation } from "store/endpoints";
import { CategoryDTO } from "types/category";

type Props = {
  visible: boolean;
  setVisible: (bool: boolean) => void;
  updateData: CategoryDTO;
};

const ModalUpdate: React.FC<Props> = ({ visible, setVisible, updateData }) => {
  const [form] = Form.useForm();
  const [categoryUpdateMutation, {isLoading}] = useCategoryUpdateMutation()


  const handleSubmit = (value: any) => {
    const categoryPromise = categoryUpdateMutation({id:updateData.id, value}).unwrap();
    categoryPromise
      .then((res) => {
        setVisible(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      };


  useEffect(() => {

    if (form.__INTERNAL__.name) {
        form.setFieldsValue({
          name: updateData.name,
        });
     }
  }, [updateData]);

  return (
    <>
      <AntdModal
        title={"Kategoriyani tahrirlash"}
        open={visible}
        onCancel={() => setVisible(false)}
      >
        <Form
          form={form}
          name="basic"
          layout="vertical"
            onFinish={handleSubmit} // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            label="kategoriya:"
            rules={[
              { required: true, message: `Iltimos kategoriyani kiriting` },
            ]}
          >
            <FormElements.Input />
          </Form.Item>

          <Form.Item style={{ marginTop: 50 }}>
            <Row justify="end" gutter={5} wrap={false}>
              <Col>
                <Button onClick={() => setVisible(false)}>Bekor qilish</Button>
              </Col>
              <Col>
                <Button htmlType="submit" disabled={isLoading}>
                  Tasdiqlash
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </AntdModal>
    </>
  );
};

export default ModalUpdate;
