import React, {useState} from 'react'
import './counter.css'
import Button from './Button';


const Counter = () => {
    //array distrupturing - feting out element from an array
    const [count, setCount] = useState(0);
    const [desc, setDesc]= useState('')

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        {""}
        Click me to increase by 1
      </button>
      <br></br>

      <button onClick={() => setCount(count + 2)}>
        {""}
        Click me to increase by 2
      </button>
      <br></br>
      <button onClick={() => setCount(count - 1)}>
        {""}
        Click me to decrease by 1
      </button>
      <br></br>

      <button onClick={() => setCount(0)}>
        {""}
        Click me to reset
      </button>
      <Button text="Like Me" color = 'red'/>
      <Button text="Hate Me" color = 'yellow'/>

      <input type = 'text' onChange = {(e) => setDesc(e.target.value)}></input>
      <h3>{desc}</h3>
    
    </div>
  );
}

export default Counter