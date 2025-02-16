"use client"

import { Link, Navbar, NavbarContent, NavbarItem } from "@heroui/react"

export default function Nav() {
    return <Navbar>
        <NavbarContent className="flex items-center gap-5 w-full " justify="center">
            <NavbarItem><Link className="text-[#025a4e] text-[1.3em]" href="/">Home</Link></NavbarItem>
            <NavbarItem><Link className="text-[#025a4e] text-[1.3em]" href="/about">About</Link></NavbarItem>
            <NavbarItem><Link className="text-[#025a4e] text-[1.3em]" href="/projects">Projects</Link></NavbarItem>
            <NavbarItem><Link className="text-[#025a4e] text-[1.3em]" href="/contact">Contact</Link></NavbarItem>
        </NavbarContent>
    </Navbar>
}