import React from 'react'
import ceng from '../assets/ceng.jpg'
import manc from '../assets/manc.webp'
export default function HomePage() {
  return (
    <div className='bg-gray-50'>

      <div className=' bg-linear-to-br from-sky-600 to-blue-800 h-[50vh] w-screen text-white py-5' >
        <div className='grid grid-cols-3' >
          <div className='col-span-1 flex justify-start' >

          </div>
          <div className='col-span-1 flex justify-between px-24' >
            <a href='/' className='text-xl'>درباره ما</a>
            <a href='/' className='text-xl'>خانه</a>
            <a href='/pricing' className='text-xl'>لیست تعرفه ها</a>

          </div>
          <div className='col-span-1 flex justify-end ' >
            <p className='font-bold text-4xl mx-15 my-2' >همتا</p>
          </div>
        </div>
        {/* <div className='flex justify-center items-center mt-26 ' >
          <p className='font-black text-5xl' >مدرسه خود را به ما بسپارید</p>
        </div>
        <div className='flex justify-center items-center mt-8 ' >
          <p className='text-2xl text-cyan-200 mx-28 ' >...انجام تمامی خدمات کامپیوتری و سخت افزاری در هر مدرسه از جمله : بستن سیستم , نصب پروژکتور , نصب ویندوز و نرم افزار ها و</p>
        </div> */}
        <div className='flex justify-center' dir='rtl' >
          <div class="flex items-center gap-4">
            <img class="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-right rounded-4xl border-4 border-blue-600 max-h-96 " src={manc} />
            <div class="font-medium ">
              <p className='font-black text-5xl' >مدرسه خود را به ما بسپارید</p>
              
                <div className='w-[32vw]  flex justify-start  ' >
                  <p className='text-xl mt-10 text-cyan-100  ' >انجام تمامی خدمات کامپیوتری و سخت افزاری در هر مدرسه از جمله : جمع کردن کامپیوتر , نصب پروژکتور , نصب ویندوز و نرم افزار ها و...</p>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center' >
        <p className='text-blue-800 text-3xl my-10 font-bold' >:تجربه ما با </p>
      </div>
      <div className='grid grid-cols-3 px-20 ' >
        <div className='bg-white shadow-2xl drop-shadow-2xl py-10 text-black h-68 mx-10 -mt-48 rounded-4xl'>
          <div className='flex justify-center ' >
            <p className='text-3xl' >مدارس</p>
          </div>
          <div className='flex justify-center content-center mt-18 ' >
            <p className='text-5xl text-blue-800 font-black' >+120</p>
          </div>
        </div>
        <div className='bg-white shadow-2xl drop-shadow-2xl py-10 text-black h-68 mx-10 rounded-4xl'>
          <div className='flex justify-center ' >
            <p className='text-3xl' >ویندوز های نصب شده</p>
          </div>
          <div className='flex justify-center content-center mt-18 ' >
            <p className='text-5xl text-blue-800 font-black' >1700</p>
          </div>
        </div>
        <div className='bg-white shadow-2xl drop-shadow-2xl py-10 text-black h-68 -mt-48 mx-10 rounded-4xl'>
          <div className='flex justify-center ' >
            <p className='text-3xl' >کامپیوتر های ارتقا یافته</p>
          </div>
          <div className='flex justify-center content-center mt-18 ' >
            <p className='text-5xl text-blue-800 font-black' >+120</p>
          </div>
        </div>
      </div>
      <div className='mb-26 mt-26 flex justify-center' dir='rtl' >
        <div className='h-fit w-fit rounded-4xl border-4 border-blue-800' >
          <img src={ceng} className='rounded-4xl' />
        </div>
        <div className='w-[35vw] px-10 py-10 text-2xl' >
          <div className='flex justify-start' >
            <p className='font-black text-blue-800 text-4xl' >چرا همتا ؟!</p>
          </div>
          <p className='mt-10' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
          </p>
        </div>
      </div>
      <div className='flex justify-center font-black text-blue-800 text-3xl ' >
        <p>لیست تعرفه ها </p>
      </div>
      <div dir='rtl' className='flex justify-center mt-10' >
        <div className=' w-[75vw] grid grid-cols-2  mb-40 mt-20 gap-2.5 ' >
          <div className='p-10 mx-10 rounded-2xl  bg-linear-to-r from-rose-100 to-rose-300 shadow-lg  transition-all duration-75 hover:shadow-2xl hover:cursor-pointer  ' >
            <div className='flex justify-center text-3xl' > تهیه کامپیوتر</div>
            <div className='flex justify-center p-10' >
              <p className='text-xl' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
          <div className='p-10 mx-10 shadow-lg  bg-linear-to-br from-sky-100 to-sky-300 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:cursor-pointer ' >
            <div className='flex justify-center text-3xl' > نصب ویندوز</div>
            <div className='flex justify-center p-10' >
              <p className='text-xl' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
          <div className='p-10 mx-10 shadow-lg  bg-linear-to-l from-emerald-100 to-emerald-200 rounded-2xl   mt-10 transition-all duration-300 hover:shadow-2xl hover:cursor-pointer' >
            <div className='flex justify-center text-3xl' > نصب نرم افزار</div>
            <div className='flex justify-center p-10' >
              <p className='text-xl' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
          <div className='p-10 mx-10 shadow-lg  bg-linear-to-r from-indigo-100 via-purple-200 to-pink-300 rounded-2xl   mt-10 transition-all duration-300 hover:shadow-2xl hover:cursor-pointer' >
            <div className='flex justify-center text-3xl' >نصب پروژکتور و تخته هوشمند</div>
            <div className='flex justify-center p-10' >
              <p className='text-xl' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer class=" rounded-lg shadow-sm bg-linear-to-br from-sky-600 to-blue-800 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">همتا</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-white">
              <li>
                <a href="/" class="hover:underline me-4 md:me-6">خانه</a>
              </li>
              <li>
                <a href="/pricing" class="hover:underline me-4 md:me-6">لیست قیمت ها</a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">درباره ما</a>
              </li>
            </ul>
          </div>
          <hr class="my-6 sm:mx-auto border-white lg:my-8" />
          <span class="text-sm flex gap-1.5  sm:text-center text-white">© 2025 <p class="hover:underline">hamta</p>. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}
