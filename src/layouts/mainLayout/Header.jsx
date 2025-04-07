import React from "react";
import { useTheme } from '@/contexts/ThemeContext';
import Image from "next/image";
import Button from "@/src/components/Button";

export function Header() {
  const { theme } = useTheme();

  return (
    <header className={`position-fixed w-full border-b  ${theme === "dark" ? "bg-black border-gray-800" : "bg-white border-gray-200"}`}> 
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-2 lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Love Recap</span>
            <Image
              src="/LOGO_01.png"
              alt="Love Memories"
              width={32}
              height={32}
            />
            <span className={`text-lg font-semibold text-gray-900 dark:text-white`}>Love Memories</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <Button>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold text-gray-900 dark:text-white hover:underline">
            Recursos
          </a>
          <a href="#" className="text-sm font-semibold text-gray-900 dark:text-white hover:underline">
            Preços
          </a>
          <a href="#" className="text-sm font-semibold text-gray-900 dark:text-white hover:underline">
            Sobre
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="outline">Entrar</Button>
        </div>
      </nav>
    </header>
  );
}