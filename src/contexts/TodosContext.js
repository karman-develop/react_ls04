import { createContext, useState } from "react"

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
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
    <TodosContext.Provider value={{todos, addTodos, removeTodos, completeTodos}}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosContext