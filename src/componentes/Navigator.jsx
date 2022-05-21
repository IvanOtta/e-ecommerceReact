import {Link} from 'react-router-dom'
import  '../css/buttonsNavigator.css'


function Navigator() {
    return(
        <div className='content-buttons'>

          <Link to='/cart'> <button className='buttonGoToCart'>Ir al Carrito</button></Link>       
           <Link to='/'> <button className='buttonKeepBuy'>Seguir Comprando</button> </Link>        
        </div>
    )
}

export default Navigator