export async function fetchPlaces() {
  const res = await fetch(`http://localhost:3000/places`);

  if (!res.ok) {
    throw new Error("에러가 발생했습니다.");
  }

  const data = await res.json();
  return data.places;
}
