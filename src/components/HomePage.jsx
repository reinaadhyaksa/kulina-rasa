export default function Homepage() {
  return (
    <section id="home" className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">Makanan Rumahan dengan Rasa Restoran</h2>
          <p className="text-lg mb-6 animate-slide-up">Nikmati hidangan lezat siap saji dari dapur kami langsung ke meja makan Anda.</p>
          <a href="#products" className="bg-white text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-amber-100 transition duration-300 inline-block animate-slide-up">Lihat Menu</a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Makanan KulinaRasa" 
            className="rounded-lg shadow-xl max-w-md w-full animate-slide-up" 
          />
        </div>
      </div>
    </section>
  )
}