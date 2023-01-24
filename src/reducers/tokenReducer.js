const tokenReducer = (token = null, action) => {
    switch(action.type){
        case 'SET_TOKEN':
            return {...token, token: action.payload}
        default:
            return token;
    }
}

export default tokenReducer;
