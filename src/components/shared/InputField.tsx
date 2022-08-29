import React from 'react'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <div className='form-control my-10'>
      <div className='input-group justify-center'>
        <input
          type='text'
          placeholder='Enter something…'
          className='input input-bordered w-96'
        />
        <button className='btn p-4'>Enter</button>
      </div>
    </div>
  )
}

export default InputField
