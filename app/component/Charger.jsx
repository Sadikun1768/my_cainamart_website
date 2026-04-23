import Image from "next/image"

export default function Charger() {
    return (
        <div className='bg-purple-950 height-full py-20 px-10 mx-auto'>
            <div className='text-center'>
                <h1 className='flex items-center justify-center text-white font-extrabold text-4xl text-center '>চার্জার বারবার ছিঁড়ে যায়? এখনই সমাধান নিন! ⚡</h1>
                <p className='text-white font-light mt-5'>Cable Protector ব্যবহার করলে আপনার মোবাইল চার্জার থাকবে সুরক্ষিত এবং অনেক দিন টিকবে।</p>
            </div>
            <div className='flex items-center justify-center mt-10 gap-3 flex-wrap'>
                <div className='relative bg-white rounded-lg p-5 flex flex-col items-center gap-3'>
                    <span className="absolute top-0 left-3 bg-lime-600 text-white text-sm px-2 py-1 mt-2 rounded">বেগুনি</span>
                    <Image src="/purple.jpeg" alt="charger" width={200} height={200} />
                    <div className="flex text-black text-sm gap-25">
                        <span className="text-gray-500 line-through">৳ ৩৫০</span>
                        <span className="text-red-700">৳ ২৯০</span>
                    </div>
                    <button type="button" className="text-white bg-pink-500 rounded py-2 px-2 cursor-pointer w-full">Speaker protector</button>
                </div>
                <div className='relative bg-white rounded-lg p-5 flex flex-col items-center gap-3'>
                    <span className="absolute top-0 left-3 bg-lime-600 text-white text-sm px-2 py-1 mt-2 rounded">লাইট পিংক</span>
                    <Image src="/purple.jpeg" alt="charger" width={200} height={200} />
                    <div className="flex text-black text-sm gap-25">
                        <span className="text-gray-500 line-through">৳ ৩৫০</span>
                        <span className="text-red-700">৳ ২৯০</span>
                    </div>
                    <button type="button" className="text-white bg-pink-500 rounded py-2 px-2 cursor-pointer w-full">Speaker protector</button>
                </div>
                <div className='relative bg-white rounded-lg p-5 flex flex-col items-center gap-3'>
                    <span className="absolute top-0 left-3 bg-lime-600 text-white text-sm px-2 py-1 mt-2 rounded">কালো</span>
                    <Image src="/purple.jpeg" alt="charger" width={200} height={200} />
                    <div className="flex text-black text-sm gap-25">
                        <span className="text-gray-500 line-through">৳ ৩৫০</span>
                        <span className="text-red-700">৳ ২৯০</span>
                    </div>
                    <button type="button" className="text-white bg-pink-500 rounded py-2 px-2 cursor-pointer w-full">Speaker protector</button>
                </div>
                <div className='relative bg-white rounded-lg p-5 flex flex-col items-center gap-3'>
                    <span className="absolute top-0 left-3 bg-lime-600 text-white text-sm px-2 py-1 mt-2 rounded">সাদা</span>
                    <Image src="/purple.jpeg" alt="charger" width={200} height={200} />
                    <div className="flex text-black text-sm gap-25">
                        <span className="text-gray-500 line-through">৳ ৩৫০</span>
                        <span className="text-red-700">৳ ২৯০</span>
                    </div>
                    <button type="button" className="text-white bg-pink-500 rounded py-2 px-2 cursor-pointer w-full">Speaker protector</button>
                </div>
            </div>
        </div>
    )
}
