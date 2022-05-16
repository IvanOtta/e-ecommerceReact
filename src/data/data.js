import image1 from '../componentes/images/4-lowsmokegrey.jpeg'
import image2 from '../componentes/images/28-lowblackcourtpurple.jpeg'
import image3 from '../componentes/images/30-lowwhitegymred.jpeg'
import image4 from '../componentes/images/72-j4royalty.jpeg'
import image5 from '../componentes/images/88-j11highbred.jpeg'
import image6 from '../componentes/images/93-j14lastshot.jpeg'
import image7 from '../componentes/images/95-lowblackwhitegrey.jpeg'
import image8 from '../componentes/images/102-lowblacktoe.jpeg'
import image9 from '../componentes/images/141-lowwolfgrey.jpeg'
import image10 from '../componentes/images/165-midveryberry.jpeg'

const productos = [
    { id: 1, name: "Air Jordan Retro Low Smoke Grey", stock: 10, price: "$53.545", image: image1, description: "Modelo Air Jordan Retro Low Smoke Grey" },
    { id: 2, name: "Air Jordan 1 Low Black Court Purple", stock: 6, price: "$52.500", image: image2, description: "Modelo Air Jordan 1 Low Black Court Purple"  },
    { id: 3, name: "Air Jordan 1 Low White Gym Red", stock: 8, price: "$46.200", image: image3, description: "Modelo Air Jordan 1 Low White Gym Red " },
    { id: 4, name: "Air Jordan 4 Retro Royalty", stock: 7, price: "$112.337", image: image4, description: "Modelo Air Jordan 4 Retro Royalty" },
    { id: 5, name: "Air Jordan Retro 11 High Bred", stock: 1, price: "$69.292", image: image5, description: "Modelo Air Jordan Retro 11 High Bred" },
    { id: 6, name: "Air Jordan 14 Last Shot", stock: 2, price: " $75.591", image: image6, description: "Modelo " },
    { id: 7, name: "Air Jordan Retro 1 Low Black White Grey", stock: 3, price: "$46.200", image: image7, description: "Modelo Air Jordan 14 Last Shot" },
    { id: 8, name: "Air Jordan Retro 1 Low Black Toe", stock: 4, price: "$57.750", image: image8, description: "Modelo Air Jordan Retro 1 Low Black Toe" },
    { id: 9, name: "Air Jordan 1 Low Wolf Grey", stock: 2, price: "$60.893", image: image9, description: "Modelo Air Jordan 1 Low Wolf Grey" },
    { id: 10, name: "Air Jordan 1 Mid Very Berry", stock: 5, price: "$46.200", image: image10, description: "Modelo Air Jordan 1 Mid Very Berry" }
]

const object = { id: 2, name: "Air Jordan 1 Low Black Court Purple", stock: 6, price: "$52.500", image: image2, description: "Modelo Air Jordan 1 Low Black Court Purple"  }

// console.log(object)

export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(object)
    },2000)
})

// export const getFetch = (id) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const query = id ? productos.find(producto => producto.id === id) : productos
//             resolve(query)
//         },2000)
//     })
// }

export default productos