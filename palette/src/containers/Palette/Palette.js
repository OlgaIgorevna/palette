import React, {useState, } from 'react';
import Button from "../../components/Button/Button";
import { CompactPicker } from 'react-color';
import {useDispatch, useSelector} from "react-redux";
import Color from '../../components/Color/Color';
import {addColor, deleteColor} from "../../actions/paletteActions";

const Palette= ()=>{


const [color, setColor]=useState("#ff8877");
    const onChangeColor = (color, event)=>{
        setColor(color);
        console.log("color", color);
    };
    const colorItems = useSelector(state => state.palette.colors);
    console.log("colorItems", colorItems);
    const dispatch = useDispatch();
    const onColorChange=(id)=>{
        return ()=>{

        }
        //dispatch({})
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
                <Color id={key} color={colorItems[key].color} onDelete={deleteColorFunc(key)} onColorChange={onColorChange(key)}/>
            )
        }
       return result;
    };
      //  const colors =useMemo(()=>{renderColors(colorItems)}, [colorItems])

    return(
        <div>
            {/*<CompactPicker color={color} onChange={onChangeColor} onChangeComplete={(color)=>{
                console.log("onChangeComplete", color);}}/>*/}
            {/*{colorItems &&   <div className="colors-container">
                    {Object.entries(colorItems).map(el=>{
                        return <Color id={el[0]} color={el[1].color} onColorChange={onColorChange(el[0])}/>
                    })}
                </div> }*/}
            <div className="colors-container">
                {renderColors(colorItems)}
            </div>
            <Button text={"Добавить цвет"} handler={addColorFunc}/>
        </div>
    )

};
export default Palette;