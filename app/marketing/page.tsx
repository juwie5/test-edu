'use client'

import React from "react";
import { MarketingHomeHeader } from '../../templates/layout/MarketingHomeHeader'
import { MarketingHeroText } from '../../templates/Marketing/MarketingHeroText'
import { MarketingHeroImage } from '../../templates/Marketing/MarketingHeroImage'
import { MarketingStats } from "@/templates/Marketing/MarketingStats";
import { MarketingSlideShow } from "@/templates/Marketing/MarketingSlideShow";
import { MarketingDiscover } from "@/templates/Marketing/MarketingDiscover"
import { MarketingScore } from "@/templates/Marketing/MarketingScore";
import { MarketingParents } from "@/templates/Marketing/MarketingParents";
import { MarketingLessons } from "@/templates/Marketing/MarketingLessons";
import { MarketingRequest }  from '../../templates/Marketing/MarketingRequest'
import { MarketingFooter } from "@/templates/Marketing/MarketingFooter";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

const Page = () => {
    return (
        <>
            <section className={inter.className}>
                <div className='bg-gradient-to-r from-[#145AF7] to-[#112BF4] h-4/5 relative px-9 pb-16 lg:pb-0 md:pr-[16.7%] md:pl-[7.7%]'>
                    <div>
                            <div className="">
                                <MarketingHomeHeader />
                                <MarketingHeroText />
                                <MarketingHeroImage />
                            </div>         
                    </div>
                </div>
                <MarketingStats />
                <MarketingSlideShow />
                 <MarketingDiscover />
                 <MarketingScore />
                <MarketingParents />
                <MarketingLessons />
                 <MarketingRequest />
                <MarketingFooter />  
            </section>
        </>
    )
}


export default Page;