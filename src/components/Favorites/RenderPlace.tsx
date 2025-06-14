import Image from "next/image";
import { Place } from "@/types/placestype";
import React from "react";

export default function RenderPlace({
  place,
  setIsModal,
  setPlaceId,
}: {
  place: Place;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPlaceId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const deleteModalOpen = () => {
    setIsModal(true);
    setPlaceId(place.id);
  };
  return (
    <>
      <div
        className="flex flex-col cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-64"
        onClick={deleteModalOpen}
      >
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
