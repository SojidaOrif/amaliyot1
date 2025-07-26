import { useLanguage } from '../contexts/LanguageContext';

const Deals = () => {
  const { translate } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* First Deal */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {translate('bestDeals')} <span className="text-orange-500">{translate('crispySandwiches')}</span>
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {translate('enjoyLargeSandwiches')}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center space-x-3 w-fit transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <span>{translate('proceedToOrder')}</span>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Crispy Sandwiches"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Second Deal */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative order-2 lg:order-1 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Fried Chicken"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-orange-500/20 to-transparent"></div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {translate('celebrateParties')} <span className="text-orange-500">{translate('friedChicken')}</span>
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {translate('getBestFriedChicken')}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center space-x-3 w-fit transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <span>{translate('proceedToOrder')}</span>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;