"use client"

import { Divider } from "@heroui/react"

export default function About() {
    return <div className="mt-5">
        <h1 className="px-4 text-[4rem] text-center font-bold">About Me</h1>
        <p className="px-10 text-[1.2rem]">Hello. I am Aaryan, a passionate developer who enjoys creating innovative solutions. I specialize in <b>backend development</b> and have experience with various technologies such as NextJS, ExpressJS, Python, C/C++, etc.<br /><br />
        I am a student currently in my <b>First Year</b> pursuing Computer Science and Engineering from <b>National Institute of Technology, Goa.</b><br /> <br />
        I also participate in competitive programming and various hackathons to enhance my problem-solving skills.<br />
        I have <b>6+ years of experience</b> in programming and have worked on various projects ranging from Web Development to Machine Learning.<br /><br />
        <b>My Goals:</b> To deepen my knowledge in software engineering and contribute to impactful projects that utilize my skills.
        </p>
        <Divider className="my-4 bg-[#025a4e]" />
    </div>
}