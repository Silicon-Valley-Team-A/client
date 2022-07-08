import $ from './style.module.scss';
import ImageUpload from '../../components/ImageUpload';
import TextBox from '../../components/TextBox';
import { firstText, secondText } from '../../__mocks/maintext';
import { HeartBox, MusicFolder } from '../../Icon';
import { useEffect, useState } from 'react';
import LoadedPlayList from '../../components/LoadedPlayList';
import { LoadPlayList } from '../../api/LoadPlayList';
import Button from '../../components/Button';
import { MusicInfo } from '../../types/main';
import Popup from '../../components/Popup';
import Modal from '../../components/Modal';
import ModalBack from '../../components/Modal/ModalBack';
import GenreModal from '../../components/GenreModal';
import { matchGenreToEng } from '../../utils/matchGenreToEng';

export default function MainPage() {
  const [selectedImage, setSelectedImage] = useState<File>(); // 전송할 파일
  const [selectedGenre, setSelectedGenre] = useState('');
  const [playList, setPlayList] = useState<MusicInfo[]>([]); // 총 플레이 리스트
  const [imageUrl, setImageUrl] = useState(''); // 받아온 url
  const [selectedMusic, setSelectedMusic] = useState<MusicInfo[]>([]); // 선택된 노래
  const [showPopup, setShowPopup] = useState(false);
  const [showInputModal, setShowInputModal] = useState(false);

  useEffect(() => {
    if (selectedImage && selectedGenre) {
      const imageGenre = {
        image: selectedImage,
        genre: matchGenreToEng(selectedGenre),
      };

      LoadPlayList(imageGenre)
        .then(data => {
          setImageUrl(data[0].imageUrl);

          const list = data.slice(1).map((list: MusicInfo) => {
            return { ...list, selected: false };
          });
          setPlayList(list);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [selectedGenre]);

  const selectAllOrClearMusic = () => {
    const isEqualLen = playList.length === selectedMusic.length;

    setPlayList(prevList =>
      prevList.map(info => {
        return { ...info, selected: !isEqualLen };
      }),
    );

    setSelectedMusic(isEqualLen ? [] : playList);
  };

  const saveToPlayList = (name: string) => {
    if (selectedMusic.length) {
      // fetch
      console.log(name);
      setShowInputModal(false);
      setShowPopup(true);

      setPlayList(prevList =>
        prevList.map(info => {
          return { ...info, selected: false };
        }),
      );
      setSelectedMusic([]);

      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className={$.content}>
        <div className={$['pop-up-box']}>
          {showPopup && <Popup text={'플레이 리스트 생성 완료'} />}
        </div>

        <div className={$['save-box']}>
          {showInputModal && (
            <>
              <Modal
                saveToPlayList={saveToPlayList}
                closeModal={() => setShowInputModal(false)}
              />
              <ModalBack closeModal={() => setShowInputModal(false)} />
            </>
          )}

          {selectedImage && !selectedGenre && (
            <>
              <GenreModal setSelectedGenre={setSelectedGenre} />
              <ModalBack closeModal={() => setShowInputModal(false)} />
            </>
          )}
        </div>

        <section className={$['image-box']}>
          <ImageUpload
            imageUrl={imageUrl}
            setSelectedImage={setSelectedImage}
          />
        </section>
        {selectedGenre && (
          <section className={$['play-list-box']}>
            <div className={$['more-option']}>
              <Button
                text={'플레이 리스트 저장'}
                onClick={() => selectedMusic.length && setShowInputModal(true)}
              />
              <Button
                text={
                  playList.length === selectedMusic.length
                    ? '선택 해제'
                    : '전체 선택'
                }
                onClick={selectAllOrClearMusic}
              />
            </div>
            <LoadedPlayList
              list={playList}
              setPlayList={setPlayList}
              setSelectedMusic={setSelectedMusic}
            />
          </section>
        )}
      </div>
      <section className={$['more-text']}>
        <TextBox
          title={firstText.title}
          more={firstText.more}
          icon={<MusicFolder />}
        />
        <TextBox
          title={secondText.title}
          more={secondText.more}
          icon={<HeartBox />}
        />
      </section>
    </>
  );
}
