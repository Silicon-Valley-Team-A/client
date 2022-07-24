import $ from './style.module.scss';
import ImageUpload from '../../components/ImageUpload';
import TextBox from '../../components/TextBox';
import { firstText } from '../../__mocks/maintext';
import { MusicFolder } from '../../Icon';
import { memo, useEffect, useState } from 'react';
import LoadedPlayList from '../../components/LoadedPlayList';
import { LoadPlayList, SavePlayList } from '../../api/LoadPlayList';
import Button from '../../components/Button';
import { MusicInfo } from '../../types/main';
import Popup from '../../components/Popup';
import Modal from '../../components/Modal';
import ModalBack from '../../components/Modal/ModalBack';
import GenreModal from '../../components/GenreModal';
import { matchGenreToEng } from '../../utils/matchGenreToEng';
import { useAppDispatch } from '../../store';
import { setSongList } from '../../store/features/audioSlice';
import { SetCSRF } from '../../api/Auth';
import { isLogin } from '../../utils/isLogin';
import Loading from '../../components/Loading';

function MainPage() {
  const dispatch = useAppDispatch();
  const [selectedImage, setSelectedImage] = useState<File>(); // 전송할 파일
  const [selectedGenre, setSelectedGenre] = useState('');
  const [playList, setPlayList] = useState<MusicInfo[]>([]); // 총 플레이 리스트
  const [imageUrl, setImageUrl] = useState(''); // 받아온 url
  const [selectedMusic, setSelectedMusic] = useState<MusicInfo[]>([]); // 선택된 노래
  const [showPopup, setShowPopup] = useState(false);
  const [showInputModal, setShowInputModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    SetCSRF().catch(error => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    if (selectedImage && selectedGenre) {
      const formData = new FormData();
      formData.append('upload_image', selectedImage);
      formData.append('genre', matchGenreToEng(selectedGenre));

      setIsLoading(true);
      LoadPlayList(formData)
        .then(data => {
          console.log(data);
          setIsLoading(false);
          setImageUrl(data.image);

          const list = data.music.map((list: MusicInfo) => {
            return { ...list, duration: list.duration / 1000, selected: false };
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
    const userId = isLogin();

    if (!userId) {
      alert('로그인이 필요합니다.');
      return;
    }
    if (selectedMusic.length) {
      const songInfo = {
        user_id: +userId,
        name: name,
        tag: selectedGenre,
        songs: selectedMusic.map(({ selected, ...remain }) => {
          return {
            ...remain,
          };
        }),
      };

      SavePlayList(songInfo)
        .then(data => {
          console.log(data);
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
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const playAudio = () => {
    const playList = selectedMusic.map(({ selected, ...remain }) => {
      return { ...remain };
    });
    dispatch(setSongList(playList));
  };

  return (
    <>
      <div className={$.content}>
        {showPopup && (
          <div className={$['pop-up-box']}>
            <Popup text={'플레이 리스트 생성 완료'} />
          </div>
        )}

        <div className={$['save-modal-box']}>
          {showInputModal && (
            <>
              <Modal
                saveToPlayList={saveToPlayList}
                closeModal={() => setShowInputModal(false)}
              />
              <ModalBack closeModal={() => setShowInputModal(false)} />
            </>
          )}

          {selectedImage && !imageUrl && !selectedGenre && (
            <>
              <GenreModal setSelectedGenre={setSelectedGenre} />
              <ModalBack closeModal={() => setShowInputModal(false)} />
            </>
          )}
        </div>
        {!isLoading ? (
          <>
            <section className={$['image-box']}>
              {selectedGenre && (
                <span className={$['genre-box']}>#{selectedGenre}</span>
              )}

              <ImageUpload
                imageUrl={imageUrl}
                setSelectedImage={setSelectedImage}
                setImageUrl={setImageUrl}
                setSelectedGenre={setSelectedGenre}
              />
            </section>

            {selectedGenre && (
              <section className={$['play-list-box']}>
                <div className={$['more-option']}>
                  <Button
                    text={'플레이 리스트 저장'}
                    onClick={() =>
                      selectedMusic.length && setShowInputModal(true)
                    }
                  />
                  <Button text={'선택 재생'} onClick={playAudio} />
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
          </>
        ) : (
          <Loading />
        )}
      </div>

      <section className={$['more-text']}>
        <TextBox
          title={firstText.title}
          more={firstText.more}
          icon={<MusicFolder />}
        />
      </section>
    </>
  );
}

export default memo(MainPage);
