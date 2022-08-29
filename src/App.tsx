import { useEffect, useState } from 'react'
import InputField from './components/shared/InputField'
import TopNavbar from './components/shared/TopNavbar'
import BottomNavbar from './components/shared/BottomNavbar'
import TodoList from './components/TodoList'
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
      <TopNavbar />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      <BottomNavbar />
    </>
  )
}

export default App
