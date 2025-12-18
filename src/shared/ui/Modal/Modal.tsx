import classes from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CloseIcon from 'shared/assets/icons/close.svg';

interface IModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

export const Modal: FC<IModalProps> = (props) => {
  const {isOpen, onClose, className, children} = props;
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const closeHandler = () => {
    if(onClose) {
      onClose();
    }
  }
  const mods = {
    [classes.open]: isOpen,
    [classes.visible]: visible,
    [classes.hidden]: !visible,
  }
  const animationTimeoutRef = useRef(null);

  const handleOpen = () => {
    document.body.classList.add('overflow-hidden');
    setModalOpen(true);
    animationTimeoutRef.current = setTimeout(() => {
      setVisible(true);
    }, 10);
  }

  const handleClose = () => {
    document.body.classList.remove('overflow-hidden');
    setVisible(false);
    animationTimeoutRef.current = setTimeout(() => {
      setModalOpen(false);
    }, 500);
  }

  useEffect(() => {
    if (isOpen) {
      handleOpen();
    } else {
      handleClose();
    }
    return () => {
      clearTimeout(animationTimeoutRef.current);
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <>
      {modalOpen && <div className={classNames(classes.modal, className, mods)}>
        <div onClick={closeHandler} className={classNames(classes.overlay)}></div>
        <div className={classNames(classes.content)}>
          <Button className={classNames(classes.closeButton)} theme={ButtonTheme.CLEAR} onClick={onClose}>
              <CloseIcon
                  width={20}
                  height={20}
                  fill={'currentColor'}
              />
          </Button>
          {children}
        </div>
      </div>}
    </>
  );
};

