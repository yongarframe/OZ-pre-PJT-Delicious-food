import { fetchPlaces } from "@/API/fetchAPI";
import RenderPlaces from "./RenderPlaces";

export default async function Places() {
  try {
    const allPlace = await fetchPlaces("/places", "force-cache");
    return <RenderPlaces allPlace={allPlace} errorMessage={null} />;
  } catch (error) {
    const message = error instanceof Error ? error.message : "오류발생";
    return <RenderPlaces allPlace={[]} errorMessage={message} />;
  }
}
