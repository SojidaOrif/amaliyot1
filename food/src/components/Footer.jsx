const Footer = ({ translations }) => {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-4">{translations.company}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{translations.aboutUs}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{translations.team}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{translations.careers}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{translations.blog}</a></li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">{translations.contact}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{translations.helpSupport}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{translations.partnerWithUs}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{translations.rideWithUs}</a></li>
              </ul>
            </div>
  
            {/* Legal */}
            <div>
              <h3 className="text-lg font-bold mb-4">{translations.legal}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{translations.termsConditions}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{translations.refundCancellation}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{translations.privacyPolicy}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{translations.cookiePolicy}</a></li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-4">{translations.followUs}</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
              </div>
              <p className="text-gray-400 text-sm mb-4">{translations.exclusiveOffers}</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-white placeholder-gray-400"
                />
                <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
                  {translations.subscribe}
                </button>
              </div>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🍔</span>
              </div>
              <span className="text-2xl font-bold text-orange-500">food</span>
              <span className="text-2xl font-bold text-white">wagon</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 FoodWagon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer