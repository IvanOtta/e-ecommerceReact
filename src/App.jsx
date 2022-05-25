// import './App.css';
import "./css/Styles.css";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
// import ItemCount from "./componentes/ItemCount";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemList from "./componentes/ItemList";
import Cart from "./componentes/Cart";
import CartContextProvider from "./Context/cartContext";

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          {/* <ItemCount stock={5} initial={1} onAdd={(cantidad) => console.log(`${cantidad} Productos Agregados`)} />  */}
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
