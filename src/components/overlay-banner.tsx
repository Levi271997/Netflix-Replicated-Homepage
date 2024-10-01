import HeaderSpacer from "./header/header-spacer";
import Input from "./input-controls/input";
import ControlledButtons from "./button-controls/buttons";
import ControlledIcons from "./icons/icons";
import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export default function HeroBanner(){
    return(
        <div className="hero-form h-full flex flex-col">
            <HeaderSpacer/>
            <div className="intro-heading h-full flex justify-center items-center flex-1 px-pagepadding ">
              <div className="max-w-5xl">
                <h1 className="text-4xl laptop:text-5xl font-black text-white text-center">Unlimited movies, TV shows, and more</h1>
                <p className="mt-4 text-base tablet-portrait:text-2xl font-normal text-white text-center ">Watch anywhere. Cancel anytime.</p>

               <div className="mt-6">
               <form action="">
                    <h3 className="text-base tablet-portrait:text-xl text-center text-white">Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="mt-4 form-field flex flex-col mobile-landscape:flex-row gap-3 max-w-xl m-auto items-center mobile-landscape:items-stretch">
                        <div className="flex-1 w-full mobile-landscape:w-auto">
                            <Input 
                                inputtype="email" 
                                size="large" 
                                theme="primary" 
                                placeholder="Email address"
                            />
                        </div>
                       <ControlledButtons 
                            theme="primary-solid" 
                            text="Get Started" 
                            size="medium" 
                            RightIconComponent=
                            {
                                ControlledIcons
                            } 
                            rightIconProps=
                            { 
                                {
                                    IconName:"caretright",
                                    width:20, 
                                    height:20
                                } 
                            }
                        />
                        
                    </div>
                </form>

               </div>
              </div>
            </div>
        </div>
    )
}