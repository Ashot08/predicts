import classes from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = ({className} : ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const {t} = useTranslation();
  const onToggle = () => {setCollapsed(prev => !prev)}
  return (
    <div data-testid={"sidebar"} className={classNames(classes.sidebar, className, {[classes.collapsed]: collapsed})}>
      <button data-testid={'sidebar-toggle-button'} onClick={onToggle}>{t('toggle')}</button>

      <ThemeSwitcher/>
      <LangSwitcher />

      SIDEBAR
    </div>
  );
};
