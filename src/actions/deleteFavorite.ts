"use server";

import { revalidatePath } from "next/cache";

export default async function deleteFoavorite(id: string) {
  const res = await fetch(`http://localhost:3000/users/places/${id}`, {
    method: "DELETE",
  });
  console.log(res.status);
  if (!res.ok) {
    throw new Error(`서버오류 : ${res.status}`);
  }
  revalidatePath("/favorite");
}
