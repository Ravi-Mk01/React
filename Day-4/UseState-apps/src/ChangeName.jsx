import { useState } from "react"

function ChangeName(){
    const [name,setName] = useState(true)
    return(
        <>
         <h1>Name  : {name ? "Ravi" : "Ravi Makwana"}</h1>
         <button onClick={() =>{
            name ? setName(false) : setName(true)
         }}>{name ? "Full Name" : " Name "}</button>
        </>
    )
}

export default ChangeName