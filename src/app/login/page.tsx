import GlobalHeader from "@/components/header/GlobalHeader"
import Image from "next/image"
import HeaderSpacer from "@/components/header/header-spacer"
import LoginForm from "@/components/forms/loginform"
import GlobalSubFooter from "@/components/footer/subfooter"
export default function LoginPage(){
    return (
      <>
       <GlobalHeader/>
       <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.5]">
                <Image
                      src="/assets/banner-bg.jpg"
                      width={600}
                      height={600}
                      alt="Background image of the site"
                      className="w-full h-full object-cover object-center"
                    />
            </div>
            <HeaderSpacer/>
            <div className="z-[2] relative">
              <LoginForm/>
            </div>
            <GlobalSubFooter/>
       </div>
    
      </>
    )
}