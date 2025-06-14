"use server";

import { revalidatePath } from "next/cache";
import { Place } from "@/types/placestype";

export default async function addFoavorite(place: Place) {
  const res = await fetch(`http://localhost:3000/users/places`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      place: place,
    }),
  });
  if (!res.ok) {
    throw new Error(`서버오류 : ${res.status}`);
  }
  console.log("성공", await res.json());
  revalidatePath("/favorite");
}
