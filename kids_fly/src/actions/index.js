import axiosWithAuth from '../utils/axiosWithAuth'


export const UPDATE_DATA ='UPDATE_DATA'
export const SET_ERROR ='SET_ERROR'

//get Request
export const FETCH_DATA='FETCH_DATA'


//post Request
export const SEND_DATA='SEND_DATA'


//Delete Request
export const DELETE_DATA='DELETE_DATA'


//Put Request
export const CHANGE_DATA='CHANGE_DATA'




export const getData  = () => dispatch =>{
    dispatch({type: FETCH_DATA})
    axiosWithAuth()
    .get('/api/data')
    .then(res =>{
        console.log('axios request', res)
        dispatch({type: UPDATE_DATA, payload: res.data})
    })
    .catch(err =>{
        console.log('woopsies', err)
        dispatch({type: SET_ERROR, payload: 'Woopsies', err})
    })
}