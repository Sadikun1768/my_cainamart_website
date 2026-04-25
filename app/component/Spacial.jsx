import React from 'react'

export default function Spacial() {
  return (
    <div className=' text-center bg-white/90 height-full py-20 px-10 mx-auto'>
        <h1 className='text-black font-extrabold text-6xl'>স্পেশাল অফার চলছে</h1>
        <p className='text-gray-600 text-2xl mt-5'>৪টি Cable Protector পছন্দমতো কালার সারা বাংলাদেশে হোম ডেলিভারি</p>
        <div className='bg-white w-fit mx-auto mt-10 p-5 rounded-md'>
            <div className='text-pink-600 font-bold'>🎁 বিশেষ অফার</div>
            <div className='flex justify-between text-black border-2 border-gray-300 rounded-full p-3 mt-3'>
                <span>১ সেট</span>
                <span className='text-red-700 font-bold'>২৯০ টাকা</span>
            </div>
            <div className='flex justify-between text-black border-2 border-gray-300 rounded-full p-3 mt-3'>
                <span>২ সেট</span>
                <span className='text-red-700 font-bold'>৪৯০ টাকা</span>
            </div>
            <div className='flex justify-between text-black border-2 border-red-500 rounded-full p-3 mt-3'>
                <span>৩ সেট</span>
                <div className='flex items-center gap-2'>
                 <span className='bg-green-500 py-2 px-4 rounded-full'>Free Delivery</span>
                <span className='text-red-700 font-bold'>৭৯০ টাকা</span>
                </div>
            
            </div>
            
            <p className='bg-sky-200 text-gray-700 text-center rounded-full py-4 px-6 mt-4'>
          🚚 ক্যাশ অন ডেলিভারি<br/>
          
          অর্ডার কনফার্ম হলে ডেলিভারি চার্জের ঝামেলা নেই।
        </p>
        </div>

        <button type="button" className="text-white bg-pink-500 rounded-full py-5 px-4 cursor-pointer mt-5">এখনই অর্ডার করুন →</button>

    </div>
  )
}
