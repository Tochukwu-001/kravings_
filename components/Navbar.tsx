import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { Theme } from "./Theme";
import { IoIosMenu } from "react-icons/io";
import { IoMdRestaurant } from "react-icons/io";

export default function Navbar () {
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
        <main className="flex items-center justify-between lg:px-20 py-2 shadow-md">
            <Link href={"/"} className="flex items-center">
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
                <Link href={"/"} className="flex items-center border gap-1 px-6 py-1 rounded-full border-gray-700 text-lg">Account <FaRegCircleUser /></Link>
                <Link href={"/"} style={{backgroundColor: Theme.primaryColor, borderColor: Theme.primaryColor}} className="px-6 py-1 rounded-full text-white border text-lg">Add Recipe</Link>
            </div>

            {/* mobile and tablet view */}
            <button className="lg:hidden">
                <IoIosMenu />
                <IoMdRestaurant />
            </button>

             <div className="bg-red-600 h-dvh">
                {
                    navLinks.map((item, i)=> (
                        <Link href={item.url} className="text-lg">{item.label}</Link>
                    ))
                }
            </div>
        </main>
    )
}