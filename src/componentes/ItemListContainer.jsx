import { useEffect, useState } from "react";
import { Ring } from "@uiball/loaders";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs,} from "firebase/firestore";
import ItemList from "./ItemList";

<Ring
  size={40}
  lineWeight={5}
/>;

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {

    const db = getFirestore()
    const QueryCollection = collection(db, "items")
 
 
      if (id) {
       getDocs(QueryCollection)
         .then(resp =>   setProducts((resp.docs.map(item => ({ id: item.id, ...item.data()}) )).filter((prods)=> prods.categoria === id)))
         .catch((err)=>console.log(err))
         .finally(() => setLoading(false))
       } else {
         getDocs(QueryCollection)
         .then(resp => setProducts(resp.docs.map(item => ({ id: item.id, ...item.data()}) )))  
         .catch((err)=>console.log(err))
         .finally(() => setLoading(false))
       }
 
 
  }, [id])

  

  return (
    <div className="bienvenida">
      <p>{greeting}</p>
      {loading ? <Ring color={"red"} /> : <ItemList products={products} />}
    </div>
  );
}

export default ItemListContainer;
