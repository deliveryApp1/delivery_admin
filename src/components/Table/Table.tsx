

import { FC, useState } from "react";
import { Table as AntTable, TableProps } from "antd";


export type Props = TableProps<any> & {
  noHead?: boolean;
};

const Table: FC<Props> = ({ ...props }) => {

  return (
    <div>
      <AntTable
        {...props}
      />
    </div>
  );
}

export default Table;
