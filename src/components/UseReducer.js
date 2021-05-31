import React, { useReducer,useState } from 'react'

const UseReducer = () => {


    const reducer = (state, action) => {
        switch(action.type){
            case "add-todo":
                return {todos:[...state.todos,{text:action.text,completed:false}]};
            case "toggle-todo":
                return {
                    todos: state.todos.map((t,idx) =>
                    idx === action.idx ? {...t, completed: !t.completed} : t
                    )
                };
                default:
                return state
        }
    }
    const [{todos}, dispatch] = useReducer(reducer,{todos:[]})
    const [text,setText] = useState();
    return (
        <div>
            <form
            onSubmit={e=>{
                e.preventDefault()
                dispatch({type:"add-todo",text})
                setText("")
            }}
            >
            <input
            value={text}
            onChange={(e)=>setText(e.target.value)}
            />
            </form>
            {
                todos.map((t,idx)=>(
                    <div 
                    onClick={()=> dispatch({type:"toggle-todo",idx})}
                    style={{textDecoration: t.completed ? 'line-through': ""}}
                    key={t.text}>
                        {t.text}
                    </div>
                ))
            }
            <pre>
                {
                    JSON.stringify(todos,null,2)
                }
            </pre>
        </div>
    )
}

export default UseReducer
