export default function Footer() {
  return (
    <footer className="bg-amber-800 text-amber-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h2 className="text-2xl font-serif font-bold">Kulina<span className="text-amber-200">Rasa</span></h2>
            </div>
            <p className="text-amber-200 mb-4 leading-relaxed">
              Menghadirkan kehangatan masakan rumahan dengan cita rasa istimewa untuk kebersamaan keluarga.
            </p>
            <div className="flex items-center justify-center md:justify-start text-amber-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-sm">100% Bahan Alami • Tanpa Pengawet</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-serif font-semibold text-lg mb-4 text-amber-100">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-amber-200 hover:text-amber-50 transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#products" className="text-amber-200 hover:text-amber-50 transition-colors">Menu Kami</a>
              </li>
              <li>
                <a href="#about" className="text-amber-200 hover:text-amber-50 transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#contact" className="text-amber-200 hover:text-amber-50 transition-colors">Kontak</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-serif font-semibold text-lg mb-4 text-amber-100">Hubungi Kami</h3>
            <div className="space-y-2 text-amber-200">
              <div className="flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+62 823-1393-1717</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@kulinarasa.id</span>
              </div>
            </div>

            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://wa.me/6282313931717"
                className="bg-amber-700 text-amber-100 p-2 rounded-full hover:bg-amber-600 transition-colors"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/kulinarasa.id"
                className="bg-amber-700 text-amber-100 p-2 rounded-full hover:bg-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
              <a
                href="mailto:hello@kulinarasa.id"
                className="bg-amber-700 text-amber-100 p-2 rounded-full hover:bg-amber-600 transition-colors"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 pt-6 text-center">
          <p className="text-amber-300 text-sm">
            &copy; {new Date().getFullYear()} KulinaRasa. All rights reserved. |
            <span className="text-amber-200 ml-1">Hidangan penuh cinta dan cerita</span>
          </p>
        </div>
      </div>
    </footer>
  )
}