import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TaskPage from './pages/TaskPage.jsx';
import DinheiroPage from './pages/DinheiroPage.jsx';
import GerenciadorPage from './pages/GerenciadorPage.jsx';
import MesPage from './pages/MesPage.jsx';
import CalculadoraPage from './pages/CalculadoraPage.jsx';
import GraficoPage from './pages/GraficoPage.jsx';

const router = createBrowserRouter([
  {

    path: "/",
    element: <App />,
  },
  {
    path: "/gerenciador",
    element: <GerenciadorPage />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
  {
    path: "/gerenciador_gasto",
    element: <DinheiroPage />,
  },
  {
    path: "/mes",
    element: <MesPage />
  },
  {
    path: "/calculadora",
    element: <CalculadoraPage />
  },
  {
    path: "/grafico",
    element: <GraficoPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
