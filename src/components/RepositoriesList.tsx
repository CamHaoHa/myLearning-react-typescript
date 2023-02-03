import{useState} from 'react'
import { useActions } from '../hooks/useAction'
type Props = {}

const RepositoriesList:React.FC = () => {
  const [term, setTerm] = useState('')
  const {searchRepositores} = useActions()

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositores(term)
  }
  return (
    <div>
      <form onSubmit = {onSubmit}>
        <input 
          value={term} onChange ={e=>setTerm(e.target.value)}
        />
        <button
        > Search</button>
      </form>
    </div>
  )
}

export default RepositoriesList