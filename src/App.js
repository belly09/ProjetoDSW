import './App.css';
import Header from './componentes/Header';
import Produtos from './componentes/Produtos';
import SecaoCapa from './componentes/SecaoCapa';


function App() {
  return (
    <div className="App">
      <Header/>
      <SecaoCapa/>
      <Produtos/>
    </div>
  );
}


export default App;
