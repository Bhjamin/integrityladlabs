"use client";
import Menu from "./menu";
import {
  useMotionValue,
  useScroll,
  motion,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../utils/twMerge";

const Nav = () => {
  const { scrollY } = useScroll();
  const [isMinimized, setIsMinimized] = useState(false);
  const [scroll, setScroll] = useState(scrollY.get());

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest);
    if (latest > scroll) {
      setIsMinimized(true);
    } else {
      setIsMinimized(false);
    }
  });

  return (
    <div
      className={cn(
        "z-[999] w-full fixed top-0 shadow shadow-brightblue !h-[50px] tablet:!h-[70px] justify-around flex px-4 bg-black transition-all duration-200 ease-in-out",
        isMinimized && "tablet:!h-[40px] tablet:hover:!h-[70px]"
      )}
    >
      <div>
        <a href="/" className="flex h-full items-center">
          <img src="/logo2.png" alt="logo" className="h-full" />
        </a>
      </div>
      <div className={cn("hidden tablet:block")}>
        <div className="flex lg:gap-6 xl:gap-8 tablet:gap-4 justify-center items-center h-full">
          <a className="h-full flex items-center p-1 group" href="/">
            <p
              className={cn(
                "text-lime tablet:text-2xl xl:text-3xl tracking-wide font-semibold group-hover:border-b-2 border-brightblue drop-shadow-[1.75px_1.75px_1px_rgba(0,0,0,1)] transition-all duration-75 group-hover:scale-105 group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] cursor-pointer",
                isMinimized &&
                  "!text-xl tablet:group-hover:!text-2xl xl:group-hover:!text-3xl"
              )}
            >
              Home
            </p>
          </a>
          <a className="h-full flex items-center p-1 group" href="/about">
            <p
              className={cn(
                "text-lime tablet:text-2xl xl:text-3xl tracking-wide font-semibold group-hover:border-b-2 border-brightblue drop-shadow-[1.75px_1.75px_1px_rgba(0,0,0,1)] transition-all duration-75 group-hover:scale-105 group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] cursor-pointer",
                isMinimized &&
                  "!text-xl tablet:group-hover:!text-2xl xl:group-hover:!text-3xl"
              )}
            >
              About
            </p>
          </a>
          <a className="h-full flex items-center p-1 group" href="/products">
            <p
              className={cn(
                "text-lime tablet:text-2xl xl:text-3xl tracking-wide font-semibold group-hover:border-b-2 border-brightblue drop-shadow-[1.75px_1.75px_1px_rgba(0,0,0,1)] transition-all duration-75 group-hover:scale-105 group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] cursor-pointer",
                isMinimized &&
                  "!text-xl tablet:group-hover:!text-2xl xl:group-hover:!text-3xl"
              )}
            >
              Products
            </p>
          </a>
        </div>
      </div>
      <div className="flex tablet:hidden justify-center items-center">
        <Menu />
      </div>
    </div>
  );
};

export default Nav;
