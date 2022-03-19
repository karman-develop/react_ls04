import { Button, Table } from 'react-bootstrap';

const TodoList = ({todos, removeTodos, completeTodos}) => {
  return (
    <div>
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
    </div>
  )
}

export default TodoList