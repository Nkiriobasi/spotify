"use client"

import { usePathname, useRouter  } from 'next/navigation';
import { InputSearchIcon } from '@/app/components/icons';
import useBrowserHistory from '@/app/hooks/useBrowserHistory';


const TopNav = () => {
    const pathname = usePathname();
    const router = useRouter();

    const { canGoBack, canGoForward } = useBrowserHistory();

  return (
    <section className="main-view h-[64px] min-w-0 z-10">
        <header 
            className="bg-[#121212] w-full h-[64px] relative p-4 flex items-center 
            justify-between gap-2 rounded-tl-lg rounded-tr-lg" 
        >
            <div 
                className="opacity-0 bg-[#121212] absolute top-0 right-0 left-0 bottom-0 
                overflow-hidden pointer-events-none z-[-1] transition-all duration-[.25ms]"
            ></div>
            

            <div className="flex items-center pointer-events-auto gap-2">
                <button 
                    onClick={() => router.back()}
                    aria-label="Go back" 
                    disabled={canGoBack ? false : true}
                    className={`bg-[#000000b3] w-[32px] h-[32px] relative inline-flex 
                    justify-center rounded-[50%] text-white items-center border-none  
                    ${canGoBack ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`} 
                >
                    <svg role="img" height="16" width="16" aria-hidden="true" className="fill-current text-inherit" viewBox="0 0 16 16"><path className="fill-current text-inherit" d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path></svg>
                </button>

                <button 
                    onClick={() => router.forward()}
                    aria-label="Go forward" 
                    disabled={canGoForward ? false : true}
                    className={`bg-[#000000b3] w-[32px] h-[32px] relative inline-flex 
                    justify-center rounded-[50%] text-white items-center border-none
                    ${canGoForward ? 'cursor-pointer' : 'cursor-not-allowed  opacity-60'}`} 
                >
                    <svg role="img" height="16" width="16" aria-hidden="true" className="fill-current text-inherit" viewBox="0 0 16 16"><path className="fill-current text-inherit" d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path></svg>
                </button>
            </div>
            
            {pathname === "/search" ? (
                <div className="flex-grow min-w-0 pointer-events-auto">
                    <div className="flex items-center gap-2">
                        <div className="flex-[0_1_364px] relative">
                            <form role="search">
                                <input 
                                    className="bg-[#242424] border-0 rounded-[500px] text-white h-[48px] py[6px] 
                                    px-9 text-ellipsis w-full font-normal md:text-sm text-xs" 
                                    maxLength={800}
                                    autoCorrect="off" 
                                    autoCapitalize="off" 
                                    spellCheck="false" 
                                    placeholder="What do you want to listen to?" 
                                    value="" 
                                    onChange={() => {}}
                                />
                            </form>
                            <div className="items-center bottom-0 top-0 left-3 right-3 flex absolute">
                                <span className="text-[#ffffffb3] flex-auto">
                                    <InputSearchIcon />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                null
            )}
            
            <>
                {/* Detecting if a user is offline */}
                <div></div>
            
                <div className="pointer-events-auto flex items-center">
                    <button className="buttonTertiary hover:opacity-60 duration-300">Sign up</button>
                    <button className="buttonPrimary hover:opacity-60 duration-300">Log in</button>
                </div>
            </>
        </header>
    </section>
  )
}

export default TopNav