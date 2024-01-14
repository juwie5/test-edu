'use client'

import React from "react"
import { useState } from "react";
import CheckSvgMark from "@/templates/layout/CheckSvgMark"

export const MarketingRequest = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhone] = useState('')
    const [subjectOfConcern, setSubject] = useState('')
    const [otherRemarks, setRemarks] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const request = {
            "name": name,
            "email": email,
            "phoneNumber": phoneNumber,
            "subjectOfConcern": subjectOfConcern,
            "otherRemarks": otherRemarks,
        }

        const res = await fetch('https://koya-api.staging.edukoya.com/feedbacks/callback-request', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "*/*"
            },
            body: JSON.stringify(request)
        })

        if (res.status === 201) {
            setShowSuccess(true);
            setTimeout(()=>{
                setShowSuccess(false)
                setIsLoading(false)
                setEmail('')
                setName('')
                setPhone('')
                setSubject('')
                setRemarks('')
            }, 5000)
        }
    }

    return (
        <>
            <section className="px-5 md:px-80 ">
                <div className="flex items-center justify-center text-center">
                    <h2 className='text-[#0D224A] text-[32px] md:text-[58px] font-bold leading-normal md:leading-[82px] '>Request a call back from <span className="bg-gradient-to-r from-[#145AF7] to-[#00BE7E] inline-block text-transparent bg-clip-text">Edukoya</span></h2>
                </div>
                <div className="py-20 mb-40">
                    {showSuccess ?
                        <div className="flex flex-col items-center justify-center">
                            <h2>Your request has been sent and a memeber of the team would reach out to you shortly</h2>
                            <div>
                            <CheckSvgMark/>
                            </div>
                        </div> :
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col md:flex-row gap-12 w-full pb-9">
                                <div className="flex flex-col gap-3 grow">
                                    <label className="text-xl font-semibold text-[#0D224A] pb-4" htmlFor="name">Name</label>
                                    <input
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text" placeholder="Enter your name" className="only-top border-gradient border-gradient-green focus:outline-none " />
                                </div>
                                <div className="flex flex-col gap-3 grow">
                                    <label className="text-xl font-semibold text-[#0D224A] pb-4" htmlFor="email">Email Address</label>
                                    <input
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" placeholder="Enter your email address" className="only-top border-gradient border-gradient-green focus:outline-none " />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-12 w-full pb-9">
                                <div className="flex flex-col gap-3 grow">
                                    <label className="text-xl font-semibold text-[#0D224A] pb-4" htmlFor="phone">Phone Number</label>
                                    <input
                                        required
                                        maxlength="11"
                                        value={phoneNumber}
                                        onChange={(e) => setPhone(e.target.value)}
                                        type="text" placeholder="08081234567" className="only-top border-gradient border-gradient-green focus:outline-none " />
                                </div>
                                <div className="flex flex-col gap-3 grow">
                                    <label className="text-xl font-semibold text-[#0D224A] pb-4" htmlFor="subject">Subject of concern</label>
                                    <input
                                        required
                                        value={subjectOfConcern}
                                        onChange={(e) => setSubject(e.target.value)}
                                        type="text" placeholder="Enter the subject in question" className="only-top border-gradient border-gradient-green focus:outline-none " />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 grow">
                                <label className="text-xl font-semibold text-[#0D224A] pb-4" htmlFor="email">Other Remarks</label>
                                <input
                                    required
                                    value={otherRemarks}
                                    onChange={(e) => setRemarks(e.target.value)}
                                    type="text" placeholder="Input other message here" className="only-top border-gradient border-gradient-green focus:outline-none " />
                            </div>
                            <div className="md:float-right my-10">
                                <button className="bg-[#112BF4] p-5 rounded-xl">
                                    {isLoading && <span className="text-white ">Sending...</span>}
                                    {!isLoading &&
                                        <div className="flex items-center gap-4">
                                            <p className="text-white">Send Request</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                <path d="M2.29544 11.9655L9.96849 1.71247" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M1.10173 3.12736L10.1358 1.00001" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M10.6138 1.00004L11.5465 10.2342" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    }
                                </button>
                            </div>
                        </form>}
                </div>
            </section>
        </>

    )
}