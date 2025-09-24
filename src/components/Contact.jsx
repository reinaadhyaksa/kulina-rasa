export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-amber-25">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-amber-800 mb-4">Hubungi Kami</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
          <p className="text-amber-700 mt-4 max-w-2xl mx-auto">
            Mari terhubung dan rasakan kehangatan pelayanan kami untuk setiap kebutuhan kuliner Anda
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 bg-amber-50 p-8 rounded-xl shadow-sm border border-amber-100">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-amber-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Informasi Kontak
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800">Alamat</h4>
                  <p className="text-amber-700">Jl. Kuliner No. 123, Kota Anda, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800">Telepon/WhatsApp</h4>
                  <p className="text-amber-700">+62 823-1393-1717</p>
                  <a
                    href="https://wa.me/6282313931717"
                    className="text-amber-500 text-sm hover:text-amber-600 transition-colors inline-flex items-center mt-1"
                  >
                    Kirim pesan langsung
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800">Email</h4>
                  <p className="text-amber-700">hello@kulinarasa.id</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800">Instagram</h4>
                  <p className="text-amber-700">@kulinarasa.id</p>
                  <a
                    href="https://instagram.com/kulinarasa.id"
                    className="text-amber-500 text-sm hover:text-amber-600 transition-colors inline-flex items-center mt-1"
                  >
                    Lihat profil kami
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Jam Operasional
              </h4>
              <ul className="text-amber-700 space-y-2">
                <li className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-medium">09:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sabtu - Minggu</span>
                  <span className="font-medium">10:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-amber-100">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-amber-700 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Kirim Pesan
              </h3>

              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-amber-800 font-medium mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-amber-800 font-medium mb-2">Alamat Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors"
                    placeholder="email@contoh.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-amber-800 font-medium mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-amber-800 font-medium mb-2">Pesan Anda</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors"
                    placeholder="Tulis pesan yang ingin Anda sampaikan..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-600 transition duration-300 w-full flex items-center justify-center group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Kirim Pesan
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}