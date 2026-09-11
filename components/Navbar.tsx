"use client" import Image from "next/image"; import image from "next/image"; import Link from "next/link"; import { FaRegCircleUser } from "react-icons/fa6"; import { IoIosMenu } from "react-icons/io"; import { IoMdRestaurant } from "react-icons/io"; import { Theme } from "./Theme"; import { useState } from "react";
export default function Navbar () { const [navOpen, setNavOpen] = useState(false) const navLinks:object[] = [ { label: "Home", url:"/" },
     {
        label: "About",
        url:"/about"
    },

     {
        label: "Contacts",
        url:"/contact"
    },

     {
        label: "FAQs",
        url:"/faqs"
    },
]

return(
    <main className="flex item-center gap-2 justify-between lg:px-20 py-2 shadow-md relative ">
        <Link href={"/"} className="flex items-center z-50 ">
        <Image
        src={"/logo.jpg"}
        alt="logo"
        width={800}
        height={800}
        className="w-15 h-15"
        />
        <p className="text-xl italic text-gray-800">Kravings</p>
        
        
        
        </Link>
        <div className="ml-auto flex items-center gap-6 max-lg:hidden ">
        {
            navLinks.map((item, i) => (
        

            <article className="group">
            <Link href={item.url} className="text-lg">{item.label}</Link>
            <div className="h-1 w-full bg-white group-hover:bg-[#E73F1E] transition-all duration-500"></div>
            </article>
        ))

            
    }
        </div>


        <div className="flex items-center gap-6 ml-6 max-lg:hidden">
            <Link href={"/"} className="flex items-center border gap-1 px-6 py-0.5 rounded-full border-gray-700">Account <FaRegCircleUser /></Link>
            <Link href={"/"} style={{backgroundColor:Theme.primaryColor, borderColor: Theme.primaryColor}} className="px-6 py-1 rounded-full text-white border">Add Recipe</Link>
        </div>
        {/* mobile and tablet view */}
        <button onClick={()=> setNavOpen (!navOpen)} className="lg:hidden z-50 tetx-3xl mr-2">
           {
           navOpen ? <IoMdRestaurant /> :  <IoIosMenu />
           }
        </button>
    <blockquote className={`lg:hidden h-dvh space-y-6 absolute flex flex-col gap-10 items-center top-0 right-0 w-full bg-white ${navOpen ? "block" : "hidden"}`}>
          <div className="flex pt-20 flex-col gap-10 items-center">
        {
            navLinks.map((item, i) => (
        

            
            <Link href={item.url} className="text-lg">{item.label}</Link>
            
        ))

            
    }
        
    </div>
      <div className="flex items-center gap-6 ">
            <Link href={"/"} className="flex items-center border gap-1 px-6 py-0.5 rounded-full border-gray-700">Account <FaRegCircleUser /></Link>
            <Link href={"/"} style={{backgroundColor:Theme.primaryColor, borderColor: Theme.primaryColor}} className="px-6 py-1 rounded-full text-white border">Add Recipe</Link>
        </div>
    </blockquote>
    </main>
)
}