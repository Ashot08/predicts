import { useTranslation } from 'react-i18next';

const PageOne = () => {
  const { t} = useTranslation('pageOne');
  return (
    <div>
      {t('Страница 1')}
    </div>
  );
};

export default PageOne;
