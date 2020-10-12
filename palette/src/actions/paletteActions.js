export const changeColor = (obj)=>{
    return  {
        type: 'CHANGE_COLOR',
        payload: {
            id: obj.id,
            color: obj.color
        }
    }
};

export const addColor = ()=>{
    return  {
        type: 'ADD_COLOR',
    }
};

export const deleteColor = (id)=>{
    return  {
        type: 'DELETE_COLOR',
        payload: id
    }
};