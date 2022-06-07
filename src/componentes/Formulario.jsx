import {useState} from 'react'

export default function Formulario() {

    const [nameValue, setNameValue] = useState()    

    

    return(
        <div>
            <input type="text"  placeholder="Ingresa tu nombre"/>
            <input type="email" placeholder="Ingresa tu email"/>

        </div>
    )
}