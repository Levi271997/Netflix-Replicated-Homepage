import Image from "next/image";
import ControlledIcons from "../icons/icons";


// const MainMenuList=[
//     {menuname: 'home',link:'#'},
//     {menuname: 'about',link:'#'},
//     {menuname: 'services',link:'#',
//         submenuitems:[
//             {menuname:'service 1',link:'#'},
//             {menuname:'service 2',link:'#'},
//             {menuname:'service 3',link:'#'},
//             {menuname:'service 4',link:'#'},
//             {menuname:'service 5',link:'#'},
//         ],
//     },
//     {menuname: 'pricing',link:'#'},
//     {menuname: 'contact',link:'#'},
// ]
const Languages = [
    {language:'English'},
    {language:'Filipino'},

]
export default function LanguageSwitcher(){
    return(
        <div className="lang-switcher  relative text-white bg-solid-colors-dark_100 rounded-rad-primary border-1 border-white-fade border-solid ">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-[2]">
                <ControlledIcons IconName="langswitch" width={0} height={0}/>
            </div>
            <select className="pl-9 pr-9 pt-1 pb-1 relative w-[0.0625rem] mobile-landscape:w-full z-[3] bg-transparent focus:border-none focus:outline-none">
                {Languages.map((el, index) =>
                    <option key={index} value={el.language} className="bg-transparent">{el.language}</option>
                )}
            </select>
           <div className="absolute right-2 top-1/2 -translate-y-1/2 text-white z-[2]">
                <ControlledIcons IconName="caretdown" width={8} height={8}/>
           </div>
        </div>
    )
}