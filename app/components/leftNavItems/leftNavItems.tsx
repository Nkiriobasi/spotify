"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import Liked from '@/public/liked-songs.svg'
import styles from './leftNavItems.module.css';

import { 
    CreateFolderPlaylistIcon, 
    CreatePlaylistIcon, 
    HomeIcon, 
    HomeIconFill, 
    NavSearchIcon, 
    NavSearchIconFill, 
    PlusIcon, 
    YourLibraryIcon 
} from "../icons";



export const Home = () => {
    const pathname = usePathname();

    return (
        <li className="py-[4px] px-3">
            <Link 
                href="/"
                className={`${pathname === '/' ? 'text-white' : 'text-[#b3b3b3]'} 
                h-10 gap-5 flex items-center hover:text-white transition duration-75`} 
                draggable="false"
            >
                {pathname === '/' ? (
                    <HomeIconFill />
                ) : (
                    <HomeIcon />
                )}
                <span className="text-[15px] font-bold text-inherit">Home</span>
            </Link>
        </li>
    )
}

export const Search = () => {
    const pathname = usePathname();

    return (
        <li className="py-[4px] px-3">
            <Link 
                href="/search"
                className={`${pathname === '/search' ? 'text-white' : 'text-[#b3b3b3]'} 
                h-10 gap-5 flex items-center hover:text-white transition duration-75`} 
                draggable="false"
            >
                {pathname === '/search' ? (
                    <NavSearchIconFill />
                ) : (
                    <NavSearchIcon />
                )}
                <span className="text-[15px] font-bold text-inherit">Search</span>
            </Link>
        </li>
    )
}

export const Library = () => {
    const [libraryisOpen, setLibraryIsOpen] = useState(false);

    const toggleLibraryMenu = () => {
        setLibraryIsOpen(!libraryisOpen);
    };

    return (
        <li className="py-2 px-4 gap-2 flex flex-col">
            <div className="flex items-center flex-row gap-2">
                <div className="min-w-0 gap-1 flex items-center mr-auto">
                    <button 
                        className="cursor-pointer flex shrink-0 h-10 justify-start py-1 px-2 max-w-full 
                        transition duration-75 text-[15px] font-bold bg-transparent hover:text-white 
                        text-[#b3b3b3] items-center border-0"
                    >
                        <span className="flex mr-3 text-inherit">
                            <YourLibraryIcon />
                        </span>
                        Your Library
                    </button>
                </div>

                <span className="block">
                    <button
                        onClick={toggleLibraryMenu} 
                        className="max-w-full transition duration-75 text-[14px] font-bold rounded-[500px] 
                        bg-transparent border-0 cursor-pointer relative text-center inline-flex items-center 
                        justify-center p-2 hover:text-white text-[#b3b3b3] hover:bg-[#1a1a1a] hover:scale-100"
                    >
                        <span className="flex text-inherit">
                            <PlusIcon />
                        </span>
                    </button>
                    
                    <div className=""></div>
                    <div 
                        className={`z-[9999] absolute top-[42px] left-0 right-auto bottom-auto ${styles.transform}
                        ${libraryisOpen ? 'block' : 'invisible'}`}
                    >
                        <div>
                            <ul 
                                className={`p-1 bg-[#282828] box-shadow rounded max-w-[350px] min-w-[160px] 
                                ${styles.boxShadow} ${styles.maxHeight} overflow-y-auto`}
                            >
                                <li>
                                    <button 
                                        className="bg-transparent border-o rounded-sm text-[#ffffffe6] cursor-default 
                                        items-center justify-between h-10 p-3 pr-2 relative text-left w-full flex gap-2 
                                        hover:bg-[#ffffff1a] hover:text-[#fff]"
                                    >
                                        <CreatePlaylistIcon />
                                        <span className="text-[13px] leading-[1.3] pt-1 font-normal text-inherit overflow-hidden text-ellipsis flex-1 whitespace-nowrap">Create a new playlist</span>
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="bg-transparent border-o rounded-sm text-[#ffffffe6] cursor-default 
                                        items-center justify-between h-10 p-3 pr-2 relative text-left w-full flex gap-2 
                                        hover:bg-[#ffffff1a] hover:text-[#fff]"
                                    >
                                        <CreateFolderPlaylistIcon />
                                        <span className="text-[13px] leading-[1.3] pt-1 font-normal text-inherit overflow-hidden text-ellipsis flex-1 whitespace-nowrap">Create a playlist folder</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </span>
            </div>
        </li>
    )
}

export const LikedSongs = () => {
    const pathname = usePathname();

    return (
        <li className="py-2 px-4 gap-2 flex flex-col">
                            <div className="flex items-center flex-row gap-2">
                <div className="min-w-0 gap-1 flex items-center mr-auto">
                    <button 
                        className="cursor-pointer flex shrink-0 h-10 justify-start py-1 px-2 max-w-full 
                        transition duration-75 text-[15px] font-bold bg-transparent hover:text-white 
                        text-[#b3b3b3] items-center border-0"
                    >
                        <span className="flex mr-3">
                            <Image src={Liked} alt='liked' />
                        </span>
                        Liked Songs
                    </button>
                </div>
            </div>
        </li>
    )
}