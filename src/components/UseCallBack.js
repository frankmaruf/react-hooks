import React, { useCallback, useState } from 'react'
import Home from './Home'

const UseCallBack = () => {
    const [count, setCount] = useState(0)
    const increment = useCallback(
        (n)=>{
            setCount((c)=>c+n);
        },[setCount]
    )
    return (
        <>
            <Home increment={increment}/>
            <div>count:{count}</div>
        </>
    )
}

export default UseCallBack
