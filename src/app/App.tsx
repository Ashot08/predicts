import "./styles/index.scss";
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
  const {theme} = useTheme();
  const {t} = useTranslation();

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  return (
    <div className={classNames('app', theme)}>
      <Navbar/>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <p>{t('Текст')}</p>
      </Modal>

      <div className={'page'}>
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <div className="page-content">
          <button onClick={toggleModal}>{t('Текст')}</button>
          <AppRouter/>
        </div>
      </div>
    </div>
  );
};

export default App;
