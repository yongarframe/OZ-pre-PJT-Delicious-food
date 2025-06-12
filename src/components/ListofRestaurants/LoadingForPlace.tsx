export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="space-y-6 text-center">
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div
            className="absolute inset-0 border-4 border-blue-500 rounded-full animate-spin"
            style={{ borderTopColor: "transparent" }}
          ></div>
        </div>
        <div className="animate-pulse">
          <div className="h-4 w-32 mx-auto bg-gray-200 rounded"></div>
          <div className="mt-3 h-3 w-24 mx-auto bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
