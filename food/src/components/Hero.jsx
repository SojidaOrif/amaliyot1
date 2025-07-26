import { useState } from 'react'
import { TruckIcon, BuildingStorefrontIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Hero = ({ translations }) => {
  const [activeTab, setActiveTab] = useState('delivery')

  return (
    <section className="bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {translations.starving}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {translations.findMeals}
            </p>

            {/* Order Options */}
            <div className="bg-white rounded-xl p-6 shadow-xl max-w-md mx-auto lg:mx-0">
              {/* Tabs */}
              <div className="flex space-x-2 mb-6">
                <button
                  onClick={() => setActiveTab('delivery')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    activeTab === 'delivery' 
                      ? 'bg-orange-100 text-orange-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <TruckIcon className="h-5 w-5" />
                  <span>{translations.delivery}</span>
                </button>
                <button
                  onClick={() => setActiveTab('pickup')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    activeTab === 'pickup' 
                      ? 'bg-orange-100 text-orange-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <BuildingStorefrontIcon className="h-5 w-5" />
                  <span>{translations.pickup}</span>
                </button>
              </div>

              {/* Address Input */}
              <div className="flex space-x-3">
                <div className="flex-1 relative">
                  <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder={translations.enterAddress}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                </div>
                <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
                  {translations.findFood}
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Delicious Food"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero