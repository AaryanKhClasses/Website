import "./globals.css"
import Nav from "@/components/Nav"
import type { Metadata } from "next"
import { Provider } from "./providers"
import { Yatra_One } from "next/font/google"

const yatraOne = Yatra_One({
    variable: "--font-yatra-one",
    subsets: ["latin"],
    weight: "400",
    display: "swap",
})

export const metadata: Metadata = {
    title: "AaryanKh",
    description: "Portfolio of AaryanKh, a passionate developer.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={yatraOne.variable}>
        <body className={`text-[#025a4e] antialiased bg-gradient-to-br from-[#c8dfbf] to-[#e7d1d1] h-full`}>
        <Provider>
            <Nav />
            {children}
            <footer className="text-center py-4 bg-[#025a4e] text-white">
                <p>&copy; 2025 AaryanKh. All rights reserved.</p>
            </footer>
        </Provider>
        </body>
    </html>
}
