import ProductCard from "./productcard";

const products = [
  {
    name: "Juggernaut",
    subname: "Gentlemen's Adaptogen Formula",
    iconPath: "../../../public/juggernaut.png",
    mainColor: "red",
    subColor: "black",
  },
  {
    name: "Werewold",
    subname: "Pre-workout",
    iconPath: "../../../public/preworkout3.png",
    mainColor: "blue",
    subColor: "red",
  },
  {
    name: "Gila Joint Iced Chai",
    subname: "Joint Care Formula",
    iconPath: "../../../public/gilajoint.png",
    mainColor: "orange",
    subColor: "red",
    subColor2: "purple",
  },
  {
    name: "Righteous Brain Food",
    subname: "Mushroom Latte",
    iconPath: "../../../public/brainfood.png",
    mainColor: "orange",
    subColor: "red",
    subColor2: "brown",
  },
];

const ProductsView = () => {
  return (
    <section className="w-full grid grid-cols-2">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </section>
  );
};

export default ProductsView;
