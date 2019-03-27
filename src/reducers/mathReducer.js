const mathReducer = (state = 
    {
        result: 1,
        lastValues: [],
        username: "Eghizio"
    }, action) => {
    switch(action.type){
        case "ADD":
        state = {
            ...state,
            result: state.result + action.payload,
            lastValues: [...state.lastValues, action.payload]
        };
            break;
        case "SUBSTRACT":
        state = {
            ...state,
            result: state.result - action.payload,
            lastValues: [...state.lastValues, action.payload]
        };
            break;
        default:
    }
    return state;
};

export default mathReducer;