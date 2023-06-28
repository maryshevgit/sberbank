import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение'
  );
}

const root = createRoot(container);

root.render(<div>test</div>);
