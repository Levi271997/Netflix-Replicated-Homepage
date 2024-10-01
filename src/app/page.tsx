"use client"
import Image from "next/image";

import React from 'react';
import localFont from 'next/font/local'
import GlobalHeader from "@/components/header/GlobalHeader";
import './globals.css';
import HomeSlider from "@/components/sliders/banner-slider";
import HeaderSpacer from "@/components/header/header-spacer";
import HeroBanner from "@/components/overlay-banner";
import FaqAccordion from "@/components/accordions/faq-accordion";
import Input from "@/components/input-controls/input";
import ControlledButtons from "@/components/button-controls/buttons";
import ControlledIcons from "@/components/icons/icons";
import GlobalFooter from "@/components/footer/footer";
import PageBorders from "@/components/borders/pageborders";
const netFlixFont = localFont({
  src:[
    {
      path:'../fonts/NetflixSans-Regular.woff2',
      weight:'400',
      style:'normal',
    },
    {
      path:'../fonts/NetflixSans-Medium.woff2',
      weight:'500',
      style:'normal',
    },
    {
      path:'../fonts/NetflixSans-Bold.woff2',
      weight:'700',
      style:'normal',
    },
  ],
 
   })

export default function Home() {
  return (
   <>
    <main className={netFlixFont.className} >
      <GlobalHeader/>
      <div className="page-content">
      <div className='banner-slider relative'>
        <HomeSlider/>
       <div className="absolute left-0 top-0 w-full h-full z-[2]">
        <HeroBanner/>
       </div>
       <PageBorders/>
        </div>

        <div className="pt-12 pb-12 p-pagepadding w-full relative">
         <div className="max-w-page-width m-auto">
            <div className="flex flex-col tablet-landscape:flex-row items-center">
                <div className="basis-1/2 h-full max-w-full tablet-portrait:max-tablet-landscape:max-w-[60%]">
                  <h3 className="text-center tablet-landscape:text-left text-3xl mobile-landscape:text-5xl font-black text-white mb-4 leading-leading_1">Enjoy on your TV</h3>
                  <p className="text-center tablet-landscape:text-left text-xl mobile-landscape:text-2xl font-normal text-white">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                <div className="basis-full tablet-landscape:basis-1/2 w-full tablet-landscape:w-1/2 h-full">
                  <div className="tv-wrapper max-h-[500px] relative flex justify-center">
                    <div className="w-full h-full tablet-portrait:max-tablet-landscape:max-w-[50%] max-w-[72%] max-h-[96%] bg-[rgba(255,255,255,0.6)] absolute left-1/2 -translate-x-[51%] top-0 tv-placeholder">
                        <video width="100%" height="100%" playsInline autoPlay muted loop className="h-full">
                          <source src="videos/video-tv-0819.m4v" type="video/mp4" />
                          <track
                            src=""
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                          />
                          Your browser does not support the video tag.
                        </video>
                    </div>
                    <Image
                      src="/assets/tv.png"
                      width={600}
                      height={600}
                      alt="Picture of the tv"
                      className="z-[2]"
                    />
                  </div>
                </div>
              </div>
         </div>
         <PageBorders/>
       </div>

       <div className="pt-12 pb-12 p-pagepadding w-full relative">
       <div className="max-w-page-width m-auto">
            <div className="flex flex-col-reverse tablet-landscape:flex-row items-center">
                
                <div className="basis-1/2 w-full tablet-landscape:w-1/2 h-full flex justify-center flex-col items-center">
                  <Image
                      src="/assets/mobile.jpg"
                      width={600}
                      height={600}
                      alt="Picture of the tv"
                      className="z-[2]"
                    />
                
               
                  <div className="w-full mobile-landscape:w-[50%] p-3 rounded-md bg-black border-2 border-solid border-rad-primary border-white-fade flex flex-row justify-between items-center mt-0 mobile-landscape:-mt-28 z-[2]">
                      <div className="flex flex-row gap-2">
                        <Image
                          src="/assets/boxshot.png"
                          width={50}
                          height={100}
                          alt="MOvie Cover"
                        />
                        <div className="flex flex-col gap-1 justify-center">
                          <p className="text-white">Stranger Things</p>
                          <p className="text-solid-colors-blue_100">Downloading...</p>
                        </div>
                      </div>
                      <Image
                          src="/assets/download-icon.gif"
                          width={60}
                          height={60}
                          alt="Downloading"
                        />
                    </div>
                </div>
                <div className="basis-1/2 h-full max-w-full tablet-portrait:max-tablet-landscape:max-w-[60%]">
                  <h3 className="text-center tablet-landscape:text-left text-3xl mobile-landscape:text-5xl font-black text-white mb-4 leading-leading_1">Download your shows to watch offline</h3>
                  <p className="text-center tablet-landscape:text-left text-xl mobile-landscape:text-2xl font-normal text-white">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
              </div>
         </div>
         <PageBorders/>
       </div>


       <div className="pt-12 pb-12 p-pagepadding w-full relative">
       <div className="max-w-page-width m-auto">
            <div className="flex flex-col tablet-landscape:flex-row items-center">
            <div className="basis-1/2 h-full max-w-full tablet-portrait:max-tablet-landscape:max-w-[60%]">
                  <h3 className="text-center tablet-landscape:text-left text-3xl mobile-landscape:text-5xl font-black text-white mb-4 leading-leading_1">Download your shows to watch offline</h3>
                  <p className="text-center tablet-landscape:text-left text-xl mobile-landscape:text-2xl font-normal text-white">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                <div className="basis-1/2 w-full tablet-landscape:w-1/2 h-full flex justify-center flex-col items-center">
                  <Image
                      src="/assets/mobile.jpg"
                      width={600}
                      height={600}
                      alt="Picture of the tv"
                      className="z-[2]"
                    />
                
               
                  <div className="w-full mobile-landscape:w-[50%] p-3 rounded-md bg-black border-2 border-solid border-rad-primary border-white-fade flex flex-row justify-between items-center mt-0 mobile-landscape:-mt-28 z-[2]">
                      <div className="flex flex-row gap-2">
                        <Image
                          src="/assets/boxshot.png"
                          width={50}
                          height={100}
                          alt="MOvie Cover"
                        />
                        <div className="flex flex-col gap-1 justify-center">
                          <p className="text-white">Stranger Things</p>
                          <p className="text-solid-colors-blue_100">Downloading...</p>
                        </div>
                      </div>
                      <Image
                          src="/assets/download-icon.gif"
                          width={60}
                          height={60}
                          alt="Downloading"
                        />
                    </div>
                </div>
               
              </div>
         </div>
         <PageBorders/>
       </div>
      

       <div className="pt-12 pb-12 p-pagepadding w-full relative">
       <div className="max-w-page-width m-auto">
            <div className="flex flex-col tablet-landscape:flex-row items-center">
            <div className="basis-1/2 w-full tablet-landscape:w-1/2 h-full flex justify-center flex-col items-center">
                <Image
                      src="/assets/kids.png"
                      width={600}
                      height={600}
                      alt="Picture of the tv"
                      className="z-[2]"
                    />
               
                </div>
            <div className="basis-1/2 h-full max-w-full tablet-portrait:max-tablet-landscape:max-w-[60%]">
                  <h3 className="text-center tablet-landscape:text-left text-3xl mobile-landscape:text-5xl font-black text-white mb-4 leading-leading_1">Download your shows to watch offline</h3>
                  <p className="text-center tablet-landscape:text-left text-xl mobile-landscape:text-2xl font-normal text-white">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                
               
              </div>
         </div>
         <PageBorders/>
       </div>
       <div className="pt-20 pb-12 p-pagepadding w-full relative">
          <div className="max-w-page-width m-auto">
                <h2 className="text-white text-4xl laptop:text-5xl text-center font-black mb-16">Frequently Asked Questions</h2>
                <FaqAccordion/>

                <div className="mt-12">
                  <form action="">
                        <h3 className="text-xl text-center text-white">Ready to watch? Enter your email to create or restart your membership.</h3>
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
            <PageBorders/>
        </div>
      <GlobalFooter/>
      </div>
    </main>
    </>
  )
};


