import Image from 'next/image'

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full py-8 px-8 bg-white">

      <Image
        className='w-32 sm:w-40 md:w-50 lg:w-60'
        src='/china-logo.png'
        alt='Picture of china-logo'
        width={200}
        height={150}
      />

      <span
        className='bg-pink-500 text-white rounded-full text-sm sm:text-base md:text-lg py-2 px-4 font-semibold hover:bg-pink-600 transition-colors duration-300 cursor-pointer'
      >
        অর্ডার করুন
      </span>
    </div>
  )
}
