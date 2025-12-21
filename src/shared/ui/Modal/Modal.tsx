import classes from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames';
import { FC, ReactNode, useEffect, useRef } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CloseIcon from 'shared/assets/icons/close.svg';
import { Portal } from 'shared/ui/Portal/Portal';

interface IModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  root?: Element | DocumentFragment,
}

export const Modal: FC<IModalProps> = (props) => {
  const {isOpen, onClose, className, children, root} = props;
  const animationTimeoutRef = useRef(null);
  const modalRef = useRef(null);

  const handleOpen = () => {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.classList.add('overflow-hidden');

    animationTimeoutRef.current = setTimeout(() => {
      if(modalRef?.current?.style) {
        modalRef.current.style.opacity = 1;
      }
    }, 10);
  }

  const handleClose = () => {
    document.body.classList.remove('overflow-hidden');
    if(modalRef?.current?.style) {
      modalRef.current.style.opacity = 0;
    }
    animationTimeoutRef.current = setTimeout(() => {
      if(onClose) {
        onClose();
      }
    }, 500);
  }

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  });

  useEffect(() => {
    if (isOpen) {
      handleOpen();
    }
    return () => {
      clearTimeout(animationTimeoutRef.current);
      document.body.classList.remove('overflow-hidden');
    }
  });

  return (
    <>
      {isOpen && <Portal container={root}><div ref={modalRef} className={classNames(classes.modal, className)}>
        <div onClick={handleClose} className={classNames(classes.overlay)}></div>
        <div className={classNames(classes.content)}>
          <Button className={classNames(classes.closeButton)} theme={ButtonTheme.CLEAR} onClick={handleClose}>
              <CloseIcon
                  width={20}
                  height={20}
                  fill={'currentColor'}
              />
          </Button>
          {children}
        </div>
      </div></Portal>}
    </>
  );
};

