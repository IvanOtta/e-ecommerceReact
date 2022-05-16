import { useEffect, useState } from "react";
import { getFetch } from "../data/data";
import ItemDetail from "./ItemDetail";
import { Ring } from '@uiball/loaders'
<Ring
    size={40}
    lineWeight={5}
    // speed={1}
    // color="black"
/>


function ItemDetailContainer() {
  const [producto, setProduct] = useState({});
  const  [loading, setLoading] = useState(true)

  useEffect(() => {
    getFetch
    .then((res) => setProduct(res))
    .catch((err) => console.log(err))
    .finally(() => {
      setLoading(false)
    })
  }, []);

  return (
    <div>
      {loading ? (<Ring color= {"red"}/>) : (<ItemDetail producto= {producto} />)}
    </div>
  );
}
export default ItemDetailContainer;
