import React from 'react'

export default function Order() {
  return (
    <div className='bg-white p-10  shadow-lg text-center'>
      <h1 className='text-black text-4xl font-semibold  mt-10'>অর্ডার করুন</h1>
      <div className='mx-auto mt-10 rounded-lg w-full md:w-1/2 bg-gray-100 p-6'>
        <form>
          <div className='flex flex-col text-center gap-4 mb-4'>
            <label htmlFor="" className='text-left font-semibold text-black'>
              সেট সংখ্যা নির্বাচন করুন
                <span className='text-red-500 text-lg'>*</span>
              </label>
      
            <select className='border border-gray-300 text-black p-2 w-full rounded-md 
            mx-auto'>
              <option  defaultValue= '' className='text-black'>-- সেট নির্বাচন করুন --</option>
              <option value='1' className='text-black'>-- সেট নির্বাচন করুন --</option>
              <option value='1' className='text-black'>১ সেট - ২৯০ টাকা</option>
              <option value='2' className='text-black'>২ সেট - ৪৯০ টাকা</option>
              <option value='3' className='text-black'>৩ সেট - ৭৯০ টাকা (Free Delivery)</option>
            </select>
          </div>
          <div className='flex flex-col text-center gap-4 mb-4'>
            <label htmlFor='' className='text-left font-semibold text-black'>
              ডেলিভারি চার্জ 
              <span className='text-red-500 text-lg'>*</span>
              </label>
              <select defaultValue='' className='border border-gray-300 text-black p-2 w-full rounded-md mx-auto'>
                <option value=''>-- এলাকা নির্বাচন করুন --</option>
                <option value=''>ঢাকা (৬০ টাকা)</option>
                <option value=''>ঢাকার বাইরে (৭০ টাকা)</option>
              </select>
          </div>
          <div className='flex flex-col text-center gap-4 mb-4'>
            <label htmlFor="" className='text-left font-semibold text-black'>
              আপনার নাম
              <span className='text-red-500 text-lg'>*</span>
              <input type="text" className='border border-gray-300 text-black p-2 w-full 
              rounded-md mx-auto' placeholder='আপনার সম্পূর্ণ নাম'/>
            </label>
          </div>
          <div className='flex flex-col text-center gap-4 mb-4'>
            <label htmlFor="" className='text-left font-semibold text-black'>
             মোবাইল নাম্বার 
              <span className='text-red-500 text-lg'>*</span>
              <input type="text" className='border border-gray-300 text-black p-2 w-full rounded-md mx-auto' placeholder='01XXXXXXXXX'/>
              <div className='text-gray-500 text-sm mt-1'>সঠিক মোবাইল নম্বর দিন, কল করে অর্ডার কনফার্ম করা হবে</div>
            </label>
          </div>
          <div className='flex flex-col text-center mb-4 gap-4'>
               <label htmlFor='' className='text-left font-semibold text-black'>
             সম্পূর্ণ ঠিকানা 
              <span className='text-red-500 text-lg'>*</span>
             </label>
             
             <textarea name="address" className='border border-gray-300 text-black rounded py-6 p-6 w-full mt-2' placeholder='বাসা নম্বর, এলাকা, থানা, জেলা'></textarea> 
          </div>
        <div className='outline-2 outline-offset-2 outline-dotted ... outline-yellow-400
        rounded bg-orange-100 p-4 mb-4'>
          <h2 className='flex flex-col text-left text-black font-semibold mb-4'>অর্ডার সারাংশ</h2>
          <div className='flex text-black justify-between border-b border-gray-400 mb-4
           pb-4'>
            <span>পণ্যের মূল্য:</span>
            <span className='font-semibold'>টাকা</span>
          </div>
          <div className='flex text-black justify-between  border-b border-gray-400 mb-4
           pb-4'>
            <span>ডেলিভারি চার্জ:</span>
            <span className='font-semibold'>ফ্রি</span>
          </div>
          <div className='flex text-black justify-between'>
            <span>সর্বমোট:</span>
            <span className='font-extrabold text-red-600 text-2xl'>টাকা</span>
          </div>
        </div>
        <button type='button' className='bg-green-600 text-white w-full py-4 px-4 rounded-md'>অর্ডার কনফার্ম করুন</button>
        </form>
      </div>
    </div>
  )
}
