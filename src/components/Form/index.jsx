import { useState } from "react"

function Form ({addTodo}) {
    const [userInput, setUserInput] = useState("");

    return (
        <>
            <input value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
            <button onClick={() => addTodo(userInput)}>Add task.</button>
        </>
    )
}

export default Form