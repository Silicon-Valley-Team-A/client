import $ from './style.module.scss';
import Button from '../Button';
import { useState } from 'react';
import { genreListMocks } from '../../__mocks/genre';

interface Props {
  setSelectedGenre: React.Dispatch<React.SetStateAction<string>>;
}

export default function GenreModal({ setSelectedGenre }: Props) {
  const [clickGenre, setClickGenre] = useState('');

  const selectGenre = (genre: string) => {
    setClickGenre(genre);
  };

  return (
    <div className={$['genre-modal']}>
      <strong>회원님이 선호하는 장르를 하나 골라주세요!</strong>

      <div className={$['genre-content']}>
        {genreListMocks.map((genre, index) => (
          <span
            className={
              $[genre !== clickGenre ? 'each-genre' : 'selected-genre']
            }
            key={`${genre}${index}`}
            onClick={() => selectGenre(genre)}
          >
            #{genre}
          </span>
        ))}
      </div>
      <Button text={'저장'} onClick={() => setSelectedGenre(clickGenre)} />
    </div>
  );
}
