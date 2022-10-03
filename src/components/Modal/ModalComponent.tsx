import { FC } from "react";
import { Modal, ModalProps } from "antd";

const ModalComponent: FC<ModalProps> = ({ children, ...props }) => {
    return (
        <Modal
            {...props}
        >
            {children}
        </Modal>
    );
};

export default ModalComponent;