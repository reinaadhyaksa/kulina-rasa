import { dataFrozenFood, dataKueBasah, dataRiceBowls } from "../data/data";
import { animate } from "../data/animate";
import { useRef, useState } from "react";
import { Heart, Star, Leaf, ChevronRight } from "lucide-react";

export default function Products() {
  function CreateMenu({ nameClass, title, data, icon }) {
    const ContainerRef = useRef(null);
    const [visible, setVisible] = useState([]);
    animate(".animate", ContainerRef, setVisible);
    return (
      <div className="mb-16">
        <div className="flex items-center mb-8 justify-center">
          <div className="w-12 h-0.5 bg-amber-400 mr-4"></div>
          <h3 className="text-2xl font-serif font-semibold text-amber-700 flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
          </h3>
          <div className="w-12 h-0.5 bg-amber-400 ml-4"></div>
        </div>
        <div
          ref={ContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {
            data.map((item, index) => {
              return (
                <CreateCard
                  key={index}
                  images={item.images}
                  name={item.name}
                  text={item.text}
                  price={item.price}
                  name1={item.name1}
                  name2={item.name2}
                  name3={item.name3}
                  isVisible={visible.includes(index)}
                />
              )
            })
          }
        </div>
      </div>
    )
  }

  function CreateCard({ images, name, text, price, name1, name2, name3, isVisible }) {
    return (
      <div className={`bg-amber-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 border border-amber-100 animate ${isVisible ? "show" : ""} hover:translate-y-2 transition-transform duration-300`}>
        <div className="relative">
          <img
            src={images}
            alt={name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <Leaf size={12} className="mr-1" />
            <span>Alami</span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h4 className="font-serif font-semibold text-lg text-amber-800">{name}</h4>
            <div className="flex items-center text-amber-500">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
            </div>
          </div>
          <p className="text-amber-700 mb-4 text-sm leading-relaxed">{text}</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-amber-600">{price}</span>
            <a
              href={`https://wa.me/6282313931717?text=Saya%20mau%20pesan%20${name1}%20${name2}%20${name3}`}
              className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm hover:bg-amber-600 transition duration-300 flex items-center group"
            >
              Pesan
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="products" className="py-16 bg-amber-25">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-amber-800 mb-4">Produk Kami</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
          <p className="text-amber-700 mt-4 max-w-2xl mx-auto">
            Menikmati kelezatan masakan rumahan yang sehat dan penuh cinta untuk kebersamaan keluarga
          </p>
        </div>

        <CreateMenu
          nameClass={"fa-bowl-food"}
          title={"Rice Bowls"}
          data={dataRiceBowls}
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>}
        />

        <CreateMenu
          nameClass={"fa-snowflake"}
          title={"Frozen Food"}
          data={dataFrozenFood}
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>}
        />

        <CreateMenu
          nameClass={"fa-birthday-cake"}
          title={"Kue Basah"}
          data={dataKueBasah}
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 013 15.546V5a2 2 0 012-2h14a2 2 0 012 2v10.546z" />
          </svg>}
        />

        <div className="text-center mt-12 bg-amber-100 p-6 rounded-xl border border-amber-200">
          <h3 className="font-serif font-semibold text-amber-800 mb-3">Butuh Rekomendasi Menu?</h3>
          <p className="text-amber-700 mb-4">Konsultasi gratis dengan kami untuk menemukan hidangan terbaik untuk acara spesial Anda</p>
          <a
            href="https://wa.me/6282313931717?text=Saya%20butuh%20rekomendasi%20menu%20untuk..."
            className="bg-amber-500 text-white px-6 py-2 rounded-full text-sm hover:bg-amber-600 transition duration-300 inline-flex items-center mx-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  )
}