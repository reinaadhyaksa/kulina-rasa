export default function Homepage() {
  return (
    <section id="home" className="mt-2 bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 text-amber-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid-pattern" x="0" y="0" width="0.05" height="0.05">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center h-full relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
          <div className="max-w-md mx-auto md:mx-0">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <span className="text-amber-700 font-medium bg-amber-100 px-3 py-1 rounded-full text-sm">100% Bahan Alami</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-amber-800">
              Kehangatan Masakan Rumahan dengan{' '}
              <span className="text-amber-500">Cita Rasa Istimewa</span>
            </h1>

            <p className="text-lg text-amber-700 mb-6 leading-relaxed">
              Nikmati hidangan lezat dan menyehatkan yang diracik dari bahan-bahan segar pilihan,
              tanpa pengawet atau MSG tambahan. Rasakan kehangatan layaknya masakan di rumah sendiri.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#products"
                className="bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition duration-300 inline-flex items-center justify-center text-center shadow-md hover:shadow-lg"
              >
                Jelajahi Menu Kami
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#about"
                className="border border-amber-500 text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-amber-50 transition duration-300 inline-flex items-center justify-center text-center"
              >
                Tentang Kami
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>

            <div className="flex items-center text-sm text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Praktis • Sehat • Lezat</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dc9q58yts/image/upload/f_auto,q_auto/v1758465799/Gemini_Generated_Image_c4r8wnc4r8wnc4r8_fvfkcy.png"
              alt="Makanan sehat KulinaRasa"
              className="rounded-xl shadow-lg w-full max-w-md border-4 border-white transform hover:scale-105 transition duration-700"
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-md">
              <div className="text-center">
                <div className="text-amber-700 font-bold">Rice Bowls</div>
                <div className="text-amber-500 text-sm">Praktis & Lezat</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-amber-100 p-3 rounded-full shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-10 left-10 w-16 h-16 rounded-full bg-amber-200 opacity-30 animate-bounce"></div>
      <div className="hidden md:block absolute top-10 right-20 w-12 h-12 rounded-full bg-amber-300 opacity-40 animate-pulse"></div>
    </section>
  )
}