import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../config/i18n/i18nForTests';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface componentRenderOptions {
  route?: string;
  initialState?: StateSchema;
}

export function renderComponent(component: ReactNode, options: componentRenderOptions = {}) {
  const {
    route = '/',
    initialState,
  } = options;

  return render(<StoreProvider initialState={initialState}><MemoryRouter
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }} initialEntries={[route]}>
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>,
  </MemoryRouter></StoreProvider>);
}
