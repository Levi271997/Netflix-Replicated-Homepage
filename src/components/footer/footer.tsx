import LanguageSwitcher from "../select-controls/select-langSwitch";
export default function GlobalFooter(){

    const footer_menu = 
    [
        {menu_name:"FAQ", link:"#"},
        {menu_name:"Investor Relations", link:"#"},
        {menu_name:"Ways to Watch", link:"#"},
        {menu_name:"Corporate Information", link:"#"},
        {menu_name:"Only on Netflix", link:"#"},
        {menu_name:"Help Center", link:"#"},
        {menu_name:"Jobs", link:"#"},
        {menu_name:"Terms of Use", link:"#"},
        {menu_name:"Contact Us", link:"#"},
        {menu_name:"Account", link:"#"},
        {menu_name:"Redeem Gift Cards", link:"#"},
        {menu_name:"Privacy", link:"#"},
        {menu_name:"Speed Test", link:"#"},
        {menu_name:"Media Center", link:"#"},
        {menu_name:"Buy Gift Cards", link:"#"},
        {menu_name:"Cookie Preferences", link:"#"},
        {menu_name:"Legal Notices", link:"#"},
    ];
 


    return(
        <div className="pt-20 pb-12 p-pagepadding w-full relative">
        <div className="max-w-page-width m-auto">
          <a href="#" className="text-solid-colors-white_100 hover:text-white underline transition-all duration-300 ease-in-out">Questions? Contact us</a>
          <div className="w-full">
                <div className="w-full">
                  <ul className="inline-flex flex-wrap">
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