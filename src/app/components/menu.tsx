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
            y: 9,
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
        className="w-11 h-11 border-brightblue bg-neutral-500 border-2 rounded-xl p-1 text-xs flex flex-col justify-center items-center gap-[5px]"
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
              className="absolute top-[70px] h-12"
              initial={{ x: 150 }}
              animate={{ x: 0 }}
              exit={{ x: 150 }}
              transition={{ duration: 0.3 }}
            >
              <p>About</p>
            </motion.div>
            <motion.div
              className="absolute top-[100px]"
              initial={{ x: 150 }}
              animate={{ x: 0 }}
              exit={{ x: 150 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p>Products</p>
            </motion.div>
            <motion.div
              className="absolute top-[130px]"
              initial={{ x: 150 }}
              animate={{ x: 0 }}
              exit={{ x: 150 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <p>Home</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
