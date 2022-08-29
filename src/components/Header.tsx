import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import InputField from './shared/InputField'

const Header: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  return (
    <>
      <Navbar />
      <InputField todo={todo} setTodo={setTodo} />
    </>
  )
}

export default Header
