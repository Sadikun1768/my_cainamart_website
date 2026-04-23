import Logo from "./Logo";

export default function Header() {
  return (
    <div className="flex justify-between w-full py-6 px-25 bg-white">
      <Logo />
        <span className='bg-pink-500 text-white rounded-full sm:text-right text-sm py-4 px-4'>অর্ডার করুন</span>
    </div>
  )
}
