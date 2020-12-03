import React from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count + 1)
    }

    const subtract = () => {
        if(count > 0) {
            setCount(count - 1) 
        }

    }

    return ( 
        <section>
            <h1>Counter: </h1>
            <div>
                <button onClick={subtract}></button>
                <input
                   type="number" 
                   aria-label="count"
                   value={count}
                   onChange={(event) => {
                       setCount(parseInt(event.target.value))
                   }}>
                </input>
                <button onClick={add}>-</button> 
            </div> 
        </section>
    )

}