'use client'

import { AppleCardsCarouselDemo } from "@/components/carasoul";
import { DirectionAwareHoverDemo } from "@/components/card";
import { twMerge } from "tailwind-merge"
import Image from "next/image";
import Choose from "@/components/choose";
import InfiniteImageScroll from "@/components/customers";
import { cn } from "@/utils/cn";
import Hero from "@/components/ripple";
import { GlobeDemo } from "@/components/globedemo";

export default function Home() {
  return (
   <main>
    <Hero/>
    <AppleCardsCarouselDemo/>
    <DirectionAwareHoverDemo/>
    {/* <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <p className={twMerge("text-2xl mb-4")}>
              {item.title}
            </p>
 
            <div className="text-md  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
            <button className="mt-2 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
              READ MORE
          </button>
          </div>
        ))}
    </div> */}
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
            <p>{item.description}</p>
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
