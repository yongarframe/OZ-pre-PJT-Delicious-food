"use client";
import { Location, Place } from "@/types/placestype";
import { sortPlacesByDistance } from "@/util/loc";
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
  const [location, setLocation] = useState<Location | null>(null);
  const [placeId, setPlaceId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);

  //현재위치 받아오기
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) =>
      setLocation({
        // 위치정보 업데이트
        lat: success.coords.latitude, // 위도
        lon: success.coords.longitude, // 경도
      })
    );
  }, []);

  //맛집정보 받아오기 전에 Loading 화면 띄우기
  useEffect(() => {
    if (favoritePlace) {
      setIsLoading(true);
    }
  }, [favoritePlace]);

  if (!location || !isLoading) {
    return <Loading />;
  }

  //가까운 위치 순으로 정렬
  const { lat, lon } = location;
  const sortedPlaces: Place[] = sortPlacesByDistance(favoritePlace, lat, lon);

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
        {sortedPlaces?.map((place) => (
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
