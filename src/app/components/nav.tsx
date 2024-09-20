"use client";
import Menu from "./menu";
import { useMotionValue, useVelocity } from "framer-motion";
import { useRef } from "react";

const Nav = () => {
  const navRef = useRef();

  return (
    <div className="z-[999] w-full sticky top-0 shadow shadow-brightblue bg-lightgray justify-around flex h-[70px] px-4">
      <div>
        <a href="/" className="flex h-full items-center">
          <img src="/logo2.png" alt="logo" className="h-full" />
        </a>
      </div>
      <div className=" hidden tablet:block">
        <div className="flex lg:gap-6 xl:gap-8 tablet:gap-4 justify-center items-center h-full">
          <a className="h-full flex items-center p-1 group" href="/">
            <p className="text-lime tablet:text-2xl xl:text-3xl tracking-wide font-semibold group-hover:border-b-2 border-brightblue drop-shadow-[1.75px_1.75px_1px_rgba(0,0,0,1)] transition-all duration-75 group-hover:scale-105 group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] cursor-pointer">
              Home
            </p>
          </a>
          <a className="h-full flex items-center p-1 group" href="/about">
            <p className="text-lime tablet:text-2xl xl:text-3xl tracking-wide font-semibold group-hover:border-b-2 border-brightblue drop-shadow-[1.75px_1.75px_1px_rgba(0,0,0,1)] transition-all duration-75 group-hover:scale-105 group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] cursor-pointer">
              About
            </p>
          </a>
          <a className="h-full flex items-center p-1 group" href="/products">
            <p className="text-lime tablet:text-2xl xl:text-3xl tracking-wide font-semibold group-hover:border-b-2 border-brightblue drop-shadow-[1.75px_1.75px_1px_rgba(0,0,0,1)] transition-all duration-75 group-hover:scale-105 group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] cursor-pointer">
              Products
            </p>
          </a>
        </div>
      </div>
      <div className=" flex tablet:hidden h-full items-center justify-center">
        <Menu />
      </div>
    </div>
  );
};

export default Nav;
