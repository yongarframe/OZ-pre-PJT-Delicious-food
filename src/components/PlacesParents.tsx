"use client";
import { useLocation } from "@/store/locationStore";
import { useEffect } from "react";

export default function PlacesParents() {
  const { setLocation } = useLocation();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) =>
      setLocation({
        // 위치정보 업데이트
        lat: success.coords.latitude, // 위도
        lon: success.coords.longitude, // 경도
      })
    );
  }, []);
  return <></>;
}
