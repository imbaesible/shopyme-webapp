import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner"
import ProductFeed from "../components/ProductFeed"

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
    <Header />

    <main className="max-w-screen-xl mx-auto">

      <Banner />

      <ProductFeed products={products} />

    </main>
      
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
    );

  return { 
    props:{
      products,
    },
  };
}


// GET >>> https://fakestoreapi.com/products
