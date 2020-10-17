import React, {useRef, useState} from 'react';
import "./index.css"

const Input= ({type="text", value={file: ""}, label=null, id, options={}, onChange=()=>{}})=>{

    let elem;
    const [selected, setSelected] = useState(false);
    const inputFileRef = useRef(null);

    const onChangeFile = (file)=>{
        if (file && file.type.indexOf("image")===-1){
              return
          }
        onChange({file:file, src: URL.createObjectURL(file)});
        setSelected(true);
    };
    const removeFile=()=>{
        inputFileRef.current.value="";
        onChange({file:"", src:""});
        setSelected(false);
    };

    switch(type){
        case "file":{
            elem = <div className={"input-wrap input-wrap-file"}>
                {label && <div className={`input-label input-label__${type}`}>{label}</div>}
                { !selected && <label htmlFor={id} className={"label-file"}/>}
                {selected &&  <div className="selectedImg"> <img src={value.src} alt="" height={"86px"}/> <div className={"removeImg"} onClick={removeFile}>x</div></div>}
                <input type={type} id={id} ref={inputFileRef} {...options} className={`input input-${type}`} hidden={true} onChange={(e)=>{onChangeFile(e.target.files[0])} }/>
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