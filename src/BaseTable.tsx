import React from "react";
import styled from "styled-components";
import {
  useTable,
  useBlockLayout,
  useResizeColumns,
  Column,
} from "react-table";
import { Data } from "./makeData";
import Header from './Header';

export interface BaseTableProps {
  columns: Column<Data>[];
  data: Data[];
}

const Styles = styled.div`
  padding: 1rem;

  .table {
    display: inline-block;
    border-spacing: 0;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .td {
      margin: 0;
      padding: 0.5rem;
      text-overflow: ellipsis;
      border-bottom: 1px solid #e0e0e0;
      border-right: 1px solid #e0e0e0;

      ${
        "" /* In this example we use an absolutely position resizer,
       so this is required. */
      }
      position: relative;

      :last-child {
        border-right: 0;
      }
    }

    .th {
      color: #9e9e9e;
      font-weight: 500;
      font-size: 0.875rem;
      text-align: left;
      cursor: pointer;
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #e0e0e0;
      border-right: 1px solid #e0e0e0;

      &:hover {
        background: #f5f5f5;
      }

      :last-child {
        border-right: 0;
      }

      .resizer {
        display: inline-block;
        width: 5px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;
        ${"" /* prevents from scrolling while dragging on touch devices */}
        touch-action:none;

        &:hover {
          background: rgba(46, 170, 220, 0.8);
        }
      }
    }
  }
`;

const BaseTable = (props: BaseTableProps) => {
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 400,
      Header: Header,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
  } = useTable<Data>(
    { columns: props.columns, data: props.data, defaultColumn: defaultColumn },
    useBlockLayout,
    useResizeColumns
  );

  return (
    <Styles>
      <div>
        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="tr">
                {headerGroup.headers.map((col) => col.render("Header"))}
                  {/*
                  <th {...col.getHeaderProps()} className="th">
                    {col.render("Header")}
                    <div {...col.getResizerProps()} className="resizer" />
                  </th>
                  */}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, _) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="tr">
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className="td">
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <pre>
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre>
      </div>
    </Styles>
  );
};

export default BaseTable;
