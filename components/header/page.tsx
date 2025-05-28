// 📁 components/Lena/Header.tsx

import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-white border-b flex justify-between items-center">
      {/* 👉 Название проекта */}
      <h1 className="text-lg font-semibold text-gray-800">Оказия</h1>

      {/* 👉 Навигация */}
      <nav className="space-x-4">
        <Link href="/" className="text-gray-600 hover:text-black">Главная</Link>
        <Link href="/about" className="text-gray-600 hover:text-black">О нас</Link>
        <Link href="/products" className="text-gray-600 hover:text-black">Наши проекты</Link>
      </nav>
    </header>
  )
}
