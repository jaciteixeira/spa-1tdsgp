import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Bloco de criação das rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import EditarProdutos from './routes/EditarProdutos.jsx';
import Error from './routes/Error.jsx';
import ExcluirProduto from './routes/ExcluirProduto.jsx';

const router = createBrowserRouter(
  [
    {path: '/',  element : <App />,
    errorElement: <Error/>,
    children:[
        { path: '/', element : <Home/>},
        { path: '/produtos', element : <Produtos/>},
        { path: '/editar/produto/:id', element : <EditarProdutos/>},
        { path: '/excluir/produto/:id', element : <ExcluirProduto/>},
      ]
  }
 ]
)

//Bloco de criação das rotas

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
