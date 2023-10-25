import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Animes from './Pages/Animes';
import Mangas from './Pages/Mangas';
import Busca from './Pages/Busca';
import Navegacao from './Componentes/Navegacao/navegacao';
import { SearchProvider } from './Componentes/Search/search';

function App() {
  const [pagina, setPagina] = useState('animes')
  let conteudo

  if (pagina === 'animes') {
    conteudo = <Animes />
  } else if (pagina === 'mangas') {
    conteudo = <Mangas />
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
