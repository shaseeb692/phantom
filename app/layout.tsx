import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
export const metadata:Metadata={title:{default:"Phantom Marketing | Your Digital Demons",template:"%s | Phantom Marketing"},description:"Phantom Marketing — SEO, AEO/GEO, social media, PPC, branding, design and web development.",metadataBase:new URL("https://phantommarketing.netlify.app")};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><div className="page-wrap">{children}</div><Footer/><MobileNav/></body></html>}
