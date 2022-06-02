import { useEffect, useState } from "react";
import productos from "../data/data";
import ItemList from "./ItemList";
import { Ring } from "@uiball/loaders";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";

<Ring
  size={40}
  lineWeight={5}
  // speed={1}
  // color="black"
/>;

const items = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
//   const {categoria} = useParams(categoria)

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

//   useEffect(() => {
//     const db = getFirestore();
//     const queryCollection = collection(db, "items");

//     if (!id) {
//       getDocs(queryCollection)
//         .then((resp) =>
//           setProductos(
//             resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
//           )
//         )
//         .catch((error) => error)
//         .finally(() => setLoading(false));
//     } else {
//       const queryCollectionFilter = query(
//         queryCollection,
//         where("categoria", "==", id)
//       );
//       getDocs(queryCollectionFilter)
//         .then((resp) =>
//           setProductos(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
//         )
//         .catch((err) => console.error(err))
//         .finally(() => setLoading(false));
//     }
//   }, [id]);

  console.log(productos);

  console.log(id);
  return (
    <div className="bienvenida">
      <p>{greeting}</p>
      {loading ? <Ring color={"red"} /> : <ItemList productos={productos} />}
    </div>
  );
}

export default ItemListContainer;
