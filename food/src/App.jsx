import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FoodCategories from './components/FoodCategories'
import HowItWorks from './components/HowItWorks'
import PopularItems from './components/PopularItems'
import SearchByFood from './components/SearchByFood'
import PromoBanners from './components/PromoBanners'
import Footer from './components/Footer'

function App() {
  const [currentLang, setCurrentLang] = useState('en')

  const translations = {
    en: {
      starving: "Are you starving?",
      findMeals: "Within a few clicks, find meals that are accessible near you",
      delivery: "Delivery",
      pickup: "Pickup",
      enterAddress: "Enter Your Address",
      findFood: "Find Food",
      howItWorks: "How does it work",
      selectLocation: "Select location",
      selectLocationDesc: "Choose the location where your food will be delivered.",
      chooseOrder: "Choose order",
      chooseOrderDesc: "Check over hundreds of menus to pick your favorite food",
      payAdvanced: "Pay advanced",
      payAdvancedDesc: "It's quick, safe, and simple. Select several methods of payment",
      enjoyMeals: "Enjoy meals",
      enjoyMealsDesc: "Food is made and delivered directly to your home.",
      popularItems: "Popular items",
      searchByFood: "Search by Food",
      bestDeals: "Best deals",
      crispySandwiches: "Crispy Sandwiches",
      sandwichDesc: "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.",
      proceedToOrder: "PROCEED TO ORDER",
      celebrate: "Celebrate parties",
      friedChicken: "Fried Chicken",
      chickenDesc: "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.",
      company: "Company",
      aboutUs: "About us",
      team: "Team",
      careers: "Careers",
      blog: "Blog",
      contact: "Contact",
      helpSupport: "Help & Support",
      partnerWithUs: "Partner with us",
      rideWithUs: "Ride with us",
      legal: "Legal",
      termsConditions: "Terms & Conditions",
      refundCancellation: "Refund & Cancellation",
      privacyPolicy: "Privacy Policy",
      cookiePolicy: "Cookie Policy",
      followUs: "FOLLOW US",
      exclusiveOffers: "Receive exclusive offers in your mailbox",
      subscribe: "Subscribe"
    },
    uz: {
      starving: "Och qoldingizmi?",
      findMeals: "Bir necha marta bosish bilan yaqin atrofdagi ovqatlarni toping",
      delivery: "Yetkazib berish",
      pickup: "Olib ketish",
      enterAddress: "Manzilingizni kiriting",
      findFood: "Ovqat topish",
      howItWorks: "Bu qanday ishlaydi",
      selectLocation: "Joyni tanlang",
      selectLocationDesc: "Ovqatingiz yetkazib beriladigan joyni tanlang.",
      chooseOrder: "Buyurtma tanlang",
      chooseOrderDesc: "Sevimli ovqatingizni tanlash uchun yuzlab menyularni ko'rib chiqing",
      payAdvanced: "Oldindan to'lang",
      payAdvancedDesc: "Bu tez, xavfsiz va oddiy. Bir nechta to'lov usullarini tanlang",
      enjoyMeals: "Ovqatdan bahramand bo'ling",
      enjoyMealsDesc: "Ovqat tayyorlanadi va to'g'ridan-to'g'ri uyingizga yetkaziladi.",
      popularItems: "Mashhur taomlar",
      searchByFood: "Ovqat bo'yicha qidirish",
      bestDeals: "Eng yaxshi takliflar",
      crispySandwiches: "Crispy Sendvichlar",
      sandwichDesc: "Katta o'lchamdagi sendvichlardan bahramand bo'ling. Mukammal sendvich bo'laklari.",
      proceedToOrder: "BUYURTMA BERISH",
      celebrate: "Bayramlarni nishonlang",
      friedChicken: "Qovurilgan Tovuq",
      chickenDesc: "Limon chili ta'mi bilan yoqilgan eng yaxshi qovurilgan tovuqni oling. Qovurilgan tovuq uchun eng yaxshi takliflarni ko'ring.",
      company: "Kompaniya",
      aboutUs: "Biz haqimizda",
      team: "Jamoa",
      careers: "Karyera",
      blog: "Blog",
      contact: "Aloqa",
      helpSupport: "Yordam va qo'llab-quvvatlash",
      partnerWithUs: "Biz bilan hamkorlik qiling",
      rideWithUs: "Biz bilan aylanish",
      legal: "Huquqiy",
      termsConditions: "Shartlar va Qoidalar",
      refundCancellation: "Qaytarish va Bekor qilish",
      privacyPolicy: "Maxfiylik siyosati",
      cookiePolicy: "Cookie siyosati",
      followUs: "BIZNI KUZATIB BORING",
      exclusiveOffers: "Pochta qutingizda eksklyuziv takliflarni oling",
      subscribe: "Obuna bo'lish"
    },
    ru: {
      starving: "Вы голодны?",
      findMeals: "За несколько кликов найдите блюда, доступные рядом с вами",
      delivery: "Доставка",
      pickup: "Самовывоз",
      enterAddress: "Введите ваш адрес",
      findFood: "Найти еду",
      howItWorks: "Как это работает",
      selectLocation: "Выберите местоположение",
      selectLocationDesc: "Выберите место, куда будет доставлена ваша еда.",
      chooseOrder: "Выберите заказ",
      chooseOrderDesc: "Просмотрите сотни меню, чтобы выбрать любимую еду",
      payAdvanced: "Оплатите заранее",
      payAdvancedDesc: "Это быстро, безопасно и просто. Выберите несколько способов оплаты",
      enjoyMeals: "Наслаждайтесь едой",
      enjoyMealsDesc: "Еда готовится и доставляется прямо к вам домой.",
      popularItems: "Популярные блюда",
      searchByFood: "Поиск по еде",
      bestDeals: "Лучшие предложения",
      crispySandwiches: "Хрустящие Сэндвичи",
      sandwichDesc: "Наслаждайтесь большими сэндвичами. Идеальные ломтики сэндвичей.",
      proceedToOrder: "ПЕРЕЙТИ К ЗАКАЗУ",
      celebrate: "Отмечайте праздники",
      friedChicken: "Жареная Курица",
      chickenDesc: "Получите лучшую жареную курицу с потрясающим лимонно-чили вкусом. Ознакомьтесь с лучшими предложениями по жареной курице.",
      company: "Компания",
      aboutUs: "О нас",
      team: "Команда",
      careers: "Карьера",
      blog: "Блог",
      contact: "Контакты",
      helpSupport: "Помощь и поддержка",
      partnerWithUs: "Партнерство с нами",
      rideWithUs: "Поездки с нами",
      legal: "Правовая информация",
      termsConditions: "Условия и положения",
      refundCancellation: "Возврат и отмена",
      privacyPolicy: "Политика конфиденциальности",
      cookiePolicy: "Политика использования файлов cookie",
      followUs: "СЛЕДИТЕ ЗА НАМИ",
      exclusiveOffers: "Получайте эксклюзивные предложения в своей почте",
      subscribe: "Подписаться"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentLang={currentLang} 
        setCurrentLang={setCurrentLang}
        translations={translations}
      />
      <Hero translations={translations[currentLang]} />
      <FoodCategories />
      <HowItWorks translations={translations[currentLang]} />
      <PopularItems translations={translations[currentLang]} />
      <SearchByFood translations={translations[currentLang]} />
      <PromoBanners translations={translations[currentLang]} />
      <Footer translations={translations[currentLang]} />
    </div>
  )
}

export default App