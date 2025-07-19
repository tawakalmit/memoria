import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function MenuCover({path, title, img}) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className="w-full h-[8rem] bg-black relative cursor-pointer"
    >
        <Link href={path}>
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-10 flex items-center justify-center"></div>
        <div className="absolute top-0 right-0 bottom-0 left-0 z-20 flex items-center justify-center">
            <h2 className="text-white text-xl">{title}</h2>
        </div>
        <Image className="w-full h-full object-cover" src={`/album-cover/${img}`} width={300} height={500} alt={title} />
        </Link>
    </motion.div>
  )
}
