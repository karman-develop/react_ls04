import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Form, InputGroup, Button, Table, FormControl} from 'react-bootstrap';

function App() {

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(value)
    setValue('')
  }

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
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="JavaScript"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button type="submit" variant="primary">追加</Button>
          </InputGroup>
        </Form>
      </Container>
      <Container>
        <Table>
          <tbody>
            {
              todos && todos.map((todo, index) => (
                <tr key={index}>
                  <th className='text-left'>{todo.str}</th>
                  <td className='text-right'>
                    <Button onClick={() => completeTodos(index)} variant={todo.complete ? "success" : "secondary"} className="mr-3"> {todo.complete ? '完了' : '未完了' }</Button>
                    <Button onClick={() => removeTodos(index)} variant="danger">削除</Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
