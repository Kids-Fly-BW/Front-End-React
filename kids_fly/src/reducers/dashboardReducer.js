import {UPDATE_DATA, FETCH_DATA, SET_ERROR, DELETE_DATA, CHANGE_DATA, SEND_DATA} from '../actions/index'


const initialState = {
  booking: [],
  isFetching: false,
  isUpdating:false,
  error: 'woopsies'
}

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetching:true,
        error:''
      };
      case UPDATE_DATA:
        return {
          ...state,
          booking: [...state.booking, action.payload],
          error:''
        }
        case CHANGE_DATA:
          return{
            ...state,
            isFetching:true,
            isUpdating: true,
            error:''
          }
          case SEND_DATA:
            return{
              ...state,
              isFetching:true,
              isUpdating:true,
              error:''
            }
            case DELETE_DATA:
              return{
                ...state,
                isUpdating:true
              }
              case SET_ERROR:
                return{
                  ...state,
                  isUpdating:true,
                  isFetching:true,
                  error: action.payload
                }
        default:
            return state;
};
}