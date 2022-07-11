import $ from './style.module.scss';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useCallback, useEffect, useRef, useState } from 'react';

const Input = styled('input')({
  display: 'none',
});

interface Props {
  imageUrl?: string;
  setSelectedImage: React.Dispatch<React.SetStateAction<File | undefined>>;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  setSelectedGenre: React.Dispatch<React.SetStateAction<string>>;
}

export default function ImageUpload({
  imageUrl,
  setSelectedImage,
  setImageUrl,
  setSelectedGenre,
}: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement | null>(null);

  const selectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const images = e.target.files;
    if (images?.[0]) {
      setSelectedImage(images[0]);
    }
  };

  const eventPrevent = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOut = useCallback((e: DragEvent): void => {
    eventPrevent(e);
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    eventPrevent(e);
    if (e.dataTransfer?.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback((e: DragEvent): void => {
    eventPrevent(e);

    if (e.type === 'drop') {
      setImageUrl('');
      setSelectedGenre('');
      setSelectedImage(e.dataTransfer?.files[0]);
    }
    setIsDragging(false);
  }, []);

  // 3개의 이벤트 Listener 등록 (마운트 될때)
  const initDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragOut, handleDragOver, handleDrop]);

  // 3개의 이벤트 Listener 삭제 (언마운트 될때)
  const resetDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <div className={$['image-box']}>
      <div
        className={$[isDragging ? 'sub-box-dragging' : 'sub-box']}
        ref={dragRef}
      >
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
