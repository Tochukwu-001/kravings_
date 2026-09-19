"use client"

import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { IoMdRestaurant } from "react-icons/io";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export default function Navbar () {
    const [navOpen, setNavOpen] = useState(false)

    const {data: session} = useSession()

    const navLinks = [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Contact", url: "/contact" },
        { label: "FAQs", url: "/faqs" },
    ]
    
    return (
        <header className="sticky top-0 bg-white flex items-center justify-between lg:px-20 py-2 shadow-md z-50">
            <Link href={"/"} className="flex items-center z-50">
                <Image
                    src={"/logo.jpg"}
                    alt="logo"
                    width={800}
                    height={800}
                    className="w-15 h-15 object-contain"
                />
                <p className="text-lg italic text-gray-800">Kravings</p>
            </Link>

            <div className="ml-auto flex items-center gap-6 max-lg:hidden">
                {
                    navLinks.map((item, i)=> (
                        <article key={i} className="group">
                            <Link href={item.url} className="text-lg">{item.label}</Link>
                            <div className="h-1 w-full bg-transparent group-hover:bg-[#E73F1E] transition-all duration-500"></div>
                        </article>
                    ))
                }
            </div>

            <div className="flex items-center gap-6 ml-6 max-lg:hidden">
                <Link href={"/add-recipe"} className="bg-[#E73F1E] border-[#E73F1E] px-6 py-1 rounded-full text-white border text-lg hover:bg-opacity-90 transition-opacity">
                    Add Recipe
                </Link> 

                {session ? (
                    <DropdownMenu>
                         <DropdownMenuTrigger className="focus:outline-none">
                            <Avatar className="cursor-pointer border-2 border-transparent hover:border-[#E73F1E] transition-colors">
                                <AvatarImage src={session?.user?.image || undefined} />
                                <AvatarFallback className="bg-gray-100 text-[#E73F1E] font-bold">
                                    {session?.user?.name?.slice(0,2).toUpperCase() || "U"}
                                </AvatarFallback>
                            </Avatar>
                         </DropdownMenuTrigger>
                         
                         <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuGroup>
                                <DropdownMenuItem> 
                                    <Link href="/add-recipe" className="cursor-pointer w-full">Add Recipe</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem> 
                                    <Link href="/profile" className="cursor-pointer w-full">View Profile</Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                                onClick={() => signOut()} 
                                className="text-red-500 cursor-pointer font-medium"> 
                                Log out
                            </DropdownMenuItem>
                         </DropdownMenuContent>
                     </DropdownMenu>
                 ) : (
                    <Link href={"/auth"} className="flex items-center border gap-1 px-6 py-1 rounded-full border-gray-700 text-lg hover:bg-gray-50">
                        Account <FaRegCircleUser />
                    </Link>
                 )}
            </div>
            <button  onClick={()=> setNavOpen(!navOpen)} className="lg:hidden z-50 text-3xl mr-2">
                {navOpen ? <IoMdRestaurant /> : <IoIosMenu />}
            </button>

            <blockquote className={`lg:hidden absolute top-0 right-0 w-full h-dvh space-y-6 bg-white z-40 ${navOpen ? "block" : "hidden"}`}>
                <div className=" flex pt-28 flex-col gap-10 items-center">
                    {
                        navLinks.map((item, i)=> (
                            <Link key={i} href={item.url} className="text-lg font-medium" onClick={() => setNavOpen(false)}>
                                {item.label}
                            </Link>
                        ))
                    }
                </div>

                <div className="flex flex-col items-center gap-6 mt-8">
                    
                    {session ? (
                        <>
                            <Link href={"/profile"} onClick={() => setNavOpen(false)} className="flex items-center border gap-2 px-8 py-3 
                                  rounded-full border-[#E73F1E] text-[#E73F1E] font-bold text-lg">
                                <Avatar className="w-6 h-6">
                                    <AvatarFallback className="text-xs bg-transparent">
                                        {session?.user?.name?.slice(0,2).toUpperCase() || "U"}
                                    </AvatarFallback>
                                </Avatar>
                                My Profile
                            </Link>
                            <button onClick={() => { signOut(); setNavOpen(false); }} className="text-red-500 font-bold text-lg">
                                Log out
                            </button>
                        </>
                    ) : (
                        <Link href={"/auth"} onClick={() => setNavOpen(false)} className="flex items-center border gap-2 px-8 py-3 rounded-full
                            border-gray-700 text-lg font-medium">
                            Account <FaRegCircleUser />
                        </Link>
                    )}
                    
                    <Link href={"/add-recipe"} onClick={() => setNavOpen(false)} className="px-8 py-3 rounded-full text-white border
                         border-[#E73F1E] bg-[#E73F1E] text-lg font-medium hover:bg-opacity-90">
                        Add Recipe
                    </Link>
                </div>
                
            </blockquote>
        </header>
    )
}