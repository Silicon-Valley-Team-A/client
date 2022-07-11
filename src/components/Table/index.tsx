import { useMemo } from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import { usePagination, useTable } from 'react-table';
import $ from './style.module.scss';
import { IoIosPlay } from 'react-icons/io';

export default function Table() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable(
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        columns,
        data,
      },
      usePagination,
    );

  return (
    <div className={$.table}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.headers}
            >
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()} key={column.Header}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell: any) => {
                  if (cell.column.id === 'image') {
                    return (
                      <td
                        className={$['cell-img']}
                        key={cell.column.id + cell.value}
                      >
                        <img src={cell.value} />
                      </td>
                    );
                  } else if (cell.column.id === 'play') {
                    return (
                      <td key={cell.column.id + cell.value}>
                        <IoIosPlay size={32} className={$['play-icon']} />
                      </td>
                    );
                  } else {
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={cell.column.id + cell.value}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
