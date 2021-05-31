import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from "./Index"
import About from "./About"
const UseContext = () => {
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
                    <Route path="/" component={Index} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        </>
    )
}

export default UseContext
