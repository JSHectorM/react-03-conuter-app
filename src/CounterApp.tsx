import { useState } from 'react'


const contador = 12;

export const CounterApp = ( { index = 0 } ) => {

    let [ counter, setCounter ] = useState ( 0 );
    const handleAdd =  (event :object) => {
        setCounter( counter + 1 );
    }
    const handleMen =  (event :object) => {
        setCounter( counter - 1 );
    }
    const handleReset =  (event :object) => {
        setCounter( counter = index );
    }

    return (
        <>
        <h1>Cunter App</h1>
        <h2> { contador } </h2>
        <h2> { index } </h2>
        <h2> { counter } </h2>
        <button onClick={ (event) => handleAdd(event) }>
            +1
        </button>
        <br />
        <button onClick={ (event) => handleMen(event) }>
            -1
        </button>
        <br />
        <button onClick={ (event) => handleReset(event) }>
            Reset
        </button>
        </>
        
    )
}

interface CounterType {
    index: number
}