const Nav = () => {
  return (
    <div className="w-full border-b-2 border-lime bg-brightblue grid grid-cols-3 h-16">
      <div className="col-span-1">
        <a href="/" className="flex h-full ml-3 items-center">
          <img
            src="../icon.png"
            alt="logo"
            className="aspect-square max-h-[50px] rounded-full shadow-[0px_0px_3px_3px_rgba(175,255,38)] transition-all duration-[125ms] hover:scale-[1.025] hover:drop-shadow-[0_1px_1px_rgba(0,0,0,1)] active:scale-100 active:drop-shadow-none"
          />
        </a>
      </div>
      <div className="col-span-1 flex justify-center items-center h-full">
        <p className=" text-lime text-2xl font-medium drop-shadow-[0_2.5px_2.5px_rgba(0,0,0,1)]">
          Integrity Lad Labs
        </p>
      </div>
      <div className="col-span-1">
        <div className="flex gap-12 justify-center items-center h-full">
          <a className="h-full flex items-center p-1 group" href="/">
            <p className="text-lime text-xl font-semibold drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)] transition-all duration-75 group-hover:scale-105 group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] cursor-pointer">
              Home
            </p>
          </a>
          <a className="h-full flex items-center p-1 group" href="/about">
            <p className="text-lime text-xl font-semibold drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)] transition-all duration-75 group-hover:scale-105 group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] cursor-pointer">
              About
            </p>
          </a>
          <a className="h-full flex items-center p-1 group" href="/products">
            <p className="text-lime text-xl font-semibold drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,1)] transition-all duration-75 group-hover:scale-105 group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] cursor-pointer">
              Products
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
