export default function Footer() {
  return (
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0">
            <div class="flex items-center space-x-2">
              <i class="fas fa-utensils text-2xl text-amber-400"></i>
              <h2 class="text-xl font-bold">Kulina<span class="text-amber-400">Rasa</span></h2>
            </div>
            <p class="mt-2 text-gray-400">Makanan rumahan dengan cita rasa istimewa</p>
          </div>
          <div class="flex space-x-6">
            <a href="https://wa.me/6281234567890" class="text-gray-400 hover:text-amber-400 transition duration-300">
              <i class="fab fa-whatsapp text-2xl"></i>
            </a>
            <a href="https://instagram.com/kulinarasa.id" class="text-gray-400 hover:text-amber-400 transition duration-300">
              <i class="fab fa-instagram text-2xl"></i>
            </a>
            <a href="mailto:info@kulinarasa.com" class="text-gray-400 hover:text-amber-400 transition duration-300">
              <i class="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2023 KulinaRasa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}