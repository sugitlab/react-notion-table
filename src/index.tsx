import React from "react";
import BaseTable, { BaseTableProps } from "./BaseTable";
import { Column } from "react-table";
import makeData, { Data } from "./makeData";

export interface ReactNotionTableProps {
  name: string;
  height: string;
  width: string;
}

const ReactNotionTable = (props: ReactNotionTableProps) => {
  const columns: Column<Data>[] = React.useMemo(
    () => [
      {
        label: "Column 1",
        accessor: "col1",
      },
      {
        label: "Column 2",
        accessor: "col2",
      },
    ],
    []
  );

  const tableProps: BaseTableProps = {
    columns: columns,
    data: React.useMemo(() => makeData(10), []),
  };
  return (
    <div
      style={{
        height: props.height,
        width: props.width,
      }}
    >
      <BaseTable {...tableProps} />
    </div>
  );
};

export default ReactNotionTable;
