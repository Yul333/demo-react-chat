import { createRoot } from 'react-dom/client';

import { RuntimeProvider } from './context';
import { Demo } from './Demo';
import { GlobalStyle } from './styled';

createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <RuntimeProvider>
      <Demo />
    </RuntimeProvider>
  </>
);
