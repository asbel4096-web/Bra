const DEMO_LISTINGS = [
  {
    title: 'هونداي أزيرا 2023', price: '168,000 د.ل', location: 'طرابلس', year: '2023', km: '12,000 كم', fuel: 'بنزين', tag: 'مميز', features: ['فل أوبشن', 'بصمة', 'كاميرا 360']
  },
  {
    title: 'كيا سورينتو 2019', price: '119,000 د.ل', location: 'مصراتة', year: '2019', km: '74,000 كم', fuel: 'ديزل', tag: 'عائلي', features: ['7 مقاعد', 'بانوراما', 'مقاعد جلد']
  },
  {
    title: 'هيونداي سوناتا 2017', price: '71,500 د.ل', location: 'بنغازي', year: '2017', km: '102,000 كم', fuel: 'بنزين', tag: 'اقتصادي', features: ['شاشة', 'ليد', 'حساسات']
  },
  {
    title: 'جينيسيس G80 2018', price: '146,000 د.ل', location: 'الزاوية', year: '2018', km: '60,000 ميل', fuel: 'بنزين', tag: 'فخم', features: ['مقاعد كهرباء', 'رادار', 'ذاكرة']
  },
  {
    title: 'تويوتا راف فور 2020', price: '132,000 د.ل', location: 'زليتن', year: '2020', km: '48,000 كم', fuel: 'هايبرد', tag: 'جديد', features: ['هايبرد', 'كاميرا', 'مثبت سرعة']
  },
  {
    title: 'مرسيدس GLC 300 2018', price: '187,000 د.ل', location: 'طرابلس', year: '2018', km: '76,000 ميل', fuel: 'بنزين', tag: 'فل', features: ['بانوراما', 'بصمة', 'شاشة كبيرة']
  },
  {
    title: 'بيجو بارتنر 2021', price: '59,000 د.ل', location: 'صبراتة', year: '2021', km: '95,000 كم', fuel: 'ديزل', tag: 'تجاري', features: ['تبريد ممتاز', 'عادي', 'حمولة']
  },
  {
    title: 'كيا كادينزا 2012', price: '43,000 د.ل', location: 'ترهونة', year: '2012', km: '100,000 كم', fuel: 'بنزين', tag: 'نظيف', features: ['تدفئة', 'بصمة', 'كاميرا']
  }
];

function carIllustration(seed = 0) {
  const palettes = [
    ['#0f1720', '#1747b9', '#8db2ff'],
    ['#121212', '#2f69ff', '#d8e5ff'],
    ['#0d1b34', '#0f3eaa', '#9ec1ff'],
    ['#14213d', '#3a86ff', '#dfeaff']
  ];
  const [body, accent, glass] = palettes[seed % palettes.length];
  return `
  <svg viewBox="0 0 800 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="سيارة">
    <defs>
      <linearGradient id="bg${seed}" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#eef4ff"/>
        <stop offset="100%" stop-color="#bdd2ff"/>
      </linearGradient>
      <linearGradient id="car${seed}" x1="0" x2="1">
        <stop offset="0%" stop-color="${body}"/>
        <stop offset="60%" stop-color="${accent}"/>
        <stop offset="100%" stop-color="#0e1726"/>
      </linearGradient>
    </defs>
    <rect width="800" height="560" fill="url(#bg${seed})"/>
    <circle cx="655" cy="90" r="42" fill="#ffffff80"/>
    <path d="M125 355c28-56 74-96 136-118 68-24 165-29 248-12 64 13 132 58 171 122l20 33H95l30-25z" fill="url(#car${seed})"/>
    <path d="M263 245c34-30 101-47 174-45 51 1 93 17 127 47l-36 2c-50 4-141 5-228 2l-37-6z" fill="${glass}" opacity=".95"/>
    <rect x="184" y="317" width="448" height="54" rx="20" fill="#0b1220" opacity=".25"/>
    <circle cx="243" cy="388" r="57" fill="#1c2430"/>
    <circle cx="243" cy="388" r="27" fill="#dfe7f3"/>
    <circle cx="565" cy="388" r="57" fill="#1c2430"/>
    <circle cx="565" cy="388" r="27" fill="#dfe7f3"/>
    <rect x="132" y="341" width="74" height="18" rx="9" fill="#eef5ff" opacity=".88"/>
    <rect x="605" y="338" width="55" height="20" rx="10" fill="#fff2a8" opacity=".95"/>
    <path d="M147 363h509" stroke="#0b1220" stroke-opacity=".3" stroke-width="4"/>
  </svg>`;
}

function renderListings(selector, count = 8) {
  const root = document.querySelector(selector);
  if (!root) return;
  root.innerHTML = DEMO_LISTINGS.slice(0, count).map((item, index) => `
    <article class="card listing-card">
      <div class="thumb">
        ${carIllustration(index)}
        <div class="price-pill">${item.price}</div>
        <div class="status-pill">${item.tag}</div>
      </div>
      <div class="listing-body">
        <h3 class="listing-title">${item.title}</h3>
        <div class="meta-row">
          <span>📍 ${item.location}</span>
          <span>📅 ${item.year}</span>
          <span>🛣️ ${item.km}</span>
          <span>⛽ ${item.fuel}</span>
        </div>
        <div class="features">
          ${item.features.map(f => `<span class="feature">${f}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

function injectYear() {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
}

function mockToasts() {
  document.querySelectorAll('[data-demo]').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('هذه نسخة تجريبية من مشروع براتشو كار. يمكن ربطها لاحقًا بقاعدة بيانات و Firebase أو أي Backend تريده.');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderListings('[data-listings="home"]', 8);
  renderListings('[data-listings="catalog"]', 8);
  renderListings('[data-listings="similar"]', 4);
  injectYear();
  mockToasts();
});
