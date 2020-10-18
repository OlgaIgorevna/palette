import React, {useState, useEffect, useRef} from 'react';
import "./index.css";
import { CompactPicker } from 'react-color';

const Color= ({id, color, onColorChange=()=>{}, onDelete=()=>{}, initialState=true})=>{

    const [isOpened, setIsOpened] = useState(initialState);

    const refPicker = useRef(null);

    const handleClickOutside = (event) => {
        if (refPicker.current && !refPicker.current.contains(event.target)) {
            setIsOpened(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const [colorPicker, setColorPicker] = useState(color);

    const onEdit=()=>{
        setIsOpened(true);
    };
    const onChange=(color)=>{
        setColorPicker(color);
        onColorChange(color.hex);
    };

    return(
        <div className={"color"}>
            <div className="delete" onClick={onDelete}/>
            <div className="color-cell" style={{backgroundColor: color}} onClick={onEdit}/>
            {isOpened && <div ref={refPicker} className={"picker-wrap"}><CompactPicker color={colorPicker} onChange={onChange}/> </div>}
        </div>
    )

};
export default Color;