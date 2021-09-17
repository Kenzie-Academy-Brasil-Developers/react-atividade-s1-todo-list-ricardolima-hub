function TodoList ({todos, handleTodo}) {
    return (
            <ul>
                {todos.map((item, index) => {
                    return (
                        <div>
                            <li key={index}>{item}</li>
                            <button onClick={()=>handleTodo(item)}>Concluir Tarefa</button>
                        </div>
                    )}
                )}
            </ul>
    )
}

export default TodoList