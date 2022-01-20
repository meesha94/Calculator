
import React, {useState} from "react"

const Pinkcounter = () => {
    const [count,setCount] = useState(0)
    return (
        <div className="counter">
            
           
            <button onClick={() => {
                setCount(count - 1)
            }}>-</button>
             <h1> {count}</h1>
            <button onClick={()=>{
                setCount(count + 1)
            }}>+</button>
        </div>
    )
} 




export default Pinkcounter