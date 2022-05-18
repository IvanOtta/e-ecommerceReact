import image1 from "../componentes/images/4-lowsmokegrey.jpeg";
import image2 from "../componentes/images/28-lowblackcourtpurple.jpeg";
import image3 from "../componentes/images/30-lowwhitegymred.jpeg";
import image4 from "../componentes/images/72-j4royalty.jpeg";
import image5 from "../componentes/images/88-j11highbred.jpeg";
import image6 from "../componentes/images/93-j14lastshot.jpeg";
import image7 from "../componentes/images/95-lowblackwhitegrey.jpeg";
import image8 from "../componentes/images/102-lowblacktoe.jpeg";
import image9 from "../componentes/images/141-lowwolfgrey.jpeg";
import image10 from "../componentes/images/165-midveryberry.jpeg";
import image11 from "../componentes/images/1-bigswooshjacket.jpg";
import image12 from "../componentes/images/6-shortsgreenarmy.jpeg";
import image13 from "../componentes/images/217-gfxshortwhite.jpeg";
import image14 from "../componentes/images/3-playboyteeremix.jpeg"
import image15 from "../componentes/images/10-6ixhoodieblack.jpeg"

const productos = [
  {
    id: "1",
    name: "Air Jordan Retro Low Smoke Grey",
    categoria: "zapatillas",
    stock: 10,
    price: "$53.545",
    image: image1,
    description: "Modelo Air Jordan Retro Low Smoke Grey",
  },
  {
    id: "2",
    name: "Air Jordan 1 Low Black Court Purple",
    categoria: "zapatillas",
    stock: 6,
    price: "$52.500",
    image: image2,
    description: "Modelo Air Jordan 1 Low Black Court Purple",
  },
  {
    id: "3",
    name: "Air Jordan 1 Low White Gym Red",
    categoria: "zapatillas",
    stock: 8,
    price: "$46.200",
    image: image3,
    description: "Modelo Air Jordan 1 Low White Gym Red ",
  },
  {
    id: "4",
    name: "Air Jordan 4 Retro Royalty",
    categoria: "zapatillas",
    stock: 7,
    price: "$112.337",
    image: image4,
    description: "Modelo Air Jordan 4 Retro Royalty",
  },
  {
    id: "5",
    name: "Air Jordan Retro 11 High Bred",
    categoria: "zapatillas",
    stock: 1,
    price: "$69.292",
    image: image5,
    description: "Modelo Air Jordan Retro 11 High Bred",
  },
  {
    id: "6",
    name: "Air Jordan 14 Last Shot",
    categoria: "zapatillas",
    stock: 2,
    price: " $75.591",
    image: image6,
    description: "Modelo ",
  },
  {
    id: "7",
    name: "Air Jordan Retro 1 Low Black White Grey",
    categoria: "zapatillas",
    stock: 3,
    price: "$46.200",
    image: image7,
    description: "Modelo Air Jordan 14 Last Shot",
  },
  {
    id: "8",
    name: "Air Jordan Retro 1 Low Black Toe",
    categoria: "zapatillas",
    stock: 4,
    price: "$57.750",
    image: image8,
    description: "Modelo Air Jordan Retro 1 Low Black Toe",
  },
  {
    id: "9",
    name: "Air Jordan 1 Low Wolf Grey",
    categoria: "zapatillas",
    stock: 2,
    price: "$60.893",
    image: image9,
    description: "Modelo Air Jordan 1 Low Wolf Grey",
  },
  {
    id: "10",
    name: "Air Jordan 1 Mid Very Berry",
    categoria: "zapatillas",
    stock: 5,
    price: "$46.200",
    image: image10,
    description: "Modelo Air Jordan 1 Mid Very Berry",
  },
  {
    id: "11",
    name: "Nike Big Swoosh Jacket",
    categoria: "ropa",
    stock: 3,
    price: "$46.200",
    image: image11,
    description: "Modelo Nike Big Swoosh Jacket",
  },
  {
    id: "12",
    name: "Bape 1st Camo Beach Short Side Shark Army Green",
    categoria: "ropa",
    stock: 1,
    price: "$73.491",
    image: image12,
    description: "Bape 1st Camo Beach Short Side Shark Army Green",
  },
  {
    id: "13",
    name: "Jordan Jumpman Dry Air Mesh GFX Short",
    categoria: "ropa",
    stock: 2,
    price: "$15.750",
    image: image13,
    description: "Modelo Jordan Jumpman Dry Air Mesh GFX Short",
  },
  {
    id: "14",
    name: "Anti Social Social Club X Playboy Remix Tee Black",
    categoria: "ropa",
    stock: 4,
    price: "$16.799",
    image: image14,
    description: "Modelo Remera Anti Social Social Club X Playboy Remix Tee Black",
  },
  {
    id: "15",
    name: "Anti Social Social Club X NeighborHood 6ix Black Hoodie Black",
    categoria: "ropa",
    stock: 3,
    price: "$35.696",
    image: image15,
    description: "Anti Social Social Club X NeighborHood 6ix Black Hoodie Black",
  },

];

export const getData = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const idProd = id
        ? productos.find((product) => product.id === id)
        : productos;
      resolve(idProd);
    }, 2000);
  });
};


// const object = productos[0]
// console.log(object)

// export const getFetch = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(object)
//     },2000)
// })
export default productos;
