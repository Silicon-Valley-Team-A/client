import $ from './style.module.scss';
import ImageUpload from '../../components/ImageUpload';
import TextBox from '../../components/TextBox';
import { firstText, secondText } from '../../__mocks/maintext';
import { HeartBox, MusicFolder } from '../../Icon';
import { useEffect, useState } from 'react';
import LoadedPlayList from '../../components/LoadedPlayList';
import { LoadPlayList } from '../../api/LoadPlayList';

type MusicInfo = {
  id: number;
  albumImage: string;
  title: string;
  singer: string;
  selected: boolean;
};

export default function MainPage() {
  const [selectedImage, setSelectedImage] = useState<File>(); // 전송할 파일
  const [playList, setPlayList] = useState<MusicInfo[]>([]); // 총 플레이 리스트
  const [imageUrl, setImageUrl] = useState(''); // 받아온 url
  const [selectedMusic, setSelectedMusic] = useState<MusicInfo[]>([]); // 선택된 노래

  useEffect(() => {
    if (selectedImage) {
      LoadPlayList(selectedImage)
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
  }, [selectedImage]);

  return (
    <>
      <div className={$.content}>
        <section>
          <ImageUpload
            imageUrl={imageUrl}
            setSelectedImage={setSelectedImage}
          />
        </section>
        {selectedImage && (
          <section>
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
