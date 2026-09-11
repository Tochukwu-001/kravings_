"use client"
import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { Theme } from "./Theme";
import { IoIosMenu } from "react-icons/io";
import { IoMdRestaurant } from "react-icons/io";
import { useState } from "react";

export default function Navbar () {

    const [navOpen, setNavOpen] = useState(false)
    // console.log(navOpen);
    
    const navLinks: object[] = [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "About",
            url: "/about"
        },
        {
            label: "Contact",
            url: "/contact"
        },
        {
            label: "FAQs",
            url: "/faqs"
        },
    ]
    return (
        <main className="flex items-center justify-between lg:px-20 py-2 shadow-md relative z-50">
            <Link href={"/"} className="flex items-center z-50">
                <Image
                    src={"/logo.jpg"}
                    alt="logo"
                    width={800}
                    height={800}
                    className="w-15 h-15"
                />
                <p className="text-lg italic text-gray-800">Kravings</p>
            </Link>

            <div className="ml-auto flex items-center gap-6 max-lg:hidden">
                {
                    navLinks.map((item, i)=> (
                        <article key={i} className="group">
                            <Link href={item.url} className="text-lg">{item.label}</Link>
                            <div className="h-1 w-full bg-white group-hover:bg-[#E73F1E] transition-all duration-500"></div>
                        </article>
                    ))
                }
            </div>

            <div className="flex items-center gap-6 ml-6 max-lg:hidden">
                <Link href={"/auth"} className="flex items-center border gap-1 px-6 py-1 rounded-full border-gray-700 text-lg">Account <FaRegCircleUser /></Link>
                <Link href={"/"} style={{backgroundColor: Theme.primaryColor, borderColor: Theme.primaryColor}} className="px-6 py-1 rounded-full text-white border text-lg">Add Recipe</Link>
            </div>

            {/* mobile and tablet view */}
            <button onClick={()=> setNavOpen(!navOpen)} className="lg:hidden z-50 text-3xl mr-2">
                {
                    navOpen ? <IoMdRestaurant /> : <IoIosMenu />
                }               
            </button>

            <blockquote className={`lg:hidden absolute top-0 right-0 w-full h-dvh space-y-6 bg-white ${navOpen ? "block" : "hidden"}`}>
                <div className="flex pt-20 flex-col gap-10 items-center">
                    {
                        navLinks.map((item, i)=> (
                            <Link key={i} href={item.url} className="text-lg">{item.label}</Link>
                        ))
                    }
                </div>
                <div className="flex flex-col items-center gap-6">
                    <Link href={"/"} className="flex items-center border gap-1 px-6 py-1 rounded-full border-gray-700 text-lg">Account <FaRegCircleUser /></Link>
                    <Link href={"/"} style={{backgroundColor: Theme.primaryColor, borderColor: Theme.primaryColor}} className="px-6 py-1 rounded-full text-white border text-lg">Add Recipe</Link>
                </div>
            </blockquote>
        </main>
    )
}