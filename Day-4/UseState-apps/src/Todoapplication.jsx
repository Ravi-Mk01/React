import { useState } from "react"

function Todoapplication() {
    const [task, addTask] = useState([])
    let value = ""
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

            <label>Add Task :</label>
            <input onChange={(event) => {
                value = (event.target.value)
            }} style={{
                width: "90%",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #aaa",
                borderRadius: "5px",
                outline: "none"
            }}
            />
            <button onClick={() => {
                addTask([...task, value])
            }}>Add</button>

            <ul
                style={{
                    marginTop: "20px",
                    fontSize: "18px",
                    fontWeight: "bold"
                }} >
                {task.map((element) => {
                    return <li>{element}</li>;
                })}
            </ul>

        </div>
    )
}
export default Todoapplication