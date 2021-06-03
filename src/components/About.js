import React,{useContext} from 'react'
import { UserContext } from './forUseContext/UserContext'

const About = () => {
    const {user, setUser} = useContext(UserContext)
    return (
        <div>
            Hello From about
            <pre>{JSON.stringify(user,null,2)}</pre>
        </div>
    )
}

export default About
