"use client"

import { Link, Navbar, NavbarContent, NavbarItem } from "@heroui/react"

export default function Nav() {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        const targetId = e.currentTarget.getAttribute("href")?.substring(1)
        if (targetId === "") window.scrollTo({ top: 0, behavior: "smooth" })
        else {
            const targetElement = document.getElementById(targetId as string)
            if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" })
        }
    }

    return <Navbar>
        <NavbarContent className="flex items-center gap-5 w-full" justify="center">
            <NavbarItem><Link className="text-[#025a4e] text-[1.3em]" href="#" onClick={handleLinkClick}>Home</Link></NavbarItem>
            <NavbarItem><Link className="text-[#025a4e] text-[1.3em]" href="#projects" onClick={handleLinkClick}>Projects</Link></NavbarItem>
            <NavbarItem><Link className="text-[#025a4e] text-[1.3em]" href="#about" onClick={handleLinkClick}>About</Link></NavbarItem>
            <NavbarItem><Link className="text-[#025a4e] text-[1.3em]" href="#contact" onClick={handleLinkClick}>Contact</Link></NavbarItem>
        </NavbarContent>
    </Navbar>
}