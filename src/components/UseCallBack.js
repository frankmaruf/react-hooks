import React, { useCallback, useState } from 'react'
import Home from './Home'
import Square from './Square'

const UseCallBack = () => {
    const [count, setCount] = useState(0)
    const favoriteNums = [7,21,37]
    const increment = useCallback(
        (n)=>{
            setCount((c)=>c+n);
        },[setCount]
    )
    return (
        <>
            <Home increment={increment}/>
            <div>count:{count}</div>
            {
                favoriteNums.map(n=>{
                    return <Square increment={increment} n={n} key={n}/>
                })
            }
        </>
    )
}

export default UseCallBack
