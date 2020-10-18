import React from 'react';
import Button from "../../components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import Color from '../../components/Color/Color';
import {addColor, deleteColor, changeColor} from "../../actions/paletteActions";

import './index.css';
const Palette= ()=>{

    const colorItems = useSelector(state => state.palette.colors);
    const dispatch = useDispatch();

    const onColorChange=(id)=>{
        return (color)=>{
             dispatch(changeColor({id: id, color:color}))
        }
    };
    const addColorFunc=()=>{
        dispatch(addColor())
    };
    const deleteColorFunc=(id)=>{
        return ()=> {
            dispatch(deleteColor(id))
        }
    };

    const renderColors=(colorItems)=>{
        if (!colorItems) return null;
        let result=[];
        for (let key in colorItems){
            result.push(
                <Color id={key} color={colorItems[key]} onDelete={deleteColorFunc(key)} onColorChange={onColorChange(key)}/>
            )
        }
       return result;
    };


    return(
        <div className={"palette-page"}>
            <div className="colors-container">
                {renderColors(colorItems)}
            </div>
            <Button text={"Добавить цвет"} handler={addColorFunc}/>
        </div>
    )

};
export default Palette;