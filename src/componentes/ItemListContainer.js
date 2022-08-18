import { useEffect, useState } from "react";
import { Ring } from "@uiball/loaders";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ItemList from "./ItemList";

<Ring size={40} lineWeight={5} />;

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const QueryCollection = collection(db, "items");

    if (id) {
      getDocs(QueryCollection)
        .then((resp) =>
          setProducts(
            resp.docs
              .map((item) => ({ id: item.id, ...item.data() }))
              .filter((prods) => prods.categoria === id)
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getDocs(QueryCollection)
        .then((resp) =>
          setProducts(
            resp.docs.map((item) => ({ id: item.id, ...item.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  // const [search, setSearch] = useState('')


  // const searcher = (e) => {
  // let results = products.filter((prod) => prod.name.toLowerCase().includes(e.target.value))
  // setSearch(results)    
  // }

  // console.log(search)

  return (
    <div>
      <input className="form-control"  type='text' placeholder="Busqueda" />
      <div className="bienvenida">
        {loading ? <Ring color={"red"} /> : <ItemList products={products} />}
      </div>

      {/* { !search ? products : products.filter((data) => data.name.toLowerCase(search)} */}
    
    </div>
  );
}

export default ItemListContainer;
