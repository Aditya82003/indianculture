import React from 'react'

const Footer = () => {
    return (
        <footer className='border-t-4 border-cyan-600'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row gap-4 justify-around md:items-start text-center text-2xl py-16'>
                    <h1 className='text-4xl md:text-5xl font-medium text-green-800 tracking-tighter'>Travel with us</h1>
                    <div className='flex flex-col gap-4'>
                        <h1 className='md:text-3xl font-medium tracking-tighter text-gray-500'>Dekho Apna Desh!</h1>
                        <div className='text-base md:text-lg font-medium md:text-start'>
                            <p>Indian Culture</p>
                            <p>Incredible India</p>
                            <p>Ministry of  Culture</p>
                            <p>Swacch Bharat</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='md:text-3xl font-medium tracking-tighter text-gray-500 '>Visit For More</h1>
                        <div className='text-base md:text-lg  font-medium md:text-start'>
                            <p>My Governemt</p>
                            <p>Digital India</p>
                            <p>Minstry of  Tourism</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='md:text-3xl font-medium tracking-tighter text-gray-500'>Contact us</h1>
                        <div className='text-base md:text-lg  font-medium md:text-start'>
                            <p>xyz</p>
                            <p>xyz</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center text-lg font-medium h-[40px] text-white  bg-orange-500 '>Developed By Aditya Kashyap</div>
        </footer>
    )
}

export default Footer