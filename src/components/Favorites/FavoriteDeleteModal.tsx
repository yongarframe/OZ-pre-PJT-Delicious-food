import deleteFoavorite from "@/actions/deleteFavorite";

export default function FavoriteDeleteModal({
  placeId,
  setIsModal,
}: {
  placeId: string;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const deleteFavorite = () => {
    deleteFoavorite(placeId);
    console.log("삭제 성공");
    setIsModal(false);
  };
  return (
    <div
      className="bg-stone-100 absolute w-80 h-40 gap-[10px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center rounded-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <div>정말 삭제하시겠습니까</div>
      <div className="flex justify-center items-center gap-4">
        <button
          className="bg-stone-200 px-4 py-2 rounded-lg hover:bg-stone-300 w-20 text-sm cursor-pointer"
          onClick={() => setIsModal(false)}
        >
          아니오
        </button>
        <button
          className="bg-stone-200 px-4 py-2 rounded-lg hover:bg-stone-300 w-20 text-sm cursor-pointer"
          onClick={deleteFavorite}
        >
          네
        </button>
      </div>
    </div>
  );
}
