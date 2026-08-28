
import { useState } from "react";

// function 
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div
//       style={{
//         backgroundColor: darkMode ? "black" : "white",
//         color: darkMode ? "white" : "black",
//         height: "100vh",
//         padding: "20px"
//       }}
//     >
//       <h1>
//         {darkMode ? "Dark Mode" : "Light Mode"}
//       </h1>

//       <button onClick={() => setDarkMode(!darkMode)}>
//         {darkMode ? "Light Mode" : "Dark Mode"}
//       </button>
//     </div>
//   );
// }

// export default App;
// ```


function LightDark(){

    const [darkMode, SetDarkMode] = useState(false)

    return(
       <div style={{
           backgroundColor : darkMode ? "black" : "white",
           color : darkMode ? "white" : "black"
       }}>

      <h1> {darkMode ? "Dark Mode": "Light Mode"}</h1>
       <button onClick={()=>{
          SetDarkMode(!darkMode)
       }}>{darkMode ? "Light Mode": "Dark Mode"}</button>
       </div>

       

    )
}

export default LightDark