import React, {useState, useEffect, useCallback} from 'react';
import "./index.css";
import { CompactPicker } from 'react-color';

const Color= ({id, color, onColorChange=()=>{}, onDelete=()=>{}, initialState=true})=>{

    const [isOpened, setIsOpened] = useState(initialState);
    const [colorPicker, setColorPicker] = useState(color);

    const onEdit=()=>{
        setIsOpened(true);
    };
    const onChange=(color)=>{
        setColorPicker(color);
        onColorChange(color);
    };

    const handleClick=(e)=>{

        console.log(e)
    };

    useEffect(()=>{
        document.addEventListener("click", handleClick )
    }, []);


    return(
        <div className={"color"}>
            <div className="delete" onClick={onDelete}/>
            <div className="color-cell" style={{backgroundColor: color}} onClick={()=>{}}/>
            {isOpened && <CompactPicker color={colorPicker} onChange={onChange}/> }
        </div>
    )

};
export default Color;