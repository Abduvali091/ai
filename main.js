const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector(".nav ul");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Translations
const translations = {
  uz: {
    "nav-home": "Bosh sahifa",
    "nav-about": "Men haqimda",
    "nav-projects": "Loyihalar",
    "nav-services": "Xizmatlar",
    "nav-testimonials": "Sharhlar",
    "nav-blog": "Blog",
    "nav-faq": "Savollar",
    "nav-contact": "Aloqa",
    "hero-title": "Salom, men <span>Sizning ismingiz</span>",
    "hero-sub": "Frontend Dasturchi va Dizayner",
    "hero-btn": "Ishlarimni ko‘rish",
    "about-title": "Men haqimda",
    "about-text": "Men HTML, CSS, JavaScript’da tajribali dasturchiman.",
    "projects-title": "Mening Loyihalarim",
    "services-title": "Xizmatlar",
    "service-1": "Web Dasturlash",
    "service-2": "UI/UX Dizayn",
    "service-3": "Konsalting",
    "testimonials-title": "Sharhlar",
    "blog-title": "Blog",
    "blog-text": "Tez orada...",
    "faq-title": "Savollar",
    "faq-text": "Tez-tez beriladigan savollar shu yerda bo‘ladi.",
    "contact-title": "Aloqa",
    "contact-btn": "Yuborish"
  },
  ru: {
    "nav-home": "Главная",
    "nav-about": "Обо мне",
    "nav-projects": "Проекты",
    "nav-services": "Услуги",
    "nav-testimonials": "Отзывы",
    "nav-blog": "Блог",
    "nav-faq": "FAQ",
    "nav-contact": "Контакты",
    "hero-title": "Привет, я <span>Ваше имя</span>",
    "hero-sub": "Frontend Разработчик и Дизайнер",
    "hero-btn": "Мои работы",
    "about-title": "Обо мне",
    "about-text": "Я разработчик с опытом в HTML, CSS, JavaScript.",
    "projects-title": "Мои проекты",
    "services-title": "Услуги",
    "service-1": "Веб-разработка",
    "service-2": "UI/UX Дизайн",
    "service-3": "Консалтинг",
    "testimonials-title": "Отзывы",
    "blog-title": "Блог",
    "blog-text": "Скоро...",
    "faq-title": "FAQ",
    "faq-text": "Часто задаваемые вопросы будут здесь.",
    "contact-title": "Контакты",
    "contact-btn": "Отправить"
  },
  en: {
    "nav-home": "Home",
    "nav-about": "About",
    "nav-projects": "Projects",
    "nav-services": "Services",
    "nav-testimonials": "Testimonials",
    "nav-blog": "Blog",
    "nav-faq": "FAQ",
    "nav-contact": "Contact",
    "hero-title": "Hello, I'm <span>Your Name</span>",
    "hero-sub": "Frontend Developer & Designer",
    "hero-btn": "See My Work",
    "about-title": "About Me",
    "about-text": "I am a developer skilled in HTML, CSS, and JavaScript.",
    "projects-title": "My Projects",
    "services-title": "Services",
    "service-1": "Web Development",
    "service-2": "UI/UX Design",
    "service-3": "Consulting",
    "testimonials-title": "Testimonials",
    "blog-title": "Blog",
    "blog-text": "Coming soon...",
    "faq-title": "FAQ",
    "faq-text": "Frequently asked questions will appear here.",
    "contact-title": "Contact Me",
    "contact-btn": "Send"
  }
};

// Language switcher
const buttons = document.querySelectorAll(".lang-switcher button");
const elements = document.querySelectorAll("[data-key]");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    elements.forEach(el => {
      const key = el.dataset.key;
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  });
});