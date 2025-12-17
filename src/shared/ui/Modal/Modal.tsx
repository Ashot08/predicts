import classes from './Modal.module.scss';
import { classNames } from 'shared/lib/classNames';
import { FC, ReactNode, useEffect } from 'react';

interface IModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

export const Modal: FC<IModalProps> = (props) => {
  const {isOpen, onClose, className, children} = props;
  const closeHandler = () => {
    if(onClose) {
      onClose();
    }
  }
  const mods = {
    [classes.open]: isOpen,
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && <div className={classNames(classes.modal, className, mods)}>
        <div onClick={closeHandler} className={classNames(classes.overlay)}></div>
        <div className={classNames(classes.content)}>
          {children}
        </div>
      </div>}
    </>
  );
};

