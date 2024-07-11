import Menu from "./menu";

const Nav = () => {
  return (
    <div className="w-full border-b-[3px] border-lime bg-brightblue grid grid-cols-2 tablet:grid-cols-3 h-16">
      <div className="hidden tablet:block tablet:col-span-1">
        <a href="/" className="flex h-full ml-3 items-center">
          <img
            src="../icon.png"
            alt="logo"
            className="aspect-square max-h-[50px] rounded-full shadow-[0px_0px_3px_3px_rgba(175,255,38)] transition-all duration-[125ms] hover:scale-[1.025] hover:drop-shadow-[0_1px_1px_rgba(0,0,0,1)] active:scale-100 active:drop-shadow-none"
          />
        </a>
      </div>
      <div className="col-span-1 flex justify-center items-center h-full pl-2 tablet:pl-0">
        <p className=" text-lime text-center text-lg leading-6 sm:text-xl md:text-2xl font-medium drop-shadow-[1.75px_1.75px_1px_rgba(0,0,0,1)]">
          Integrity Lad Labs
        </p>
      </div>
      <div className="col-span-1 hidden tablet:block">
        <div className="flex lg:gap-6 xl:gap-8 tablet:gap-4 justify-center items-center h-full">
          <a className="h-full flex items-center p-1 group" href="/">
            <p className="text-lime tablet:text-lg xl:text-xl font-semibold drop-shadow-[1.75px_1.75px_1px_rgba(0,0,0,1)] transition-all duration-75 group-hover:scale-105 group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] cursor-pointer">
              Home
            </p>
          </a>
          <a className="h-full flex items-center p-1 group" href="/about">
            <p className="text-lime tablet:text-lg xl:text-xl font-semibold drop-shadow-[1.75px_1.75px_1px_rgba(0,0,0,1)] transition-all duration-75 group-hover:scale-105 group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] cursor-pointer">
              About
            </p>
          </a>
          <a className="h-full flex items-center p-1 group" href="/products">
            <p className="text-lime tablet:text-lg xl:text-xl font-semibold drop-shadow-[1.75px_1.75px_1px_rgba(0,0,0,1)] transition-all duration-75 group-hover:scale-105 group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] cursor-pointer">
              Products
            </p>
          </a>
        </div>
      </div>
      <div className="col-span-1 flex tablet:hidden h-full items-center justify-center">
        <Menu />
      </div>
    </div>
  );
};

export default Nav;
