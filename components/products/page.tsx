// 📁 components/Lena/Products.tsx

export default function Products() {
  return (
    <section className="px-6 py-10 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Наши работы</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {/* 👉 Карточка 1 */}
        <div className="bg-gray-100 p-4 rounded-xl shadow text-center">
          <img
            src="/image.jpeg"
            alt="Пример работы"
            className="w-full h-auto rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Дом 1</h3>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Смотреть
          </a>
        </div>

        {/* 👉 Карточка 2 */}
        <div className="bg-gray-100 p-4 rounded-xl shadow text-center">
          <img
            src="/image.jpeg"
            alt="Пример работы"
            className="w-full h-auto rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Дом 2</h3>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Смотреть
          </a>
        </div>

        {/* 👉 Карточка 3 */}
        <div className="bg-gray-100 p-4 rounded-xl shadow text-center">
          <img
            src="/image.jpeg"
            alt="Пример работы"
            className="w-full h-auto rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Коттедж</h3>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Смотреть
          </a>
        </div>
      </div>
    </section>
  )
}
