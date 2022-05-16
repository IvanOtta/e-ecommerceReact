import { useEffect, useState } from "react";
import { getFetch } from "../data/data";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [producto, setProduct] = useState({});

  useEffect(() => {
    getFetch.then((res) => setProduct(res)).catch((err) => console.log(err));
  }, []);
  console.log(producto);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
}
export default ItemDetailContainer;
