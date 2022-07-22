const BookingReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_LOCATION':
            return { ...state, ...action.payload }
        default:
            return state;
    }
}


export default BookingReducer;