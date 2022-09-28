import { FC, useState } from "react";
import { Input as AntdInput, InputProps } from "antd";

export type Props = InputProps & {
  type?: "search" | "password";
};

const Input: FC<Props> = ({ type, prefix, ...props }) => {
  const { Search, Password } = AntdInput;

  if (type === "search") {
    return <Search {...props} prefix={prefix} />;
  }
  if (type === "password") {
    return <Password {...props} prefix={prefix} />;
  } else {
    return <AntdInput  {...props} prefix={prefix} />;
  }
};

export default Input;
