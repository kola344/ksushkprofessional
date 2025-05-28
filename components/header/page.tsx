// 📁 components/Lena/Header.tsx

export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-white border-b flex justify-between items-center">
      {/* 👉 Название проекта */}
      <h1 className="text-lg font-semibold text-gray-800">Оказия</h1>

      {/* 👉 Навигация */}
      <nav className="space-x-4">
        <a href="/" className="text-gray-600 hover:text-black">Главная</a>
        <a href="/about" className="text-gray-600 hover:text-black">О нас</a>
        <a href="/products" className="text-gray-600 hover:text-black">Наши проекты</a>
      </nav>
    </header>
  )
}
