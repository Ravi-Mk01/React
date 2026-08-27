
/*1. Counter

Create a counter with:

Initial value 0
Increment button → +1
Decrement button → -1
Reset button → 0

*/

import { useState } from "react"


function Counter(){

    const [count,setCount] = useState(0);

    return(
        <>
         <p>Counter : {count}</p>
         <button onClick={()=>{
           setCount(count+1)
         }}>Increment +</button>

         <button onClick={()=>{
           setCount(count-1)
         }}>Decrement -</button>

         <button onClick={()=>{
           setCount(0)
         }}>Reset 0</button>

        </>
    )
}

export default Counter