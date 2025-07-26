

import { useLanguage } from '../contexts/LanguageContext';

const Features = () => {
  const { translate } = useLanguage();
  
  const features = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: translate('dailyDiscounts'),
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      hoverColor: 'group-hover:bg-yellow-500'
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: translate('liveTracing'),
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      hoverColor: 'group-hover:bg-orange-500'
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: translate('quickDelivery'),
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      hoverColor: 'group-hover:bg-green-500'
    }
  ];

  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-6 group cursor-pointer animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`${feature.bgColor} ${feature.hoverColor} p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  <div className={`${feature.iconColor} group-hover:text-white transition-colors duration-300`}>
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg lg:text-xl group-hover:text-orange-500 transition-colors duration-200">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;