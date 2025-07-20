import Image from "next/image"

export default function ImageThumb({title, source}) {
  return (
    <div className="w-full h-full aspect-square">
        <Image unoptimized className="w-full h-full object-cover" width={300} height={300} src={source} alt={title ? title : "alt"} />
    </div>
  )
}
