import { useState } from 'react'
import './index.css'


const contador = 12;

export const CounterApp = ( { index = 0 } ) => {

    const [ counter , setCounter ] = useState ( 0 );
    const handleAdd =  (event :object) => {
        setCounter( counter + 1 );
    }
    const handleMen =  (event :object) => {
        setCounter( counter - 1 );
    }
    const handleReset =  () => {
        setCounter( index );
    }

    return (
        <>
        <h1 className='h1 text-center'>Cunter App</h1>
        <h2> { contador } </h2>
        <h2> { index } </h2>
        <h2> { counter } </h2>
        <div className="row">
        <button className='btn btn-primary btn-lg' onClick={ (event) => handleAdd(event) }>
            +1
        </button>
        <button className='btn btn-primary btn-lg' onClick={ (event) => handleMen(event) }>
            -1
        </button>
        <button className='btn btn-primary btn-lg' onClick={ () => handleReset() }>
            Reset
        </button>
        </div>
        </>
        
    )
}

interface CounterType {
    index: number
}