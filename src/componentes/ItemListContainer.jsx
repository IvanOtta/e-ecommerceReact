import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Ring } from "@uiball/loaders";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs,} from "firebase/firestore";

<Ring
  size={40}
  lineWeight={5}
/>;

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {

    const db = getFirestore()
    const QueryCollection = collection(db, "items")
 
 
      if (id) {
       getDocs(QueryCollection)
         .then(resp =>   setProductos((resp.docs.map(item => ({ id: item.id, ...item.data()}) )).filter((prods)=> prods.categoria === id)))
         .catch((err)=>console.log(err))
         .finally(() => setLoading(false))
       } else {
         getDocs(QueryCollection)
         .then(resp => setProductos(resp.docs.map(item => ({ id: item.id, ...item.data()}) )))  
         .catch((err)=>console.log(err))
         .finally(() => setLoading(false))
       }
 
 
  }, [id])

  return (
    <div className="bienvenida">
      <p>{greeting}</p>
      {loading ? <Ring color={"red"} /> : <ItemList productos={productos} />}
    </div>
  );
}

export default ItemListContainer;
