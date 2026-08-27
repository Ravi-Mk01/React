

// create Counter But the UI not change Because it changes only the js variable value not change the p inner value when onlclick even happens
// function App() {
//   return (
//     <>
//       <p>Counter : {count}</p> {/* Always shows 0 on screen! Because only js count value not p inner value  */}
//       <button onClick={() => {
//         count = count + 1
//         console.log(count)
//       }}>
//         Count
//       </button>
//     </>
//   )
// }




// **What happens:**

// 1. Click button → `count` becomes 1 in memory
// 2. Console shows `1` 
// 3. But UI still shows `0` 

// **Why?**

// - React doesn't know the variable changed
// - Component function ran once, returned JSX, done
// - To update UI, the component must **run again** (re-render)
// - Normal variables can't trigger re-renders




// Without hook  we need to menually update DOM like this--->
// let count = 0;
// function increment() {
//   count = count + 1;
//   console.log(count);
//   const element = document.querySelector('p');
//   element.textContent = `Counter: ${count}`

// }

// function App() {

//   return (
//     <>
//       <p> Counter:{count}</p>
//     <button onClick={increment}>
//       count
//     </button> 
//     </>
//   )
// }
// ----------------------------------------------------------------------------------







// With  useState

import { useState } from "react"
function App() {
    const [count, setCount] = useState(0);
  return (
    <>
      <p> Counter:{count}</p>
    <button onClick={() =>{
      setCount(count+1);
    }}>
      count
    </button> 
    </>
  )
}





export default App
