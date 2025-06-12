import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-white shadow-sm w-full fixed top-0 z-10">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="w-full max-w-[800px] mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              맛집 탐험가의 기록 📝
            </h1>
            <nav className="mt-4">
              <div className="flex justify-center space-x-8">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  맛집 목록
                </Link>
                <Link
                  href="/favorites"
                  className="text-gray-600 hover:text-blue-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  즐겨찾기
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-[120px]">
        {children}
      </main>
    </div>
  );
}
