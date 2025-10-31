import React from "react"
import { FaCheck } from 'react-icons/fa'
import nasr from '../assets/nasr.png'
import amozesh from '../assets/amozesh.png'
import mehraeen from '../assets/mehraeen.png'
import salam from '../assets/salam.png'
import sampad from '../assets/sampad.png'

const tiers = [
    {
        name: 'یک کمک ریز',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '50,000,000T',
        description: "یک برنامه مناسب برای رفع مشکل های کوچک",
        features: ['نصب نرم افزار', 'تعویض ویندوز', 'نصب پروژکتور', 'پشتیبانی تا 3 ماه'],
        featured: false,
    },
    {
        name: 'از اول بساز',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '120,000,000T',
        description: '!وقتی یک تغییر اساسی می خوای ',
        features: [
            'نصب نرم افزار',
            'تعوضی ویندوز',
            'نصب پروژکتور',
            'خرید و تامین کامپیوتر',
            'نصب تخته وایت برد و هوشمند',
            'تا 1 سال پشتیبانی رایگان ',
        ],
        featured: true,
    },
    {
        name: 'پشتیبانی',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '2,000,000T',
        description: "یک برنامه مناسب برای رفع مشکل های کوچک",
        features: ['نصب نرم افزار', 'تعویض ویندوز', 'نصب پروژکتور', 'پشتیبانی تا 3 ماه'],
        featured: false,
        mont: true
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
    return (
        <div className="relative isolate bg-gray-100  py-5  lg:px-8">
            <div className='grid grid-cols-3 mb-10' >
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
            <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
                />
            </div>
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-blue-400">لیست قیمت ها</h2>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-balance  sm:text-6xl">
                    بهترین پلن رو برای خودت انتخاب کن
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-900 sm:text-xl/8">
                پلنی را انتخاب کن که با توجه به نیاز های خودت قیمت مناسبی داشته باشه . اگر هم پلن ترکیبی خواستی با شماره <p className="text-blue-500" >09123456789</p> تماس بگیر
            </p>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-[70vw] lg:grid-cols-3">
                {tiers.map((tier, tierIdx) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.featured ? 'relative bg-white' : 'bg-white/2.5 sm:mx-8   ring-4 ring-gray-300 lg:mx-0',
                            tier.featured
                                ? ''
                                : tierIdx === 0
                                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                                    : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                            'rounded-3xl p-8  sm:p-10',
                        )}
                    >
                        <h3
                            id={tier.id}
                            className={classNames(tier.featured ? 'text-blue-400' : 'text-blue-400', 'text-base/7 font-semibold')}
                        >
                            {tier.name}
                        </h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span
                                className={classNames(
                                    tier.featured ? '' : '',
                                    'text-5xl font-semibold tracking-tight flex items-center',
                                )}
                            >
                                {tier.priceMonthly}{tier.mont == true ? <p className="text-lg text-blue-400" >/ ماه</p> : ""}
                            </span>
                            <span className={classNames(tier.featured ? 'text-gray-900' : 'text-gray-900', 'text-base')}></span>
                        </p>
                        <p className={classNames(tier.featured ? 'text-gray-800' : 'text-gray-800', 'mt-6 text-base/7')}>
                            {tier.description}
                        </p>
                        <ul
                            role="list"
                            className={classNames(
                                tier.featured ? 'text-gray-800' : 'text-gray-800',
                                'mt-8 space-y-3 text-sm/6 sm:mt-10',
                            )}
                        >
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <FaCheck
                                        aria-hidden="true"
                                        className={classNames(tier.featured ? 'text-blue-400' : 'text-blue-400', 'h-6 w-5 flex-none')}
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={tier.href}
                            aria-describedby={tier.id}
                            className={classNames(
                                tier.featured
                                    ? 'bg-blue-500 text-white  hover:bg-blue-400 focus-visible:outline-blue-500'
                                    : 'bg-white/10  inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-white/75',
                                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                            )}
                        >
                            شروع کن
                        </a>
                    </div>
                ))}
            </div>
            <div class="bg-gray-100 py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 class="text-center text-3xl text-blue-500 font-bold ">: از جمله مشتریان ما  </h2>
                    <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img src={mehraeen} alt="Transistor" class="col-span-2 max-h-24 w-full object-contain lg:col-span-1" />

                        <img src={salam} alt="Reform" class="col-span-2 max-h-24 w-full object-contain lg:col-span-1" />

                        <img src={sampad} alt="Tuple" class="col-span-2 max-h-24 w-full object-contain lg:col-span-1" />

                        <img src={nasr} alt="SavvyCal" class="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1" />

                        <img src={amozesh} alt="Statamic" class="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1" />
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