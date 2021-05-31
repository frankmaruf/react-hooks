import React from 'react'

const Square = ({increment, n}) => {
    return (
        <>
            <button onClick={()=> increment(n)}>{n}</button>
        </>
    )
}

export default Square;