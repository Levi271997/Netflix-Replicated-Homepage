import { Props } from "next/script";
import { useState } from "react";
import ControlledIcons from "../icons/icons";
type PropsType = {
    
    size:string;
    theme:string;
    placeholder:string
}

const InputCheckbox:React.FC<PropsType>=({size, theme, placeholder})=>{
    const inputsize = InputSize(size);
    const Inputtheme = InputTheme(theme);

    return(
         <div className="flex gap-3 items-center group">
            <div className="relative w-[1.125rem] h-[1.125rem] rounded-rad-secondary border-1 border-solid border-white-fade  group-[:hover]:border-white transition-all duration-300 ease-in-out select-none">
             
                <input 
                    type="checkbox"
                    className={`relative z-[2] peer opacity-0 text-lg laptop:text-base ${inputsize} ${Inputtheme}`}
                />
                <div className="flex justify-center items-center w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  p-1 opacity-0 peer-checked:opacity-[1] bg-white text-black transition-all duration-300 ease-in-out">
                    <ControlledIcons IconName="check" width={10} height={10}/>
                </div>
            </div>
            <label className="text-base laptop:text-base  text-white">{placeholder}</label>
         </div>
        
    )
}
export default InputCheckbox;

const InputSize = (size:string) =>{
    let inputsize= '';
    switch(size){
        case 'large':
            inputsize='w-full h-full';
        break;
       
    }
    return inputsize;
}
export {InputSize}


const InputTheme = (theme:string) =>{
    let inputtheme= '';
    switch(theme){
        case 'transparent':
            inputtheme='bg-solid-colors-dark_200 text-white focus:outline-none focus:border-none';
        break;
    }
    return inputtheme;
}
export {InputTheme}