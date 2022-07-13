import $ from './style.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { MusicInfo } from '../../types/main';
import { useCallback } from 'react';
import Song from './song';

interface Props {
  list: MusicInfo[];
  setPlayList: React.Dispatch<React.SetStateAction<MusicInfo[]>>;
  setSelectedMusic: React.Dispatch<React.SetStateAction<MusicInfo[]>>;
}

export default function LoadedPlayList({
  list,
  setPlayList,
  setSelectedMusic,
}: Props) {
  const selectMusic = useCallback((info: MusicInfo) => {
    const selectedId = info.id;

    setSelectedMusic(prevMusic => {
      const checkList = prevMusic.filter(({ id }) => id !== selectedId);
      if (prevMusic.length === checkList.length) {
        return [...prevMusic, info];
      }
      return checkList;
    });

    setPlayList(prevList =>
      prevList.map(element =>
        element.id === selectedId
          ? { ...element, selected: !element.selected }
          : element,
      ),
    );
  }, []);

  return (
    <div className={$['list-box']}>
      <Table
        sx={{
          width: '100%',
          minWidth: 500,
          maxWidth: 800,
          backgroundColor: 'white',
        }}
        size="small"
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">앨범</TableCell>
            <TableCell align="center">제목</TableCell>
            <TableCell align="center">가수</TableCell>
            <TableCell align="center">재생</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={$['play-list']}>
          {list.map((row, index) => (
            <Song
              key={`${row.id}${index}`}
              row={row}
              index={index}
              selectMusic={selectMusic}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
