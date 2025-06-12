import { fetchPlaces } from "@/API/fetchAPI";
import { delay } from "@/util/delay";
import { Place } from "@/types/placestype";
import RenderPlaces from "./RenderPlaces";

export default async function Places() {
  try {
    await delay(1500); // 로딩중 표시하기 위한 강제 딜레이 적용
    const allPlace: Place[] = await fetchPlaces();
    return <RenderPlaces allPlace={allPlace} errorMessage={null} />;
  } catch (error) {
    const message = error instanceof Error ? error.message : "오류발생";
    return <RenderPlaces allPlace={[]} errorMessage={message} />;
  }
}
