import React from 'react'
import BaseTable from './BaseTable'

export interface ReactNotionTableProps {
  name: string;
}

const ReactNotionTable = (props: ReactNotionTableProps) => {
  return (
    <div>
      <BaseTable />
    </div>
  )
}

export default ReactNotionTable;
