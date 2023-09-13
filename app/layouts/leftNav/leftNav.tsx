import { GlobeIcon, LogoIcon } from '@/app/components/icons';
import { Home, Library, Search, LikedSongs } from '@/app/components/leftNavItems/leftNavItems';
import { LEFT_NAV_FOOTERLINKS } from '@/app/constants/leftNav';
import Link from 'next/link';

const LeftNav = () => {  
  return (
    <div className="left-nav flex flex-col min-h-0 relative w-[280px] z-10">
        <nav className="gap-2 h-full flex flex-col min-h-0">
            <div className="bg-[#121212] cursor-default rounded-lg">
                <div className="flex">
                    <Link href="/" draggable="false" className="h-6 mt-5 px-6 select-none text-white">
                        <LogoIcon />
                    </Link>
                </div>

                <ul className="py-2 px-3">
                    <Home />
                    <Search />
                </ul>
            </div>

            <div className="bg-[#121212] cursor-default w-full flex-1 flex flex-col min-h-0 select-none rounded-lg">
                <div className="w-full pt-0 min-h-0 flex-1 flex flex-col">
                    <ul>
                        <Library />
                        <LikedSongs />
                    </ul>
                </div>

                <div className="overflow-hidden">
                    <div className="my-[32px] px-6 text-start">
                        <div className="flex flex-wrap">
                            {LEFT_NAV_FOOTERLINKS.map(({text, href}, index) => (
                                <div className="mr-4" key={index}>
                                    <Link 
                                        href={href} 
                                        className="text-[#6a6a6a] inline-flex items-center hover:underline duration-200"
                                    >
                                        <span className="text-[11px] font-normal text-inherit">{text}</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-[32px] px-6">
                        <button 
                            className="text-sm font-bold bg-transparent rounded-[500px] cursor-pointer relative text-center 
                            custom_hover_effect py-[3px] pr-[15px] pl-[32px] border border-solid border-[#727272] 
                            text-[#fff] inline-flex items-center justify-center min-h-[32px]"
                        >
                            <span aria-hidden="true" className="flex absolute left-3 text-[#fff]">
                                <GlobeIcon />
                            </span>
                                English
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default LeftNav