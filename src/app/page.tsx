"use client";
import Hero from "./components/hero";
import Nav from "./components/nav";
import ProductsView from "./components/productsView";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Nav />
      <Hero />
      <ProductsView />
    </main>
  );
};

export default Home;
