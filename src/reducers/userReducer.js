const userReducer = (user = null, action) => {
    switch(action.type){
        case 'SET_USER':
            return {...user, user: action.payload}
        default:
            return user;
    }
}

export default userReducer;
