import $ from './style.module.scss';

interface Props {
  closeModal: () => void;
}

export default function ModalBack({ closeModal }: Props) {
  return <div className={$['modal-back']} onClick={() => closeModal()}></div>;
}
