import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/Header/header';
import Animes from './Pages/Animes';
/*
import Content from './Componentes/Content/content';
import Footer from './Componentes/Footer/footer';
import { SearchContext, SearchProvider } from './Componentes/Search/search';
*/
function App() {
  return (
    <div>
      <Header />
      <Animes/>
    </div>
  )
}

export default App;
