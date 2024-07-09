import icon from "../icon.png";

const nav = () => {
  return (
    <div className="w-full h-14 border-b-2 border-lime bg-brightblue flex justify-between items-center p-1">
      <img src="../icon.png" alt="logo" className="w-[46px]" />
      <p className=" text-lime">Integrity Lad Labs</p>
      <div className="flex gap-3 p-4">
        <p>About</p>
        <p>Products</p>
      </div>
    </div>
  );
};

export default nav;
