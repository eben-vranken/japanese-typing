"use client";

// Next
import Link from "next/link";

// React
import { useState, FunctionComponent } from "react";

// Icons
import { X, List } from "@phosphor-icons/react";

const Navbar: FunctionComponent = () => {
    const [navState, setNavState] = useState(false);

    return (
        <nav className="h-16 flex items-center justify-between">
            {/* Left elements */}
            <Link href="/" className="flex gap-x-2 text-lg font-semibold">
                <span>
                    🇯🇵
                </span>
                <span>
                    Japanese
                </span>
            </Link>

            {/* Nav Links */}
            <ul className={`flex gap-x-8 items-center [&>*]:font-mono  ${navState ?
                "space-y-3 z-20 pb-5 fixed overflow-scroll inset-0 w-screen h-screen justify-center items-center flex-col bg-body" : 'max-lg:hidden'}`}>

                <li className="hover:opacity-70" onClick={() => setNavState(!navState)}>
                    <Link href={"/"}>Practice</Link>
                </li>

                <li className="hover:opacity-70" onClick={() => setNavState(!navState)}>
                    <Link href={"/kana"}>Kana</Link>
                </li>

                <li className="hover:opacity-70" onClick={() => setNavState(!navState)}>
                    <Link href={"/kanji"}>Kanji</Link>
                </li>

                {/* Vertical Divider */}
                <li className="-mx-3 max-lg:hidden">
                    |
                </li>

                <li className="hover:opacity-70" onClick={() => setNavState(!navState)}>
                    <Link href={"/stats"}>Stats</Link>
                </li>

                <li className="hover:opacity-70 cursor-pointer font-semibold px-3 py-1 border-2 border-primary rounded-md" onClick={() => setNavState(!navState)}>
                    <Link href={"/vocab"}>Vocabulary</Link>
                </li>
            </ul>

            {/* Navbar Toggle */}
            <section className={`visible lg:hidden z-20 cursor-pointer ${navState ? 'fixed right-4' : ''}`} onClick={() => setNavState(!navState)}>
                {navState ? (
                    <X size={25} />
                ) : (
                    <List size={25} />
                )}
            </section>
        </nav>
    )
}

export default Navbar