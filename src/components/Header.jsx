import { useState } from "react";
import { Home, X, Info, List, Phone, Menu, UtensilsCrossed } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <header className="bg-amber-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <UtensilsCrossed size={30} />
          <h1 class="text-xl font-bold">Kulina<span className="text-amber-200">Rasa</span></h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-amber-200 font-medium">Beranda</a>
          <a href="#products" className="hover:text-amber-200 font-medium">Produk</a>
          <a href="#about" className="hover:text-amber-200 font-medium">Tentang Kami</a>
          <a href="#contact" className="hover:text-amber-200 font-medium">Kontak</a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <Menu size={30}  />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-amber-600 z-50 flex flex-col px-10 pt-10 space-y-6 text-white text-2xl">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <X size={30} />
          </button>
          <a href="#home"
            className="flex text-white hover:text-gray-200 transition gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <Home size={30} />
            Beranda
          </a>
          <a href="#products"
            className="flex text-white hover:text-gray-200 transition gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <List size={30} />
            Produk
          </a>
          <a href="#about"
            className="flex text-white hover:text-gray-200 transition gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <Info size={30} />
            Tentang Kami
          </a>   
          <a href="#contact"
            className="flex text-white hover:text-gray-200 transition gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <Phone size={30} />
            Kontak
          </a>
        </div>
      )}
    </header>
  )
}