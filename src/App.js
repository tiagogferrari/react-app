import './App.css';
import Header from './Componentes/Header/header';
import Content from './Componentes/Content/content';
import Footer from './Componentes/Footer/footer';
import { SearchContext, SearchProvider } from './Componentes/Search/search';

function App() {

  return (
    <div>
      <Header />
      <SearchContext.Provider />
      <Content />
      <Footer />
    </div>
  )
}

export default App;
