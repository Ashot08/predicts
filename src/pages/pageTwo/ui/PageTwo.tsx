import classes from './PageTwo.module.scss';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

interface IPageTwoProps {
  className?: string;
}

const PageTwo = ({className} : IPageTwoProps) => {
  const {t} = useTranslation();
  return (
    <div className={classNames(classes.pageTwo, className)}>
      {t('PageTwo')}

      <div>
        <Counter />
      </div>
    </div>
  );
};
export default PageTwo;
