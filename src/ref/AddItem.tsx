import React, { ReducerAction } from 'react'
import {useState, useRef, useEffect} from 'react'
type Props = {}

const AddItem:React.FC = () => {
  const [name, setName] = useState('')
  const [newItem, setNewItem] = useState<string[]>([])
  
  useEffect(() => {
    if (!inputRef.current){
      return
    }
    inputRef.current.focus()
  }, [])
  // const inputRef = useRef(null)
  const inputRef = useRef<HTMLInputElement | null> (null)
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleClick:React.MouseEventHandler<HTMLButtonElement> = () => {
    setName((prevState) => {
       setNewItem([...newItem, prevState])
       return ''
    })
  }
  return (
    <div>
      <h3>Add Item</h3>
      <input 
        type='text'
        value={name}
        onChange = {handleChange}      
        ref = {inputRef}
      />
      <button
        type='button'
        onClick= {handleClick}
      >
        Add me
      </button>
      <div>
        {newItem.map((item) => <li key={item} >{item}</li>)}
      </div>
    </div>
  )
}

export default AddItem