import axios from 'axios'
import {ActionType} from '../actionTypes'
import {Action} from '../actions'

const searchRepositores = (term:string) => {
  return async (dispatch:any) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    })
    try{


    }catch (err) {
       
        if(err instanceof Error){
          dispatch({
            type: ActionType.SEARCH_REPOSITORIES_ERROR,
            payload: err.message
          })
        }
    }
  }
}