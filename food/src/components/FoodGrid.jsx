import { useLanguage } from '../contexts/LanguageContext';

const FoodGrid = () => {
  const { translate } = useLanguage();
  
  const foodItems = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: translate('greyVage'),
      daysRemaining: 6
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: translate('greyVage'),
      daysRemaining: 8
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: translate('greyVage'),
      daysRemaining: 7
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: translate('greyVage'),
      daysRemaining: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodItems.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {item.daysRemaining} {translate('daysRemaining')}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-lg group-hover:text-orange-500 transition-colors duration-200">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodGrid;