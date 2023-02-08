const locationReducer = (currentLocation = null, action) => {
    switch(action.type){
        case 'SET_LOCATION':
            return {...currentLocation, currentLocation: action.payload}
        default:
            return currentLocation;
    }
}

export default locationReducer;
