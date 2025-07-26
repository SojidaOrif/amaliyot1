import { useState } from 'react'
import { ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'

const Header = ({ currentLang, setCurrentLang, translations }) => {
  const [languageDropdown, setLanguageDropdown] = useState(false)

  const languages = {
    en: { name: 'English', flag: '🇺🇸' },
    uz: { name: "O'zbek", flag: '🇺🇿' },
    ru: { name: 'Русский', flag: '🇷🇺' }
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🍔</span>
              </div>
              <span className="text-2xl font-bold text-orange-500">food</span>
              <span className="text-2xl font-bold text-gray-800">wagon</span>
            </div>
          </div>

          {/* Right side navigation */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="hidden md:flex items-center">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-gray-600 text-sm">Search Food</span>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageDropdown(!languageDropdown)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg">{languages[currentLang].flag}</span>
                <span className="text-sm font-medium text-gray-700">{languages[currentLang].name}</span>
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
              </button>

              {languageDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border">
                  {Object.entries(languages).map(([code, lang]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setCurrentLang(code)
                        setLanguageDropdown(false)
                      }}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login */}
            <button className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
              <UserIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header