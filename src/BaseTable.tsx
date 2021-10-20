import React from 'react'
import { useTable, Column } from 'react-table'

function BaseTable () {
  const data = [ 
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
  ]

  interface Data {
    col1: string;
    col2: string;
  }

  const columns: Column<Data>[] = [
      {
        Header: 'Column 1',
        accessor: 'col1',
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ]

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data })
 
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(col => (
              <th {...col.getHeaderProps()}>
                {col.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, _) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default BaseTable
