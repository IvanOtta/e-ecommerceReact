// import './App.css';
import "./css/Styles.css";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
// import ItemCount from "./componentes/ItemCount";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element = {<ItemListContainer/>} /> 
          <Route path="/detalle/:id" element ={<ItemDetailContainer />}  />
          <Route path="/*" element= { <Navigate to= '/' replace /> } /> 
          <Route />  
          
        </Routes>
        {/* <ItemCount stock={5} initial={1} onAdd={(cantidad) => console.log(`${cantidad} Productos Agregados`)} />  */}
      </div>
    </BrowserRouter>
  );
}

export default App;
