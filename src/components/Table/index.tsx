import { useMemo } from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './COLUMNS';
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
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  if (cell.column.id === 'image') {
                    return (
                      <td className={$['cell-img']} key={cell.row.id}>
                        <img src={cell.value} />
                      </td>
                    );
                  } else if (cell.column.id === 'play') {
                    return (
                      <td key={cell.row.id}>
                        <IoIosPlay size={32} className={$['play-icon']} />
                      </td>
                    );
                  } else {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
