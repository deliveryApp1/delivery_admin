import React from "react";
import { Button, Modal , ButtonProps } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';


const info = () => {
  Modal.info({
    title: "This is a notification message",
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
};

const success = () => {
  Modal.success({
    content: "some messages...some messages...",
  });
};

const error = () => {
  Modal.error({
    title: "This is an error message",
    content: "some messages...some messages...",
  });
};

const warning = () => {
  Modal.warning({
    title: "This is a warning message",
    content: "some messages...some messages...",
  });
};

const confirm = () => {
  Modal.confirm({
    title: 'Tasdiqlash',
    icon: <ExclamationCircleOutlined />,
    content: 'Shi amalni qilishni xoxlaysizmi ?',
    okText: 'Tasdiqlash',
    cancelText: 'Bekor qilish',
  });
};

type NotificationType = "info" | "success" | "error" | "warning" | 'confirm';


type Props = ButtonProps & {
  type:NotificationType,
  size: string
}
const NotificationModal: React.FC<Props> = ({type, size}) => {
  const actions = {
    info,
    success,
    warning,
    error,
    confirm
  };
  return <Button size={size} onClick={actions[type]} >{type}</Button>;
};

export default NotificationModal;
