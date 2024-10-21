"use client";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);

    {
      !isMenuOpen
        ? animation1.start({
            rotate: 45,
            y: 8,
          })
        : animation1.start({
            rotate: 0,
            y: 0,
          });
    }

    {
      !isMenuOpen
        ? animation2.start({
            opacity: 0,
          })
        : animation2.start({
            transition: { delay: 0.1 },
            opacity: 1,
          });
    }

    {
      !isMenuOpen
        ? animation3.start({
            rotate: -45,
            y: -8,
          })
        : animation3.start({
            rotate: 0,
            y: 0,
          });
    }
  };

  return (
    <>
      <button
        onClick={toggleMenuHandler}
        className="w-9 h-9 border-brightblue bg-neutral-500 border-2 rounded-md p-1 text-xs flex flex-col justify-center items-center gap-[5px]"
      >
        <motion.div
          animate={animation1}
          className="w-[95%] h-[3px] bg-lime rounded-full"
        />
        <motion.div
          animate={animation2}
          className="w-[95%] h-[3px] bg-lime rounded-full"
        />
        <motion.div
          animate={animation3}
          className="w-[95%] h-[3px] bg-lime rounded-full"
        />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="absolute top-[50px] h-12 bg-lime border-l border-b bg-opacity-50 w-full flex items-center pl-5"
              initial={{ x: window.innerWidth }}
              animate={{ x: 0 }}
              exit={{ x: window.innerWidth }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xl text-white">About</p>
            </motion.div>
            <motion.div
              className="absolute top-[98px] h-12 bg-brightblue border-l border-b bg-opacity-50 w-full flex items-center pl-5"
              initial={{ x: window.innerWidth }}
              animate={{ x: 25 }}
              exit={{ x: window.innerWidth }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              <p className="text-xl">Products</p>
            </motion.div>
            <motion.div
              className="absolute top-[146px] h-12 bg-lime border-l border-b bg-opacity-50 w-full flex items-center pl-5"
              initial={{ x: window.innerWidth }}
              animate={{ x: 50 }}
              exit={{ x: window.innerWidth }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p className="text-xl">Home</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
