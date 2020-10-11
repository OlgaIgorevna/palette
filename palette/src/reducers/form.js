const initialState = {
    name: "",
    surname: "",
    patronymic: "",
    photo: "",
    response: ""
};


const form = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FIELD': {
            console.log("SET_FIELD reducer", action.payload);
            return {...state, [action.payload.name] : action.payload.value};
        }
        case 'SEND_FORM':{
            break;
        }
        case 'SET_RESPONSE':{
            return {...state, response: action.payload}
        }
        default: {
            return state;
        }
    }
};
export default form;