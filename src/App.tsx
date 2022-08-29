import { useState } from 'react'
import Header from './components/Header'
import InputField from './components/shared/InputField'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  return (
    <>
      <Header />
      <InputField todo={todo} setTodo={setTodo} />
    </>
  )
}

export default App
