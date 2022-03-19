import { useState } from 'react';
import { Form, InputGroup, Button, FormControl } from 'react-bootstrap';

const TodoForm = ({addTodos}) => {

  const [value, setValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(value)
    setValue('')
  }

  return (
    <div>
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
    </div>
  )
}

export default TodoForm