import React from 'react'

const PreviewBanner = () => {
  return (
    <div className='now-playing-bar w-full'>
        <footer className="w-full flex flex-col h-auto min-w-[620px] select-none">
            {/* Preview Banner */}
            <div 
                className="pt-[11px] pr-[24px] pb-[7px] pl-[15px] previewBanner_Bg flex items-center 
                justify-between cursor-pointer gap-6 relative w-full z-[1]"
            >
                <div className="mb-[4px] text-white">
                    <p className="md:text-[11px] text-[9px] mb-[2px] font-normal uppercase tracking-widest text-inherit">
                        Preview of Spotify
                    </p>
                    <p className="text-[15px] font-medium text-inherit">
                        Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
                    </p>
                </div>

                <button className="buttonPrimary custom_hover_effect">
                    <span className="buttonInnerText">
                        Sign up free
                    </span>
                </button>
            </div>

            {/* Player Controller */}
            <div className=""></div>
        </footer>
    </div>
  )
}

export default PreviewBanner