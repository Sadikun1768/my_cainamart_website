import Image from 'next/image'

export default function Problem() {
  return (
    <div className='bg-white py-10 px-10 mx-auto'>
      <h1 className='text-center text-black font-extrabold text-6xl mt-5'>
        আপনার কি এই সমস্যাগুলো হয়?
      </h1>
      <div className='mt-6 flex items-center justify-center gap-5 flex-wrap'>
        <div className='bg-gray-100 w-fit border border-gray-300 rounded-lg py-6 px-3 mt-5'>
           <Image
              className='align-middle mx-auto mb-4'
              src='/protection.png'
              alt='protection'
              width={40}
              height={30}
            />
          <h1 className='text-black text-center text-2xl'>কেবল সুরক্ষা নেই</h1>
          <p className='text-gray-600 text-center'>চার্জার কেবল একটু ব্যবহার করলেই ছিঁড়ে যায়</p>
        </div>
        <div className='bg-gray-100 text-center w-fit border border-gray-300 rounded-lg py-6 px-3 mt-5'>
           <Image
              className='align-middle mx-auto mb-4'
              src="/alarm clock.png"
              alt='alarm clock'
              width={40}
              height={30}
            />
          <h1 className='text-black text-center text-2xl'>দীর্ঘস্থায়ী নয়</h1>
          <p className='text-gray-600 text-center'>নতুন চার্জার বারবার কিনতে হয়</p>
        </div>
        <div className='bg-gray-100 text-center w-fit border border-gray-300 rounded-lg py-6 px-3 mt-5'>
           <Image
              className='align-middle mx-auto mb-4'
              src="/painting.png"
              alt="painting"
              width={40}
              height={30}
            />
          <h1 className='text-black text-center text-2xl'>ডিজাইন নষ্ট হয়ে যায়</h1>
          <p className='text-gray-600 text-center'>কেবল বাঁকলে ভেতরের তার নষ্ট হয়ে যায়</p>
        </div>
        <div className='bg-gray-100 text-center w-fit border border-gray-300 rounded-lg py-6 px-3 mt-5'>
          <Image
              className='align-middle mx-auto mb-4'
              src="/right.png"
              alt="right"
              width={40}
              height={30}
            />
          <h1 className='text-black text-center text-2xl'>সহজ ইনস্টলেশন</h1>
          <p className='text-gray-600 text-center'>এই সমস্যার সহজ সমাধান Cable Protector</p>
        </div>
      </div>

      <div className='mt-15'>
        <h1 className='text-center text-black font-extrabold text-6xl mt-5'>কেন ব্যবহার করবেন Cable Protector?</h1>
        <div className='mt-6 flex text-center items-center justify-center gap-5 flex-wrap'>
          <div className='bg-gray-100 text-center w-fit border border-gray-300 rounded-lg py-6 px-3 mt-5'>
            <Image
              className='align-middle mx-auto mb-4'
              src='/protection.png'
              alt='protection'
              width={40}
              height={30}
            />
            <h1 className='text-black text-center text-2xl'>কেবল সুরক্ষা</h1>
            <p className='text-gray-600 text-center'>চার্জার কেবল ছিঁড়ে যাওয়া থেকে রক্ষা করে</p>
          </div>
          <div className='bg-gray-100 text-center w-fit border border-gray-300 rounded-lg py-6 px-3 mt-5'>
             <Image
              className='align-middle mx-auto mb-4'
              src="/alarm clock.png"
              alt="alarm clock"
              width={40}
              height={30}
            />
            <h1 className='text-black text-center text-2xl'>দীর্ঘস্থায়ী</h1>
            <p className='text-gray-600 text-center'>কেবলকে করে আরো শক্ত ও টেকসই</p>
          </div>
          <div className='bg-gray-100 text-center w-fit border border-gray-300 rounded-lg py-6 px-3 mt-5'>
            <Image
              className='align-middle mx-auto mb-4'
              src="/painting.png"
              alt="painting"
              width={40}
              height={30}
            />
            <h1 className='text-black text-center text-2xl'>আকর্ষণীয় ডিজাইন</h1>
            <p className='text-gray-600 text-center'>সুন্দর কালারের জন্য কেবল দেখতেও ভালো লাগে</p>
          </div>
          <div className='bg-gray-100 text-center w-fit border border-gray-300 rounded-lg py-6 px-3 mt-5'>
            <Image
              className='align-middle mx-auto mb-4'
              src="/right.png"
              alt="right"
              width={40}
              height={30}
            />
            <h1 className='text-black text-center text-2xl'>সহজ ইনস্টলেশন</h1>
            <p className='text-gray-600 text-center'>সব ধরনের মোবাইল চার্জারের সাথে ব্যবহার করা যায়</p>
          </div>
        </div>
      </div>
    </div>
  )
}
