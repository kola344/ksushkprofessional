// 📁 components/Lena/AboutNew.tsx

export default function AboutNew() {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Почему выбирают нас</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {/* 🔨 Преимущество 1 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="mb-4 flex justify-center">
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 10l9-6 9 6v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" />
              <path d="M9 22V12h6v10" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Надёжное строительство</h3>
          <p className="text-gray-600">Работаем по ГОСТ, используем качественные материалы и соблюдаем все сроки.</p>
        </div>

        {/* ⏱️ Преимущество 2 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="mb-4 flex justify-center">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 8v4l3 3" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Соблюдение сроков</h3>
          <p className="text-gray-600">Мы не затягиваем проекты и сдаём объекты вовремя — с гарантией.</p>
        </div>

        {/* 👷 Преимущество 3 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="mb-4 flex justify-center">
            <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Ответственные мастера</h3>
          <p className="text-gray-600">Наши бригады — это проверенные специалисты с опытом от 5 лет.</p>
        </div>
      </div>
    </section>
  )
}
