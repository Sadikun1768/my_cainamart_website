// import Header from "./component/Header";
// import Footer from "./component/Footer";
// import Charger from "./component/Charger";
// import Spacial from "./component/Spacial";
// import Problem from "./component/Problem";
// import Swip from "./component/Swip";
// import Order from "./component/Order";


// export default function Home() {
//   return (
//     <div className="">
//       <main className="">

//       <Header />
//       <Charger />
//       <Spacial />
//       <Problem />
//       <Swip />
//       <Order />
//       <Footer />

//       </main>
//     </div>
//   );
// }

"use client";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function Home() {


  return (
    <div>
      {/* Header Section */}
      <section className="">
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
      </section>
      {/*End Header Section */}

      {/* Charger Section */}
      <section className=''>
        <div className='bg-purple-950 py-20 px-10 mx-auto'>
          <div className='text-center'>
            <h1 className='flex items-center justify-center text-white font-extrabold text-4xl text-center '>
              চার্জার বারবার ছিঁড়ে যায়? এখনই সমাধান নিন! ⚡</h1>
            <p className='text-white font-light mt-5'>
              Cable Protector ব্যবহার করলে আপনার মোবাইল চার্জার থাকবে সুরক্ষিত এবং অনেক দিন টিকবে।
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10 w-fit mx-auto'>
            <div className='relative bg-white rounded-md p-2 flex flex-col items-center gap-3'>
              <span className='absolute top-0 left-3 bg-lime-600 text-white text-sm px-2 py-1 mt-2 rounded'>বেগুনি</span>
              <Image className='' src="/purple.jpeg" alt="charger" width={300} height={200} />
              <div className="flex text-black text-sm gap-25">
                <span className="text-gray-500 line-through">৳ ৩৫০</span>
                <span className="text-red-700">৳ ২৯০</span>
              </div>
              <button type="button" className='text-white bg-pink-500 rounded py-2 px-2 cursor-pointer w-full'>Speaker protector</button>
            </div>
            <div className='relative bg-white rounded-md p-2 flex flex-col items-center gap-3'>
              <span className='absolute top-0 left-3 bg-lime-600 text-white text-sm px-2 py-1 mt-2 rounded'>লাইট পিংক</span>
              <Image src="/light-pink.jpeg" alt="charger" width={300} height={200} />
              <div className="flex text-black text-sm gap-25">
                <span className="text-gray-500 line-through">৳ ৩৫০</span>
                <span className="text-red-700">৳ ২৯০</span>
              </div>
              <button type="button" className="text-white bg-pink-500 rounded py-2 px-2 cursor-pointer w-full">Speaker protector</button>
            </div>
            <div className='relative bg-white rounded-md p-2 flex flex-col items-center gap-3'>
              <span className='absolute top-0 left-3 bg-lime-600 text-white text-sm px-2 py-1 mt-2 rounded'>কালো</span>
              <Image src="/black.jpeg" alt="charger" width={300} height={200} />
              <div className="flex text-black text-sm gap-25">
                <span className="text-gray-500 line-through">৳ ৩৫০</span>
                <span className="text-red-700">৳ ২৯০</span>
              </div>
              <button type="button" className="text-white bg-pink-500 rounded py-2 px-2 cursor-pointer w-full">Speaker protector</button>
            </div>
            <div className='relative bg-white rounded-md p-2 flex flex-col items-center gap-3'>
              <span className='absolute top-0 left-3 bg-lime-600 text-white text-sm px-2 py-1 mt-2 rounded'>সাদা</span>
              <Image src="/white.jpeg" alt="charger" width={300} height={200} />
              <div className="flex text-black text-sm gap-25">
                <span className="text-gray-500 line-through">৳ ৩৫০</span>
                <span className="text-red-700">৳ ২৯০</span>
              </div>
              <button type="button" className="text-white bg-pink-500 rounded py-2 px-2 cursor-pointer w-full">Speaker protector</button>
            </div>

          </div>
        </div>
      </section>
      {/* End Charger Section */}


      {/* End Charger Section */}
      <section>
        <div className=' text-center bg-white/90 height-full py-20 px-5 mx-auto'>
          <h1 className='text-black font-extrabold text-3xl w-full'>
            স্পেশাল অফার চলছে</h1>
          <p className='text-gray-600 text-lg md:text-xl mt-5'>
            ৪টি Cable Protector পছন্দমতো কালার সারা বাংলাদেশে হোম ডেলিভারি</p>
          <div className='bg-white w-fit mx-auto mt-10 p-5 rounded-lg shadow-lg'>
            <div className='text-pink-600 font-bold text-xl'>🎁 বিশেষ অফার</div>
            <div className='flex justify-between text-black border border-gray-300 rounded p-3 mt-3'>
              <span>১ সেট</span>
              <span className='text-red-700 font-bold'>২৯০ টাকা</span>
            </div>
            <div className='flex justify-between text-black border border-gray-300 rounded p-3 mt-3'>
              <span>২ সেট</span>
              <span className='text-red-700 font-bold'>৪৯০ টাকা</span>
            </div>
            <div
              className='flex justify-between items-center bg-pink-200 text-black border border-red-500 rounded p-3 mt-3'>
              <span>৩ সেট</span>
              <div className='flex items-center gap-1'>
                <span className='bg-green-500 sm:w-10 md:w-20 lg:w-30 rounded-full text-sm'>Free Delivery</span>
                <span className='text-red-700 font-bold'>৭৯০ টাকা</span>
              </div>

            </div>

            <p className='bg-sky-200 text-gray-700 text-center rounded text-sm py-2 px-2 mt-4'>
              🚚 ক্যাশ অন ডেলিভারি<br />

              অর্ডার কনফার্ম হলে ডেলিভারি চার্জের ঝামেলা নেই।
            </p>
          </div>

          <button type="button" className="text-white bg-pink-400 shadow-md hover:bg-pink-500 rounded-full py-4 px-4 cursor-pointer mt-5">এখনই অর্ডার করুন →</button>

        </div>
      </section>
      {/* End Charger Section */}

      {/* End Charger Section */}
      <section>
        <div className='bg-white py-10 px-10 mx-auto'>
          {/* <h1 className='text-center text-black font-semibold sm:text-3xl md:text-4xl mt-5'> */}
          <h1 className='text-center text-black font-semibold text-3xl md:text-4xl mt-5'>
            আপনার কি এই সমস্যাগুলো হয়?
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 items-center justify-center gap-5'>
            <div className='bg-gray-100 text-center w-full border border-gray-300 shadow-lg rounded-lg py-6 px-3 mt-5'>
              <Image
                className='align-middle mx-auto mb-4'
                src='/protection.png'
                alt='protection'
                width={40}
                height={30}
              />
              <h1 className='text-black text-center text-2xl'>কেবল সুরক্ষা নেই</h1>
              <p className='text-gray-600 text-center text-sm'>চার্জার কেবল একটু ব্যবহার করলেই ছিঁড়ে যায়</p>
            </div>
            <div className='bg-gray-100 text-center w-full border border-gray-300 shadow-lg rounded-lg py-6 px-3 mt-5'>
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
            <div className='bg-gray-100 text-center w-full border border-gray-300 shadow-lg rounded-lg py-6 px-3 mt-5'>
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
            <div className='bg-gray-100 text-center w-full border border-gray-300 shadow-lg rounded-lg py-6 px-3 mt-5'>
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
            <h1 className='text-center text-black font-extrabold text-3xl md:text-4xl mt-5'>কেন ব্যবহার করবেন Cable Protector?</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 text-center items-center justify-center gap-5'>

              <div className='bg-gray-100 text-center w-full border border-gray-300 shadow-lg rounded-lg py-6 px-3 mt-5'>
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
              <div className='bg-gray-100 text-center w-full border border-gray-300 shadow-lg rounded-lg py-6 px-3 mt-5'>
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
              <div className='bg-gray-100 text-center w-full border border-gray-300 shadow-lg rounded-lg py-6 px-3 mt-5'>
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
              <div className='bg-gray-100 text-center w-full border border-gray-300 shadow-lg rounded-lg py-6 px-3 mt-5'>
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
      </section>
      {/* End Charger Section */}

      {/* Cable Swiper Section */}
      <section>
        <div className='bg-gradient-to-r from-blue-500 to-purple-600 height-full py-20 px-10 '>
          <h1 className='text-white font-extrabold text-4xl text-center mb-10'>ক্যাবল নষ্ট হওয়ার ঝামেলা</h1>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            navigation={true}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            className='w-[100%]'
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            breakpoints={{

              0: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}

          >
            <SwiperSlide>
              <Image
                src="/slide4.jpeg"
                alt="Picture of the author"
                width={300}
                height={300}
                layout='responsive'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/slide3.jpeg"
                alt="Picture of the author"
                width={300}
                height={300}
                layout='responsive'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/slide5.jpeg"
                alt="Picture of the author"
                width={300}
                height={300}
                layout='responsive'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/slide4.jpeg"
                alt="Picture of the author"
                width={300}
                height={300}
                layout='responsive'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/slide5.jpeg"
                alt="Picture of the author"
                width={300}
                height={300}
                layout='responsive'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* End Cable Swiper Section */}


      {/* Order Section */}
      <section>
        <div className='bg-white p-10 shadow-lg text-center'>
          <h1 className='text-black text-4xl font-semibold  mt-10'>অর্ডার করুন</h1>
          <div className='mx-auto mt-10 rounded-lg shadow-lg w-full md:w-1/2 bg-gray-100 p-6'>
            <form>
              <div className='flex flex-col text-center gap-4 mb-4'>
                <label htmlFor="" className='text-left font-semibold text-black'>
                  সেট সংখ্যা নির্বাচন করুন
                  <span className='text-red-500 text-lg'>*</span>
                </label>

                <select className='border border-gray-300 text-black p-2 w-full rounded-md 
            mx-auto'>
                  <option defaultValue='' className='text-black'>-- সেট নির্বাচন করুন --</option>
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
              rounded-md mx-auto' placeholder='আপনার সম্পূর্ণ নাম' />
                </label>
              </div>
              <div className='flex flex-col text-center gap-4 mb-4'>
                <label htmlFor="" className='text-left font-semibold text-black'>
                  মোবাইল নাম্বার
                  <span className='text-red-500 text-lg'>*</span>
                  <input type="text" className='border border-gray-300 text-black p-2 w-full rounded-md mx-auto' placeholder='01XXXXXXXXX' />
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
      </section>

      {/* End Order Section */}

      {/* Footer Section */}
      <section>
        <div className='bg-cyan-950 text-white text-center py-6'>

          <h4 className='text-white text-3xl font-extrabold'>📍 Cable Protector</h4>
          <p className='text-white/70 mt-4'>বিশ্বাসের সাথে সেরা মানের পণ্য</p>
          <p className='text-white/70 mt-4'>© 2026 Cable Protector. All rights reserved.</p>


        </div>

      </section>

      {/* End Footer Section */}

    </div>
  );
}
