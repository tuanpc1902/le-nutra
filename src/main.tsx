import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from '~/app/styles/global-styles.tsx';
import i18n from '~/app/i18n/i18n.ts';
import { store } from '~/app/store/store.ts';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import App from '~/app/App.tsx';

ReactDOM.createRoot(document.getElementById('_tuanp') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <GlobalStyles children={<App />} />
            </I18nextProvider>
        </Provider>
    </React.StrictMode>,
);
