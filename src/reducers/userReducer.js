const userReducer = (state = 
    {
        name: "Eghizio",
        age: 21
    }, action) => {
    switch(action.type){
        case "SET_NAME_FULFILLED":
        state = {
            ...state,
            name: action.payload
        };
            break;
        case "SET_AGE":
        state = {
            ...state,
            age: action.payload
        };
            break;
        default:
    }
    return state;
};

export default userReducer;