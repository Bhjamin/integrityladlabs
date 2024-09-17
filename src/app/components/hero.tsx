"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-[1075px] h-[225px] mx-auto my-[75px] flex justify-center items-center overflow-hidden border border-red rounded-2xl">
      <Image
        className="rounded-2xl"
        src="/background.png"
        alt="background"
        width={1075}
        height={225}
      />
      <h1 className="absolute">Welcome to Integrity Lad Labs</h1>
    </div>
  );
};

export default Hero;
