import React, {useState} from 'react'
import Button from './Button'

const Counter = () => {
    
    //array destructuring: fetching out element of an array; 
    // count: this is the state; 
    // setCount: function that can be used to change the state; 
    // useState(0): initial count of the state

    const [count, setCount] = useState(0);
    const [desc, setDesc] = useState('')

    return (
        // rendering the state;
        <div className="count">
            <h2>{count}</h2>   
            <button className="increase" onClick = {() => setCount(count + 1)}>Click me to Increase by 1</button>
            <button className="decrease" onClick = {() => setCount(count - 1)}>Click me to decrease me by 1</button>
            <button className="reset" onClick = {() => setCount(0)}>Click me to Reset to 0</button>
            <Button className="like" text = "Like me" color = "red"/>
            <Button className="hate" text = "Hate me" color = "blue"/>

            <input type="text" onChange={ (e) => setDesc(e.target.value)} />
            <h3>{desc}</h3>
        </div>
    )
}

export default Counter