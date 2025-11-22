import classes from './Error.module.scss';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface IPageLoaderProps {
  className?: string;
}

export const Error = ({className} : IPageLoaderProps) => {
  const {t} = useTranslation();
  const reloadPage = () => {
    location.reload();
  }
  return (
    <div className={classNames(classes.error, className)}>
      {t('Произошла непредвиденная ошибка!')}
      <div>
        <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
      </div>
    </div>
  );
};
