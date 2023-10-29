import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Criando uma raiz para a aplicação na div com id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizando o componente App na raiz da aplicação
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
