import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodosContextProvider from './contexts/TodosContext';

function App() {

  return (
    <div className="App">
      <Container>
        <h1 className='mt-4'>Todo</h1>
        <TodosContextProvider>
          <TodoForm />
          <TodoList />
        </TodosContextProvider>
      </Container>
    </div>
  );
}

export default App;
