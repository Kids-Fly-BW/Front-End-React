const initialState = {
  booking: [],
}

export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOKINGS":
      return {
        ...state,
        booking: [...state.booking, action.payload]
      };
    case "DELETE_BOOKINGS":
      return {
        ...state,
        booking: [...state.booking.filter(item => item !== action.payload)]
      };
    default:
      return state;
  }
};