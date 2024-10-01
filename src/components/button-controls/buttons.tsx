import React, { ReactNode } from "react";
import ControlledIcons from "../icons/icons";
import { link } from "fs";

type PropsType = {
    text:string,
    size:string,
    theme:string,
    buttonlink?:string | null 
    LeftIconComponent?:React.ComponentType<any> | null;
    leftIconProps?: any;
    RightIconComponent?:React.ComponentType<any> | null;
    rightIconProps?: any;
};
const ControlledButtons: React.FC<PropsType> = ({theme,text,size,LeftIconComponent,leftIconProps, RightIconComponent, rightIconProps,buttonlink}) =>{
    // let icon: JSX.Element | null = null;
    const themeClassName = ThemeClass(theme );
    const buttonSize = ButtonSize(size);
  return(
    <a href={`${buttonlink === null ? "#" : buttonlink}`} className={`gap-2 w-auto cursor-pointer rounded-rad-primary transition-all duration-300 flex justify-center items-center ${themeClassName} ${buttonSize}`}>
        {LeftIconComponent && <LeftIconComponent {...leftIconProps} />}
        {text}
        {RightIconComponent && <RightIconComponent {...rightIconProps} />}
    </a>
  )
}

export default ControlledButtons;

const ThemeClass = (theme:string) => {
    let buttonclass="";
    switch(theme){
        case 'primary-solid':
            buttonclass = "text-white btn-primary bg-solid-colors-red_100 hover:bg-solid-colors-red_200";
        break;
        case 'secondary-solid':
            buttonclass =  "btn-secondary bg-white text-solid-colors-red_100 hover:bg-solid-colors-red_100 hover:text-white";
        break;
    }
    return buttonclass;
}
export { ThemeClass };


const ButtonSize = (size:string) => {
    let buttonclass="";
    switch(size){
        case 'small':
            buttonclass = "text-sm p-buttonsmall";
        break;
        case 'medium':
            buttonclass =  "p-buttonmedium text-base laptop:text-2xl";
        break;
        case 'large':
            buttonclass="w-full h-10";
        break;
    }
    return buttonclass;
}
export { ButtonSize };
