"use client";
import Image from "next/image"
import logo from "@/public/assets/Logo.png"
import appleStoreBadge from "@/public/assets/apple store.png"
import googleStoreBadge from "@/public/assets/google play.png"
import menuIcon from "@/public/assets/_Menu icon.png"
import Link from "next/link";


export default function NavBar() {
    return (
        <nav className="flex justify-between items-center px-5 md:px-20 lg:px-40">
            <div className="flex items-center">
                <div>
                    <Image src={logo} alt="Logo" width={100} height={100} />
                </div>
                <div className="ms-10 gap-10 hidden lg:flex">
                    <div><a href="">Features</a></div>
                    <div><a href="">Pricing</a></div>
                    <div><a href="">Carreers</a></div>
                    <div><a href="">Help</a></div>
                    <div><Link href="/login">Login</Link></div>
                    <div><a href="/register">Register</a></div>
                </div>
            </div>
            <div className="flex">
                <div className="hidden md:flex gap-4 items-center">
                    <div><a href=""><Image src={googleStoreBadge} alt="googleBadge" width={100} height={100} /></a></div>
                    <div><a href=""><Image src={appleStoreBadge} alt="googleBadge" width={100} height={100} /></a></div>
                </div>
                <div className="lg:hidden">
                    <a href="">
                        <Image src={menuIcon} alt="Hamburger" width={50} height={50}></Image>
                    </a>
                </div>
            </div>

        </nav>
    )
}