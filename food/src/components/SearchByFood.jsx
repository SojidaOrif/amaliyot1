const SearchByFood = ({ translations }) => {
    const foodCategories = [
      {
        name: "Pizza",
        image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=200"
      },
      {
        name: "Burger",
        image: "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=200"
      },
      {
        name: "Noodles",
        image: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=200"
      },
      {
        name: "Sub-sandwich",
        image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=200"
      },
      {
        name: "Chowmein",
        image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=200"
      },
      {
        name: "Steak",
        image: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=200"
      }
    ]
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {translations.searchByFood}
            </h2>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {foodCategories.map((category, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative mb-4 overflow-hidden rounded-full mx-auto w-24 h-24 lg:w-32 lg:h-32">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
  
          {/* Feature Cards */}
          <div className="mt-16 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏷️</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Daily Discounts</h3>
                <p className="text-gray-600 text-sm">Get amazing discounts every day</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Live Tracking</h3>
                <p className="text-gray-600 text-sm">Track your order in real time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Quick Delivery</h3>
                <p className="text-gray-600 text-sm">Fast delivery to your doorstep</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default SearchByFood