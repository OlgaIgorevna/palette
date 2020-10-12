import React from 'react';
import Input from '../../components/Input/Input';
import Button from "../../components/Button/Button";
import {useSelector, useDispatch} from "react-redux";
import {setField, sendForm} from "../../actions/formActions";


const Form= ()=>{

    const dispatch = useDispatch();

    const valueName = useSelector(state => state.form.name);
    const valueSurname = useSelector(state => state.form.surname);
    const valuePatronymic = useSelector(state => state.form.patronymic);
    const valuePhoto = useSelector(state => state.form.photo);
    const valueResponse = useSelector(state => state.form.response);

    const getValue=(id)=>{
        let val;
        switch(id){
            case "name":{
                val = valueName;
                break;
            }
            case "surname":{
                val = valueSurname;
                break;
            }
            case "patronymic":{
                val = valuePatronymic;
                break;
            }
            case "photo":{
                val = valuePhoto;
                break;
            }
            case "response":{
                val = valueResponse
                break;
            }
            default:{break;}
        }
        return val;
    };

    const inputs= [
        {
            id: "name",
            label: "Имя",
        },
        {
            id: "surname",
            label: "Фамилия",
        },
        {
            id: "patronymic",
            label: "Отчество",
        },
        {
            id: "photo",
            label: "Фото",
            type: "file",
            options: {accept:'image/*'}
        },

    ];



    const onChangeInput = (field)=>{
        return (value)=>{
            dispatch(setField({name: field, value: value}))
        }
    };

    return(
        <div>

            {inputs.map(({id, label,type="text", options})=>{
                return  <Input id={id} type={type} label={label} options={options} value={getValue(id)} onChange={onChangeInput(id)}/>
            })}
            <Button text={"Сохранить"} handler={()=>{ dispatch(sendForm()) } }/>
            <Input id="response" label={"response"} type={"textarea"} value={getValue("response")}/>
        </div>
    )

};
export default Form;