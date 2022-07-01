import $ from './style.module.scss';
import ImageUpload from '../../components/ImageUpload';
import TextBox from '../../components/TextBox';
import { firstText, secondText } from '../../__mocks/maintext';
import { HeartBox, MusicFolder } from '../../Icon';

export default function MainPage() {
  return (
    <>
      <div className={$.content}>
        <section>
          <ImageUpload />
        </section>
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
