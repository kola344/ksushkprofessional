// 📁 components/Lena/About.tsx
'use client'

interface AboutProps {
  title?: string;
  description?: string;
  className?: string;
}

const About: React.FC<AboutProps> = ({
  title = 'Картошка',
  description = 'Этот раздел рассказывает о нашей любви к картошке. Картошка - это не просто овощ, это образ жизни!',
  className = '',
}) => {
  return (
    <section 
      className={`px-6 py-16 bg-gray-50 text-center overflow-hidden relative ${className}`}
      aria-labelledby="about-heading"
    >
      {/* Анимированная картошка */}
      <div className="absolute top-1/4 left-0 animate-flyPotato">
        <svg 
          className="w-16 h-16 text-amber-700 transform rotate-45" 
          viewBox="0 0 100 100"
        >
          {/* Реалистичная форма картошки */}
          <path 
            d="M50 15c-10 0-20 5-25 15-5 10-5 25 0 35 5 10 15 15 25 15s20-5 25-15c5-10 5-25 0-35-5-10-15-15-25-15z" 
            fill="currentColor"
          />
          {/* Глазки */}
          <circle cx="35" cy="40" r="3" fill="#fff" />
          <circle cx="65" cy="40" r="3" fill="#fff" />
          {/* Улыбка */}
          <path 
            d="M40 60 Q50 70 60 60" 
            stroke="#fff" 
            strokeWidth="2" 
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 
          id="about-heading"
          className="text-2xl font-bold text-gray-800 mb-4 md:text-3xl lg:text-4xl"
        >
          {title}
        </h2>
        <p className="text-gray-600 mx-auto text-base md:text-lg leading-relaxed">
          {description}
        </p>
        
        {/* Статичная картошка в центре */}
        <div className="mt-8">
          <svg 
            className="w-20 h-20 mx-auto text-amber-600 hover:scale-110 transition-transform" 
            viewBox="0 0 100 100"
          >
            <path 
              d="M50 10c-12 0-25 8-30 20-5 12-5 30 0 40 5 10 18 20 30 20s25-10 30-20c5-10 5-28 0-40-5-12-18-20-30-20z" 
              fill="currentColor"
            />
            <circle cx="40" cy="45" r="4" fill="#fff" />
            <circle cx="60" cy="45" r="4" fill="#fff" />
            <path 
              d="M45 70 Q50 80 55 70" 
              stroke="#fff" 
              strokeWidth="3" 
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Стили для анимации (можно добавить в globals.css) */}
      <style jsx>{`
        @keyframes flyPotato {
          0% {
            transform: translateX(-100px) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-flyPotato {
          animation: flyPotato 8s linear infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default About;