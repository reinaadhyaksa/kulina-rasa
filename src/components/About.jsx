export default function About() {
  return (
    <section id="about" class="py-16 bg-amber-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Tentang KulinaRasa</h2>
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Dapur KulinaRasa" class="rounded-lg shadow-lg w-full" />
          </div>
          <div class="md:w-1/2">
            <h3 class="text-2xl font-semibold mb-4 text-amber-600">Cerita Kami</h3>
            <p class="text-gray-700 mb-4">KulinaRasa dimulai dari kecintaan kami terhadap masakan rumahan yang lezat dan sehat. Dengan latar belakang keluarga yang gemar memasak, kami memutuskan untuk berbagi kebahagiaan melalui makanan.</p>
            <p class="text-gray-700 mb-4">Setiap hidangan dibuat dengan bahan-bahan pilihan dan dimasak dengan penuh cinta. Kami tidak menggunakan pengawet atau MSG tambahan, sehingga Anda bisa menikmati rasa alami yang otentik.</p>
            <h3 class="text-2xl font-semibold mb-4 text-amber-600 mt-8">Visi & Misi</h3>
            <ul class="list-disc pl-5 text-gray-700 space-y-2">
              <li>Menyediakan makanan rumahan berkualitas dengan harga terjangkau</li>
              <li>Menggunakan bahan-bahan segar dan alami</li>
              <li>Memberikan pelayanan terbaik kepada pelanggan</li>
              <li>Mengembangkan usaha kecil dengan prinsip kejujuran dan profesionalisme</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}