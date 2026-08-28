// Create a button that toggles a paragraph.
import { useState } from "react"

function Show(){
    const [show,setShow] = useState(true)
  return(
    <>
      <h1>{show ? "Hello Guys.....":""}</h1>
      <button onClick={()=>{
       show ? setShow(false) : setShow(true)
      }}>{show ? "Hide" : "Show"}</button>
    </>
  )
}
export default Show