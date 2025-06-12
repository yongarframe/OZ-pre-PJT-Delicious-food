"use client";
import Image from "next/image";
import { Place } from "@/types/placestype";
import { useLocation } from "@/store/locationStore";
import { sortPlacesByDistance } from "../util/loc";

export default function RenderPlaces({ allPlace }: { allPlace: Place }) {
  const { location } = useLocation();
  const { lat, lon } = location;

  const sortedPlaces = sortPlacesByDistance(allPlace, lat, lon);

  return (
    <div className="flex flex-wrap justify-center gap-8 p-4">
      {sortedPlaces?.map((el) => (
        <div
          key={el.id}
          className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-64"
        >
          <Image
            className="w-full h-48 object-cover"
            width={300}
            height={300}
            src={`http://localhost:3000/${el.image.src}`}
            alt={el.image.alt}
            priority
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {el.title}
            </h3>
            <p className="text-gray-600 text-sm">{el.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
