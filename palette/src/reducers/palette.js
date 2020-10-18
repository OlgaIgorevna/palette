const initialState = {
    colors: {},
    colorIds: []
};

const defaultColor = "rgb(25, 77, 51)";

const palette = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_COLOR':{
            console.log("add color");
            let id = state.colorIds.length ? Math.max(...state.colorIds) + 1 : 1;
            return {colorIds: [...state.colorIds, id], colors: {...state.colors, [id]:  defaultColor } };
        }

        case 'DELETE_COLOR':{
            let idx = state.colorIds.indexOf(+action.payload);
            let newColorIds = [...state.colorIds.slice(0, idx), ...state.colorIds.slice(idx+1)];
            let newColors = {...state.colors};
            delete newColors[action.payload];
            return { colorIds: newColorIds, colors: newColors }
        }
        case 'CHANGE_COLOR':{
            let id = action.payload.id;
            let color =action.payload.color;
            let newColors={...state.colors};
            newColors[id] = color;
            return {
                colors: newColors,
                colorIds: state.colorIds
            }
        }
        default: {
            return state;
        }
    }
};
export default palette;