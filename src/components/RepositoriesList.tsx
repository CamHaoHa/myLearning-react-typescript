import{useState} from 'react'
import {useDispatch} from 'react-redux'
import { actionCreators } from '../state'
type Props = {}

const RepositoriesList:React.FC = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(actionCreators.searchRepositores(term) as any)
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