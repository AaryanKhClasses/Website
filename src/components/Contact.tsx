"use client"

import { Button, Divider, Image, Link } from "@heroui/react"

export default function Contact() {
    return <div id="contact" className="flex flex-col items-center justify-center gap-5">
        <h1 className="px-4 text-[4rem] text-center font-bold">Contact</h1>
        <p className="px-10 text-[1.2rem]">I am open to new opportunities and collaborations. Feel free to reach out to me via Email or GitHub.</p>
        <div className="flex gap-5 w-full text-center justify-center my-3">
            <Button className="bg-transparent border border-[#025a4e] text-inherit w-1/3" as={Link} href="mailto:aaryankhclasses07@gmail.com"><Image src="mail.svg" width={20} height={20} />Email</Button>
            <Button as={Link} className="bg-[#025a4e] text-white w-1/3" href="https://github.com/AaryanKhClasses"><Image src="github.svg" width={20} height={20} />GitHub</Button>
        </div>
        <Divider className="my-4 bg-[#025a4e]" />
    </div>
}