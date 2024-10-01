import { Props } from "next/script";
import { useState } from "react";

type PropsType = {
    inputtype:string;
    size:string;
    theme:string;
    placeholder:string;
    borderweight ?: string;
 
}

const Input:React.FC<PropsType>=({inputtype, size, theme, placeholder, borderweight })=>{
    const inputsize = InputSize(size);
    const Inputtheme = InputTheme(theme);
    const Inputborder = borderweight ? InputBorderWidth(borderweight) : '';
    return(
         <div className={`row-field relative rounded-rad-primary overflow-hidden border-solid border-white-fade ${Inputborder ? Inputborder : 'border-2'}`}>
            <input 
                type={inputtype} 
                className={`w-full peer text-lg laptop:text-base ${inputsize} ${Inputtheme}`} 
                onFocus={() => {
                    handleOnMouseEnter
                 }}
            />
            <label className="text-base laptop:text-lg  text-white peer-focus:text-[0.75rem] peer-focus:top-4 absolute left-[1rem] top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 ease-in-out">{placeholder}</label>
         </div>
        
    )
}
export default Input;


const handleOnMouseEnter=()=>{
    console.log('mouse entered ');
   }

const InputBorderWidth = (borderweight:string)=>{
    let bw='';
    switch(borderweight){
        case 'light':
            bw='border-1';
        break;

        case 'heavy':
            bw='border-2';
        break;
    }
    return bw;
}

const InputSize = (size:string) =>{
    let inputsize= '';
    switch(size){
        case 'small':
            inputsize='sm';
        break;
        case 'medium':
            inputsize='md';
        break;
        case 'large':
            inputsize = "p-inputlarge";
        break;
    }
    return inputsize;
}
export {InputSize}


const InputTheme = (theme:string) =>{
    let inputtheme= '';
    switch(theme){
        case 'primary':
            inputtheme='bg-solid-colors-dark_200 text-white focus:outline-none focus:border-none';
        break;
        case 'transparent':
            inputtheme='bg-transparent text-white focus:outline-none focus:border-none';
        break;
    }
    return inputtheme;
}
export {InputTheme}