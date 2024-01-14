"use client";
import React from "react";
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Page = () => {
    const router = useRouter()
    const navigateToTutorPage = () => {
        window.open('https://tutor.edukoya.com/', '_self')
    }
    return (
        <>
            <section style={{ backgroundColor: '#112BF4' }} className='p-20 px-10 md:px-40 space-y-20'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Image width={100} height={100} alt="edukoya logo" className='cursor-pointer' onClick={() => router.push('/')} src='/icons/logo.svg' />
                    </div>
                    <div className='flex items-center space-x-16'>
                        <button onClick={navigateToTutorPage} className='font-bold text-white'>Login</button>
                        <button onClick={navigateToTutorPage} className='text-blue-700 font-semibold bg-white px-10 py-4 rounded-lg'>Sign up</button>
                    </div>

                </div>
                <h1 className='text-white font-semibold text-6xl'>Our Terms and Conditions.</h1>
            </section>
            <main className='w-10/12 mx-auto mt-10 text-3xl space-y-10 pb-10 leading-relaxed'>
                <p className="">Last updated: March 3rd, 2022</p>
                <div className="space-y-6">
                    <h3> for Edukoya Limited </h3>
                    <ul className="list-disc space-y-3 text-3xl pl-10">
                        <li>For Users</li>
                        <li>(hereinafter "T&Cs")</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h1 className="font-bold">1. SCOPE</h1>
                    <div className="pl-6">
                        <p>1.1. Edukoya Nigeria Limited, (hereinafter “Edukoya”), provides an online platform for tutoring services (hereinafter the “Platform”)</p>
                        <p>1.2. These T&Cs shall apply to all persons registered on the platform as Users (hereinafter referred to as “User”). They regulate the rights and obligations of Users when visiting the platform and when using the functions and services offered on it.</p>
                        <p>1.3. These T&Cs shall apply exclusively to the use of the platform as a User. Any deviating, contradictory or supplementary T&Cs shall not form part of the business relationship between the User and Edukoya, even if they have not been expressly contradicted. Deviating, contradictory or supplementary T&Cs shall only be valid if Edukoya has agreed to them in writing.</p>
                        <p>1.4. Edukoya may change the provisions of these T&Cs at any time without stating the reasons. Such changes shall be posted on the platform. If the User continues to use the Platform after becoming aware of the amended T&Cs, the amendments are deemed to be accepted.</p>
                        <p>1.5. The information on the protection of the User’s personal data is available in the privacy policy on the platform under edukoya privacy policy</p>
                    </div>
                </div>


                <div className="space-y-10">
                    <h1 className="font-bold">2. SUBJECT OF THE CONTRACT, SERVICE DESCRIPTION</h1>
                    <div className="pl-6">
                        <p>2.1. Users and persons registered as Tutors (hereinafter referred to as “Tutor”) can arrange online video lessons (hereinafter referred to as “video lessons”) via the platform.</p>
                        <p>2.2. All persons who wish to offer video lessons via the Platform can register as Tutors. These persons do not have to be school teachers. If services offered by Tutors via the Platform are subject to charges, this will be expressly and clearly indicated.</p>
                        <p>2.3. If a User and Tutor agree upon video lessons, the contract for this shall be concluded directly between the User and the Tutor (hereinafter “Tutor Contract”)</p>
                        <p>2.4. Edukoya operates the Platform and arranges tutor contracts on behalf of Tutors for Users of the platform. In addition, Edukoya offers certain services in connection with the onboarding of Users and also provides support in the processing of tutor contracts. Edukoya is authorized to accept payments in the name and on account of Tutors.</p>
                        <p>2.5. Edukoya may also provide other services via the Platform (e.g. a homework chat or a free trial lesson to test video lessons). However, Edukoya is not obliged to make such offers available.</p>


                    </div>
                    <div className="space-y-6">
                        <h3 className="font-bold">3. REGISTRATION, CONSENT OF THE LEGAL REPRESENTATIVE</h3>
                        <div className="pl-6">
                            <p>3.1. Use of the Platform requires a corresponding registration. In the course of registering for the Platform, the User agrees to the validity of these T&Cs. Use of the Platform as a User or Tutor is reserved for registered persons. Registration is free of charge</p>
                            <p>3.2. In the course of registration, the User must provide all information completely and truthfully and update it immediately in the event of any changes.</p>
                            <p>3.3. There is no right to registration on the Platform. Edukoya reserves the right to refuse to register a person as a User without stating the reasons or to exclude already registered Users from using the Platform without giving reasons. Any credit purchased and not yet consumed at the time of exclusion will be refunded by Edukoya to the excluded User. To make this payment, Edukoya shall use the same means of payment that the User originally used to purchase the credit.</p>
                            <p>3.4. Registration on the Platform is possible regardless of age. However, in order to use chargeable services (video lessons) via the Platform, Users must be at least 14 years old and Tutors at least 18 years old. If a User or Tutor has not yet reached the respective minimum age, the prior consent of the person’s legal representative is required.</p>
                            <p>3.5. Edukoya will provide the User with access to the Platform by transmitting access data to the mobile phone number provided by the User and creating a personal user account. In this regard, the User is obliged to provide Edukoya with an email address to which documents can be sent to the User. If this email address changes, the User must notify Edukoya immediately by providing the new email address.</p>
                        </div>
                    </div>
                </div>


                <div className="space-y-10">
                    <h3 className="font-bold">4. TUTOR CONTRACT FOR VIDEO TEACHING, PURCHASE OF CREDITS</h3>

                    <div>

                        <div className="pl-6">
                            <p>4.1. Tutor contracts are concluded between a User and a Tutor in accordance with the relevant provisions of these T&Cs.</p>
                            <p>4.2. Users can conclude a tutor contract with a Tutor by purchasing credits for video lessons via the Edukoyaa Platform or via an invoice provided by Edukoya. The processing of the credit payment to the Tutor is administered by Edukoya. Credits for video lessons can be purchased in the form of hourly packages which are pre purchased. Credit for hours that are still open can also be waived if the entire package is not used up within a certain period of time.</p>
                            <p>4.3. For the duration of the contract period, the user will be credited monthly (on the respective recharge date) with the number of sessions specified in the contract, and the corresponding sum will be debited automatically. The recharge date corresponds to the calendar day on which the contract was concluded (e.g. if a contract was concluded on 20.03.2021, the recharge date is the 20th day of each month of the contract period). Credited sessions can be freely used for booking in lessons until the next recharge date; they cannot be carried beyond the next recharge date. It is possible to pause the contract for one month at a time (starting with the recharge date). The duration of the pause is then added to the contract period, which is extended accordingly. Pausing is not possible for 6-month contract periods. In the case of an agreed contract period of 9 or 12 months, a pause of one month is possible. In the case of 18- or 24-month packages, pausing is possible on two occasions and in the case of a 36-month contract period, pausing is possible on three occasions.</p>
                            <p>4.4. If the User or their legal representative clicks the button “Purchase Now ” on the Platform or confirms via verbal or written communication to an Edukoya representative they make a binding offer to the Tutor to conclude a tutor contract as well as to purchase the credit balance required for this and thus an offer to conclude a contract for a fee. Edukoya sends a confirmation message to the User (on behalf of and in the name of the respective Tutor) to accept this offer.</p>
                            <p>4.5. Edukoya has merchant accounts with external payment service providers (e.g.  Stripe Paystack, Mono, Flutterwave, Kuda, Access Bank). The User transfers the payments to the merchant account of Edukoya with the respective payment service provider. The User thereby acquires credit for the use of video lessons with the respective Tutor via the Platform.</p>
                        </div>
                    </div>
                </div>



                <div className="space-y-10">
                    <div className="space-y-4">
                        <h3 className="font-bold">5. VIDEO LESSONS, AUTOMATIC EXTENSION</h3>
                        <div className="pl-6">
                            <p>5.1. Tutor contracts can be concluded (in particular) in the form of different packages of lessons to be consumed by the User within a certain period of time. The prices of the different packages may vary depending on the number of units and the period of time envisaged for the consumption of the units.</p>
                            <p>5.2. The respective current prices are announced on the Platform. Edukoya reserves the right to change prices at any time. Such changes only apply to units/packages purchased after such a change.</p>
                            <p>5.3. Payment of the credit for video lessons is made either (partially or fully) in advance and/or in monthly installments via the selected payment provider. If payment is made in the AppStore, the purchase will be charged after confirmation via the User’s iTunes account. </p>
                            <p>5.4. After the expiration of the term, the contract is extended by another package with the same conditions (units, period and price). If this is not desired by the user, the form to turn off auto-renewal can be filled in from the moment of conclusion of the contract until 7 days before the end of the contract period at the latest, thus preventing the subsequent extension. Otherwise, the tutor contract will be renewed for another package with the same conditions (units, period and price). For the payment, the agreement chosen in the original teacher contract applies (see also point 5.3). If the contract is not canceled, the current contract will be extended without a new right of revocation (Point 12.).</p>
                            <p>5.5. In addition to the individual video lessons, Tutors can also offer free live group courses as well as paid live group courses via the Platform. These are basically one-time purchases (and not packages).</p>
                        </div>
                    </div>

                </div>

                <div className="space-y-10">
                    <div>
                        <h3 className="font-bold">6. RIGHTS AND OBLIGATIONS OF USERS</h3>
                        <div className="pl-6">
                            <p>6.1. The User agrees that when using video lessons via the Platform, Edukoya may deduct the amount per unit agreed upon at the conclusion of the tutor contract from the User’s credit balance and credit the Tutor with the credit balance due to them for this unit. If credit expires because it is not used by the User within the time period provided for this purpose, it will also be deducted from the User’s account.</p>
                            <p>6.2. The User has the possibility to create a rescheduling request up to 60 minutes before a video lesson already agreed with a Tutor. Provided that this is accepted by the Tutor at least 30 minutes before the start of the unit, the User will be automatically rescheduled for the newly selected date free of charge. It should be noted that each Tutor is free to agree their own arrangements with a User for the latest possible rescheduling free of charge. The limit set by Edukoya is 30 minutes before the lesson was due to start. In the event of cancellation or rescheduling not in accordance with the above regulations, as well as in the event of a User’s failure to attend, Edukoya reserves the right to deduct one unit of video lessons from the User’s credit balance in the name and for the account of the Tutor.</p>
                            <p>6.3. The User undertakes to keep secret the access data provided by Edukoya. The User is responsible for all activities that emanate from their user account.</p>
                            <p>6.4. The User undertakes to notify Edukoya immediately if there is any suspicion of unauthorised use of their user account. If there is suspicion of unauthorised use of a user account or if a User violates applicable legal regulations or these T&Cs, Edukoya reserves the right to block the user account.</p>
                        </div>

                    </div>

                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold">7. INFORMATION ABOUT TUTORS</h3>
                        <div className="pl-6">
                            <p>7.1. During registration, Tutors indicate in which subject areas (e.g. school subjects) they would like to offer video lessons. If requests for video lessons in a relevant subject area are received from Users via the Platform, Edukoya may notify a Tutor; however, there is no obligation to do so. On the other hand, there is no obligation for the Tutor to respond to requests for video lessons.</p>
                            <p>7.2. A User has no right to be referred to a particular Tutor. The availability of Tutors is exclusively based on the times they themselves have indicated on the Platform.</p>
                            <p>7.3. There is no employment or freelance service relationship between a Tutor and Edukoya. Tutors are not subject to instructions from Edukoya and act independently when holding video lessons. They are also not authorized to represent Edukoya in legal transactions.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                <div>
                        <h3 className="font-bold">8. USE OF PLATFORM</h3>
                        <div className="pl-6">
                            <p>8.1. Edukoya shall make the Platform available for use 24⁄7. However, there is no procedure that can guarantee that software is error-free based on the current state of technology. Edukoya therefore does not guarantee that the software on which the Platform is based is completely free of errors and that there will be no platform downtime. Furthermore, the Platform may be temporarily unavailable due to maintenance work. Edukoya will announce scheduled maintenance work on the Platform in a timely manner. However, Edukoya is not obliged to update the Platform.</p>
                            <p>8.2. The Platform and the underlying software are copyrighted and may not be used or modified beyond the agreed rights of use without prior written consent from Edukoya. Likewise, the design of the Platform and in particular the content placed on the Platform (e.g. databases, photos, images, logos, videos, texts, graphics, etc.) are copyrighted or are subject to other laws for the protection of intellectual property and, unless otherwise indicated, Edukoya is entitled to these.</p>
                            <p>8.3. Edukoya can make the Platform interactive. This gives Users and Tutors the opportunity to review each other and write their own comments. Edukoya does not check whether the reviews are potentially unfounded or misleading. Users undertake to provide only truthful information in the reviews and to observe the legal regulations as well as these T&Cs. Users may only reproduce personal data with the express permission of the person concerned.</p>
                            <p>8.4. Edukoya reserves the right to delete reviews or other content in whole or in part, especially if they contain unlawful content.</p>
                            <p>8.5. The User expressly acknowledges and agrees that in particular, but not exclusively, the distribution of the following content via the Platform is prohibited:</p>
                            <ul className="pl-8">
                                <li>a. racist, pornographic, obscene, insulting, vulgar, violent, belittling and immoral content;</li>
                                <li>b. insulting, hurtful comments or threats against other Users, Tutors or third parties;</li>
                                <li>c. content which impairs or endangers children or young people in their development or upbringing or which violates human dignity or other legally protected interests;</li>
                                <li>d. content that could lead others to criminal or other immoral acts;</li>
                                <li>e. copied content to which the Tutor has no rights or which was provided by other registered persons;</li>
                                <li>f. content that poses a security risks, such as viruses;</li>
                                <li>g. Sending unsolicited advertising emails, junk emails, other unsolicited messages, so-called email bombs etc. to other Users, Tutors or third parties or setting links to third-party pages for distribution purposes.</li>
                            </ul>
                            <p>8.6. The User grants Edukoya the free, non-exclusive, perpetual and unrestricted right to use, edit, copy and distribute reviews, photos, graphics, texts, audio messages and videos posted on the Platform for provision on the Platform and for advertising the Platform.</p>
                            <p>8.7. The use of tools for data analysis of the Platform content is not permitted.</p>
                            <p>8.8. Edukoya is entitled at any time to restrict or completely discontinue the services offered via the Platform without stating the reasons. Significant changes or restrictions to the services offered will be announced on the Platform in good time.</p>
                            <p>8.9. A restriction or discontinuation of the services offered by Edukoya does not change these T&Cs. Edukoya can only change the T&Cs in accordance with the procedure stipulated in Section 1.4.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold">9. WARRANTY, WITHDRAWAL FROM TUTOR CONTRACT</h3>
                        <div className="pl-6">
                            <p>9.1. The relationship between the User and Edukoya is governed by the statutory warranty provisions.</p>
                            <p>9.2. If a Tutor has not or only partially fulfilled a tutor contract (e.g. individual units) or has fulfilled it badly (e.g. non-appearance or late arrival of Tutor, lack of professional competence, inappropriate treatment of User), the User can make a justified complaint to hello@edukoya.com. Edukoya can check the quality of a video lesson in such cases and try to mediate between the User and Tutor. The User and Tutor agree that Edukoya will have the final say on the existence and amount of any claim for a credit refund. If Edukoya considers the User’s complaint to be justified, the credit for a unit of video lessons shall be credited to the User’s credit account and any credit already transferred to the Tutor’s credit account for the unit shall be deducted from the Tutor’s credit balance.</p>
                            <p>9.3. In case of serious violations of a Tutor or in case of non-fulfilment of the tutor contract, an attempt shall be made to find a replacement Tutor for the User at the User’s request. If a replacement Tutor is found, the tutor contract is transferred to the replacement tutor and the unused credit shall be available for video lessons with the replacement tutor under the previously agreed conditions (open units/agreed time period). If no replacement tutor can be found or if the User does not wish to have a replacement tutor, they have the right to terminate the tutor contract pursuant to point 12.8.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    <div>
                        <h3 className="font-bold">10. LIABILITY</h3>
                        <div className="pl-6">
                            <p>10.1. Edukoya shall only be liable, regardless of the legal grounds, if damage was caused through Edukoya as a result of gross negligence or intent. Edukoya’s liability for slight negligence is excluded - except for personal injury.</p>
                            <p>10.2. Edukoya shall assume no liability for the fulfilment of contractual or other obligations of Tutors towards Users. In particular, Edukoya is not liable for the availability of Tutors or for any damage incurred by the User in connection with the performance of a tutor contract. With regard to the reimbursement of the credit used for a video lesson unit, a User must proceed in accordance with point 9.2. All claims over and above this must be made directly to the respective Tutor.</p>
                            <p>10.3. Edukoya shall not be liable for the content provided by Users or Tutors on the Platform or the content of websites to which Edukoya is linked. For illegal, incorrect or incomplete content and especially for damage resulting from the use or non-use of such information, the provider of the site to which Edukoya is linked is solely liable. The User is therefore solely responsible for critically reviewing and evaluating the content of other Users and Tutors.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold">11. EXEMPTION FROM LIABILITY ON THE PART OF THE USER</h3>
                        <div className="pl-6">
                            <p>11.1. The User undertakes to indemnify and hold Edukoya completely harmless if Edukoya is held liable by Tutors for claims arising from tutor contracts or by other Users, Tutors or third parties for civil or criminal, judicial or extrajudicial claims arising from the content posted by the User on the Platform. The indemnification also includes penalties, damages and all costs of legal defense.</p>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-10">
                    <div>
                        <h3 className="font-bold">12. RIGHT OF REVOCATION FOR USERS (TUTOR CONTRACT)</h3>
                        <div className="pl-6">
                            <p>12.1. In the event that a User concludes a tutor contract via the Platform with a Tutor who is an entrepreneur, the User shall have the following right of revocation against the Tutor.</p>
                            <p>12.2. The User has the right to terminate the contract without stating the reasons.</p>
                            <p>12.3. The revocation period is 14 days from the day the contract was concluded.</p>
                            <p>12.4. In order to exercise the right of revocation, the User must announce the revocation of the contract by means of a clear declaration. For this purpose, the User may email us at hello@edukoya.com. Edukoya will immediately send the User a confirmation of receipt of such revocation.</p>
                            <p>12.5. In order to comply with the revocation period, it is sufficient for the User to send notification of the exercise of the right of revocation before the end of the revocation period.</p>
                            <p>12.6. Consequences of revocation: If the User revokes the tutor contract, all payments made for the purchase of credits for video lessons must be repaid to the User immediately and at the latest within fourteen days of the day on which the notification of revocation of the contract was received. For this repayment, the same means of payment shall be used as the one used for the original purchase of credit.</p>
                            <p>12.7. Exception to the right of revocation: The right of revocation no longer apply as soon as the first paid tutor session takes place within the 14-day period. It does not apply regardless of whether the user has actually made use of the unit or has not appeared.</p>
                            <p>12.8. After expiry of the 14-day revocation period from the day the contract was concluded, the User can no longer terminate the tutor contract and cannot reclaim the amount paid for the purchase of credits. The right to an extraordinary revocation of the tutor contract remains unaffected. In the event of such extraordinary revocation, the User may reclaim the amount paid for the acquisition of (unused) credit.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold">13. CONTRACT DURATION/TERMINATION</h3>
                        <div className="pl-6">
                            <p>13.1. The contractual relationship between Edukoya and the respective User regarding the use of the Platform begins with the User successfully registering on the Platform. Both the User and Edukoya are entitled to terminate this contractual relationship (with regard to the use of the Platform) at any time with immediate effect, in which case the registration as a User must be deleted. This does not apply to the concluded ongoing tutor contract, the processing of which is in any case still to be facilitated by Edukoya. The tutor contract can only be terminated extraordinarily under official proof of the following reasons</p>
                            <ul className="pl-8">
                                <li>- in case of severe, persistent illness of the user, which makes the participation in the units unreasonable.</li>
                                <li>- In case of at least 3 months unemployment and the consequential loss of earnings (provided that employment was in place upon initial contract completion).</li>
                                <li>- in case of relocation abroad with such a large time difference that participation in the units is unreasonable.</li>
                                <li>- if no substitute teacher can be found within a reasonable time frame according to point 9.3.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    <div>
                        <h3 className="font-bold">14. APPLICABLE LAW, PLACE OF JURISDICTION</h3>
                        <div className="pl-6">
                            <p>14.1. These T&Cs and all further agreements with Edukoya are exclusively subject to Nigerian law, excluding the UN Convention on Contracts for the International Sale of Goods and the reference norms of international private law. This choice of law only applies insofar as it does not deprive a User of the protection afforded by the mandatory provisions of the law of the state in which they have their habitual residence.</p>
                            <p>14.2. The competent court in Nigeria is responsible for all legal actions brought against Edukoya by a User due to disputes arising from the contractual relationship. This does not affect the User’s right to sue at any other legal place of jurisdiction. For all legal actions brought against a User who has their residence, usual place of abode or place of employment in Nigeria for disputes arising from the contractual relationship, one of the courts in whose district the User has their residence, usual place of abode or place of employment shall be competent. For Users who were not resident in Nigeria at the time the contract was concluded, the statutory places of jurisdiction shall apply.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold">15. FINAL PROVISIONS</h3>
                        <div className="pl-6 pb-4">
                            <p>15.1. In case of contradictions between these T&Cs and deviating written agreements between a User and Edukoya, the provisions of the deviating agreements shall take precedence over these T&Cs.</p>
                            <p>15.2. Should individual provisions of these T&Cs be or become invalid, this shall not affect the remaining content of the T&Cs. The invalid provision shall be replaced by a provision that is legally valid and comes closest to the User’s and Edukoya’s economic purpose.</p>
                            <p>15.3. A “third party” within the meaning of these T&Cs is any natural or legal person who is different from the person registered as a User and from Edukoya, even if legal and/or economic relationships should exist with such a person.</p>
                            <p>15.4. Unless otherwise stipulated in these T&Cs, neither a User nor Edukoya may transfer or assign the provisions and rights from these T&Cs to third parties without the written consent of the other party.</p>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
};

export default Page;
