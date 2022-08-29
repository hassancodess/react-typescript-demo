import { FormEvent, useEffect, useState } from 'react'
import Header from './components/Header'
import InputField from './components/shared/InputField'
import Todo from './models/todo'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo.trim().length > 3) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo('')
    } else {
      alert('Should be atleast 3 characters')
    }
  }
  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <>
      <Header />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </>
  )
}

export default App
