import { dataFrozenFood, dataKueBasah, dataRiceBowls } from "../data/data";
import { animate } from "../data/animate";
import { useRef, useState } from "react";

export default function Products() {
  function CreateMenu({ nameClass, title, data }) {
    const ContainerRef = useRef(null);
    const [visible, setVisible] = useState([]);
    animate(".animate", ContainerRef, setVisible);
    return (
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-amber-600 flex items-center">
          <i className={`fas ${nameClass} mr-3`}></i> {title}
        </h3>
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
      <div className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 border border-gray-100 animate ${isVisible ? "show" : ""}`}>
        <img
          src={images}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h4 className="font-bold text-xl mb-2 text-gray-800">{name}</h4>
          <p className="text-gray-600 mb-4">{text}</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-amber-600">{price}</span>
            <a
              href={`https://wa.me/6282313931717?text=Saya%20mau%20pesan%20${name1}%20${name2}%20${name3}`}
              className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm hover:bg-amber-600 transition duration-300"
            >
              Pesan via WA
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Produk Kami</h2>
        <CreateMenu 
          nameClass={"fa-bowl-food"}
          title={"Rice Bowls"}
          data={dataRiceBowls}
        />

        <CreateMenu 
          nameClass={"fa-snowflake"}
          title={"Frozen Food"}
          data={dataFrozenFood}
        />

        <CreateMenu 
          nameClass={"fa-birthday-cake"}
          title={"Kue Basah"}
          data={dataKueBasah}
        />
      </div>
    </section>
  )
}