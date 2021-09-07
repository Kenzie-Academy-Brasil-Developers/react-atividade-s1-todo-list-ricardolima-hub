import { useState } from "react"
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  const [todo, setTodo] = useState([])

  const addTodo = (newTodo) => {
    setTodo([...todo, newTodo])
  }

  const handleTodo = (removeItem) => {
    const listFiltered = todo.filter((item) => item !== removeItem)
    setTodo(listFiltered)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo}/>
        <TodoList todos={todo} handleTodo={handleTodo}/>
      </header>
    </div>
  );
}

export default App;
