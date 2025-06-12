import { fetchPlaces } from "@/API/fetchAPI";
import RenderFavorites from "@/components/Favorites/RenderFavorites";
import { Place } from "@/types/placestype";

export default async function Places() {
  try {
    const favoritePlace: Place[] = await fetchPlaces("/users/places");
    return (
      <RenderFavorites favoritePlace={favoritePlace} errorMessage={null} />
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "오류발생";
    return <RenderFavorites favoritePlace={[]} errorMessage={message} />;
  }
}
