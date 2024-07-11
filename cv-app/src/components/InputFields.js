import React from "react";

export function InputField({ keyFields }) {
    return keyFields.map((item) => (
     <input 
        className='input' 
        key={item.id} 
        placeholder={item.placeholder}/>
    ));
}
