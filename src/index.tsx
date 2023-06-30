import { createRoot } from 'react-dom/client';
import '@/app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '@/app/App';
import { store } from '@/app/providers/StoreProvider/config/store';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Не удалось вмонтировать реакт приложение');
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
