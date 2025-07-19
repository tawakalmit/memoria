"use client";

import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MenuCover from "@/components/Shared/MenuCover";
import { Menu } from "@/datas/menu";

export default function Home() {
  const [Opening, setOpening] = useState(true);

  return (
    <main className="w-full h-screen relative">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="/video/asteroids.mp4" type="video/mp4" />
      </video>

      <div className="z-10 absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50"></div>

      {Opening && (
      <div className="z-20 absolute top-0 right-0 bottom-0 left-0 flex pt-[70%] justify-center">
        <div className="w-10/12">
          <AnimatePresence>
              <motion.h1
                key="heading"
                className="text-5xl text-white text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              >
                Memoria
              </motion.h1>
          </AnimatePresence>

          <AnimatePresence>
              <motion.div
                key="button"
                onClick={() => setOpening(false)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="cursor-pointer px-5 flex items-center gap-2 justify-center w-full mx-auto border border-white h-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 mt-5"
              >
                <p className="text-white text-sm titillium-web-bold select-none">
                  Step inside and relive the moments
                </p>
                <FaArrowRight size={15} color="#FFFFFF" />
              </motion.div>
          </AnimatePresence>
        </div>
      </div>
      )}

      {!Opening && (
      <div className="z-20 absolute top-0 right-0 bottom-0 left-0 flex justify-center">
        <div className="w-10/12 flex flex-col items-center gap-5 justify-center">
          <AnimatePresence>
            {Menu.map((item, index)=>(
              <MenuCover 
                key={index}
                title={item.title}
                img={item.image}
                path={item.slug}
              /> 
            ))}
          </AnimatePresence>
        </div>
      </div>
      )}

    </main>
  );
}
