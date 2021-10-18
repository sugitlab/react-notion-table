import React from "react";

export interface ReactNotionTableProps {
  name: string;
}

const ReactNotionTable = (props: ReactNotionTableProps) => {
  return <div>My name is {props.name}</div>;
}

export default ReactNotionTable;
