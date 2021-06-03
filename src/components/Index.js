import React,{useContext} from 'react'
import { UserContext } from './forUseContext/UserContext'
import { login } from './utils/login'

const Index = () => {
    const {user, setUser} = useContext(UserContext)
    return (
        <div>
            Hello from index
            <pre>{JSON.stringify(user,null,2)}</pre>
            {user ? <button onClick={()=>setUser(null)}>logout</button> :
            <button onClick={async()=>{
                const user = await login();
                setUser(user)
                
                }}>login</button>}
        </div>
    )
}

export default Index
