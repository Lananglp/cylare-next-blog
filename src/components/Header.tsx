'use client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import Container from './Container';

function Header() {

    const [navbar, setNavbar] = useState(false);
    const navbarRef = useRef<any>(null);
    const navRef = useRef<any>(null);

    const toggleNavbar = () => {
        setNavbar(!navbar);
    }


    useEffect(() => {
        const body = document.body;

        if (navbar) {
            navbarRef.current?.classList.remove("hidden");
            body.classList.add("overflow-hidden");
            setTimeout(() => {
                navRef.current?.classList.remove("translate-x-full");
                navRef.current?.classList.add("translate-x-0");
            }, 100);
        } else {
            navRef.current?.classList.remove("translate-x-0");
            navRef.current?.classList.add("translate-x-full");

            setTimeout(() => {
                navbarRef.current?.classList.add("hidden");
                body.classList.remove("overflow-hidden");
            }, 500);
        }

        const clickInOutside = (e: MouseEvent) => {
            if (!navRef.current?.contains(e.target as Node)) {
                setNavbar(false);
            }
        }

        document.addEventListener("mousedown", clickInOutside);

        return () => {
            body.classList.remove("overflow-hidden");
            document.addEventListener("mousedown", clickInOutside);
        }

    }, [navbar, navbarRef, navRef]);

    return (
        <>
            <header className="fixed z-50 inset-x-0 top-0 bg-zinc-200 border-b border-zinc-300 shadow-lg shadow-black/5">
                <Container>
                    <div className="flex justify-between items-center px-4 py-4">
                        <div className="flex justify-between items-center w-full">
                            <Link href="/" className="text-lg font-semibold">Cylare Next Blog</Link>
                            <button onClick={toggleNavbar} type="button" className="block md:hidden link-primary"><i className="fa fa-fw fa-bars" /></button>
                        </div>
                        <nav className="hidden md:flex items-center gap-4 text-nowrap">
                            <Link href="#" className="block link-primary">Beranda</Link>
                            <Link href="#" className="block link-primary">Berita </Link>
                            <Link href="#" className="block link-primary">Tentang Kami</Link>
                            <Link href="#" className="block link-primary">Kontak Kami</Link>
                        </nav>

                        <div ref={navbarRef} className="hidden md:hidden fixed inset-0 bg-black/25 duration-500" aria-label="Mobile Navbar">
                            <div ref={navRef} className="absolute w-72 inset-y-0 end-0 bg-zinc-200 border-s border-zinc-300 p-4 ease-in-out duration-500">
                                <button onClick={toggleNavbar} type="button" className="link-primary absolute top-4 end-4"><i className="fa fa-fw fa-close" /></button>
                                <nav className="flex flex-col justify-center items-center gap-y-8 h-full">
                                    <Link href="#" className="block link-primary">Beranda</Link>
                                    <Link href="#" className="block link-primary">Berita </Link>
                                    <Link href="#" className="block link-primary">Tentang Kami</Link>
                                    <Link href="#" className="block link-primary">Kontak Kami</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
            <div className='py-[30px]'/>
        </>
    )
}

export default Header