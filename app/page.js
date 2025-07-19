import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen relative">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="/video/asteroids.mp4" type="video/mp4" />
      </video>
      <div className="z-10 absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50"></div>
      <div className="z-20 absolute top-0 right-0 bottom-0 left-0 flex pt-[70%] justify-center">
        <div>
          <h1 className="text-5xl text-white text-center">Memoria</h1>
          <Link href="/albums">
            <div className="cursor-pointer px-5 flex items-center gap-2 justify-center w-full mx-auto border border-white h-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 mt-5">
              <p className="text-white text-sm titillium-web-bold select-none">Step inside and relive the moments</p>
              <FaArrowRight size={15} color="#FFFFFF" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
