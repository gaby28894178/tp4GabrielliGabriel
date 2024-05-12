import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './style/formUser.css'

const FormularioUser = ({ createUser, userSelect, formOpen, setFormOpen, setUserSelect}) => {
  const { handleSubmit, register, reset } = useForm();


useEffect(()=>{
reset(userSelect)

},[userSelect])


  const submit = (data) => {
    createUser(data);
    
    reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    });
    setFormOpen(false)
  };
const handleExit =()=>{
setFormOpen(false)
reset({
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  birthday: ''
});
setUserSelect()
}
 
  return (
 <div className={`form-container ${formOpen || 'form__close' }`}>
     <div className='user__list'>
     <form className='form' onSubmit={handleSubmit(submit)}  >
      <span onClick={handleExit} className='form__exit'>X</span>
      <h2 className='form__title'>
        {userSelect? 'register form ': 'Create User Form'}
      </h2>
      <label className='form__field'>
        <span className='form__label'>Email</span>
        <input className='form__input' {...register('email')} type="email" />
      </label>
      <label className='form__field'>
        <span className='form__label'>Password</span>
        <input className='form__input' {...register('password')} type="password" />
      </label >
      <label className='form__field' >
        <span className='form__label' >First Name</span>
        <input className='form__input' {...register('first_name')} type="text" />
      </label>
      <label className='form__field'>
        <span className='form__label' >Last Name</span>
        <input className='form__input'  {...register('last_name')} type="text" />
      </label>
      <label className='form__field'>
        <span className='form__label' >Birthday</span>
        <input  className='form__input' {...register('birthday')} type="date" />
      </label>
      <button className='form__btn' type="submit">Submit</button>
    </form>
     </div>
 </div>
  );
};

export default FormularioUser;
