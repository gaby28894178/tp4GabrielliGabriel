import React from 'react'
import './style/userCard.css'

const UserCard = ({user, deleteUser, setUserSelect, setFormOpen}) => {
    const handleDelete =()=>{
        deleteUser(user.id)
      }
      const handelSelect =()=>{
        setFormOpen(true)
        setUserSelect(user)
    
    }

  return (
    <article className='user'>
        <h1 className='user_id' >N°: {user.id}</h1>
    <h3 className='user__name'>Nombre: {user.first_name} {user.last_name}</h3>
    <hr className='user__hr'/>
    <ul className='user__list'>
      <li className='user__item'><span className='user__label'>Email</span><span className='user__value'>{user.email}</span></li>
      <li><span className='user__label'>Birthday</span><span className='user__value'>{user.birthday}</span></li>
    </ul>
    <footer className='user__footer'>
    <button className='user__btn user__delet' onClick={handleDelete} ><i className="bx bxs-trash"></i>Delete</button>
    <button  className='user__btn user__edit'  onClick={handelSelect} ><i className='bx bx-edit'></i>Edit</button>
    </footer>
  </article>
  )
}

export default UserCard
