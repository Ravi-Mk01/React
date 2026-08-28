import { useState } from "react"

function LikeButton(){
    const [count,setCount] = useState(0)
    const [output, setOutput] = useState("");

    const handleLike = () => {
        setOutput(output+`❤️ ${count} Like\n`)
         setCount(count+1)
    }  

    return(
        <>
        <pre>{output}</pre>
        <button onClick={handleLike}>Likes</button>
         
        </>
    )
}

export default LikeButton