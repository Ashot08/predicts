import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from 'app/App';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { Error } from 'widgets/Error';
import { StoreProvider } from 'app/providers/StoreProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <ErrorBoundary fallback={<Error />}>
          <ThemeProvider>
            <App/>
          </ThemeProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
);
