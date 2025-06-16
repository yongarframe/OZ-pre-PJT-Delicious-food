"use client";
import { Place } from "@/types/placestype";
import { useEffect, useState } from "react";
import Loading from "@/components/ListofRestaurants/LoadingForPlace";
import FavoriteDeleteModal from "./FavoriteDeleteModal";
import RanderFavorite from "./RenderFavorite";

export default function RenderFavorites({
  favoritePlace,
  errorMessage,
}: {
  favoritePlace: Place[];
  errorMessage: string | null;
}) {
  const [placeId, setPlaceId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);

  //즐겨찾기 받아오기 전에 Loading 화면 띄우기
  useEffect(() => {
    if (favoritePlace) {
      setIsLoading(true);
    }
  }, [favoritePlace]);

  if (!isLoading) {
    return <Loading />;
  }

  // 에러 메시지 출력
  if (errorMessage) {
    return (
      <div className="fixed top-1/5 left-1/2 transform -translate-x-1/2 bg-red-50 p-5 border border-red-300 rounded-lg z-[1000]">
        <p>{errorMessage}</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 p-4 overflow-y-hidden">
        {favoritePlace?.map((place) => (
          <RanderFavorite
            key={place.id}
            place={place}
            setIsModal={setIsModal}
            setPlaceId={setPlaceId}
          />
        ))}
      </div>
      {isModal && (
        <div
          className="fixed top-0 left-0 w-full h-full backdrop-blur-xs flex"
          onClick={() => setIsModal(false)}
        >
          <FavoriteDeleteModal placeId={placeId} setIsModal={setIsModal} />
        </div>
      )}
    </>
  );
}
