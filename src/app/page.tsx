"use client"
import { AppleCardsCarouselDemo } from "@/components/carasoul";
import { DirectionAwareHoverDemo } from "@/components/card";
import Image from "next/image";
import Choose from "@/components/choose";
import InfiniteImageScroll from "@/components/customers";
import Hero from "@/components/ripple";
import "./globals.css";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
   <main>
     <div className=" w-[100vw] h-[80vh] relative m-10 ml-0 mr-0">
    <Spline
        scene="https://prod.spline.design/NE8vz3jVCjPutAYR/scene.splinecode" 
      />
      </div>
    {/* <Hero/> */}
    <AppleCardsCarouselDemo/>
    <DirectionAwareHoverDemo/>
     <div className="max-w-2xl mx-auto antialiased pt-4 relative">
      {dummyContent.map((item, index) => (
        <div key={`content-${index}`} className="mb-12 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold mb-4 text-[#1E90FF]">{item.title}</h2>
          <div className="text-md prose prose-sm dark:prose-invert">
            {item?.image && (
              <Image
                src={item.image}
                alt="content image"
                height={500}
                width={500}
                className="rounded-lg mb-6 object-cover"
              />
            )}
            <div>{item.description}</div>
          </div>
          <button className="mt-4 shadow-md hover:shadow-lg hover:bg-[#1E90FF] bg-[#0070f3] rounded-md text-white font-semibold px-6 py-3 transition-colors duration-300 ease-in-out">
            <a href="/about">READ MORE</a>
          </button>
        </div>
      ))}
    </div>
    <Choose/>
    <InfiniteImageScroll/>
   </main>
  );
}

const dummyContent = [
  {
    title: "About Madhusudan Aqua Industries",
    description: (
      <>
        <p>
        Madhsudan aqua industry is a professionally managed company and it was established in the year 2021. We have been working as a manufacturer, supplier & exporter of various water treatment plants and spare parts. We offer modern Mineral Water Plant, Mineral Water Bottling Plant, Water Treatment Plants, R.O Systems, Water Purifiers, Desalination Plant, Ultra Filtration, Micron Filtration System, Ozone Generator, etc. Also we offer Ultraviolet Water System, Cartridges, Resins, Spares, Chemicals, Mineral Water Projects On Turnkey Basis, Waste Water, Stp, Ozone Treatment Plant, Ion Exchange Technology, Ultraviolet Treatment Plant and many more.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
