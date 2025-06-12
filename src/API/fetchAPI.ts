export async function fetchPlaces() {
  const res = await fetch(`http://localhost:3000/places`);

  if (!res.ok) {
    console.log(res.status);
    switch (res.status) {
      case 400:
        throw new Error("잘못된 요청입니다. 입력값을 확인해주세요.");
      case 401:
        throw new Error("로그인이 필요합니다.");
      case 403:
        throw new Error("접근 권한이 없습니다.");
      case 404:
        throw new Error("요청한 장소 정보를 찾을 수 없습니다.");
      case 500:
        throw new Error("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      default:
        throw new Error("알 수 없는 오류가 발생했습니다.");
    }
  }

  const data = await res.json();
  return data.places;
}
