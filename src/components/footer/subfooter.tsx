import LanguageSwitcher from "../select-controls/select-langSwitch";
export default function GlobalSubFooter(){

    const footer_menu = 
    [
        {menu_name:"FAQ", link:"#"},
        {menu_name:"Help Center", link:"#"},
        {menu_name:"Terms of Use", link:"#"},
        {menu_name:"Privacy", link:"#"},
        {menu_name:"Cookie Preferences", link:"#"},
        {menu_name:"Corporation Information", link:"#"},
       
    ];
 


    return(
        <div className="pt-20 pb-12 p-pagepadding w-full relative bg-solid-colors-dark_700 mt-16">
        <div className="max-w-page-width m-auto">
          <a href="#" className="text-solid-colors-white_100 hover:text-white underline transition-all duration-300 ease-in-out">Questions? Contact us</a>
          <div className="w-full">
                <div className="w-full">
                  <ul className="inline-flex flex-wrap w-full">
                {footer_menu.map((menu, index)=>
                    <li key={index} className="mt-3 mb-3 flex-footer_menu-flex-sm tablet-portrait:flex-footer_menu-flex">
                        <a href={menu.link} className="text-[0.875rem] text-solid-colors-white_100 underline hover:text-white transition-all duration-300 ease-in-out">{menu.menu_name}</a>
                    </li>
                )}
                  </ul>
                </div>
          </div>
         <div className="max-w-32 mt-4 mb-4">
         <LanguageSwitcher/>
         </div>
         <p className="text-[0.875rem] text-solid-colors-white_100">Netflix Philippines</p>
        </div>


      </div>
    )
}