import Image from "next/image";
import Title from "./components/title";
import Categories from "./components/categories";
import { Suspense } from "react";
import Loading from "./components/loading";
import Cards from "./components/cards";

export default function Home() {

   return (
      <Suspense fallback={<Loading/>}>
         <main className="flex min-h-screen flex-col items-center p-24">
            <Title title="Explore" />
            <Categories />
            <Cards />
         </main>
      </Suspense>
   );
}
