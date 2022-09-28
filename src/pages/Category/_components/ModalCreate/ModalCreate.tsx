import { Button, Col, Form, Row } from "antd";
import { FormElements, Modal as AntdModal } from "components/index";
import { useCategoryAddMutation } from "store/endpoints";

type Props = {
  visible: boolean;
  setVisible: (bool: boolean) => void;
  handleOk?: () => void;
};
const ModalCreate: React.FC<Props> = ({ visible, setVisible, handleOk }) => {
  
  const [categoryMutation, { isLoading }] = useCategoryAddMutation();
  const handleSubmit = (value: any) => {
    const categoryPromise = categoryMutation(value).unwrap();
    categoryPromise
      .then((res) => {
        setVisible(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <AntdModal
        title={"Kategoriya yaratish"}
        open={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      >
        <Form
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

export default ModalCreate;
