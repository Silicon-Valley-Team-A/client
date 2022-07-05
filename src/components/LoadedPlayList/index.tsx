import $ from './style.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { MusicInfo } from '../../types/main';

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
  const selectMusic = (info: MusicInfo) => {
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
  };

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
            <TableRow
              key={row.albumImage + index}
              sx={{
                backgroundColor: row.selected ? '#eaeaea' : 'white',
                borderColor: row.selected ? 'white' : '#eaeaea',
                '&:last-child td, &:last-child th': {
                  border: 0,
                },
              }}
              onClick={() => selectMusic(row)}
            >
              <TableCell component="th" scope="row" align="center">
                <img
                  src={row.albumImage}
                  alt="album image"
                  width={50}
                  height={50}
                />
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.singer}</TableCell>
              <TableCell align="center">
                <PlayArrowIcon sx={{ color: '#329dff' }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
