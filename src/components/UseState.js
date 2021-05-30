import React, { useState } from 'react'

const UseState = () => {
    {/* Complex one
    const [{count,count2}, setCount] = useState({count:10,count2:20});
    */}
    
    //Simple
    const [count,setCount] = useState(10);
    const [count2,setCount2] = useState(20);
  return (
    <>
      {/* <button onClick={()=>setCount(currentState => ({
        count: currentState.count + 1,
        count2: currentState.count2 +2
        }))}>+</button> */}
        <button onClick={()=>{
            setCount(c => (c+1))
            setCount2(c => (c+2))
            }}>+</button>
      <div>count 1:{count}</div>
      <div>count 2:{count2}</div>
    </>
  );
}

export default UseState
