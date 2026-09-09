"use client"
import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { Theme } from "./Theme";
import { IoIosMenu } from "react-icons/io";
import { IoMdRestaurant } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {

    const [navOpen, setNavOpen] = useState(false)    

    const navLinks:object[]=[
        {
            label:'Home', 
            url:'/'
        },
        {
            label:'About',
            url:'/about'
        },
        {
            label:'Contact',
            url:'/contact'
        },
        {
            label:'FAQs',
            url:'/faqs'
        }
    ]
    return (
        <main className="flex items-center justify-between lg:px-20 max-lg:px-5 py-2 shadow-md">
            <Link href="/" className="flex items-center z-50">
                <Image
                    src="/logo.jpg"
                    alt="Logo"
                    width={800}
                    height={800}
                    className="w-20 h-20"
                />
                <p className="text-xl italic text-gray-800">Kravings</p>
            </Link>

            <div className="ml-auto flex items-center gap-6 max-lg:hidden">
                {
                    navLinks.map((item, i)=>(
                        <article className="group">
                        <Link href={item.url} className="text-lg">{item.label}</Link>
                        <div className="h-1 w-full bg-white group-hover:bg-[#E73F1E] transition-all duration-500"></div>
                        </article>
                    ))
                }
            </div>

            <div className="flex items-center gap-6 ml-6 max-lg:hidden">
                <Link href="/" className="flex items-center text-lg border gap-1 px-6 py-1 rounded-full border-gray-700">Account <FaRegCircleUser /></Link>
                <Link href="/" style={{backgroundColor:Theme.primaryColor , borderColor:Theme.primaryColor}} className="px-6 py-1 rounded-full text-white text-lg">Add Recipe</Link>
            </div>

            {/* mobile and tablet view */}
            <button onClick={()=>setNavOpen(!navOpen)} className="lg:hidden z-50 text-3xl">
                {
                    navOpen ? <IoMdRestaurant />: <IoIosMenu />
                }
            </button>

            <blockquote className={`lg:hidden absolute top-0 left-0 w-full h-dvh space-y-6 bg-white ${navOpen?"block":"hidden"}`}>
            <div className=" pt-20 flex flex-col items-center gap-10">
                {
                    navLinks.map((item, i)=>(
                        <Link href={item.url} className="text-lg">{item.label}</Link>
                    ))
                }
            </div>

            <div className="flex flex-col items-center gap-6">
                <Link href="/" className="flex items-center text-lg border gap-1 px-6 py-1 rounded-full border-gray-700">Account <FaRegCircleUser /></Link>
                <Link href="/" style={{backgroundColor:Theme.primaryColor , borderColor:Theme.primaryColor}} className="px-6 py-1 rounded-full text-white text-lg">Add Recipe</Link>
            </div>
            </blockquote>

        </main>
    )}