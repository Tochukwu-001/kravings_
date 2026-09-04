import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Navbar () {
    return (
        <main className="flex items-center justify-between">
            <Link href={"/"} className="flex items-center">
                <Image
                    src={"/logo.jpg"}
                    alt="logo"
                    width={800}
                    height={800}
                    className="w-15 h-15"
                />
                <p className="text-xl italic text-gray-800">Kravings</p>
            </Link>

            <div className="ml-auto">
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Contact</Link>
                <Link href={"/"}>FAQs</Link>
            </div>

            <div>
                <Link href={"/"}>Account <FaRegCircleUser /></Link>
                <Link href={"/"}>Add Recipe</Link>
            </div>
        </main>
    )
}