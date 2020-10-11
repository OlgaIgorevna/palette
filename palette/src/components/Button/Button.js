import React from 'react';
import "./index.css"

const Button= ({text, handler})=>{

    return(
        <div className={"button"} onClick={handler}>
            {text}
        </div>
    )

};
export default Button;