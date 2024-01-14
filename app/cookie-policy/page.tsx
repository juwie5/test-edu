"use client";
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


const CookiePolicy = () => {
    const router = useRouter()
    const navigateToTutorPage = () => {
        window.open('https://tutor.edukoya.com/', '_self')
      }
    return (
        <main className='space-y-10'>
            <section style={{backgroundColor : '#112BF4'}} className='p-20 px-10 md:px-32 space-y-20'>
                 <div className='flex justify-between items-center'>
                 <div>
                    <Image  width={100} height={100} alt="edukoya logo" className='cursor-pointer' onClick={() => router.push('/')} src='/icons/logo.svg' />
                 </div>
                 <div className='flex items-center space-x-16'>
                     <button onClick={navigateToTutorPage} className='font-bold text-white'>Login</button>
                     <button onClick={navigateToTutorPage} className='text-blue-700 font-semibold bg-white px-10 py-4 rounded-lg'>Sign up</button>
                 </div>

                 </div>
                 <h1 className='text-white font-semibold text-6xl'>Our Cookie Policy.</h1>
            </section>

            <section className='px-10 md:px-32 space-y-16 text-3xl leading-relaxed'>
                <p className='text-blue-600 font-medium'>Last updated January 01, 2023.</p>

                <div className='space-y-6'>
                    <p>Our Cookie Policy</p>
                    <p> Our website uses a number of different cookies. This Cookie Policy explains the following:</p>
                    <ol className="list-decimal pl-10">
                        <li>What are cookies?</li>
                        <li>Cookies we use and why we use them</li>
                        <li>Your right to reject cookies</li>
                        <li>Updates </li>
                    </ol>
                    <p>This Cookie Policy applies only to the  <a className='font-medium text-blue-700' href='https://www.edukoya.com'>https://www.edukoya.com</a> and  websites as they may be modified, relocated and/or redirected from time to time (the “Site”).</p>
                </div>

                <div className='space-y-6'>
                    <h1 className='font-semibold text-3xl text-blue-700'>I. What are cookies?</h1>
                    <p>Cookies are small files which are downloaded to your device when you visit a website. The cookie then sends information back to the originating website on each subsequent visit, or to another website that recognizes that cookie.</p>
                    <p>Cookies are useful because they allow a website to recognize a user’s device. Cookies do lots of different jobs, like letting you navigate between pages efficiently, remembering your preferences, and generally improving the user experience. You can find more information about cookies at:  <a href='www.allaboutcookies.org'>www.allaboutcookies.org</a> and  <a href='www.youronlinechoices.eu'>www.youronlinechoices.eu</a>.</p>
                </div>

                <div className='space-y-4'>
                    <h1 className='font-semibold text-3xl text-blue-700'>II. Cookies we use and why we use them</h1>
                    <p className='font-medium text-blue-700'>A. Categories of cookies</p>
                    <p className='font-medium text-blue-700'>1. Our cookies categorized by function:</p>
                    <p className='font-medium text-blue-700'>We use four types of cookies on our Site:</p>
                    <p><span className='font-medium text-blue-700'>Essential Cookies:</span> These are cookies that are strictly necessary for the functioning of the Site or for performing services that an individual user has requested. Some examples of functions performed by essential cookies are cookies that remember previous actions (e.g., entered text) when navigating back to a page in the same session.</p>
                    <p><span className='font-medium text-blue-700'>Analytical Cookies:</span> These cookies collect information about how visitors use a website, for instance which pages visitors go to most often, and if they get error messages from web pages. These cookies don’t collect information that identifies a visitor. All information that analytical cookies collect is aggregated and therefore anonymous. These cookies are used only to improve how the Site functions.</p>
                    <p><span className='font-medium text-blue-700'>Functional Cookies:</span> These cookies allow the website to remember choices users make and to provide enhanced, personalized features. For example, on our Site, these cookies remember that you shut down a banner.</p>
                    <p><span className='font-medium text-blue-700'>Targeting / Advertising cookiesTargeting/advertising cookies:</span> are cookies used to deliver advertisements relevant to the user. For example, we use cookies that tell us whether you’ve seen an advertisement and interacted with it, for example, by clicking on it.</p>
                </div>


                <div className='space-y-4'>
                    <h1 className='font-semibold text-3xl text-blue-700'>2. Our cookies categorized by persistence:</h1>
                    <p>Cookies can also be categorized by how long they remain on your device. There are two broad categories of duration: Persistent cookies: Persistent cookies remain on your device until deleted manually or automatically.</p>
                    <p>Session cookies: Session cookies remain on your device until you close your browser when they are automatically deleted. We use both persistent and session cookies.</p>
                </div>

                <div className='space-y-4'>
                    <h1 className='font-semibold text-3xl text-blue-700'>3. Our cookies categorized by who places them:</h1>
                    <p>We use first-party and third-party cookies on our Site. First-party cookies are cookies we place ourselves. They are not placed by third parties. Most of our cookies are first-party cookies</p>
                    <p>Company has relationships with third-party advertising companies to place advertisements on this Site and other websites, and to perform tracking and reporting functions for this Site and other websites. These third-party advertising companies may place cookies on your computer when you visit our website so that they can display targeted advertisements to you. For more information about third-party cookies, please see Section III below</p>
                </div>

                <div className='space-y-4'>
                    <h1 className='font-semibold text-3xl text-blue-700'>B. Information collected by our cookies:</h1>
                    <p>Our cookies collect several types of information, including information about your usage of our Site how you access our Site, your preferences, your online activities after you visit our Site, and your IP address.</p>
                    <p>An IP address is the number assigned to your device, for example your laptop or mobile phone, when your device accesses the internet. Your device may have a static IP address, which means that your device always has the same IP address. Or it may have a dynamic IP address, which means that the IP address changes each time the device accesses the internet. To the extent that IP addresses are personal data under applicable data protection law, we treat it as personal data.</p>
                    <p>Our cookies collect personal data in other ways. For example, if you log into our Site, a cookie might collect your Edukoya teacher ID number and email address in order to recognize you. If we link information collected through cookies with any personal data you provide to us through the Site, e.g., through submitting a form, we also treat that information as personal data. For information on how we handle personal data collected through the site, please see our  Privacy Policy</p>
                </div>

                <div className='space-y-4'>
                    <h1 className='font-semibold text-3xl text-blue-700'>C. Sharing information:</h1>
                    <p>Cookies and Third-Party Analytics Providers:</p>
                    <p>We use cookies provided by third-party service providers, including Google Analytics, to assist us in better understanding our Site visitors. These cookies collect data tied to a user’s IP address. The type of information they collect includes, for example, the length of time a user spends on a page, the pages a user visits, and the websites a user visits before and after visiting our Site. Google Analytics uses this information to compile reports for us about our Site traffic and interactions. We use that information to offer better Site experiences and tools in the future. You can opt out of being tracked by Google Analytics cookies here:  <a className='font-medium text-blue-700' href='https://tools.google.com/dlpage/gaoptout'>https://tools.google.com/dlpage/gaoptout</a>.</p>
                </div>

                <div className='space-y-4'>
                    <h1 className='font-semibold text-3xl text-blue-700'>Cookies and Third-Party Advertisements:</h1>
                    <h1>Company participates in cookie-based ad networks operated by:</h1>
                    <p>Google (AdWords, Analytics, DoubleClick For Advertisers);</p>
                    <p>Microsoft Advertising (Bing and Yahoo).</p>
                    <p>These companies use tools including cookies and web beacons to collect information about the effectiveness of their advertisements and the types of ads that would be of greatest interest to you. Web beacons are minute graphics with a unique identifier. They are used to track the online movements of web users. In contrast to cookies, which are stored in a user's computer hard drive, web beacons are embedded invisibly on web pages and are about the size of the period at the end of this sentence.</p>
                    <p>These tools allow them to track some data relating to your computer and your internet browsing on the Site or other sites that participate in their networks. This data includes your computer’s IP Address, the Site addresses visited, the browser type used, the computer’s operating system, and the date, time and duration of the visit to each page. We may use these tools to show you information about Edukoya that we think might interest you. For example, if you view a topic on our Site, we might use cookies provided by third parties to show you additional information about that topic when you visit other websites.</p>
                    <p>Information gathered by third-party cookies is shared with those third parties. In some cases, third-party cookies may collect personal data that you enter into the Site, such as your email address. This information is shared with the third party that provided that cookie.</p>
                    <p>For more information about third-party Internet advertising companies (also called “ad networks” or “network advertisers”), please visit the Network Advertising Initiative (NAI) at  <a className='font-medium text-blue-700' href='http://www.networkadvertising.org'>http://www.networkadvertising.org</a>.</p>
                </div>

                <div className='space-y-4'>
                    <h1 className='font-semibold text-3xl text-blue-700'>III. Your right to reject cookies</h1>
                    <p>Rejecting Cookies Through Browser Settings:</p>
                    <p>You may reject cookies using your browser settings. The Help menu on the menu bar of most browsers will tell you how to prevent your browser from accepting new cookies, how to have the browser notify you when you receive a new cookie, and how to disable cookies altogether. For more information on using browser settings to reject cookies, please visit  <a href='www.allaboutcookies.org'>www.allaboutcookies.org</a>.</p>
                    <p>You should note that rejecting cookies in your browser settings may mean that any preferences you set on the Site will be lost and that the Site may not work as well. In addition, using the browser settings to reject cookies may also cause your browser to reject cookies from all websites, not just the Site.</p>
                    <p>To opt-out of targeting by many third party advertising companies, please visit the Network Advertising Initiative (NAI) at  <a className='font-medium text-blue-700' href='http://www.networkadvertising.org'>http://www.networkadvertising.org</a>. There also are software products available that can manage cookies for you. Many web browsers allow you to use a “Do Not Track” function to inform websites and ad networks that you do not want your online activities tracked. For more information on browser tracking signals and Do Not Track please visit  <a className='font-medium text-blue-700' href='http://www.allaboutdnt.org'>http://www.allaboutdnt.org</a>.</p>
                </div>

                <div className='space-y-4'>
                    <h1 className='font-semibold text-3xl text-blue-700'>IV. Updates</h1>
                    <p className='font-semibold text-3xl text-blue-700'>COOKIE POLICY UPDATES</p>
                    <p>If we change our Cookie Policy, we will post those changes on this page and update the Cookie Policy modification date above. If we materially change this Cookie Policy, we will notify you by prominently posting a notice of such changes before making them and by stating the effective date of the changes.</p>
                </div>
            </section>
        </main>
    )
}

export default CookiePolicy