

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
  //     ↑       ↑            ↑
  //   value  updater    initial value

  return (
    <>
      <p> Counter:{count}</p>
      <button onClick={() => {
        setCount(count + 1);
      }}>
        count
      </button>
    </>
  )
}



// import { useState } from "react"
// → React se useState hook import kar rahe hain.
// → useState ka use component ke andar data/value ko manage karne ke liye hota hai.


// function App() {
// → App ek React component hai.
// const [count, setCount] = useState(0);
// → useState(0) counter ki initial value 0 set karta hai.
// → count:
//    Current value ko store karta hai.
// → setCount:
//    count ki value change/update karne ke liye function hai.
// Initially:
// count = 0
// <p>Counter:{count}</p>
// → Screen par count ki current value display hoti hai.
// Initially:
// Counter: 0
// <button onClick={() => {
//     setCount(count + 1);
// }}>
// → Jab button click hota hai, arrow function execute hota hai.
// → setCount(count + 1) count ki value ko 1 se increase karta hai.
// Example:

// count = 0
// setCount(0 + 1)

// New count = 1
// React automatically component ko re-render karta hai.

// Screen:
// Counter: 1

// Agar dobara click karoge:

// count = 1
// setCount(1 + 1)
// New count = 2

// Screen:
// Counter: 2

// Agar 5 baar click karoge:
// Counter: 5



export default App
