export default function Contact() {
  return (
    <section id="contact" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Hubungi Kami</h2>
        <div class="flex flex-col md:flex-row gap-8">
          <div class="md:w-1/2 bg-amber-50 p-8 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold mb-6 text-amber-600">Informasi Kontak</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <i class="fas fa-map-marker-alt text-amber-600 mt-1 mr-3"></i>
                <div>
                  <h4 class="font-semibold text-gray-800">Alamat</h4>
                  <p class="text-gray-600">Jl. Contoh No. 123, Kota Anda, Indonesia</p>
                </div>
              </div>
              <div class="flex items-start">
                <i class="fas fa-phone-alt text-amber-600 mt-1 mr-3"></i>
                <div>
                  <h4 class="font-semibold text-gray-800">Telepon/WhatsApp</h4>
                  <p class="text-gray-600">0812-3456-7890</p>
                </div>
              </div>
              <div class="flex items-start">
                <i class="fas fa-envelope text-amber-600 mt-1 mr-3"></i>
                <div>
                  <h4 class="font-semibold text-gray-800">Email</h4>
                  <p class="text-gray-600">info@kulinarasa.com</p>
                </div>
              </div>
              <div class="flex items-start">
                <i class="fab fa-instagram text-amber-600 mt-1 mr-3"></i>
                <div>
                  <h4 class="font-semibold text-gray-800">Instagram</h4>
                  <p class="text-gray-600">@kulinarasa.id</p>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <h4 class="font-semibold text-gray-800 mb-3">Jam Operasional</h4>
              <ul class="text-gray-600 space-y-1">
                <li class="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span>09:00 - 20:00</span>
                </li>
                <li class="flex justify-between">
                  <span>Sabtu - Minggu</span>
                  <span>10:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:w-1/2">
            <h3 class="text-2xl font-semibold mb-6 text-amber-600">Kirim Pesan</h3>
            <form class="space-y-4">
              <div>
                <label for="name" class="block text-gray-700 font-medium mb-1">Nama Anda</label>
                <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <div>
                <label for="email" class="block text-gray-700 font-medium mb-1">Email</label>
                <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <div>
                <label for="phone" class="block text-gray-700 font-medium mb-1">Nomor Telepon</label>
                <input type="tel" id="phone" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <div>
                <label for="message" class="block text-gray-700 font-medium mb-1">Pesan</label>
                <textarea id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
              </div>
              <button type="submit" class="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition duration-300 w-full">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}