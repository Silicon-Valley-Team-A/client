import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Song } from '../../types/playlist';
import PlayList from './PlayList';
import { MusicInfo } from '../../types/main';
interface Props {
  list: MusicInfo[];
}
export default function NewTable({ list }: Props) {
  console.log(list);
  return (
    <div>
      <Table sx={{ width: '100%' }} size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">번호</TableCell>
            <TableCell align="center">이미지</TableCell>
            <TableCell align="center">곡 제목</TableCell>
            <TableCell align="center">아티스트</TableCell>
            <TableCell align="center">앨범</TableCell>
            <TableCell align="center">재생</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row, index) => (
            <PlayList key={`${row.id}${index}`} row={row} index={index} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
