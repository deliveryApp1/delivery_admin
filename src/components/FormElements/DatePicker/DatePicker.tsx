import { FC } from "react";
import {
  DatePicker as AntDatePicker,
  DatePickerProps as AntDatePickerProps
} from "antd";
import { CalendarOutlined } from "@ant-design/icons";




export type DatePickerProps = AntDatePickerProps & {
  width?: string;
  ref?: any;
};

const DatePicker: FC<DatePickerProps> = ({ width, ref, ...props }) => {

  return (
    <AntDatePicker
      ref={ref}
      suffixIcon={<CalendarOutlined />}
      format="DD MMMM YYYY"
      style={{ width: `${width ? width : "100%"}` }}
      {...props}
    />

  );
};

export default DatePicker;
