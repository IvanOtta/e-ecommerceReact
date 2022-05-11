
// import './App.css';
import "./css/Styles.css"
import NavBar from './componentes/NavBar';
import ItemListContainer from "./componentes/ItemListContainer";
import ItemCount from "./componentes/ItemCount";





function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenido!'} />
      {/* <ItemCount stock={5} initial={1} onAdd={(cantidad) => console.log(`${cantidad} Productos Agregados`)} />  */}








    </div>




  );
}

export default App;
