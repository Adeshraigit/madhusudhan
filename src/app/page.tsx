'use client'

import { AppleCardsCarouselDemo } from "@/components/carasoul";
import { DirectionAwareHoverDemo } from "@/components/card";
import { twMerge } from "tailwind-merge"
import Image from "next/image";
import Choose from "@/components/choose";
import InfiniteImageScroll from "@/components/customers";
import { cn } from "@/utils/cn";
import Hero from "@/components/ripple";

export default function Home() {
  return (
   <main>
    <Hero/>
    <AppleCardsCarouselDemo/>
    <DirectionAwareHoverDemo/>
    <div className="max-w-2xl mx-auto antialiased pt-4 relative">
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
