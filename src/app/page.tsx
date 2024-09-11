import Nav from "./components/nav";
import ProductsView from "./components/productsView";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center animate-imageSlideshow bg-contain bg-center bg-no-repeat">
      <Nav />
      <ProductsView />
    </main>
  );
};

export default Home;
