import React, {useState} from 'react'

type Props = {}

const GuestList:React.FC = () => {
  const [name, setName] = useState('')
  const [guests, setGuests]= useState<string[]>([])

  const handleClick = () => {
    setName (prevState =>{
      setGuests ([...guests, prevState])
      return ''
    })
  }

  return (
    <div>
      <h3>Guests List</h3>
      <input 
        value={name}
        type='text'
        onChange={(e)=> setName(e.target.value)}
      />
      <button
        type='button'
        onClick={handleClick}
      >
        Add Me
      </button>

      {guests.map((guest) => (
      <li key={guest}>
        {guest}
      </li>))}

    </div>
  )
}

export default GuestList