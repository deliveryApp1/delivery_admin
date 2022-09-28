import { FC } from "react";
import { Modal as AntModal, ModalProps, Button, Row, Col } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

type Props = ModalProps & {
  title: string;
  buttonText?: string;
  onSubmit?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
};

const Modal: FC<Props> = ({
  title,
  buttonText,
  children,
  onSubmit,
  ...props
}) => {
  return (
    <AntModal
      centered
      footer={
        buttonText ? (
          <Row justify="end" gutter={10} wrap={false}>
            <Col>
            <Button htmlType="submit" onClick={onSubmit}>
             Tasdiqlash
            </Button>
            </Col>
            <Col>
            <Button>Bekor qilish</Button>
            </Col>
          </Row>
        ) : null
      }
      closeIcon={<CloseCircleOutlined />}
      {...props}
    >
      {title && <h2>{title}</h2>}
      {children}
    </AntModal>
  );
};

export default Modal;
