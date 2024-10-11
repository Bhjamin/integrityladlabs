"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log(latest);
  // });S

  const useParallax = (y: MotionValue) => useTransform(() => y.get() * 0.5);
  const y = useParallax(scrollY);

  return (
    <div className="w-[1075px] h-[325px] mx-auto my-40 flex justify-center items-center overflow-hidden border border-red rounded-2xl">
      <motion.div style={{ translateY: y, y: 50 }}>
        <Image
          className="rounded-2xl"
          src="/background.png"
          alt="background"
          width={1075}
          height={225}
        />
      </motion.div>
      <h1 className="absolute">Welcome to Integrity Lad Labs</h1>
    </div>
  );
};

export default Hero;
