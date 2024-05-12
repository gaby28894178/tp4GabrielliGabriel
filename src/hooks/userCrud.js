
import axios from 'axios'
import { useState } from 'react'

const userCrud = (path) => {
const [response, setResponse] = useState()


const BASE_URL="https://users-crud.academlo.tech"
//'https://users-crud.academlo.tech'
//GET
const getApi =()=>{
const url = `${BASE_URL}${path}`
axios.get(url)
    //traigo datos del server para mostrar
    .then(res=>setResponse(res.data))
    //no puse traer los datos de el serber 
    .catch(err=>console.log(err))

}
//POST
const postApi =(data)=>{
    const url = `${BASE_URL}${path}`
    axios.post(url,data)
    .then(res=>{
//se agrego el usuario con exito lo traigo lo muestro agrego con 
// spredOperato el nuevo dato de la respues        
        setResponse([...response, res.data])})

    
        // error al agregar base de datos 
    .catch(err=>console.log(err))
}


//DELET
const deleteApi =(id)=>{
    //url con la data con el id a borrar 
    const url = `${BASE_URL}${path}${id}/`
    axios.delete(url)
    // Se Elimino Correctamente el dato
    .then(res=>{
        console.log(res.data)
        // Entran todos menos el id que quiero sacar 
        setResponse(response.filter(e=>e.id!==id))
    })
    .catch(err=>console.log(err))

}
//UPDATE

const updateApi=(id,data)=>{
    const url = `${BASE_URL}${path}${id}/`
    // Patch o update
    axios.update(url,data)
    // Se Elimino Correctamente el dato
    .then(res=>{
        console.log(res.data)
        setResponse(response.map(e=>e.id === id ? res.data:e))
    })
    .catch(err=>console.log(err))
}



return [response, getApi, postApi, deleteApi, updateApi ]
}

export default userCrud
