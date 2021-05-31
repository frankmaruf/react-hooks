import React, { useReducer } from 'react'

const UseReducer = () => {


    const reducer = (state, action) => {
        switch(action.type){
            case "increment":
                return state + 1;
            case "decrement":
                return state - 1;
            default:
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer,0)
    return (
        <div>
            count: {count}
            <button
            onClick={()=>dispatch({type: 'increment'})}
            >increment</button>
            <button
            onClick={()=>dispatch({type: 'decrement'})}
            >devrement</button>
        </div>
    )
}

export default UseReducer
