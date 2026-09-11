"use client"
import Image from "next/image"
import Link from "next/link"
import { FaUserCircle } from "react-icons/fa";
import { Theme } from "./Theme";
import { IoMdRestaurant } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { use, useState } from "react";




 
export default function Navbar () {

    const [navOpen, setNavOpen] = useState(false)

    const navlinks: object[] = [
        {
            label:"Home",
            url:"/"
        },
        {
            label:"About",
            url: "/about"
        },
        {
            label:"Contact",
            url:"/Contact"
        },
        {
            label: "FAQs",
            url: "/FAQs"
        }
    ]
    return(
        <main className="flex items-center justify-between lg:px-20 py-2 shadow-md relative">
            <Link href={"/"} className="flex items-center z-50">
            <Image 
            src={"/logo.jpg"}
            alt="logo"
            width={800}
            height={800} 
            className="w-15 h-15"
            />
            <p className="text-xl italic text-gray-800">kravings</p>
            </Link>

            <div className="ml-auto flex items-center gap-6 max-lg:hidden" >
                {
                    navlinks.map((item, i)=> (
                
                <article key={i} className="group">
                <Link href={item.url} className="text-lg">{item.label}</Link>
                <div className="h-1 w-full bg-white group-hover:bg-[#E73F1E] transition-all duration-500"></div>
                </article>
                    ))
                }
               
            </div>

            <div className="flex items-center gap-6 ml-6 max-lg:hidden">
                <Link className="flex items-center border gap-1 px-3 py-0.5 rounded-full
                border-gray-700 " href={"/auth"}>Accounts <FaUserCircle /> </Link>
                <Link href={"/"} style={{backgroundColor: Theme.primaryColor}} className="px-6 py-1 rounded-full text-white border text-lg">Add Recipe</Link>
            </div>

            {/* mobile and tablet view*/}
            <button onClick={()=> setNavOpen(!navOpen)} className="lg:hidden z-50 text-3xl mr-2">
                {
                    navOpen ? <IoMdRestaurant /> : <IoIosMenu /> 
                }
            </button>
            <blockquote className= {`lg:hidden absolute top-0 right-0 w-full h-dvh space-y-6 bg-white ${navOpen ? "block" : "hidden"}`}>
            <div className="pt-20 flex flex-col gap-10 items-center ">
                {
                    navlinks.map((item, i)=> (
                
                <Link key={i} href={item.url} className="text-lg">{item.label}</Link>
               
                    ))
                }
            </div>
            <div className="flex flex-col items-center gap-6 ">
                <Link className="flex items-center border gap-1 px-3 py-0.5 rounded-full
                border-gray-700 " href={"/"}>Accounts <FaUserCircle /></Link>
                <Link href={"/"} style={{backgroundColor: Theme.primaryColor}} className="px-6 py-1 rounded-full text-white border text-lg">Add Recipe</Link>
            </div>
            </blockquote>
        </main>
    )
}