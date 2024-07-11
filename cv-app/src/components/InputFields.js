import React from "react";

export function InputField({ sectionData }) {
    return sectionData.profile.fields.map((item,index) => (
     <input 
        className='input' 
        key={item.id} 
        placeholder={item.placeholder}/>
    ));
}
