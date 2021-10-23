import React from "react";
import { HeaderProps } from "react-table";
import { Data } from "./makeData";

const Header = (props: HeaderProps<Data>) => {
  return (
      <th {...props.column.getHeaderProps()} className="th">
        <div className="th-content">
          {props.column.id}
        </div>
        <div {...props.column.getResizerProps()} className="resizer" />
      </th>
  );
};

export default Header;
