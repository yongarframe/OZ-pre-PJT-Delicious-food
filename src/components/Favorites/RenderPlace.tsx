import Image from "next/image";
import { Place } from "@/types/placestype";

export default function RenderPlace({ place }: { place: Place }) {
  // 클릭을 하면
  // 같은 id의 place data 를 console 에 출력
  // const addFavoritePlace = async () => {
  //   const res = await fetch(`http://localhost:3000/users/places`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       place: place,
  //     }),
  //   });
  //   if (!res.ok) {
  //     throw new Error(`서버오류 : ${res.status}`);
  //   }
  //   console.log("성공", res.json());
  // };
  return (
    <>
      <div className="flex flex-col cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-64">
        <Image
          className="w-full h-48 object-cover"
          width={300}
          height={300}
          src={`http://localhost:3000/${place.image.src}`}
          alt={place.image.alt}
          priority
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {place.title}
          </h3>
          <p className="text-gray-600 text-sm">{place.description}</p>
        </div>
      </div>
    </>
  );
}
