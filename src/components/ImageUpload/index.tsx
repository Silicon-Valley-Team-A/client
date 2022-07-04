import $ from './style.module.scss';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

interface Props {
  imageUrl?: string;
  setSelectedImage: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export default function ImageUpload({ imageUrl, setSelectedImage }: Props) {
  const selectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const images = e.target.files;
    if (!images) return;

    if (images[0]) {
      setSelectedImage(images[0]);
    }
  };

  return (
    <div className={$['image-box']}>
      <div className={$['sub-box']}>
        <article>
          {!imageUrl ? (
            <>
              <strong>이미지 업로드 또는 드래그</strong>
              <span>나의 주변 환경을 업로드 해보세요</span>
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  onChange={selectImage}
                />
                <Button
                  variant="contained"
                  component="span"
                  className={$['image-upload-btn']}
                >
                  파일 선택
                </Button>
              </label>
            </>
          ) : (
            <img src={imageUrl} alt="selected Image" />
          )}
        </article>
      </div>
    </div>
  );
}
