"use client"
import { Divider } from '@heroui/react'
import { useEffect } from 'react'
    
export default function Hero() {
    useEffect(() => {
        setTimeout(() => {
            document.querySelectorAll('.float-up').forEach((el, index) => {
                setTimeout(() => el.classList.add('animate'), index * 200)
            })
        }, 700)
    }, [])

    return <>
        <div className="items-center justify-center flex flex-col p-4 h-screen">
            <h1 className="text-[5rem] md:text-[8rem] font-bold float-up">Hello There!</h1>
            <h2 className="text-[3rem] md:text-[5rem] mt-[-10] font-bold float-up">I am Aaryan.</h2>
            <p className="md:text-[1.2rem] mt-5 float-up text-center">I am a self-taught backend developer from India, <br />currently a First Year Student pursuing Computer Science and Engineering.</p>
        </div>
        <style jsx>{`
            .float-up {
                opacity: 0;
                transition: opacity 0.5s ease-out, transform 0.5s ease-out;
            }
            .float-up.animate {
                opacity: 1;
            }
        `}</style>
        <Divider className="my-4 bg-[#025a4e]" />
    </>
}