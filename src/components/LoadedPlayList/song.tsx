import { TableCell, TableRow } from '@mui/material';
import { MusicInfo } from '../../types/main';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { memo } from 'react';
import { useAppDispatch } from '../../store';
import { setSongList } from '../../store/features/audioSlice';

interface Props {
  row: MusicInfo;
  index: number;
  selectMusic: (info: MusicInfo) => void;
}

export function Song({ row, index, selectMusic }: Props) {
  console.log(row);
  const dispatch = useAppDispatch();
  const playSong = () => {
    dispatch(setSongList([row]));
  };
  return (
    <TableRow
      key={`${row.image_album}${index}`}
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
          src={row.image_album}
          alt={`${row.title}앨범 커버`}
          width={50}
          height={50}
        />
      </TableCell>
      <TableCell align="center">{row.title}</TableCell>
      <TableCell align="center">{row.artist}</TableCell>
      <TableCell align="center" onClick={playSong}>
        <PlayArrowIcon sx={{ color: '#329dff' }} />
      </TableCell>
    </TableRow>
  );
}

export default memo(Song);
