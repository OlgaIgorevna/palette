export const setField = (obj)=>{
    return  {
        type: 'SET_FIELD',
        payload: {
            name: obj.name,
            value: obj.value
        }
    }
};

export const sendForm = ()=>{
    return async (dispatch, getState)=>{

        let name = getState().form.name;
        let surname = getState().form.surname;
        let patronymic = getState().form.patronymic;
        let photo = getState().form.photo.file;

        let body = new FormData();
        body.append("action", "send_data");
        body.append("id", 1);
        body.append("concat", [name, surname, patronymic]);
        body.append("image", photo);

        let params={
            method: 'POST',
            mode: 'no-cors',
            body: body
        };
        try {
            const response = await fetch('http://ios.pixli.site/send.php', params);
            console.log(response, response.status);
            if (response.status !== 200 || response.status !== 201){
                throw new Error("Что то пошло не так, ответ не получен")
            }
            const string = await response.text();
            dispatch({
                type: 'SET_RESPONSE',
                payload: string
            });
        }
        catch(err){
            dispatch({
                type: 'SET_RESPONSE',
                payload: err
            });
        }
    }
};


/*export const setField = (obj)=>{
    return (dispatch, getState)=>{
        dispatch(
            {
                type: 'SET_FIELD',
                payload: {
                    name: obj.name,
                    value: obj.value
                }
            }
        )
    }
};*/

