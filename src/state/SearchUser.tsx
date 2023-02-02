import React from 'react'
import { useState } from 'react'
type Props = {}

const SearchUser:React.FC = () => {
  const users = [ {
    name: 'admin', email: 'admin@admin.com', power: true
  },
  {name: 'staff', email: 'staff@staff.com', power: false}
]

const [email,setEmail] = useState('')
const [foundUser,setSearchUser] = useState<{name:string,email:string, power:boolean} | undefined>()

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  setEmail(e.target.value)
}

const handleSearch:React.MouseEventHandler<HTMLButtonElement> = () => {
  const foundUser = users.find(user => {return user.email === email})
  setSearchUser(foundUser)
}

const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
  console.log(event)
}
  return (

    <div>
      <h3>Search Users</h3>
      <input 
        type='text' 
        value={email}
        onChange={handleChange}
      />
      <button
        type='button'
        onClick={handleSearch}  
      >
        Search...
      </button>
      <div>
        {foundUser && (
          <div>
            {foundUser.name}
          </div>
        )}
      </div>
      <div draggable
        onDragStart={handleDrag}
      >
          <h1>DragMe</h1>
      </div>
    </div>
  )
}

export default SearchUser