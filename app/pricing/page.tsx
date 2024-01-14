import React from 'react'
import Image from 'next/image'

const Pricing = () => {
    const pricingPlans = [
        {
            duration: '12 months',
            bonus: '67% off',
            total: '₦60,000',
            bonusPlan: true,
            monthlyTotal: '₦5,000/mo'
        },
        {
            duration: '6 months',
            bonus: '44% off',
            total: '₦49,980',
            bonusPlan: true,
            monthlyTotal: '₦8,330/mo'
        },
        {
            duration: '3 months',
            bonus: '35% off',
            total: '₦29,400',
            bonusPlan: true,
            monthlyTotal: '₦8,330/mo'
        },
        {
            duration: '1 months',
            bonus: '',
            total: '₦15,000',
            bonusPlan: false,
            monthlyTotal: '₦15,000/mo'
        }
    ]
    return (
        <main className='flex border bg-white justify-center items-center h-screen'>
            <section className='w-6/12 flex justify-center space-y-20 items-center flex-col'>
                <div>
                <Image  width={90} height={90} alt="edukoya logo" className='cursor-pointer' src='/images/colored-edukoya-logo.svg' />
                </div>

                <div>
                    <h1 className='text-3xl font-bold text-center'>Primary 1 Plus subscription</h1>
                    <p className='text-gray-500 text-center'>Select our plus plan for edukoya group classes </p>
                </div>

                <div>
                    <Image  width={300} height={300} alt="pricing" src='/images/pricing.svg' />
                </div>

                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-4xl font-bold'>Daily live classes</h1>
                    <p className='text-gray-500 text-center w-7/12'>Enroll in courses and make your own daily time table to keep track of your learning</p>
                </div>
            </section>
            <section className='w-6/12 pr-16 space-y-16  place-items-center'>
                        <section className='flex justify-center items-center'>
                        <div className='rounded-xl border-2 border-blue-700 flex items-center'>
                                <p className='text-center text-2xl font-bold p-6 px-10 cursor-pointer text-blue-700 rounded-l-xl'>ONE</p>
                                <p className='text-center text-2xl font-bold p-6 px-10 cursor-pointer bg-blue-700 text-white'>PLUS</p>
                            </div>
                        </section>
                <div className='flex justify-between items-center bg-blue-50 py-5 px-6 rounded-lg'>
                    <div className='flex items-center space-x-3'>
                        <Image height={20} width={20} alt="tablet" src='/images/tablet.svg'  />
                        <p className='text-2xl font-semibold'>Add a tablet</p>
                    </div>
                    <div>
                        <input style={{ height: "20px", width: "20px" }} type='checkbox' checked />
                    </div>
                </div>

                <div>
                    <div className='bg-red-400 rounded-r-full rounded-tl-full w-3/12 flex items-center space-x-3 p-3'>
                        <span className='inline-block h-6 w-6 bg-white rounded-full'></span>
                        <p className='font-bold text-white text-lg'>MOST POPULAR</p>
                    </div>
                    <section className='space-y-6'>
                        {
                            pricingPlans.map((plan, index) => {
                                return (
                                    <div key={index} className='flex justify-between shadow-md rounded-lg border border-gray-50'>
                                        <div className='flex justify-between items-center w-8/12 border-r-2 p-6'>
                                            <h1 className='font-medium text-4xl'>{plan.duration}</h1>
                                            <p className={plan.bonusPlan ? 'bg-yellow-200 text-yellow-600 px-3 py-2 rounded-full tet-xs' : 'hidden'}>{plan.bonus}</p>
                                            <div>
                                                <p className='font-medium text-gray-500 text-3xl'>{plan.total}</p>
                                                <small className='text-gray-600 font-semibold'>Total</small>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-center space-x-10 w-4/12 p-6'>
                                            <div>
                                                <p className='text-4xl font-medium'>{plan.monthlyTotal}</p>
                                                <small className='text-gray-600 font-semibold'>(Incl. of all taxes)</small>
                                            </div>
                                            <div>
                                                <label htmlFor={plan.duration} className="sr-only">Selected option</label>
                                                <input id={plan.duration} name={plan.duration} style={{ height: "20px", width: "20px" }} type='radio' />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </section>
                    <section className='flex justify-between items-center border border-gray-100 rounded-md shadow-sm p-10 mt-10'>
                        <div className='flex itesm-center space-x-3'>
                            <div className='pt-2'> 
                            <Image height={20} width={20} alt="tablet" src='/images/gift-box.svg'  />
                            </div>
                            <div> <input type='text' className='border outline-none border-gray-300 py-3 rounded-md px-3' placeholder='Have a referral code?' /></div>
                        </div>
                        <div>
                            <button className='bg-blue-600 text-white font-semibold py-4 px-6 rounded-md'>Proceed to pay</button>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    )
}

export default Pricing