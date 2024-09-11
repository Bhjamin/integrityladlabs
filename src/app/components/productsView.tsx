import ProductCard from "./productCard";

const products = [
  {
    name: "Juggernaut",
    subname: "Gentlemen's Adaptogen Formula",
    iconPath: "/juggernaut.png",
    mainColor: "red",
    subColor: "black",
  },
  {
    name: "Werewold",
    subname: "Pre-workout",
    iconPath: "/preworkout3.png",
    mainColor: "blue",
    subColor: "red",
  },
  {
    name: "Gila Joint Iced Chai",
    subname: "Joint Care Formula",
    iconPath: "/gilajoint.png",
    mainColor: "orange",
    subColor: "red",
    subColor2: "purple",
  },
  {
    name: "Righteous Brain Food",
    subname: "Mushroom Latte",
    iconPath: "/brainfood.png",
    mainColor: "orange",
    subColor: "red",
    subColor2: "brown",
  },
];

const ProductsView = () => {
  return (
    <section className="w-full grid grid-cols-2 my-[137px]">
      {products.map((product, i) => {
        return (
          <>
            {i % 2 !== 0 && <div className="col-span-1" />}
            <ProductCard product={product} />
            {i % 2 === 0 && <div className="col-span-1" />}
          </>
        );
      })}
    </section>
  );
};

export default ProductsView;
