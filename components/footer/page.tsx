// 📁 components/Lena/Footer.tsx

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* 👉 Название / логотип */}
        <div className="text-lg font-semibold">
          СтройДом
        </div>

        {/* 👉 Ссылки */}
        <nav className="space-x-4 text-sm">
          <Link href="/" className="hover:underline">Главная</Link>
          <Link href="/about" className="hover:underline">О нас</Link>
          <Link href="/products" className="hover:underline">Наши проекты</Link>
        </nav>
      </div>

      {/* 👉 Компания инфа */}
      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} СтройДом. Все права защищены.
      </div>
    </footer>
  )
}
