
import {useState} from 'react';

export function Counter (){
    const [counter, setCounter] = useState(0)

    function Increment () {
        setCounter(counter+1)
    }

    function Decrement () {
        setCounter(counter-1)
    }

    return (
        <div>
            <h1 className="counter">{counter}</h1>

            <button className="increment" onClick={Increment}>Increment</button>
            <button className="decrement" onCLick={Decrement}>Decrement</button>
        </div>
    )

}