import React from 'react';
import "./index.css"

const Input= ({type="text", value, label=null, id, options={}, onChange=()=>{}})=>{

    let elem;

    switch(type){
        case "file":{
            elem = <div className={"input-wrap input-wrap-file"}>
                {label && <div className={`input-label input-label__${type}`}>{label}</div>}
                <label htmlFor={id} className={"label-file"}></label>
                <input type={type} id={id} value={value} className={`input input-${type}`} {...options}/>
            </div>;
            break;
        }
        case "textarea": {
            elem = <div className={"input-wrap textarea"}>
                {label && <label className={`input-label input-label__${type}`} htmlFor={id}>{label}</label>}
                <textarea id={id} value={value} className={`input input-${type}`} {...options}/>
            </div>;
            break;
        }
        default: {
                elem =  <div className={"input-wrap"}>
                    {label && <label className={`input-label input-label__${type}`} htmlFor={id}>{label}</label>}
                    <input type={type} id={id} value={value} className={`input input-${type}`} {...options} onChange={(e)=>{onChange(e.target.value)}}/>
                </div>;
            break;
            }

    }

    return(
       elem
    )

};
export default Input;