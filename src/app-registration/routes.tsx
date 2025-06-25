import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Registration } from './registration/ui/registration';

const routes = createBrowserRouter([
  { index: true, element: <Registration /> }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
