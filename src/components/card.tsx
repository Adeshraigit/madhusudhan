"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  
  const imageUrls = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {imageUrls.map((imageUrl, index) => (
      <div key={index} className="h-[25rem] relative flex items-center justify-center">
        <DirectionAwareHover imageUrl={imageUrl}>
          <p className="font-bold text-xl">Machine</p>
        </DirectionAwareHover>
      </div>
    ))}
  </div>
  );
}
