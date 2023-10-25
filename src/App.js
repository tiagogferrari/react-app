import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Animes from './Pages/Animes';
import Busca from './Pages/Busca';
import Navegacao from './Componentes/Navegacao/navegacao';
import { SearchProvider } from './Componentes/Search/search';
import Home from './Pages/Home';

function App() {
  const [pagina, setPagina] = useState('home')
  let conteudo

  if (pagina === 'animes') {
    conteudo = <Animes />
  } else if (pagina === 'home') {
    conteudo = <Home onPageChange={setPagina} />
  } else if (pagina === 'busca') {
    conteudo = <Busca />
  }

  return (
    <div>
      <Navegacao onPageChange={setPagina} />
      <main>
        <SearchProvider>
          {conteudo}
        </SearchProvider>
      </main>
    </div>
  )
}

export default App;
