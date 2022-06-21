import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loader2 from "./Loader2";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
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
    <div>{loading ? <Loader2 /> : <ItemDetail product={product} />}</div>
  );
}
export default ItemDetailContainer;
