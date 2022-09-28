import { Popconfirm, PopconfirmProps } from "antd";
import React from "react";

// React.MouseEvent<HTMLElement>

type Props = PopconfirmProps & {
  children: React.ReactNode;
};
const PopConfirm: React.FC<Props> = ({ children , ...props}) => (
  <Popconfirm
    okText="Xa"
    cancelText="Yoq"
    {...props}
  >
    {children}
  </Popconfirm>
);

export default PopConfirm;
