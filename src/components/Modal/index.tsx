import $ from './style.module.scss';
import Button from '../Button';
import { useState } from 'react';

interface Props {
  saveToPlayList: (name: string) => void;
  closeModal: () => void;
}

export default function Modal({ saveToPlayList, closeModal }: Props) {
  const [playListName, setPlayListName] = useState('');

  const inputPlayListName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayListName(e.target.value);
  };

  return (
    <div className={$['modal']}>
      <button className={$['close-btn']} onClick={() => closeModal()}>
        X
      </button>
      <div className={$['input-content']}>
        <span>플레이 리스트 이름 : </span>
        <input type="text" onChange={inputPlayListName} />
      </div>
      <div>
        <Button text={'저장'} onClick={() => saveToPlayList(playListName)} />
      </div>
    </div>
  );
}
