import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader2 from "./Loader2";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [producto, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {

    const db = getFirestore()
    const dbQuery = doc(db, "items", id)
    getDoc(dbQuery)
    .then(resp => setProduct({ id: resp.id, ...resp.data() }))
    .catch((err)=>console.log(err))
    .finally(() => setLoading(false))
   

  }, [id])

  return (
    <div>{loading ? <Loader2 /> : <ItemDetail producto={producto} />}</div>
  );
}
export default ItemDetailContainer;
