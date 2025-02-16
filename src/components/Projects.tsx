"use client"

import { Button, Card, CardBody, Divider, Image, Link } from "@heroui/react"
import { useEffect } from 'react';

export default function Projects() {
    useEffect(() => {
        const handleScroll = () => {
            console.log('Scroll event triggered');
            document.querySelectorAll('.float-up').forEach((el) => {
                const rect = el.getBoundingClientRect();
                console.log('Element:', el, 'Rect:', rect);
                if (rect.top < window.innerHeight) {
                    console.log('Adding animate class to:', el);
                    el.classList.add('animate');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div className="mt-5" id="projects">
        <h1 className="px-4 text-[4em] font-bold text-center float-up">My Projects</h1>
        <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5">
                <Card className="mt-5 w-full bg-transparent text-inherit border border-[#025a4e] float-up">
                    <CardBody className="flex flex-row">
                        <Image src="shopapp.png" alt="ShopApp" width={200} height={300} />
                        <div className="px-4 w-[60%]">
                            <h1 className="text-[1.5em] font-bold">ShopApp</h1>
                            <p className="mt-2">An to-fork one-to-many ecommerce platform made in NextJS.</p>
                            <Button className="mt-5 w-full bg-transparent text-inherit border border-[#025a4e]" as={Link} href="https://github.com/AaryanKhClasses/ShopApp">Source Code</Button>
                            <Button className="mt-2 w-full text-white border bg-[#025a4e]" as={Link} href="https://aaryankh-shopapp-demo.vercel.app">Check Out</Button>
                        </div>
                    </CardBody>
                </Card>
                <Card className="mt-5 w-full bg-transparent text-inherit border border-[#025a4e] float-up">
                    <CardBody className="flex flex-row">
                        <Image src="sangeetai.png" alt="SangeetAI" width={200} height={300} />
                        <div className="px-4 w-[60%]">
                            <h1 className="text-[1.5em] font-bold">SangeetAI</h1>
                            <p className="mt-2">An AI tool that helps knowing and generating Indian Classical Music. It also includes a Metronome and Tuner for more music.</p>
                            <Button className="mt-5 w-full bg-transparent text-inherit border border-[#025a4e] hover:cursor-not-allowed">Source Code</Button>
                            <Button className="mt-2 w-full text-white border bg-[#025a4e]" as={Link} href="https://sangeetai-xi.vercel.app">Check Out</Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5">
                <Card className="mt-5 w-full bg-transparent text-inherit border border-[#025a4e] float-up">
                    <CardBody>
                        <h1 className="text-[1.5em] font-bold">DatabaseApp</h1>
                        <p className="mt-2">A JSON-Based Local Database Application.</p>
                        <Button className="mt-5 w-full bg-transparent text-inherit border border-[#025a4e]" as={Link} href="https://github.com/AaryanKhClasses/DatabaseApp">Source Code</Button>
                    </CardBody>
                </Card>
                <Card className="mt-5 w-full bg-transparent text-inherit border border-[#025a4e] float-up">
                    <CardBody>
                        <h1 className="text-[1.5em] font-bold">Sayout Clone</h1>
                        <p className="mt-2">A clone of the popular anonymous messaging service - Sayout.me. Made using ExpressJS and MongoDB.</p>
                        <Button className="mt-5 w-full bg-transparent text-inherit border border-[#025a4e]" as={Link} href="https://github.com/AaryanKhClasses/Sayout-Clone">Source Code</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
        <Divider className="my-4 bg-[#025a4e]" />
        <style jsx>{`
            .float-up {
                opacity: 0;
                transition: opacity 0.5s ease-out, transform 0.5s ease-out;
            }
            .float-up.animate {
                opacity: 1;
            }
        `}</style>
    </div>;
}