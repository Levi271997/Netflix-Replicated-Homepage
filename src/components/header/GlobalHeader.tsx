import Image from "next/image";

import LanguageSwitcher from "../select-controls/select-langSwitch";
import ControlledIcons from "../icons/icons";
import ControlledButtons from "../button-controls/buttons";
const GlobalHeader = () =>{
    return(
        <div className="w-full -mb-20 relative z-[3] px-pagepadding">
            <header>
                <div className="max-w-page-width m-auto h-20 flex items-center justify-between">
                    <div className="header-logo w-24 mobile-landscape:w-36 flex items-center text-solid-colors-red_100">
                        <ControlledIcons 
                            IconName="sitelogo" 
                            width={0} 
                            height={0}
                        />
                    </div>
                    <div className="header-buttons flex gap-4 mobile-landscape:gap-8">
                        <LanguageSwitcher/>
                        <ControlledButtons 
                            buttonlink="/login"
                            theme="primary-solid" 
                            text="Sign In" 
                            size="small" 
                        />
                    </div>        

                </div>
            </header>
        </div>
    )
}
export default GlobalHeader;


