"use client"
import { useState } from "react";

const Faq=[
    {
        heading:"What is Netflix",
        content:[
            {
                contenttext: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            },
            {
                contenttext: "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
            }
        ]
    },
    {
        heading:"How much does Netflix const?",
        content:[
            {
                contenttext: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₱149 to ₱549 a month. No extra costs, no contracts.",
            },
           
        ]
    },
    {
        heading:"Where can I watch? ",
        content:[
            {
                contenttext: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
            },
            {
                contenttext: "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
            },
           
        ]
    },
    {
        heading:"How can I cancel? ",
        content:[
            {
                contenttext: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
            },  
        ]
    },
    {
        heading:"What can I watch on Netflix? ",
        content:[
            {
                contenttext: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
            },  
        ]
    },
    {
        heading:"Is Netflix good for kids? ",
        content:[
            {
                contenttext: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
            },  
            {
                contenttext: "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
            }, 
        ]
    },
];

export default function FaqAccordion (){

    const [mapIndex , setMapIndex] = useState(0);
    const handleToggleClick = (mapindex:number)=>{
            setMapIndex(mapindex);
    };

    return (
        <div className="faq-toggle">
            {Faq.map((q,index) =>    
                 <div key={index} className="w-full toggle-wrapper text-2xl text-white mb-2">
                 <div onClick={()=> handleToggleClick(index)} className={`toggle-heading w-full bg-solid-colors-dark_500 hover:bg-solid-colors-dark_600 p-6 mb-marginsmall flex flex-row flex-nowrap peer group ${ mapIndex == index ? 'toggled':''}`}>
                     <h3 className="text-lg mobile-landscape:text-xl tablet-portrait:text-2xl flex-1">{q.heading}</h3>
                     <div className="icon w-5 mobile-landscape:w-9 h-5 mobile-landscape:h-9 flex flex-col items-center justify-center relative">
                        <span className="top w-[3px] h-1/2 bg-white absolute top-0 left-1/2 -translate-x-1/2 group-[.toggled]:rotate-[89deg] group-[.toggled]:origin-bottom transition-all duration-300 ease-in-out"></span>
                        <span className="w-full h-[3px] bg-white block"></span>
                        <span className="top w-[3px] h-1/2 bg-white absolute bottom-0 left-1/2 -translate-x-1/2 group-[.toggled]:rotate-[89deg] group-[.toggled]:origin-top transition-all duration-300 ease-in-out"></span>
                     </div>
                 </div>
                 <div className="text-base mobile-landscape:text-lg tablet-portrait:text-2xl toggle-content bg-solid-colors-dark_500 pl-6 pr-6 pt-0 pb-0 opacity-0 max-h-0 invisible peer-[.toggled]:opacity-opac_1 peer-[.toggled]:visible peer-[.toggled]:max-h-96 peer-[.toggled]:pt-5 peer-[.toggled]:pb-5 transition-all duration-300 ease-in-out">  
                    {q.content.map((contentItem, contentIndex) => (
                        <p key={contentIndex} className="mb-3">{contentItem.contenttext}</p>
                    ))}
                 </div>
             </div>
            )}
          
      </div>
    )
}