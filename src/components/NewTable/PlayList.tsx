import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Song } from '../../types/playlist';
import { setSongList } from '../../store/features/audioSlice';

import { useAppDispatch } from '../../store';
import { MusicInfo } from '../../types/main';

interface Props {
  row: MusicInfo;
  index: number;
}

export default function PlayList({ row, index }: Props) {
  const dispatch = useAppDispatch();
  const playSong = () => {
    console.log(row);
    dispatch(setSongList([row]));
  };

  return (
    <TableRow key={`${row.image_album}${index}`}>
      <TableCell align="center">{row.id}</TableCell>
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
        <PlayArrowIcon sx={{ color: '#329dff' }} />
      </TableCell>
    </TableRow>
  );
}
