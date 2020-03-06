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
    .get('/booking')
    .then(res =>{
        console.log('axios request', res)
        dispatch({type: UPDATE_DATA, payload: res.data})
    })
    .catch(err =>{
        console.log('ouch', err)
        dispatch({type: SET_ERROR, payload: 'ouch', err})
    })
}



export const postData = (update) => dispatch=>{
    console.log('update', update)
    dispatch({ type: SEND_DATA})
    axiosWithAuth()
    .post('/booking', update)
    .then(res =>{
        console.log('post request', res)
        dispatch({type: FETCH_DATA, payload: res.data})
        axiosWithAuth()
        .get('/booking')
        .then(res =>{
            dispatch({type: UPDATE_DATA, payload: res.data})
        })
        .catch(err =>{
            dispatch({type: SET_ERROR, payload: 'Woopsies', err})
        })
    })
    .catch(err =>{
        dispatch({type: SET_ERROR, payload: 'Woopsies', err})
    })
}



export const putData = (id, changes) => dispatch =>{
    dispatch({type: CHANGE_DATA})
    console.log('omg this is a lot',changes)
    axiosWithAuth()
    .put(`/booking/${id}`, changes)
    .then(res =>{
        dispatch({type: FETCH_DATA, payload: res.data})
        axiosWithAuth()
        .get('/booking')
        .then(res =>{
            dispatch({type: UPDATE_DATA, payload: res.data})
        })
        .catch(err =>{
            dispatch({type: SET_ERROR, payload: 'woopsies', err})
        })
    })
    .catch(err =>{
        dispatch({type: SET_ERROR, payload: 'woopsies', err})
    })
}


export const deleteData = (id) => dispatch =>{
    dispatch({type: DELETE_DATA})
     axiosWithAuth() 
    .delete(`/booking/${id}`)
    .then(res =>{
        dispatch({type: FETCH_DATA, payload: res.data})
        axiosWithAuth()
        .get('/booking')
        .then(res =>{
            dispatch({type: UPDATE_DATA, payload: res.data})
        })
        .catch(err =>{
            dispatch
            ({type: SET_ERROR, payload: 'woopsies', err})
        })
    })
    .catch(err =>{
        dispatch({type: SET_ERROR, payload: 'woopsies', err})
    })
}