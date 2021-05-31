import React from 'react'

const Home = React.memo(({increment}) => {
    
    return (
        <>
            <button onClick={()=> increment(5)}>increment</button>
        </>
    )
}
)


export default Home;
