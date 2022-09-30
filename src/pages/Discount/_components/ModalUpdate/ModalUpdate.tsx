import { Button, Col, Form, message, Row } from "antd";
import { FormElements, Modal  } from "components/index";
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
  const [categoryUpdateMutation, { isLoading }] = useCategoryUpdateMutation();

  const handleSubmit = (value: any) => {
    const categoryPromise = categoryUpdateMutation({
      id: updateData.id,
      value,
    }).unwrap();
    categoryPromise
      .then((res) => {
        if (res.statusCode === 200) {
          message.success("Muvaffaqiyati tahrirlandi.");
          setVisible(false);
        }
      })
      .catch((err) => {
        message.error(`Xatolik yuz berdi. Xatolik: ${err.message}`);
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
      <Modal
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
                <Button onClick={() => setVisible(false)} disabled={isLoading}>
                  Bekor qilish
                </Button>
              </Col>
              <Col>
                <Button
                  htmlType="submit"
                  loading={isLoading}
                  disabled={isLoading}
                  type="primary"
                >
                  Tasdiqlash
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalUpdate;
