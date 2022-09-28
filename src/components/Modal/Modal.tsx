import { FC } from "react";
import { Modal as AntModal, ModalProps, Button, Row, Col } from "antd";
import {
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

type Props = ModalProps & {
  title: string;
  confirm?: boolean;
  onSubmit?: () => void;
};

const Modal: FC<Props> = ({ title, confirm, children, onSubmit, ...props }) => {
  return (
    <AntModal
      centered
      footer={
        confirm ? (
          <Row justify="end" gutter={10} wrap={false}>
            <Col>
              <Button>yoq</Button>
            </Col>
            <Col>
              <Button htmlType="submit" onClick={onSubmit}>
                xa
              </Button>
            </Col>
          </Row>
        ) : null
      }
      closeIcon={<CloseCircleOutlined />}
      {...props}
    >
      {title && (
        <h2>
          {confirm ? <ExclamationCircleOutlined  style={{color:"#FAAD14"}} /> : ''} {title}
        </h2>
      )}
      {children}
    </AntModal>
  );
};

export default Modal;
