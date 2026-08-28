import { useState } from "react"

function LoginLogout(){
    const [longin,setLongin] = useState(false)
    return(
        <div style={{
            width: "350px",
            margin: "50px auto",
            padding: "25px",
            textAlign: "center",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}>

            <p style={{
                marginTop: "20px",
                fontSize: "18px",
                fontWeight: "bold"
            }}>{longin ? "Your are LongIn": "Your are Logout"}</p>

        <button onClick={()=>{
            setLongin(!longin)
        }}>{longin ? "Longout": "LongIn"}
        </button>
        </div>
    )
}

export default LoginLogout