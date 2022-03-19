import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodos = (str) => {
    const newTodos = [...todos, { str, complete: false }]
    setTodos(newTodos)
  }

  const removeTodos = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const completeTodos = (index) => {
    const newTodos = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
    console.log(newTodos)
  }

  return (
    <div className="App">
      <Container>
        <h1 className='mt-4'>Todo</h1>
        <TodoForm addTodos={addTodos} />
        <TodoList todos={todos} removeTodos={removeTodos} completeTodos={completeTodos}/>
      </Container>
    </div>
  );
}

export default App;
