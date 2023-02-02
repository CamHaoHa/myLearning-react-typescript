import React , {useState} from 'react'

type Props = {}

const SearchUser:React.FC = () => {
  const users = [
    {name: 'Andrew',age: 100},
    {name: 'Cathie', age: 1000},
    {name: 'Andrew2', age:10000}
  ]
  const [name, setName ] = useState('')
  const [foundUser, setUser] = useState<{name:string, age: number} | undefined>()
  const handleSearch = () => {
    const foundUser = users.find((user) => {return user.name=== name})
    setUser(foundUser)
  }
  return (
    <div>
        <h3>Another example with state: Search User</h3>
        <input 
          type="text" 
          value = {name} 
          onChange={(e) => setName(e.target.value)
        } />
        <button
          type='button'
          onClick={handleSearch}
        >
          SearchUser
        </button>
        {foundUser && (<div>{foundUser.name}{foundUser.age}</div>) }
    </div>
  )
}

export default SearchUser