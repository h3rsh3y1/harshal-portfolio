import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavLink } from "./components/NavLinks";
import { Home, Folder, Settings, Mail } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harshal Ghate",
  description: "Portfolio of Harshal Ghate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-b from-[#1f005c] via-[#5b0060] to-[#000000] min-h-screen text-white relative`}
      >
        {/* Background noise overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg width="100%" height="100%">
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect
              width="100%"
              height="100%"
              filter="url(#noise)"
              opacity="0.18"
            />
          </svg>
        </div>

        {/* Layout wrapper */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navbar */}
          <header className="sticky top-4 z-50 flex justify-center">
            <nav className="flex gap-6 px-6 py-2 text-sm font-medium text-white backdrop-blur-md bg-white/10 border border-white/20 shadow-md rounded-full">
              <NavLink href="/"><Home size={16} />Home</NavLink>
              <NavLink href="/projects"><Folder size={16} />Projects</NavLink>
              <NavLink href="/skills"><Settings size={16} />Skills</NavLink>
              <NavLink href="/contact"><Mail size={16} />Contact</NavLink>
            </nav>
          </header>

          {/* Main content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Optional footer */}
          <footer className="text-center py-6 text-xs text-gray-400 opacity-60">
            &copy; {new Date().getFullYear()} Harshal Ghate. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
