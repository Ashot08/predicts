import { createPortal } from 'react-dom';

interface IPortalProps {
  children?: React.ReactNode;
  container?: Element | DocumentFragment,
}

export const Portal = (props: IPortalProps) => {
  const {
    children,
    container = document.body.getElementsByClassName('app')[0] || document.body
  } = props;
  return createPortal(children, container);
};
