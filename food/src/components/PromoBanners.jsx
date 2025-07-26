const PromoBanners = ({ translations }) => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* First Banner - Crispy Sandwiches */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-orange-500 font-semibold">{translations.bestDeals}</span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
                      {translations.crispySandwiches}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {translations.sandwichDesc}
                  </p>
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold inline-flex items-center justify-center max-w-xs">
                    {translations.proceedToOrder}
                    <span className="ml-2">→</span>
                  </button>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Crispy Sandwiches"
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </div>
              </div>
            </div>
  
            {/* Second Banner - Fried Chicken */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1 relative">
                  <img
                    src="https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Fried Chicken"
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </div>
                <div className="order-1 lg:order-2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                      {translations.celebrate} <br />
                      <span className="text-orange-500">{translations.friedChicken}</span>
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {translations.chickenDesc}
                  </p>
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold inline-flex items-center justify-center max-w-xs">
                    {translations.proceedToOrder}
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default PromoBanners