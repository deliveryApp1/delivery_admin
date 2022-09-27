import { FC } from 'react';
import { Modal as AntModal, ModalProps, Button } from 'antd';
import { CloseCircleOutlined } from "@ant-design/icons";



type Props = ModalProps & {
  title: string;
  buttonText: string;
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
          <Button htmlType="submit" onClick={onSubmit}>
            {buttonText}
          </Button>
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
