import React, { useLayoutEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const inputRef = useRef(()=> console.log("hello"));
    useLayoutEffect(()=>{
        console.log(inputRef.current.getBoundingClientRect())
    },[])
    return (
        <div>
            <input
            
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            ref = {inputRef}
            type="password"
            value={password}
            onChange={
                (e) => setPassword(e.target.value)
            }
            />
            <button
            onClick={
                () => {
                    console.log(inputRef.current)
                    inputRef.current.focus();
                }
            }
            ></button>
        </div>
    )
}

export default UseRef
