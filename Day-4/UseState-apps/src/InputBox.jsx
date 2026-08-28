import { useState } from "react"

function InputBox() {
    const [text, setText] = useState("")
    return (
        <div style={{
        width: "350px",
        margin: "50px auto",
        padding: "25px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}>
            <label>Enter Something :</label>
            <input onChange={(event) => {
                setText(event.target.value)
            }}  style={{
            width: "90%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #aaa",
            borderRadius: "5px",
            outline: "none"
          }}
   /> 
            <p  style={{
            marginTop: "20px",
            fontSize: "18px",
            fontWeight: "bold"
          }}>You Entered : {text}</p>
        </div>
    )
}
export default InputBox