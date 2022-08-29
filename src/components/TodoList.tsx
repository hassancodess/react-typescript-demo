import React from 'react'
import Todo from '../models/todo'
import TodoItem from './shared/TodoItem'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='space-y-6 mb-24'>
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            todo={item}
            todos={todos}
            setTodos={setTodos}
          />
        )
      })}
    </div>
  )
}

export default TodoList
