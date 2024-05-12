
import userCrud from './hooks/userCrud'
import { useEffect, useState } from 'react'
import './App.css'
import FormularioUser from './components/FormularioUser'

import UserCard from './components/UserCard'


function App() {
  //traigo mi hooks de conection de user crud con las 4 acciones del crud paso como estado
  // de inicion el /user/ lo recibo commo path en el crud
  const [users, getUsers, createUser, deleteUser, updateUser ] =  userCrud('/users/')
  // estado q comparto informacion  entre los hermanos formulario y card  
  const [userSelect, setUserSelect] = useState() 
  const [formOpen, setFormOpen] = useState(false)
  // user efect me lee los datos de la url base  solo en el estado inicial 
  useEffect(()=>{
  getUsers()

  },[])
  const handleCreate =()=>{
    setFormOpen(true)

  }

console.log(users)
  return (
    <div className='conteiner'>
      <header className='header'>
      <h2>CRUD</h2>

      </header>
      <button className='creeateUser' onClick={handleCreate} >Create User</button>
       {/* paso al componente formulario  las props crear deñet update select del crud */}
      <FormularioUser
        createUser={createUser}
        deleteUser={deleteUser}
        updateUser={updateUser}
        userSelect={userSelect}
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        setUserSelect={setUserSelect}
        
               
      />
      <div className='user-container'>
        {/* recorro el arreglo users  y cado items creo un card en user card paso sus 
        props y capturo el dato */}
      {
        users?.map(user=>(
          <UserCard
          key={user.id}
          user={user}
          setUserSelect={setUserSelect}
        
          deleteUser={deleteUser}
          setFormOpen={setFormOpen}

/>
        ))
      }
      </div>
      
    </div>
    
  )
}
export default App
