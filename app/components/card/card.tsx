import Image from "next/image"

const Card = () => {
  return (
    <div className="bg-[#181818] hover:bg-[#282828] rounded-[8px] isolate p-4 relative transition-colors w-full">
        <div className="select-none h-full">
            <div className="mb-4 relative">
                <div className="w-full relative pb-[100%] shadow-[0_8px_24px_rgba(0,0,0,.5)] rounded-lg bg-[#333]">
                    <div>
                        <Image
                            draggable="false" 
                            src=""
                            width={200} 
                            height={400} 
                            alt="" 
                            className="object-cover object-center block select-none h- w-full left-0 top-0 absolute card_image_effect"
                        />
                    </div>
                </div>

                <div 
                    className="right-2 bottom-2 rounded-[500px] shadow-[0_8px_8px_rgba(0,0,0,.3)] opacity-0 
                    pointer-events-none absolutes translate-y-2 transition-all z-10"
                >
                    <div>
                        <button 
                            className="relative z-[8]"
                        >
                            <span className="ButtonInner-sc-14ud5tc-0 lmjRIQ encore-bright-accent-set">
                                <span aria-hidden="true" className="IconWrapper__Wrapper-sc-1hf1hjl-0 jhjVUP">
                                    <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 haNxPq"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="min-h-[62px]">
                <a 
                    title="Today's Top Hits " 
                    className="Nqa6Cw3RkDMV8QnYreTr" 
                    dir="auto" 
                    href="/playlist/37i9dQZF1DXcBWIGoYBM5M"
                >
                    <div className="Type__TypeElement-sc-goli3j-0 gIkgYW nk6UgB4GUYNoAcPtAQaG" data-encore-id="type">
                        Today&apos;s Top Hits 
                    </div>
                </a>

                <div className="Type__TypeElement-sc-goli3j-0 bDHxRN Za_uNH8nTZ0qCuIqbPLZ" data-encore-id="type">
                    Jung Kook is on top of the Hottest 50!
                </div>
            </div>
            <div 
                className="absolute z-0 bottom-0 content-none cursor-pointer left-0 overflow-hidden 
                right-0 top-0 indent-[100%] whitespace-nowrap"
            ></div>
        </div>
    </div>
  )
}

export default Card