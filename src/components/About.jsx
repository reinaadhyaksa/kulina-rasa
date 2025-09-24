import { Users, Package } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-amber-800 mb-4">Tentang KulinaRasa</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-amber-700 mt-4 max-w-2xl mx-auto">Menghadirkan kehangatan masakan rumahan dengan cita rasa istimewa untuk kebersamaan keluarga</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dc9q58yts/image/upload/f_auto,q_auto/v1758457067/Gemini_Generated_Image_s7cnzis7cnzis7cn_zpajim.png"
                alt="Dapur KulinaRasa"
                className="rounded-lg shadow-md w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Bahan Alami</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-amber-100">
                <Users className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <h4 className="font-semibold text-amber-800">Komunitas</h4>
                <p className="text-sm text-amber-700">Ratusan keluarga telah mempercayai kami</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center border border-amber-100">
                <Package className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <h4 className="font-semibold text-amber-800">Kualitas</h4>
                <p className="text-sm text-amber-700">Bahan segar pilihan tanpa pengawet</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100 mb-8">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-amber-700 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Cerita Kami
              </h3>
              <p className="text-amber-800 mb-4">KulinaRasa adalah ruang kuliner yang menghadirkan kehangatan masakan rumahan dengan cita rasa istimewa. Setiap hidangan kami diracik dari bahan-bahan segar pilihan, tanpa pengawet atau MSG tambahan, sehingga aman dan menyehatkan untuk seluruh keluarga.</p>
              <p className="text-amber-800">Kami percaya makanan bukan sekadar pengisi perut, tapi juga sarana menghadirkan kebersamaan, cerita, dan cinta. Karena itu, KulinaRasa selalu berkomitmen menjaga keaslian rasa alami dan memberikan pelayanan yang hangat untuk setiap pelanggan.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-amber-700 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Visi & Misi
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-amber-800">Menyediakan makanan rumahan berkualitas dengan cita rasa otentik layaknya masakan di rumah sendiri</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-amber-800">Menggunakan bahan-bahan segar dan alami tanpa pengawet atau MSG tambahan</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-amber-800">Menghadirkan pengalaman kuliner yang menyehatkan dan penuh kehangatan untuk kebersamaan keluarga</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-amber-800">Mengembangkan usaha dengan prinsip kejujuran, profesionalisme, dan kelestarian lingkungan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}