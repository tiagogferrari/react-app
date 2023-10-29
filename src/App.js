import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Busca from './Pages/Busca';
import Navegacao from './Componentes/Navegacao/navegacao';
import { SearchProvider } from './Componentes/Search/search';
import Home from './Pages/Home';
import Selecionado from './Pages/Selecionado';

function App() {
  // Criando um estado para a página atual
  const [pagina, setPagina] = useState('home')
  // Variável para armazenar o conteúdo da página atual
  let conteudo

  // Verificando qual é a página atual e definindo o conteúdo correspondente
  if (pagina === 'home') {
    conteudo = <Home onPageChange={setPagina} />
  } else if (pagina === 'busca') {
    conteudo = <Busca onPageChange={setPagina} />
  } else if (pagina === 'selecionado') {
    conteudo = <Selecionado onPageChange={setPagina} />
  }

  return (
    <div className='divPrinc'>
      <Navegacao onPageChange={setPagina} />
      <main>
        <SearchProvider>
          <div style={{ backgroundColor: 'rgb(131, 88, 56)' }}>
            {conteudo}
          </div>
        </SearchProvider>
      </main>
    </div>
  )
}

export default App;
