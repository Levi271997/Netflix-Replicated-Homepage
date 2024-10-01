"use client"
import Input from "@/components/input-controls/input";
import ControlledButtons from "../button-controls/buttons";
import InputCheckbox from "../input-controls/checkbox";
import ControlledIcons from "../icons/icons";
import { useState } from "react";
export default function LoginForm(){
    const [toggleOpen,setToggleOpen]=useState(false);

    const handleLearnMore=()=>{
        setToggleOpen(true);
   }

   
    return(
        <div className="max-w-[450px] min-h-[707px] m-auto bg-solid-colors-dark_700 px-[68px] py-[48px] ">
            <h1 className="text-white text-[2rem] font-bold mb-7">Sign in</h1>
            <div className="flex flex-col gap-4 w-full text-text-xxs">
                <div className="input-group">
                    <Input 
                        inputtype="email" 
                        size="large" 
                        theme="transparent" 
                        placeholder="Email or phone number"
                        borderweight="light"
                       
                    />
                    <div className="text-solid-colors-red_300 text-[0.8125rem] mt-[0.375rem]">
                    <ControlledIcons 
                            IconName="circledclose" 
                            width={20} 
                            height={20}
                        />
                         Please enter a valid email or phone number.
                         </div>
                </div>
                <div className="input-group">
                    <Input 
                        inputtype="password" 
                        size="large" 
                        theme="transparent" 
                        placeholder="Password"
                        borderweight="light"
                    />
                    <div className="text-solid-colors-red_300 text-[0.8125rem] mt-[0.375rem]">
                    <ControlledIcons 
                            IconName="circledclose" 
                            width={20} 
                            height={20}
                        />
                        Your password must contain between 4 and 60 characters.
                        </div>
                </div>
                <div>
                <ControlledButtons 
                         theme="primary-solid" 
                         text="Sign in" 
                         size="large" 
                     />
                </div>
                <a href="#" className="text-white text-center no-underline hover:underline hover:text-solid-colors-white_100">Forgot password?</a>

                <div className="mt-11 text-base">  
                        <InputCheckbox size="large" theme="transparent" placeholder="Remember me"/>
                </div>
                <p className="text-solid-colors-white_100 text-base font-normal">New to Netflix? <span className="text-white"><a href="#" className="hover:underline">Sign up now</a></span></p>

                <p className="text-solid-colors-white_100 text-[13px] text-left ">This page is protected by Google reCAPTCHA to ensure you're not a bot.<button onClick={handleLearnMore} className={`text-solid-colors-blue_100 ${!toggleOpen ? 'opacity-100 visible':'invisible opacity-0'}`}>Learn more</button></p>

                <div className={`transition-all duration-500 ease-in-out ${toggleOpen ?'opacity-100 visible':'opacity-0 invisible'}`}>
                    <p className="text-[13px] text-solid-colors-white_100">The information collected by Google reCAPTCHA is subject to the Google <a href="#" className="text-solid-colors-blue_100 ">Privacy Policy</a> and <a href="#" className="text-solid-colors-blue_100">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>
                </div>
            </div>
        </div>
    )

  
}
