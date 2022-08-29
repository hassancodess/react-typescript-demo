import React, { useRef } from 'react'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inp = useRef<HTMLInputElement>(null)
  return (
    <div className='form-control my-10'>
      <div className='flex justify-center'>
        <input
          ref={inp}
          type='text'
          placeholder='Enter something…'
          className='input input-bordered input-primary w-full max-w-lg'
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value)
          }}
          onKeyDown={(e) => {
            console.log(typeof e.key)
            if (e.key == 'Enter') {
              console.log('Before Add')
              handleAdd(e)
              inp.current?.blur()
            }
          }}
        />
        <button className='btn btn-primary p-4 mx-2' onClick={handleAdd}>
          Enter
        </button>
      </div>
    </div>
  )
}

export default InputField
