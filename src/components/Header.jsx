import { useState } from "react";
import { Home, X, Info, List, Phone, Menu, Heart, Star } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-amber-50 text-amber-900 shadow-sm border-b border-amber-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
              <Heart size={22} className="text-amber-50 fill-current" />
            </div>
          </div>
          <h1 className="text-xl font-serif font-bold">Kulina<span className="text-amber-500">Rasa</span></h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-amber-500 font-medium transition-colors flex items-center gap-1">
            <Home size={18} />
            Beranda
          </a>
          <a href="#products" className="hover:text-amber-500 font-medium transition-colors flex items-center gap-1">
            <List size={18} />
            Produk
          </a>
          <a href="#about" className="hover:text-amber-500 font-medium transition-colors flex items-center gap-1">
            <Info size={18} />
            Tentang Kami
          </a>
          <a href="#testimonials" className="hover:text-amber-500 font-medium transition-colors flex items-center gap-1">
            <Star size={18} />
            Cerita Pelanggan
          </a>
          <a href="#contact" className="hover:text-amber-500 font-medium transition-colors flex items-center gap-1">
            <Phone size={18} />
            Kontak
          </a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-amber-800 focus:outline-none p-1 rounded-md hover:bg-amber-100 transition-colors"
          >
            <Menu size={30} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-amber-50 bg-opacity-95 z-50 flex flex-col px-10 pt-10 space-y-6 text-amber-900 text-xl">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-amber-800 p-1 rounded-md hover:bg-amber-100 transition-colors"
          >
            <X size={30} />
          </button>
          <a href="#home"
            className="flex text-amber-900 hover:text-amber-500 transition-colors gap-3 items-center py-2 border-b border-amber-100"
            onClick={() => setMenuOpen(false)}
          >
            <Home size={24} />
            Beranda
          </a>
          <a href="#products"
            className="flex text-amber-900 hover:text-amber-500 transition-colors gap-3 items-center py-2 border-b border-amber-100"
            onClick={() => setMenuOpen(false)}
          >
            <List size={24} />
            Produk
          </a>
          <a href="#about"
            className="flex text-amber-900 hover:text-amber-500 transition-colors gap-3 items-center py-2 border-b border-amber-100"
            onClick={() => setMenuOpen(false)}
          >
            <Info size={24} />
            Tentang Kami
          </a>
          <a href="#testimonials"
            className="flex text-amber-900 hover:text-amber-500 transition-colors gap-3 items-center py-2 border-b border-amber-100"
            onClick={() => setMenuOpen(false)}
          >
            <Star size={24} />
            Cerita Pelanggan
          </a>
          <a href="#contact"
            className="flex text-amber-900 hover:text-amber-500 transition-colors gap-3 items-center py-2 border-b border-amber-100"
            onClick={() => setMenuOpen(false)}
          >
            <Phone size={24} />
            Kontak
          </a>
          <div className="mt-8 text-center text-amber-700 text-sm">
            <p>Hidangan penuh cinta dan cerita</p>
          </div>
        </div>
      )}
    </header>
  )
}