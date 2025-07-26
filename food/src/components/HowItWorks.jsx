import { MapPinIcon, ClipboardDocumentListIcon, CreditCardIcon, FaceSmileIcon } from '@heroicons/react/24/outline'

const HowItWorks = ({ translations }) => {
  const steps = [
    {
      icon: MapPinIcon,
      title: translations.selectLocation,
      description: translations.selectLocationDesc,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: ClipboardDocumentListIcon,
      title: translations.chooseOrder,
      description: translations.chooseOrderDesc,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: CreditCardIcon,
      title: translations.payAdvanced,
      description: translations.payAdvancedDesc,
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: FaceSmileIcon,
      title: translations.enjoyMeals,
      description: translations.enjoyMealsDesc,
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {translations.howItWorks}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks