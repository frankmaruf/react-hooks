import React, { useState } from 'react'
import useForm from './forState/useForm';

const UseState = () => {
  const [values, handleChange] = useForm({email:"",password:""});
  return (
    <>
    <form onSubmit={(e)=>e.preventDefault()}>
        <input 
        name = "email"
         value={values.email}
          onChange={handleChange}/>
        <input type="password" 
        name="password" 
        value={values.password} 
        onChange={handleChange}/>
    </form>
    </>
  );
}

export default UseState
