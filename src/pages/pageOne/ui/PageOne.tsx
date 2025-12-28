import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const PageOne = () => {
  const { t} = useTranslation('pageOne');
  return (
    <div>
      {t('Страница 1')}
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default PageOne;
