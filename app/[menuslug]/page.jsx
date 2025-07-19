import AlbumCover from "@/components/Shared/AlbumCover";
import { Menu } from "@/datas/menu";

export default async function Albums({ params }) {
  const myslug = params?.menuslug;
  const selectedMenu = Menu.find((item) => item.slug === myslug);
  const allAlbum = selectedMenu?.albums;

  if (!allAlbum) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-gray-600 text-xl">Album not found</p>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen flex flex-col w-full justify-center gap-5">
      {allAlbum.map((item, index) => (
        <AlbumCover 
          key={index} 
          title={item.title}
          image={item.image} 
          path={`/${myslug}/${item.slug}`}
        />
      ))}
    </div>
  );
}
