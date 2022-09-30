import { Button, Col, Form, message, Row } from "antd";
import { FormElements, Modal, Upload  } from "components/index";
import { useDiscountAddMutation } from "store/endpoints";
import { DiscountDTO } from "types/discount";

type Props = {
  visible: boolean;
  setVisible: (bool: boolean) => void;
  handleOk?: () => void;
};
const ModalCreate: React.FC<Props> = ({ visible, setVisible, handleOk }) => {
  const [form] = Form.useForm();
  const [discountMutation, { isLoading }] = useDiscountAddMutation();

  const handleSubmit = (value: DiscountDTO) => {
    const categoryPromise = discountMutation(value).unwrap();
    categoryPromise
      .then((res) => {
        if (res.statusCode === 200) {
          message.success("Muvaffaqiyati yaratildi.");
          setVisible(false);
          form.resetFields();
        }
      })
      .catch((err) => {
        message.error(`Xatolik yuz berdi. Xatolik: ${err.message}`);
      });
  };

  return (
    <>
      <Modal
        title={"Kategoriya yaratish"}
        open={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}>
        <Upload />
        
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

export default ModalCreate;
