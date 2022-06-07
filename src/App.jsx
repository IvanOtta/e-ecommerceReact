// import './App.css';
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./componentes/Cart";
import CartContextProvider from "./Context/cartContext";
import "./css/Styles.css";
import Formulario from "./componentes/Formulario";

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
            <Route path="/contacto" element={ <Formulario/> } />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
