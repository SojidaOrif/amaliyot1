import { ClockIcon } from '@heroicons/react/24/outline'

const FoodCategories = () => {
  const categories = [
    {
      name: "Greys Vage",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=300",
      daysRemaining: 6
    },
    {
      name: "Greys Vage",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300",
      daysRemaining: 6
    },
    {
      name: "Greys Vage",
      image: "https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=300",
      daysRemaining: 7
    },
    {
      name: "Greys Vage",
      image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=300",
      daysRemaining: 8
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                    ⭐ 4.5
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                <div className="flex items-center space-x-1 text-orange-500">
                  <ClockIcon className="h-4 w-4" />
                  <span className="text-sm font-medium">{category.daysRemaining} Days Remaining</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoodCategories