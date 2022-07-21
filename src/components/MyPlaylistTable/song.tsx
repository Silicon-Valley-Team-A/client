import { TableCell, TableRow } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { setSongList } from '../../store/features/audioSlice';
import $ from './style.module.scss';
import { useAppDispatch } from '../../store';
import { MusicInfo } from '../../types/main';

interface Props {
  row: MusicInfo;
  index: number;
}

export default function SongDetail({ row, index }: Props) {
  const dispatch = useAppDispatch();
  const playSong = () => {
    dispatch(setSongList([row]));
  };

  return (
    <TableRow
      key={`${row.image_album}${index}`}
      sx={{
        '&:hover': {
          backgroundColor: '#eaeaea',
        },
      }}
    >
      <TableCell align="center">{index + 1}</TableCell>
      <TableCell align="center">
        <img
          src={row.image_album}
          alt={`${row.title}앨범 커버`}
          width={50}
          height={50}
        />
      </TableCell>
      <TableCell align="center">{row.title}</TableCell>
      <TableCell align="center">{row.artist}</TableCell>
      <TableCell align="center">{row.title_album}</TableCell>
      <TableCell align="center" onClick={playSong}>
        <PlayArrowIcon sx={{ color: '#329dff' }} className={$['play-icon']} />
      </TableCell>
    </TableRow>
  );
}
