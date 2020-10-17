const initialState = {
    colors: {


    },
    colorIds: []

};

const defaultColor = "rgb(25, 77, 51)";

const palette = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_COLOR':{
            let id = state.colorIds.length ? Math.max(...state.colorIds) + 1 : 1;
            console.log("state", state, "{colorIds: [...state.colorIds, id], colors: {...state.colors, [id]: {color: defaultColor} } }", {colorIds: [...state.colorIds, id], colors: {...state.colors, [id]: {color: defaultColor} } });
            return {colorIds: [...state.colorIds, id], colors: {...state.colors, [id]: {color: defaultColor} } };
        }

        case 'DELETE_COLOR':{
            //let newColorIds = colorIds.indexOf(action.payload)
            return {  }
        }
        case 'CHANGE_COLOR':{
            return {}
        }
        default: {
            return state;
        }
    }
};
export default palette;