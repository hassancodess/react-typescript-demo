import React from 'react'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <div className='form-control my-10'>
      <div className='input-group justify-center'>
        <input
          type='text'
          placeholder='Enter something…'
          className='input input-bordered w-96'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className='btn p-4' onClick={handleAdd}>
          Enter
        </button>
      </div>
    </div>
  )
}

export default InputField
