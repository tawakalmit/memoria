import Image from "next/image"
import Link from "next/link"

export default function AlbumCover({title, image, path}) {
  return (
    <Link href={path} className="block w-full h-[8rem] bg-black relative">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-10 flex items-center justify-center"></div>
        <div className="absolute top-0 right-0 bottom-0 left-0 z-20 flex items-center justify-center">
            <h2 className="text-white text-xl">{title}</h2>
        </div>
        <Image className="w-full h-full object-cover" src={`/album-cover/${image}`} width={300} height={500} alt={title} />
    </Link>
  )
}
