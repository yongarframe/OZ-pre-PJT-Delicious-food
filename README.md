```
|
|
├─ src
│  ├─ API                                데이터 불러오기 API
│  │  └─ fetchAPI.ts
│  ├─ actions                            즐겨찾기 추가/삭제API
│  │  ├─ addFavorties.ts
│  │  └─ deleteFavorite.ts
│  ├─ app
│  │  ├─ (main)                          라우트 그룸 설정 (라우팅 주소에 영향이 안감)
│  │  │  ├─ favorites
│  │  │  │  └─ page.tsx                  localhost:3000/favorites
│  │  │  ├─ layout.tsx                   전체 레이아웃
│  │  │  └─ page.tsx                     localhost:3000
│  │  ├─ error.tsx                       에러발생 시 이동페이지
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  └─ layout.tsx
│  ├─ components
│  │  ├─ Favorites                       favorites 페이지 컴포넌트
│  │  │  ├─ FavoriteDeleteModal.tsx
│  │  │  ├─ RenderFavorite.tsx
│  │  │  └─ RenderFavorites.tsx
│  │  └─ ListofRestaurants               루트페이지 컴포넌트
│  │     ├─ FetchPlaces.tsx
│  │     ├─ LoadingForPlace.tsx
│  │     ├─ RenderPlace.tsx
│  │     └─ RenderPlaces.tsx
│  ├─ store
│  │  └─ locationStore.ts
│  ├─ types
│  │  └─ placestype.ts                   타입 정의
│  └─ util                               유틸 함수
│     ├─ delay.ts                        딜레이적용 함수
│     └─ loc.ts                          가까운 거리 계산함수
├─ test.http                             REST API
└─ tsconfig.json
```
