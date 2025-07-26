import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon } from '@heroicons/react/24/outline'

const PopularItems = ({ translations }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const items = [
    {
      name: "Cheese Burger",
      restaurant: "Burger Arena",
      price: "$3.88",
      image: "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Toffe's Cake",
      restaurant: "Top Sticks",
      price: "$4.00",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Dancake",
      restaurant: "Cake World",
      price: "$1.99",
      image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Crispy Sandwich",
      restaurant: "Fastfood Dine",
      price: "$3.00",
      image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Thai Soup",
      restaurant: "Foody man",
      price: "$2.79",
      image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, items.length - 4))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, items.length - 4)) % Math.max(1, items.length - 4))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            {translations.popularItems}
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="w-1/4 flex-shrink-0 px-3">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                    <div className="flex items-center text-orange-500 text-sm mb-3">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span>{item.restaurant}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">{item.price}</span>
                      <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularItems