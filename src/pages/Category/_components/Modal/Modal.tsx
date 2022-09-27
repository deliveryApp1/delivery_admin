import  { useState } from "react";
import { FormElements, Modal as AntdModal } from "components/index";
import { Button } from "antd";


const Modal = () => {
  const [visible, setVisible] = useState<boolean>();

  return (
    <>
      <Button type="primary" onClick={() => setVisible((prev) => !prev)} >Yaratish</Button>
      <AntdModal
        title={"Kategoriya yaratish"}
        buttonText={"Tasdiqlash"}
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        <FormElements.Input />
      </AntdModal>
    </>
  );
};

export default Modal;
