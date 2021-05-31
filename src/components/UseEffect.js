import React, { useEffect } from 'react'
import useForm from './forState/useForm';

const UseEffect = () => {
    const [values, handleChange] = useForm({email:"",password:"",fullName:""});
    useEffect(()=>{
        console.log("render");
        return () => {
            console.log("unmount")
        }
    },[])
    return (
        <>
    <form onSubmit={(e)=>e.preventDefault()}>
        <input 
        name = "email"
         value={values.email}
         placeholder="email"
          onChange={handleChange}/>
           <input 
        name = "fullName"
         value={values.fullName}
         placeholder="full name"
          onChange={handleChange}/>
        <input type="password" 
        name="password" 
        value={values.password} 
        onChange={handleChange}/>
    </form>
    </>
    )
}

export default UseEffect
