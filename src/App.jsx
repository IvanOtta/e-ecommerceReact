
// import './App.css';
import "./css/Styles.css"
import NavBar from './componentes/NavBar';
import ItemListContainer from "./componentes/ItemListContainer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenido!'} />
    </div>
  );
}

export default App;
