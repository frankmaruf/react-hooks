import React,{useState,useMemo} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from "./Index"
import About from "./About"
import { UserContext } from './forUseContext/UserContext'
const UseContext = () => {
    const [user, setUser] = useState(null)
    const value = useMemo(()=>({user,setUser}),[user,setUser])
    return (
        <>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                    <UserContext.Provider value={value}>
                    <Route path="/" component={Index} exact />
                    <Route path="/about" component={About} />
                    </UserContext.Provider>
                </div>
            </Router>
        </>
    )
}

export default UseContext;
