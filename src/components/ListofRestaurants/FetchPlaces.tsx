import { fetchPlaces } from "@/API/fetchAPI";
import { Place } from "@/types/placestype";
import RenderPlaces from "./RenderPlaces";

export default async function Places() {
  try {
    const allPlace: Place[] = await fetchPlaces("/places");
    return <RenderPlaces allPlace={allPlace} errorMessage={null} />;
  } catch (error) {
    const message = error instanceof Error ? error.message : "오류발생";
    return <RenderPlaces allPlace={[]} errorMessage={message} />;
  }
}
