/* Werrise — Kontrol Merkezi (taslak)
   Tüm veriler örnek/demo verisidir ve sadece tarayıcı belleğinde tutulur.
   İleride gerçek kaynaklara (görev, takvim, CRM, bütçe) bağlanacak. */
(() => {
'use strict';

/* ================= ICONS ================= */
const P = {
  dash:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  today:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  plan:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  focus:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  tasks:'<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M5 5h14l2 8v6H3v-6z"/>',
  proj:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  flag:'<path d="M5 21V4h11l-1.5 4L16 12H5"/>',
  cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 14h3"/>',
  team:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.5a5 5 0 016 5"/>',
  port:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 17.5h7M17.5 14v7"/>',
  crm:'<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M5 5h14l2 8v6H3v-6z"/>',
  budget:'<path d="M12 3v18M5 21h14M5 7h14M3 14l2-7 2 7a2 2 0 01-4 0zM17 14l2-7 2 7a2 2 0 01-4 0z"/>',
  review:'<path d="M4 9h13l-3-3M20 15H7l3 3"/>',
  site:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  play:'<path d="M7 4l13 8-13 8z"/>',
  timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/>',
  up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
  snooze:'<circle cx="12" cy="13" r="8"/><path d="M5 3L2 6M19 3l3 3M9.5 11h5l-5 5h5"/>',
  pause:'<path d="M8 5v14M16 5v14"/>',
  ban:'<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',
  chev:'<path d="M6 9l6 6 6-6"/>',
  more:'<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>',
  alarm:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M5 3L2 6M19 3l3 3"/>',
  bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  gauge:'<path d="M4 18a8 8 0 1116 0"/><path d="M12 18l4-6"/>',
  repeat:'<path d="M4 9h13l-3-3M20 15H7l3 3"/>',
  hour:'<path d="M6 2h12M6 22h12M7 2c0 6 10 6 10 10s-10 4-10 10M17 2c0 6-10 6-10 10"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
  eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  check:'<path d="M5 12l5 5 9-10"/>',
  link:'<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
  bell:'<path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9M10 21h4"/>',
  moon:'<path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/>',
  sparkle:'<path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18"/>',
  lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/>'
};
const ic = (n, s = 18) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${P[n]||''}</svg>`;

/* ================= HELPERS ================= */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const DAYS = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
const DS = ['Paz','Pzt','Sal','Çar','Per','Cum','Cmt'];
const MONTHS = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
const NOW = () => new Date();
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const isoWeek = d => { const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())); const n = t.getUTCDay() || 7; t.setUTCDate(t.getUTCDate() + 4 - n); const y = new Date(Date.UTC(t.getUTCFullYear(), 0, 1)); return `${t.getUTCFullYear()}-W${String(Math.ceil(((t - y) / 864e5 + 1) / 7)).padStart(2,'0')}`; };
const hm = d => `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
const toMin = s => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
const nowMin = () => { const d = NOW(); return d.getHours() * 60 + d.getMinutes(); };
const dLabel = off => { const d = addDays(NOW(), off); return `${d.getDate()} ${MONTHS[d.getMonth()].slice(0,3)}${d.getFullYear() !== NOW().getFullYear() ? ' ' + d.getFullYear() : ''}`; };
const money = n => '₺' + Math.round(n).toLocaleString('tr-TR');
const moneyD = n => '₺' + Number(n).toLocaleString('tr-TR', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 });
const dealVal = d => d.cur ? (d.value ? d.cur + Math.round(d.value).toLocaleString('tr-TR') + (d.per || '') : '🔒') : d.value ? money(d.value) : '—';
const tl = d => !d.cur;
const toast = msg => { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2200); };

/* ================= DEMO DATA ================= */
const GROUPS = { 'Markalar':'#d92d20','Proje':'#e8590c','NGO':'#2f8a4c','Platform':'#0e8a8a','Finans':'#2563c9','Yaşam':'#3f9142','Kişisel':'#77756f' };
const CATS = { 'Kampanya':'#d92d20','Etkinlik':'#b93a8a','İçerik / SEO':'#7048c6','Toplantı':'#0e8a8a','Satış / Lead':'#e8590c','Eğitim':'#222','Takip':'#2563c9','Operasyon':'#555','Finans':'#2f8a4c','Rapor':'#b7791f','Rutin':'#3f9142','Kişisel':'#8d8c86' };
const PRIS = { 'Kesin':'red','Yüksek':'amber','Orta':'green','Düşük':'' };
const PRI_ORDER = ['Kesin','Yüksek','Orta','Düşük'];
const PEOPLE = ['Oğuz'];
const ME = 'Oğuz';

const PROJECTS = [
  { name:'Werrise Digital', group:'Platform', owner:'Oğuz', next:'1 Ara · Werrise Ltd (UK) şirket kuruluşu', subs:['Werrise Ltd (UK) şirket kuruluşu','UK Market Inspection · Tahtakale (fırsat)','wealwaysrise.com','admin.wealwaysrise.com · kontrol merkezi','AI Daily Assistant Masterclass (geliştirmede)'] },
  { name:'Akdeniz Dental', group:'Markalar', owner:'Oğuz', next:'Cuma 19:00 paket görüşmesi', subs:['Çok dilli siteler: .pl ✓ → .de → .ro','Google Ads: .pl ✓ · .de ve .ro (siteler bitince)','UK finans · Ideal for Finance','Plan Ports CRM · hasta takibi','Günlük raporlama'] },
  { name:'Dental Ops', group:'Markalar', parent:'Akdeniz Dental', owner:'Oğuz', next:'Cuma 19:00 Akdeniz ekibiyle paket görüşmesi', subs:['A’dan Z’ye hasta yolculuğu','Kurucu ekip (Akdeniz Dental ortağı)','Proje yönetimi: Oğuz'] },
  { name:'Londra Depo', group:'Markalar', owner:'Oğuz', next:'Günlük outreach + müşteri keşfi', subs:['londradepo.com (Rayleigh, Essex)','Outreach paneli','Müşteri keşif sihirbazı'] },
  { name:'Dotneed', group:'Platform', parent:'Parti', owner:'Oğuz', next:'Sal 24 Kas 13:30 · Semih’e yanıt', subs:['Part-y’nin ana teknoloji markası','Paketleme çalışması (Semih, aday)','İşe alım / başvurular'] },
  { name:'Parti', group:'Platform', owner:'Oğuz', next:'Her hafta içi 10:00 huddle', subs:['İş bulma uygulaması (Part-y App)','Kurumsal görüşmeler: Tahtakale (28 Kas)','Skal iş birliği (Erdoğan Turan, başkan)','Rol: iş geliştirme & pazarlama yöneticisi','Günlük huddle','Maaş günü: her ayın 5’i'] },
  { name:'Kök Hücre Yönlendirme', group:'Proje', owner:'Oğuz', next:'Çar 25 Kas 17:00 Kim ile görüşme', subs:['Hasta adayları (TR/ABD/AU)','Tıbbi ekip değerlendirmesi','İş birliği modeli'] },
  { name:'İnnova Akademi · Akbank', group:'Proje', owner:'Oğuz', next:'Sal 8 Ara 15:30 · İzmir eğitimi', subs:['Akbank dijital dönüşüm eğitimleri','Satış eğitimi · eğitmen rolü','İzmir 7–8 Aralık'] },
  { name:'İTO · Filtre Kümelenmesi', group:'Proje', owner:'Oğuz', next:'ABD seyahati 22–26 Haz 2027 (taslak) · 1 Haz’da teyit', subs:['İskenderun Ticaret Odası','Ticaret Bakanlığı kapsamı','ABD seyahati (filter cluster)'] },
  { name:'UK Longevity', group:'Proje', owner:'Oğuz', next:'Çar 2 Ara 11:30 · Ezgi ile iş geliştirme görüşmesi', subs:['İletişim: Ezgi (UK numarası, WhatsApp)','Gani ile ön görüşme','İş geliştirme'] },
  { name:'Luenire SPA', group:'Proje', owner:'Oğuz', next:'Sal 24 Kas 12:00 TR · Sabrina görüşmesi (teyit bekliyor)', subs:['İletişim: Sabrina (WhatsApp)','Görüşme saatleri UK saatiyle (TR = UK + 3)'] },
  { name:'Ask a Roamer', group:'Markalar', owner:'Oğuz', next:'Çar 25 Kas 11:30 · rehber PDF takibi', subs:['Rehber (.pdf) geliştirmeleri'] },
  { name:'Aile & Kişisel', group:'Yaşam', owner:'Oğuz', next:'5–6 Ara tatil', subs:['Tatiller ve aile planları'] },
  { name:'Kişisel Finans', group:'Finans', owner:'Oğuz', next:'Aidat her ayın 1’i · kira her ayın 15’i', subs:['Düzenli giderler','Planlı ödemeler (kart, okul)','Yatırım (fon)'] }
];

/* Hafta içi rutinler (Pzt–Cum) — takvime ve görevlere otomatik işlenir */
const WEEKDAYS = [1,2,3,4,5];
const RECURRING = [
  { s:'09:30', e:'09:55', type:'task', short:'Soğuyan Fırsatlar', project:'Akdeniz Dental', group:'Markalar', pri:'Yüksek',
    title:'Akdeniz Dental · Soğuyan Fırsatlar mailleri (14 temsilci + yönetici özeti)',
    subs:['Plan Ports CRM’den temsilci bazlı hasta takip listesini çek','14 temsilciye “Soğuyan Fırsatlar” maillerini gönder','Yöneticilere özet maili gönder'] },
  { s:'10:00', e:'10:15', type:'meeting', short:'Parti huddle', project:'Parti', group:'Platform',
    title:'Parti · Günlük huddle (iş bulma uygulaması)' },
  { s:'11:30', e:'12:00', type:'task', short:'Londra outreach', project:'Londra Depo', group:'Markalar', pri:'Orta',
    title:'Londra Depo · Outreach paneli + müşteri keşif sihirbazı',
    subs:['Müşteri keşif sihirbazını çalıştır (yeni potansiyel müşteriler)','Outreach panelinden günlük gönderimleri yap','Gelen yanıtları kontrol et'] },
  { s:'22:30', e:'22:45', type:'task', short:'Tıklama raporu', project:'Akdeniz Dental', group:'Markalar', pri:'Yüksek',
    title:'Akdeniz Dental · Günlük tıklama raporu → kurucu ortaklar',
    subs:['Günlük tıklama raporunu hazırla','Kurucu ortaklara / yöneticilere gönder'] }
];
/* Tarihli (tek seferlik) randevular — o gün ajandaya düşer, öncesinde hatırlatma olur */
const EVENTS = [
  { date:'2026-11-25', s:'17:00', e:'17:15', type:'meeting', short:'Kim · kök hücre', project:'Kök Hücre Yönlendirme', group:'Proje',
    title:'Kim (Harex) · WhatsApp görüşmesi — kök hücre hasta yönlendirme',
    note:'Türkiye, ABD ve Avustralya’dan kök hücre tedavisi düşünen hasta adayları. Kim görüşme detaylarını gönderecek; hasta ihtiyaçlarının özetini istedik.' },
  { date:'2026-11-27', s:'19:00', e:'20:00', type:'meeting', short:'Akdeniz Dental ekibi', project:'Akdeniz Dental', group:'Markalar',
    title:'Akdeniz Dental ekibi · ortak yol haritası & dijital büyüme paketi görüşmesi',
    note:'Tüm dijital geliştirme ve büyüme işlerinin (Dental Ops, Polonya sitesi + Google Ads, UK finans) uzaktan, freelance formatta tek pakette yönetilmesi. Teklif detayları: Projeler › Akdeniz Dental notları.' }
];
const dayOff = iso => Math.round((new Date(iso + 'T00:00:00') - new Date(NOW().toDateString())) / 864e5);
const isWeekday = d => WEEKDAYS.includes(d.getDay());
/* Aylık tekrar eden günler (her ayın X’i) — önümüzdeki 3 ay için takvime düşer */
const MONTHLY = [
  { day:5, s:'09:00', e:'09:10', type:'plan', short:'Maaş günü · Parti', project:'Parti', group:'Platform',
    title:'💰 Maaş günü · Parti (iş geliştirme & pazarlama yöneticisi)',
    note:'Her ayın 5’i. Ödemenin hesaba geçtiğini kontrol et; tutar Bütçe › Düzenli gelirler’de.' },
  { day:1, key:'aidat', kind:'expense', lead:3, s:'09:00', e:'09:10', type:'plan', short:'Aidat', project:'Kişisel Finans', group:'Finans',
    title:'🏢 Aidat ödemesi', note:'Her ayın 1’i. Tutar Bütçe › Düzenli giderler’de.' },
  { day:15, key:'kira', kind:'expense', lead:3, s:'09:00', e:'09:10', type:'plan', short:'Kira', project:'Kişisel Finans', group:'Finans',
    title:'🏠 Kira ödemesi', note:'Her ayın 15’i. Tutar Bütçe › Düzenli giderler’de.' }
];
/* Tek seferlik planlı ödemeler (banka takviminden) — tutarlar şifreli notlarda */
/* İzmir · İnnova Akademi × Akbank dijital dönüşüm / satış eğitimi (eğitmen) */
EVENTS.push(
  { date:'2026-12-07', allDay:true, lead:3, s:'07:00', e:'07:15', type:'plan', short:'İzmir (Akbank eğitimi)', project:'İnnova Akademi · Akbank', group:'Proje',
    title:'✈️ İzmir — Akbank eğitimi için şehir dışı (7–8 Aralık)', note:'8 Aralık Salı 15:30’da eğitim var.' },
  { date:'2026-12-08', allDay:true, s:'07:00', e:'07:15', type:'plan', short:'İzmir', project:'İnnova Akademi · Akbank', group:'Proje', hideInList:true, lead:0,
    title:'📍 İzmir’de (2. gün)', note:'' },
  { date:'2026-12-08', lead:5, s:'15:30', e:'17:30', type:'meeting', short:'Akbank eğitimi · İzmir', project:'İnnova Akademi · Akbank', group:'Proje',
    title:'🎤 İnnova Akademi × Akbank — dijital dönüşüm & satış eğitimi (eğitmen)', note:'İzmir, Salı 15:30. Eğitmen olarak aktif görev.' }
);
/* 23 Kas 2026 eklenenler: Ask a Roamer, Werrise Ltd UK, Akdeniz çok dilli siteler, tatil */
EVENTS.push(
  { date:'2026-11-25', lead:1, s:'11:30', e:'12:00', type:'task', short:'Ask a Roamer · rehber PDF', project:'Ask a Roamer', group:'Markalar',
    title:'📘 Ask a Roamer — rehber PDF geliştirmelerini takip et', note:'Yeni marka. Rehber (.pdf) üzerindeki geliştirmelerin durumu.' },
  { date:'2026-11-24', lead:1, tentative:true, s:'12:00', e:'12:30', type:'meeting', short:'Sabrina · Luenire SPA (taslak)', project:'Luenire SPA', group:'Proje',
    title:'📞 Luenire SPA · Sabrina görüşmesi — Salı 09:00 UK / 12:00 TR (teyit bekliyor)', note:'Sabrina Salı 09:00 UK’yi onayladı; teyidi bizde. Alternatif: Perşembe.' },
  { date:'2026-11-24', lead:1, s:'13:30', e:'13:45', type:'task', short:'Semih’e yanıt (Dotneed)', project:'Dotneed', group:'Platform',
    title:'💬 Dotneed — iş başvurusu yapan Semih’e WhatsApp’tan yanıt yaz', note:'Semih 12 Kas’ta “DotNeed Paketleme Çalışması” PDF’ini ve sesli mesaj gönderdi, 16 Kas’ta gelişme sordu.' },
  { date:'2026-11-26', lead:0, tentative:true, s:'12:00', e:'12:30', type:'meeting', short:'Sabrina · alternatif', project:'Luenire SPA', group:'Proje',
    title:'📞 Luenire SPA · Sabrina — alternatif gün: Perşembe 09:00 UK / 12:00 TR', note:'Salı uymazsa Sabrina Perşembe’yi önerdi.' },
  { date:'2026-11-27', lead:1, s:'11:15', e:'11:30', type:'task', short:'Skal · takip mesajı', project:'Parti', group:'Platform',
    title:'💬 Skal başkanı Erdoğan Turan’a Part-y × Skal iş birliği takip mesajı', note:'Part-y için Skal iş birliğinin takibi.' },
  { date:'2026-11-28', lead:2, s:'11:00', e:'12:00', type:'meeting', short:'Tahtakale · Part-y App', project:'Parti', group:'Platform',
    title:'🤝 Tahtakale × Part-y App — kurumsal görüşme', note:'Ayrıca gündem: UK Market Inspection fırsatı (UK vizit sırasında).' },
  { date:'2026-12-01', lead:2, s:'11:00', e:'11:15', type:'plan', short:'Werrise Ltd UK kuruluşu', project:'Werrise Digital', group:'Platform',
    title:'📝 Werrise Ltd — İngiltere’de şirket kurma işi', note:'Not: UK şirket kuruluşu adımlarını başlat.' },
  { date:'2026-12-02', lead:2, s:'11:30', e:'12:00', type:'meeting', short:'Ezgi · UK Longevity', project:'UK Longevity', group:'Proje',
    title:'📞 Ezgi — UK Longevity iş geliştirme görüşmesi', note:'WhatsApp üzerinden sesli görüşme. Gani’nin Ezgi ile yaptığı görüşmenin özetini önceden al.' },
  { date:'2026-12-01', lead:2, s:'12:30', e:'12:45', type:'plan', short:'Akdeniz çok dilli siteler', project:'Akdeniz Dental', group:'Markalar',
    title:'📝 Akdeniz Dental çok dilli siteler: .pl → .de → .ro, ardından Google Ads', note:'.pl’den sonra sırasıyla .de ve .ro siteleri kurgulanacak; siteler bitince Google Ads kampanya kurguları yapılacak.' },
  { date:'2026-12-05', key:'tatil1', allDay:true, lead:3, s:'07:00', e:'07:15', type:'plan', short:'Tatil (1 gece 2 gün)', project:'Aile & Kişisel', group:'Yaşam',
    title:'🌴 Aile & eş dost tatili (5–6 Aralık, 1 gece 2 gün)', note:'Konaklamalı.' },
  { date:'2026-12-06', key:'tatil2', allDay:true, lead:0, hideInList:true, s:'07:00', e:'07:15', type:'plan', short:'Tatil (2. gün)', project:'Aile & Kişisel', group:'Yaşam',
    title:'🌴 Tatil — 2. gün (dönüş)', note:'' }
);
/* İskenderun Ticaret Odası · Filtre Kümelenmesi — ABD seyahati (Ticaret Bakanlığı). Net tarih bekleniyor. */
EVENTS.push(
  { date:'2027-06-01', lead:7, s:'09:00', e:'09:15', type:'plan', short:'ABD seyahati · tarih teyidi', project:'İTO · Filtre Kümelenmesi', group:'Proje',
    title:'📝 ABD seyahati notu — net tarihi teyit et', note:'Ticaret Bakanlığı kapsamında İskenderun TO filtre kümelenmesi ABD seyahati 22–26 Haziran 2027 olarak planlandı; kesin tarih bekleniyor.' },
  ...['2027-06-22','2027-06-23','2027-06-24','2027-06-25','2027-06-26'].map((date, i) => ({ date, allDay:true, tentative:true, hideInList:i > 0, lead:i === 0 ? 7 : 0,
    s:'07:00', e:'07:15', type:'meeting', short:'ABD seyahati (taslak)', project:'İTO · Filtre Kümelenmesi', group:'Proje',
    title:`✈️ ABD seyahati — İTO filtre kümelenmesi${i === 0 ? ' (22–26 Haz, taslak)' : ` (${i + 1}. gün, taslak)`}`, note:'Taslak tarih — net tarih gelince güncellenecek.' }))
);
EVENTS.push(
  { date:'2026-12-07', key:'okul', kind:'expense', lead:3, s:'09:00', e:'09:10', type:'plan', short:'Okul ödemesi', project:'Kişisel Finans', group:'Finans', title:'🎓 Okul ödemesi', note:'Banka takviminde planlı ödeme.' },
  { date:'2026-12-09', key:'kart', kind:'expense', lead:3, s:'09:00', e:'09:10', type:'plan', short:'Kart ekstresi', project:'Kişisel Finans', group:'Finans', title:'💳 Kredi kartı ekstre ödemesi', note:'Ekstre borcu son ödeme günü.' },
  { date:'2027-02-15', key:'deniz', kind:'expense', lead:7, s:'09:00', e:'09:15', type:'plan', short:'Planlı USD ödemesi', project:'Kişisel Finans', group:'Finans', title:'💵 Planlı ödeme (USD)', note:'Detay ve tutar şifreli notlarda.' },
  { date:'2026-12-09', key:'fon', kind:'expense', s:'09:10', e:'09:20', type:'plan', short:'Fon alışı', project:'Kişisel Finans', group:'Finans', title:'📈 Fon alışı (yatırım)', note:'Otomatik fon alışı.' }
);
const isoDate = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const nextMonthly = m => { const n = NOW(); let d = new Date(n.getFullYear(), n.getMonth(), m.day); if (dayOff(isoDate(d)) < 0) d = new Date(n.getFullYear(), n.getMonth() + 1, m.day); return isoDate(d); };
MONTHLY.forEach(m => { const n = NOW(); for (let k = 0; k < 3; k++) EVENTS.push({ ...m, monthly:true, date:isoDate(new Date(n.getFullYear(), n.getMonth() + k, m.day)) }); });
const nextWeekdayOff = () => { for (let i = 0; i < 7; i++) if (isWeekday(addDays(NOW(), i))) return i; return 0; };

let uid = 100;
const T = (title, o) => ({ id: ++uid, title, pri:'Orta', group:'Proje', cat:'Operasyon', project:'Werrise Digital', owner:ME, due:0, today:false, done:false, follow:false, est:0, slot:'', subs:[], ...o });
const TASKS = [
  T('Kim (Harex) ile WhatsApp görüşmesi — kök hücre hasta yönlendirme', { pri:'Kesin', group:'Proje', cat:'Toplantı', project:'Kök Hücre Yönlendirme',
    due:dayOff('2026-11-25'), today:dayOff('2026-11-25') === 0, est:.25, slot:'Çar 25 Kas · 17:00–17:15 (TR)', subs:[
    { t:'Kim’in gönderdiği hasta özetini oku (tedavi ihtiyacı, kök hücre türü, ülke)', done:false },
    { t:'Tıbbi ekiple ön değerlendirme: hangi konsültasyon/tedaviler mümkün', done:false },
    { t:'Görüşme: hasta sayısı, ülkeler (TR/ABD/AU), süreç ve iş birliği modeli', done:false },
    { t:'Görüşme notunu CRM’e yaz, sonraki adımı belirle', done:false } ]}),
  T('Akdeniz Dental ekibiyle paket görüşmesi (Cuma 19:00)', { pri:'Kesin', group:'Markalar', cat:'Toplantı', project:'Akdeniz Dental',
    due:dayOff('2026-11-27'), today:dayOff('2026-11-27') === 0, est:1, slot:'Cum 27 Kas · 19:00–20:00', subs:[
    { t:'Teklif özetini gözden geçir (Projeler › Akdeniz Dental › Notlar)', done:false },
    { t:'Kapsamı netleştir: Dental Ops, Polonya sitesi + Google Ads, UK finans (Ideal for Finance)', done:false },
    { t:'Yapay zeka araçlarının kendi kartlarından ödenmesini teyit et', done:false },
    { t:'Başlangıç tarihi, ödeme günü ve sözleşme adımını konuş', done:false },
    { t:'Görüşme sonrası: notları ve kararları panele işle', done:false } ]}),
  T('Parti maaşının hesaba geçtiğini kontrol et', { pri:'Orta', group:'Finans', cat:'Finans', project:'Parti',
    due:dayOff(nextMonthly(MONTHLY[0])), today:dayOff(nextMonthly(MONTHLY[0])) === 0, est:.1, recur:'Her ayın 5’i' }),
  ...MONTHLY.filter(m => m.kind === 'expense').map(m => T(`${m.short} ödemesini yap`, { key:m.key, pri:'Yüksek', group:'Finans', cat:'Finans', project:'Kişisel Finans',
    due:dayOff(nextMonthly(m)), today:dayOff(nextMonthly(m)) === 0, est:.1, recur:`Her ayın ${m.day}’i` })),
  T('Kredi kartı ekstre borcunu öde', { key:'kart', pri:'Kesin', group:'Finans', cat:'Finans', project:'Kişisel Finans', due:dayOff('2026-12-09'), today:dayOff('2026-12-09') === 0, est:.1 }),
  T('Okul ödemesinin hesaptan çekildiğini kontrol et', { key:'okul', pri:'Orta', group:'Finans', cat:'Finans', project:'Kişisel Finans', due:dayOff('2026-12-07'), today:dayOff('2026-12-07') === 0, est:.1 }),
  T('Akbank eğitimi: İzmir ulaşım & konaklama ayarla (7–8 Ara)', { pri:'Yüksek', group:'Proje', cat:'Operasyon', project:'İnnova Akademi · Akbank', due:dayOff('2026-12-01'), today:dayOff('2026-12-01') === 0, est:.5 }),
  T('Akbank eğitimi: sunum ve materyalleri hazırla', { pri:'Kesin', group:'Proje', cat:'Eğitim', project:'İnnova Akademi · Akbank', due:dayOff('2026-12-04'), today:dayOff('2026-12-04') === 0, est:3, subs:[
    { t:'İnnova Akademi’den katılımcı profili ve süreyi teyit et', done:false },
    { t:'Dijital dönüşüm & satış odaklı akışı çıkar', done:false },
    { t:'Sunum + örnek vaka + uygulama alıştırması', done:false },
    { t:'Gerekirse ekipman / bağlantı ihtiyacını bildir', done:false } ]}),
  T('Eğitmen: İnnova Akademi × Akbank eğitimi (İzmir, Sal 15:30)', { pri:'Kesin', group:'Proje', cat:'Eğitim', project:'İnnova Akademi · Akbank', due:dayOff('2026-12-08'), today:dayOff('2026-12-08') === 0, est:2, slot:'Sal 8 Ara · 15:30 · İzmir' }),
  T('ABD seyahati (İTO filtre kümelenmesi): net tarihi teyit et', { pri:'Yüksek', group:'Proje', cat:'Takip', project:'İTO · Filtre Kümelenmesi', due:dayOff('2027-06-01'), today:dayOff('2027-06-01') === 0, est:.25, follow:true, subs:[
    { t:'Planlanan: 22–26 Haziran 2027 — Ticaret Bakanlığı / İTO’dan kesin tarihi al', done:false },
    { t:'Kesin tarih gelince takvimi güncelle (Claude’a yaz)', done:false },
    { t:'Vize, uçuş ve konaklama durumunu kontrol et', done:false } ]}),
  T('Planlı ödeme için nakit hazırla', { key:'bes', pri:'Yüksek', group:'Finans', cat:'Finans', project:'Kişisel Finans', due:dayOff('2027-02-01'), today:dayOff('2027-02-01') === 0, est:.25 }),
  T('Planlı USD ödemesini yap', { key:'deniz', pri:'Kesin', group:'Finans', cat:'Finans', project:'Kişisel Finans', due:dayOff('2027-02-15'), today:dayOff('2027-02-15') === 0, est:.25 }),
  T('Ask a Roamer: rehber PDF geliştirmelerini takip et', { pri:'Orta', group:'Markalar', cat:'Takip', project:'Ask a Roamer', due:dayOff('2026-11-25'), today:dayOff('2026-11-25') === 0, est:.5, follow:true, slot:'Çar 25 Kas · 11:30', subs:[
    { t:'Rehber PDF’in son sürümünü gözden geçir', done:false },
    { t:'Bekleyen geliştirmeleri ve sorumluları listele', done:false },
    { t:'Bir sonraki takip tarihini belirle', done:false } ]}),
  T('Sabrina’ya (Luenire SPA) görüşme saatini teyit et', { pri:'Kesin', group:'Proje', cat:'Takip', project:'Luenire SPA', due:dayOff('2026-11-24'), today:dayOff('2026-11-24') === 0, est:.1, follow:true, slot:'Sal 24 Kas · sabah', subs:[
    { t:'Takvimi kontrol et: Salı 12:00 TR (09:00 UK) uygun mu?', done:false },
    { t:'WhatsApp’tan yaz: Salı 09:00 UK teyit — olmazsa Perşembe 09:00 UK', done:false },
    { t:'Kesin günü Claude’a bildir (takvim güncellensin)', done:false } ]}),
  T('Semih’e WhatsApp’tan yanıt yaz (Dotneed iş başvurusu)', { pri:'Yüksek', group:'Platform', cat:'Takip', project:'Dotneed', due:dayOff('2026-11-24'), today:dayOff('2026-11-24') === 0, est:.25, slot:'Sal 24 Kas · 13:30', subs:[
    { t:'“DotNeed Paketleme Çalışması” PDF’ini (3 sayfa) gözden geçir', done:false },
    { t:'12 Kas tarihli sesli mesajı (4:18) dinle', done:false },
    { t:'Karar / sonraki adım: görüşme, deneme işi ya da bekleme', done:false },
    { t:'WhatsApp’tan yanıt gönder (16 Kas’taki “gelişme var mı” sorusuna)', done:false } ]}),
  T('Luenire SPA · Sabrina görüşmesi', { pri:'Yüksek', group:'Proje', cat:'Toplantı', project:'Luenire SPA', due:dayOff('2026-11-24'), today:dayOff('2026-11-24') === 0, est:.5, slot:'Sal 24 Kas · 12:00 TR / 09:00 UK (taslak)', subs:[
    { t:'Görüşme gündemini ve ekip koordinasyonunu netleştir', done:false },
    { t:'Görüşme sonrası notları CRM’e yaz, sonraki adımı belirle', done:false } ]}),
  T('Skal · Erdoğan Turan’a iş birliği takip mesajı yolla (Part-y)', { pri:'Yüksek', group:'Platform', cat:'Takip', project:'Parti', due:dayOff('2026-11-27'), today:dayOff('2026-11-27') === 0, est:.25, follow:true, slot:'Cum 27 Kas · 11:15', subs:[
    { t:'Son konuşulanları hatırla: Part-y × Skal iş birliği kapsamı', done:false },
    { t:'Kısa takip mesajı: somut öneri + sonraki adım (görüşme tarihi)', done:false },
    { t:'Yanıt gelince CRM’de aşamayı güncelle', done:false } ]}),
  T('Tahtakale × Part-y App kurumsal görüşmesi (Cmt 11:00)', { pri:'Kesin', group:'Platform', cat:'Toplantı', project:'Parti', due:dayOff('2026-11-28'), today:dayOff('2026-11-28') === 0, est:1, slot:'Cmt 28 Kas · 11:00', subs:[
    { t:'Part-y App kurumsal sunumunu hazırla (değer önerisi, kurumsal kullanım senaryoları)', done:false },
    { t:'Tahtakale’nin ihtiyacını ve karar vericileri netleştir', done:false },
    { t:'Gündeme ekle: UK Market Inspection fırsatı (UK vizit sırasında)', done:false },
    { t:'Görüşme sonrası: notları CRM’e yaz, sonraki adımı belirle', done:false } ]}),
  T('Tahtakale · UK Market Inspection fırsatını kovala', { pri:'Yüksek', group:'Platform', cat:'Satış / Lead', project:'Werrise Digital', due:dayOff('2026-11-28') + 3, today:dayOff('2026-11-28') + 3 === 0, est:.5, follow:true, subs:[
    { t:'28 Kas görüşmesinde fırsatı aç: kapsam, beklenti, bütçe', done:false },
    { t:'UK vizit tarihini netleştir ve inspection planını ona göre yap', done:false },
    { t:'Kısa teklif / iş tanımı gönder', done:false } ]}),
  T('Ezgi ile UK Longevity iş geliştirme görüşmesi (Çar 11:30)', { pri:'Yüksek', group:'Proje', cat:'Satış / Lead', project:'UK Longevity', due:dayOff('2026-12-02'), today:dayOff('2026-12-02') === 0, est:.5, slot:'Çar 2 Ara · 11:30', subs:[
    { t:'Gani’den Ezgi ile yaptığı görüşmenin özetini al', done:false },
    { t:'UK Longevity fırsatı: hizmet kapsamı, hedef kitle, iş birliği modeli', done:false },
    { t:'Görüşme: rol dağılımı ve ilk adımlar', done:false },
    { t:'Görüşme sonrası: notları CRM’e yaz, sonraki adımı belirle', done:false } ]}),
  T('Werrise Ltd (UK) şirket kuruluşunu başlat', { pri:'Yüksek', group:'Platform', cat:'Operasyon', project:'Werrise Digital', due:dayOff('2026-12-01'), today:dayOff('2026-12-01') === 0, est:1, slot:'Sal 1 Ara · 11:00', subs:[
    { t:'Kuruluş yolunu seç (Companies House doğrudan / formation agent)', done:false },
    { t:'Registered office adresi ve direktör/hissedar bilgileri', done:false },
    { t:'UK iş bankası hesabı', done:false },
    { t:'Muhasebeci ve vergi kayıtları (Corporation Tax, gerekirse VAT)', done:false } ]}),
  T('Akdeniz Dental çok dilli siteler + Google Ads planı', { pri:'Yüksek', group:'Markalar', cat:'İçerik / SEO', project:'Akdeniz Dental', due:dayOff('2026-12-01'), today:dayOff('2026-12-01') === 0, est:1, slot:'Sal 1 Ara · 12:30', subs:[
    { t:'.pl sitesi (mevcut) — referans yapı olarak kullan', done:true },
    { t:'1. sıra: Almanca site (.de) kurgusu', done:false },
    { t:'2. sıra: Rumence site (.ro) kurgusu', done:false },
    { t:'Siteler bitince: .de Google Ads kampanya kurgusu', done:false },
    { t:'Siteler bitince: .ro Google Ads kampanya kurgusu', done:false } ]}),
  T('Tatil hazırlığı: rezervasyon ve plan kontrolü', { key:'tatil', pri:'Orta', group:'Yaşam', cat:'Kişisel', project:'Aile & Kişisel', due:dayOff('2026-12-03'), today:dayOff('2026-12-03') === 0, est:.25 }),
  T('Kim’den görüşme detaylarını ve hasta özetini bekle', { pri:'Yüksek', group:'Proje', cat:'Takip', project:'Kök Hücre Yönlendirme',
    due:dayOff('2026-11-25') - 1, today:dayOff('2026-11-25') - 1 === 0, est:.2, follow:true, subs:[
    { t:'WhatsApp’tan görüşme davetinin geldiğini kontrol et', done:false },
    { t:'Gelmediyse kısa hatırlatma mesajı at', done:false } ]}),
  ...RECURRING.filter(r => r.type === 'task').map(r => T(r.title, { pri:r.pri, group:r.group, cat:'Rutin', project:r.project,
    due:nextWeekdayOff(), today:isWeekday(NOW()), est:(toMin(r.e) - toMin(r.s)) / 60, recur:`Hafta içi · ${r.s}`, subs:r.subs.map(t => ({ t, done:false })) }))
];

const AGENDA = [].map(([s, e, type, title]) => ({ s, e, type, title }))
 .concat(isWeekday(NOW()) ? RECURRING.map(r => ({ ...r, rec:true })) : [])
 .concat(EVENTS.filter(ev => dayOff(ev.date) === 0))
 .sort((a, b) => toMin(a.s) - toMin(b.s));

/* Şifreli özel notlar (private.js) — girişten sonra çözülür ve buraya yüklenir */
let NOTES = [], INCOME = [], PRIV_REV = {}, REC_EXP = [], PAYMENTS = [];
/* Ayın belirli günündeki tekrar tarihleri (from..to gün aralığı) */
const occurrences = (day, from, to) => { const out = [], n = NOW(); for (let k = -2; k <= 2; k++) { const iso = isoDate(new Date(n.getFullYear(), n.getMonth() + k, day)), o = dayOff(iso); if (o >= from && o <= to) out.push({ iso, off:o }); } return out; };
window.WR_setPrivate = data => {
  NOTES = data.notes || []; INCOME = data.income || []; PRIV_REV = data.rev || {};
  for (let i = BUDGET.length - 1; i >= 0; i--) if (BUDGET[i].priv) BUDGET.splice(i, 1);
  (data.budget || []).forEach(b => BUDGET.push({ ...b, d:dayOff(b.date), priv:true }));
  REC_EXP = data.recurringExp || []; PAYMENTS = data.payments || [];
  // Son 30 günde gerçekleşmiş düzenli giderler ve planlı ödemeler → Hareketler
  REC_EXP.forEach(r => occurrences(r.day, -30, -1).forEach(o => BUDGET.push({ d:o.off, desc:`${r.desc} (her ayın ${r.day}’i)`, proj:'Kişisel Finans', cat:r.cat, amt:-r.amt, priv:true })));
  PAYMENTS.filter(p => dayOff(p.date) < 0 && dayOff(p.date) >= -30).forEach(p => BUDGET.push({ d:dayOff(p.date), desc:p.desc, proj:'Kişisel Finans', cat:p.cat, amt:-p.amt, cur:p.cur, priv:true }));
  BUDGET.sort((a, b) => b.d - a.d);
  // Özel başlıklar (ör. site / okul adı) — sadece giriş sonrası
  const L = data.labels || {};
  EVENTS.forEach(ev => { if (!ev.key) return; ev._t = ev._t || ev.title; ev._s = ev._s || ev.short; ev.title = L[ev.key]?.title || ev._t; ev.short = L[ev.key]?.short || ev._s; });
  TASKS.forEach(t => { if (!t.key) return; t._t = t._t || t.title; t.title = L[t.key]?.task || t._t; });
  (data.deals || []).forEach(p => { const d = DEALS.find(x => x.id === p.id); if (d) Object.assign(d, p); });
  render();
};

let SIGNALS = [
  { ic:'alarm', tone:'amber', when:() => overdueTasks().length > 0, t:'{overdue} işin tarihi geçti', p:'En acili: “{topOverdue}”. Ya bugüne çek ya da bilinçle yeni bir güne ertele — belirsizlikte bırakma.', a:'Gecikmişleri aç', go:'gorevler?overdue' },
  { ic:'repeat', tone:'blue', when:() => AGENDA.some(a => a.rec), t:'Bugün {routines} rutin var', p:'{routineList}', a:'Rutinleri aç', go:'planlama' },
  { ic:'repeat', tone:'amber', when:() => reviewTasks().length > 0, t:'{review} iş gözden geçirilmeyi bekliyor', p:'14 günden uzun süredir bekleyenler var. Tek tek tart: yap, küçült, devret ya da bilinçle bırak.', a:"Öncelik'te gözden geçir", go:'oncelik' }
];
const activeSignals = () => SIGNALS.filter(s => !s.when || s.when());

const DEALS = [
  { id:13, name:'UK Longevity iş geliştirme', co:'Ezgi (UK)', value:0, stage:'Görüşme', src:'WhatsApp', note:'Çar 2 Ara 11:30 görüşme · Gani ile ön görüşme yapıldı' },
  { id:12, name:'Luenire SPA görüşmesi', co:'Luenire SPA · Sabrina', value:0, stage:'Görüşme', src:'WhatsApp', note:'Salı 09:00 UK (12:00 TR) — teyit bekliyor; alternatif Perşembe' },
  { id:14, name:'Part-y × Skal iş birliği', co:'Skal · Erdoğan Turan (başkan)', value:0, stage:'Görüşme', src:'İlişki ağı', note:'Cum 27 Kas 11:15 takip mesajı' },
  { id:10, name:'Part-y App kurumsal iş birliği', co:'Tahtakale', value:0, stage:'Görüşme', src:'Kurumsal görüşme', note:'Cmt 28 Kas 11:00 görüşme' },
  { id:11, name:'UK Market Inspection (UK vizit sırasında)', co:'Tahtakale', value:0, stage:'Yeni lead', src:'Kurumsal görüşme', note:'Fırsatı kovala — UK vizit tarihine göre planla' },
  { id:8, name:'Kök hücre hasta yönlendirme (TR/ABD/AU)', co:'Kim · Harex', value:0, stage:'Görüşme', src:'WhatsApp' },
  { id:9, name:'Dijital büyüme paketi (aylık, freelance)', co:'Akdeniz Dental', value:0, cur:'€', per:'/ay', stage:'Teklif', src:'Mevcut müşteri' }
];
const STAGES = ['Yeni lead','Görüşme','Teklif','Kazanıldı','Kayıp'];

const BUDGET = [];  // gerçek hareketler şifreli notlardan (private.js) gelir

const TEAM_EVENTS = { 'Oğuz': [] };

const REVIEWS = [];

/* ================= STATE ================= */
const S = {
  tf: { tab:'all', q:'', hideDone:true, overdue:false, essential:false, mine:false, person:'herkes', group:'Tümü', cat:'Tümü', pri:'Tümü', view:'single' },
  todayGroup:'Tümü', todayView:'single', agendaView:'v', dashAgenda:'h', gear:'Odak',
  open:new Set(),
  nowId: null,
  focus:{ taskId:(TASKS.find(t => !t.done) || {}).id, len:25, left:25*60, running:false, sessions:0 }
};

/* ================= DERIVED ================= */
const openTasks = () => TASKS.filter(t => !t.done);
const overdueTasks = () => TASKS.filter(t => !t.done && t.due < 0);
const todayTasks = () => TASKS.filter(t => t.today || t.due === 0);
const reviewTasks = () => TASKS.filter(t => !t.done && t.due <= -14);
const byPri = (a, b) => PRI_ORDER.indexOf(a.pri) - PRI_ORDER.indexOf(b.pri) || a.due - b.due;
const nowTask = () => TASKS.find(t => t.id === S.nowId && !t.done) || openTasks().sort(byPri)[0];
const reminders = () => EVENTS.map(ev => ({ ...ev, off:dayOff(ev.date) })).filter(ev => ev.off >= 0 && ev.off <= (ev.lead ?? 2)).sort((a, b) => a.off - b.off || toMin(a.s) - toMin(b.s));
const upcoming = (max = 7) => EVENTS.filter(ev => !ev.hideInList).map(ev => ({ ...ev, off:dayOff(ev.date) })).filter(ev => ev.off >= 0 && ev.off <= max).sort((a, b) => a.off - b.off || toMin(a.s) - toMin(b.s));
const evTime = ev => ev.allDay ? 'tüm gün' : ev.s;
const fmtCur = (amt, cur) => !cur || cur === '₺' ? moneyD(amt) : cur + Number(amt).toLocaleString('tr-TR', { maximumFractionDigits:2 });
const payStr = ev => { const r = REC_EXP.find(x => x.key === ev.key); if (r) return fmtCur(r.amt, r.cur); const p = PAYMENTS.find(x => x.key === ev.key && x.date === ev.date); return p ? fmtCur(p.amt, p.cur) : ''; };
const payAmt = ev => { const r = REC_EXP.find(x => x.key === ev.key); if (r) return r.amt; const p = PAYMENTS.find(x => x.key === ev.key && x.date === ev.date); return p ? p.amt : 0; };
const whenTxt = off => off === 0 ? 'Bugün' : off === 1 ? 'Yarın' : `${DAYS[addDays(NOW(), off).getDay()]} (${dLabel(off)})`;
const sigText = s => s.replace('{overdue}', overdueTasks().length).replace('{review}', reviewTasks().length)
  .replace('{topOverdue}', (overdueTasks().sort((a, b) => a.due - b.due)[0] || {}).title || '')
  .replace('{routines}', AGENDA.filter(a => a.rec).length)
  .replace('{routineList}', AGENDA.filter(a => a.rec).map(a => `${a.s} ${a.short}`).join(' · ') || 'Hafta sonu — rutin yok');

/* ================= ROUTES ================= */
const ROUTES = [
  { g:'Günlük akış' },
  { id:'dashboard', label:'Dashboard', icon:'dash', title:'Dashboard', sub:'Tüm projelerin makro görünümü' },
  { id:'bugun', label:'Bugün', icon:'today', title:'Bugün', sub:'Günlük operasyon · genel rahatlık', count:() => todayTasks().filter(t => !t.done).length },
  { id:'planlama', label:'Planlama', icon:'plan', title:'Planlama', sub:'Haftanı yerleştir' },
  { id:'odak', label:'Odak', icon:'focus', title:'Odak', sub:'Tek iş, tek zaman' },
  { id:'gorevler', label:'Görevler', icon:'tasks', title:'Görevler', sub:'Ana liste · kategori › proje › todo', count:() => overdueTasks().length, hot:true },
  { g:'İş yönetimi' },
  { id:'projeler', label:'Projeler', icon:'proj', title:'Projeler', sub:'Proje › alt proje ağacı' },
  { id:'oncelik', label:'Öncelik', icon:'flag', title:'Öncelik', sub:'Önemli mi, acil mi?' },
  { id:'tarihler', label:'Tarihler', icon:'cal', title:'Tarihler', sub:'Teslimler ve önemli günler' },
  { id:'ekip', label:'Ekip Takvimi', icon:'team', title:'Ekip Takvimi', sub:'Kim, ne zaman, nerede' },
  { id:'portfoy', label:'Portföy', icon:'port', title:'Portföy', sub:'Markalar ve girişimler' },
  { id:'crm', label:'CRM', icon:'crm', title:'CRM', sub:'Fırsat hattı', count:() => DEALS.filter(d => d.stage === 'Yeni lead').length },
  { id:'butce', label:'Bütçe', icon:'budget', title:'Bütçe', sub:'Gelir · gider · nakit' },
  { g:'Ritim & değerlendirme' },
  { id:'hafta', label:'Hafta Değerlendirme', icon:'review', title:'Hafta Değerlendirme', sub:'Geriye bak, ileriyi seç' },
  { g:'Site' },
  { id:'site', label:'Site İçeriği', icon:'site', title:'Site İçeriği', sub:'wealwaysrise.com' },
  { id:'ayarlar', label:'Ayarlar', icon:'settings', title:'Ayarlar', sub:'Yapılandırma' }
];
const route = () => { const h = location.hash.slice(1).split('?')[0]; return ROUTES.find(r => r.id === h) || ROUTES[1]; };

function renderNav() {
  const cur = route().id;
  $('#sideNav').innerHTML = ROUTES.map(r => r.g
    ? `<div class="side-group">${r.g}</div>`
    : `<a href="#${r.id}" class="${r.id === cur ? 'active' : ''}" title="${r.label}">${ic(r.icon, 19)}<span class="label">${r.label}</span>${r.count && r.count() ? `<span class="count ${r.hot ? 'hot' : ''}">${r.count()}</span>` : ''}</a>`
  ).join('');
}

function renderNowbar() {
  const t = nowTask();
  const od = overdueTasks().length;
  $('#nowbar').innerHTML = t ? `
    <span class="lbl">ŞİMDİ</span>
    <span class="pill red dot">${t.pri}</span>
    <span class="t">${esc(t.title)}</span>
    ${t.due < 0 ? `<span class="pill red-o">${ic('alarm',12)} ${-t.due}g</span>` : ''}
    <button class="btn btn-ghost btn-sm" data-act="start" data-id="${t.id}">${ic('play',14)} Başla</button>
    <span class="pill">+${openTasks().length - 1}</span>
    ${od ? `<a class="pill red-o lg end" href="#gorevler?overdue">${ic('alarm',14)} ${od} gecikmiş</a>` : '<span class="pill green lg end">Gecikmiş iş yok ✓</span>'}`
    : `<span class="lbl">ŞİMDİ</span><span class="t">Açık iş kalmadı 🎉</span>`;
  $('#bellCount').textContent = activeSignals().length + reminders().length;
}

/* ================= SHARED UI ================= */
const gdot = g => `<span class="cdot" style="background:${GROUPS[g] || '#999'}"></span>`;
const priPill = p => `<span class="pill ${PRIS[p]} dot">${p}</span>`;
const dueBadge = t => t.done ? '' : t.due < 0 ? `<span class="pill red-o">${ic('alarm',12)} ${-t.due} gün gecikti</span>` : t.due === 0 ? '' : `<span class="pill">${dLabel(t.due)}</span>`;

function taskCard(t, compact) {
  const sd = t.subs.filter(s => s.done).length;
  const open = S.open.has(t.id);
  return `<div class="task p-${t.pri} ${t.done ? 'done' : ''}" data-tid="${t.id}">
    <button class="check ${t.done ? 'on' : ''}" data-act="done" data-id="${t.id}" aria-label="Tamamla">${ic('check',13)}</button>
    <div class="body">
      <div class="tt">${esc(t.title)}</div>
      <div class="meta">
        ${priPill(t.pri)}
        ${t.owner !== ME ? `<span class="pill blue">${ic('team',12)} ${t.owner}</span>` : `<span class="pill blue">${ic('user',12)} Sende</span>`}
        <span class="pill">${gdot(t.group)} ${esc(t.project)}</span>
        <span class="pill">${t.cat}</span>
        ${dueBadge(t)}
        ${t.today && !t.done ? '<span class="pill lime">Bugün</span>' : ''}
        ${t.est ? `<span class="pill">${ic('timer',12)} ${t.est < 1 ? Math.round(t.est*60)+' dk' : t.est+' sa'}</span>` : ''}
        ${t.subs.length ? `<span class="pill">☑ ${sd}/${t.subs.length}</span>` : ''}
        ${t.slot ? `<span class="pill blue">${ic('cal',12)} ${t.slot}</span>` : ''}
        ${t.recur ? `<span class="pill green">${ic('repeat',12)} ${t.recur}</span>` : ''}
        ${t.follow ? '<span class="pill amber">Takip</span>' : ''}
      </div>
      ${t.subs.length && open && !compact ? `<div class="subs"><div class="sh">Alt görevler · ${sd}/${t.subs.length}<div class="bar lime"><span style="width:${sd/t.subs.length*100}%"></span></div></div>
        ${t.subs.map((s,i) => `<div class="sub ${s.done ? 'done' : ''}"><button class="check ${s.done ? 'on' : ''}" data-act="sub" data-id="${t.id}" data-i="${i}">${ic('check',11)}</button><span>${esc(s.t)}</span></div>`).join('')}</div>` : ''}
    </div>
    <div class="acts">
      ${compact ? '' : `<button title="Başla" data-act="start" data-id="${t.id}">${ic('play')}</button>`}
      <button title="Odak zamanlayıcı" data-act="timer" data-id="${t.id}">${ic('timer')}</button>
      <button title="Önceliği yükselt" data-act="up" data-id="${t.id}">${ic('up')}</button>
      <button title="Yarına ertele" data-act="snooze" data-id="${t.id}">${ic('snooze')}</button>
      ${compact ? '' : `<button title="Takibe al" data-act="follow" data-id="${t.id}">${ic('pause')}</button>
      <button title="Bilinçle bırak" data-act="drop" data-id="${t.id}">${ic('ban')}</button>
      ${t.subs.length ? `<button title="Alt görevler" data-act="expand" data-id="${t.id}">${ic('chev')}</button>` : ''}`}
    </div>
  </div>`;
}

function taskList(list, view, compact) {
  if (!list.length) return '<div class="empty">Bu filtrede iş yok.</div>';
  if (view === 'project') {
    const by = {};
    list.forEach(t => (by[t.project] = by[t.project] || []).push(t));
    return Object.entries(by).map(([p, ts]) => `<div class="group-h">${gdot(ts[0].group)} ${esc(p)} <span class="pill">${ts.length}</span></div>${ts.map(t => taskCard(t, compact)).join('')}`).join('');
  }
  return list.map(t => taskCard(t, compact)).join('');
}

function agendaVertical() {
  const n = nowMin();
  return `<div class="agenda-v">${AGENDA.map(a => {
    const past = toMin(a.e) < n, cur = toMin(a.s) <= n && n < toMin(a.e);
    return `<div class="slot t-${a.type} ${past ? 'past' : ''} ${cur ? 'cur' : ''}"><div class="tm">${a.allDay ? 'Tüm<small>gün</small>' : `${a.s}<small>${a.e}</small>`}</div><div>${past && a.type === 'task' ? '✅ ' : ''}${a.type === 'meeting' ? ic('team',14)+' ' : ''}${esc(a.title)}${a.rec ? ` <span class="pill green">${ic('repeat',11)} her hafta içi</span>` : a.monthly ? ` <span class="pill amber">${ic('repeat',11)} her ayın ${a.day}’i</span>` : ''}${a.tentative ? ' <span class="pill amber">taslak tarih</span>' : ''}${a.kind === 'expense' ? ` <span class="pill red">ödeme${payAmt(a) ? ' · ' + payStr(a) : ''}</span>` : ''}</div></div>`;
  }).join('')}</div>`;
}
function agendaHorizontal() {
  const start = 7 * 60 + 30, end = 23 * 60, span = end - start, pct = m => ((m - start) / span * 100).toFixed(2);
  const n = nowMin();
  let hours = '';
  for (let h = 8; h <= 22; h++) hours += `<span class="hour" style="left:${pct(h*60)}%">${String(h).padStart(2,'0')}</span>`;
  return `<div class="agenda-scroll"><div class="agenda-h"><div class="track">${hours}
    ${AGENDA.filter(a => !a.allDay).map(a => `<div class="blk t-${a.type}" style="left:${pct(toMin(a.s))}%;width:calc(${pct(toMin(a.e)) - pct(toMin(a.s))}% - 3px)" title="${esc(a.title)} · ${a.s}–${a.e}"><b>${esc(a.title)}</b>${a.s}–${a.e}</div>`).join('')}
    ${n > start && n < end ? `<span class="now" style="left:${pct(n)}%"></span>` : ''}
  </div></div></div>`;
}
const agendaFree = () => { const used = AGENDA.reduce((s, a) => s + toMin(a.e) - toMin(a.s), 0); return Math.max(0, (15 * 60 - used) / 60).toFixed(1).replace('.0',''); };
const currentBlock = () => { const n = nowMin(); return AGENDA.find(a => toMin(a.s) <= n && n < toMin(a.e)) || AGENDA.find(a => toMin(a.s) > n); };

function quickCapture(withSelect) {
  return `<div class="capture">
    <input class="input" id="qcInput" placeholder="Anlık bir iş / fikir… (kafandan çıkar, listeye gir)">
    ${withSelect ? `<select class="input" id="qcGroup">${Object.keys(GROUPS).map(g => `<option ${g==='Kişisel'?'selected':''}>${g}</option>`).join('')}</select>` : ''}
    <button class="btn btn-primary" data-act="qc-today">+ Bugüne</button>
    <button class="btn btn-outline" data-act="qc-backlog">Backlog'a</button>
  </div>`;
}

/* ================= PAGES ================= */
const PAGES = {};

PAGES.dashboard = () => {
  const d = NOW(), tt = todayTasks(), done = tt.filter(t => t.done).length;
  const blk = currentBlock();
  const pipeline = DEALS.filter(x => tl(x) && !['Kazanıldı','Kayıp'].includes(x.stage)).reduce((s, x) => s + x.value, 0);
  const net = BUDGET.reduce((s, x) => s + x.amt, 0);
  return `
  <div class="page-head" style="align-items:flex-end">
    <div><div class="eyebrow">${DAYS[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]} · ${isoWeek(d)}</div>
      <div class="hero-clock" id="heroClock">${hm(d)}</div>
      <p class="lede" style="margin-top:0">Oğuz, bugün <b>${done}/${tt.length}</b> iş tamam.</p></div>
    <div class="row"><a class="btn btn-outline" href="#portfoy">◐ Marka odağı</a><a class="btn btn-primary" href="#bugun">Bugün'e git <span class="arrow">→</span></a></div>
  </div>

  <label class="quick" for="quickDash"><span class="plus">+</span><b style="color:var(--ink)">Hızlı görev ekle</b><input id="quickDash" placeholder="— aklına geleni at, kaybolmasın"><span class="kbd">N</span></label>

  <div class="grid g4 mt">
    <div class="card kpi"><div class="eyebrow">Açık iş</div><div class="value">${openTasks().length}</div><div class="delta">${todayTasks().filter(t=>!t.done).length} tanesi bugün</div></div>
    <div class="card kpi"><div class="eyebrow">Gecikmiş</div><div class="value" style="color:var(--red)">${overdueTasks().length}</div><div class="delta down">${reviewTasks().length} iş 14+ gün</div></div>
    <div class="card kpi"><div class="eyebrow">Açık fırsatlar</div><div class="value">${money(pipeline)}</div><div class="delta">${DEALS.filter(x=>x.stage==='Teklif').length} teklif bekliyor</div></div>
    <div class="card kpi"><div class="eyebrow">Net nakit · 30g</div><div class="value">${money(net)}</div><div class="delta ${net<0?'down':''}">Bütçe özetine git →</div></div>
  </div>

  <div class="grid g2 mt">
    <div class="now-card"><div class="lbl">ŞİMDİ</div>${blk ? `<h3>${esc(blk.title)}</h3><div>${blk.s}–${blk.e} · ${toMin(blk.s) > nowMin() ? 'sıradaki blok' : 'devam ediyor'}</div>` : `<h3>Günün blokları bitti 🌙</h3><div>yarın sabah ajanda yeniden kurulur</div>`}</div>
    <div class="card flat"><div class="card-head"><span class="sec-label">Durum</span><small class="muted">şimdi ve önümüzdeki günler</small></div>
      ${[0,1,2].map(o => { const x = dayInfo(o); return `<div class="status-row ${x.cls}"><b>${o === 0 ? 'Bugün' : o === 1 ? 'Yarın' : DAYS[addDays(d,o).getDay()]}</b><span>${x.label} · ${x.meet} toplantı · ${x.tasks} iş${x.pays ? ` · ${x.pays} ödeme` : ''}</span></div>`; }).join('')}
    </div>
  </div>

  <div class="card mt">
    <div class="card-head"><div class="l"><span class="sec-label">Ajanda</span><small class="muted">${agendaFree()} sa boş</small></div>
      <div class="seg" data-seg="dashAgenda"><button class="${S.dashAgenda==='h'?'active':''}" data-v="h">Yatay</button><button class="${S.dashAgenda==='v'?'active':''}" data-v="v">Dikey</button></div></div>
    ${S.dashAgenda === 'h' ? agendaHorizontal() : agendaVertical()}
  </div>

  <div class="grid split mt">
    <div class="card"><div class="card-head"><div class="l"><span class="sec-label">Bugünün işleri</span><small class="muted">${done}/${tt.length} tamam</small></div><a class="btn btn-ghost btn-sm" href="#bugun">Tümü <span class="arrow">→</span></a></div>
      <div class="bar lime" style="margin-bottom:16px"><span style="width:${tt.length ? done/tt.length*100 : 0}%"></span></div>
      ${tt.filter(t=>!t.done).sort(byPri).slice(0,5).map(t => taskCard(t, true)).join('')}
    </div>
    <div class="card"><div class="card-head"><span class="sec-label">Günün kalanı</span><small class="muted">${agendaFree()} sa boş</small></div>
      ${AGENDA.filter(a => toMin(a.e) > nowMin()).map(a => `<div class="status-row ok" style="grid-template-columns:90px 1fr"><b class="mono" style="font-size:13px">${a.s}</b><span>${esc(a.title)}</span></div>`).join('') || '<p class="muted">Kalan blok yok — dinlen.</p>'}
      <div class="card-head mt"><span class="sec-label">Yaklaşan randevular</span><small class="muted">7 gün</small></div>
      ${upcoming(7).map(ev => `<div class="status-row" style="grid-template-columns:120px 1fr"><b style="font-size:13px">${whenTxt(ev.off)} ${evTime(ev)}</b><span>${esc(ev.title)}</span></div>`).join('') || '<p class="muted">Yaklaşan randevu yok.</p>'}
    </div>
  </div>

  <div class="card-head mt2"><div><div class="eyebrow">Makro görünüm</div><h2 style="margin-top:4px">Projeler</h2></div><a class="btn btn-ghost" href="#projeler">Tüm projeler <span class="arrow">→</span></a></div>
  <div class="grid g4">${PROJECTS.map(projCard).join('')}</div>
  <p class="footnote">Taslak — tüm veriler örnek. Kaynaklar bağlandığında canlı veriyle dolacak.</p>`;
};

function notesFor(name) {
  const ns = NOTES.filter(n => n.project === name);
  if (!ns.length) return '';
  return `<div class="mt" style="border-top:1px solid var(--line);padding-top:12px"><div class="eyebrow" style="margin-bottom:6px">${ic('lock',12)} Notlar · ${ns.length}</div>
    ${ns.map(n => `<div class="note"><b>${esc(n.title)}</b>${n.date ? ` <small class="muted">${esc(n.date)}</small>` : ''}<ul>${n.lines.map(l => `<li>${esc(l)}</li>`).join('')}</ul></div>`).join('')}</div>`;
}
function dayInfo(o) {
  const dt = addDays(NOW(), o), iso = isoDate(dt), evs = EVENTS.filter(ev => ev.date === iso);
  const meet = (isWeekday(dt) ? RECURRING.filter(r => r.type === 'meeting').length : 0) + evs.filter(ev => ev.type === 'meeting').length;
  const tasks = (o === 0 ? todayTasks() : TASKS.filter(t => t.due === o)).filter(t => !t.done).length;
  const pays = evs.filter(ev => ev.kind === 'expense').length, load = meet * 2 + tasks;
  return { meet, tasks, pays, cls: load >= 8 ? 'full' : load >= 4 ? '' : 'ok', label: load >= 8 ? 'Dolu' : load >= 4 ? 'Orta' : 'Rahat' };
}
function projCard(p) {
  const open = TASKS.filter(t => t.project === p.name && !t.done).length;
  const late = TASKS.filter(t => t.project === p.name && !t.done && t.due < 0).length;
  const hc = { green:'var(--green)', amber:'var(--amber)', red:'var(--red)' }[p.health] || 'var(--line)';
  return `<div class="card proj-card"><div class="top"><span class="pill">${gdot(p.group)} ${p.group}</span><span class="health" style="background:${hc}" title="Sağlık"></span></div>
    <h3>${esc(p.name)}</h3>${p.parent ? `<small class="pill" style="margin-bottom:4px">↳ ${esc(p.parent)} altında</small><br>` : ''}<small class="muted">Sıradaki: ${esc(p.next)}</small>
    ${p.progress != null ? `<div class="bar" style="margin:14px 0 8px"><span style="width:${p.progress}%"></span></div>` : '<div style="height:14px"></div>'}
    <div class="row" style="font-size:13px"><span>${p.progress != null ? '%' + p.progress : ''}</span><span class="spacer"></span><span>${open} açık</span>${late ? `<span class="pill red">${late} gecikmiş</span>` : ''}</div></div>`;
}

PAGES.bugun = () => {
  const d = NOW(), tt = todayTasks(), done = tt.filter(t => t.done).length;
  let list = tt.filter(t => S.todayGroup === 'Tümü' || t.group === S.todayGroup);
  list = [...list.filter(t => !t.done).sort(byPri), ...list.filter(t => t.done)];
  const gearTxt = { 'Odak':'Derin iş için en verimli saatler — bildirimleri kapat.', 'Gevşeme':'Yenilenmek için rahatla (geçiş vitesi).', 'Toparlanma':'Küçük işler, mesajlar, kapanışlar.' };
  return `
  <div class="eyebrow">${DAYS[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()} · ${isoWeek(d)}</div>
  <h1>Hafta yaşamın anı, Oğuz — bugüne ne alıyorsun?</h1>
  <p class="lede">Hafta yaşamın anıdır. Bugün haftana ne alıyorsun, neyi uzaklaştırıyorsun?</p>

  <div class="card mt2">
    <div class="card-head"><div class="l">${ic('bolt')}<h3>Hızlı yakala</h3><small class="muted">aklına geleni at — kaybolmasın</small></div>
      <div class="row"><small class="muted">Öğleden sonra vitesi:</small><select class="input" id="gearSel">${Object.keys(gearTxt).map(g => `<option ${g===S.gear?'selected':''}>${g}</option>`).join('')}</select></div></div>
    ${quickCapture(true)}
    <div class="row mt" style="font-size:14px"><span>${ic('moon',14)} <b>${S.gear}:</b> ${gearTxt[S.gear]}</span><span class="spacer"></span><span class="pill red">Şu an olman gereken: ${currentBlock() ? esc(currentBlock().title) : 'Dinlenme'}</span></div>
  </div>

  <div class="card mt">
    <div class="card-head"><div class="l">${ic('cal')}<h3>Ajanda</h3><small class="muted">${agendaFree()} sa boş</small>
      <div class="seg" data-seg="agendaView"><button class="${S.agendaView==='h'?'active':''}" data-v="h">Yatay</button><button class="${S.agendaView==='v'?'active':''}" data-v="v">Dikey</button></div></div>
      <div class="row"><button class="btn btn-ghost btn-sm" data-act="replan">${ic('repeat',15)} Yeniden planla</button><button class="btn btn-lime btn-sm" data-act="place">${ic('cal',15)} Günü yerleştir</button></div></div>
    ${S.agendaView === 'h' ? agendaHorizontal() : agendaVertical()}
  </div>

  <div class="grid split mt">
    <div>
      <div class="card-head"><h2>Bugünün işleri</h2><span class="mono muted">${done}/${tt.length} tamam</span></div>
      <div class="bar lime" style="margin-bottom:16px"><span style="width:${tt.length ? done/tt.length*100 : 0}%"></span></div>
      <div class="chips" data-chips="todayGroup">${['Tümü', ...Object.keys(GROUPS)].map(g => `<button class="chip ${S.todayGroup===g?'active':''}" data-v="${g}">${g!=='Tümü'?gdot(g):''}${g}</button>`).join('')}</div>
      <div class="row mt"><div class="seg" data-seg="todayView"><button class="${S.todayView==='single'?'active':''}" data-v="single">Tek tek</button><button class="${S.todayView==='project'?'active':''}" data-v="project">Projeye göre</button></div></div>
      <p class="eyebrow mt" style="color:var(--olive);font-weight:700">Şimdi bunlar <span class="muted" style="font-weight:400;letter-spacing:0;text-transform:none">· sırayla, tek tek</span></p>
      <div class="mt">${taskList(list, S.todayView)}</div>
    </div>
    <div class="card" style="align-self:start">
      <div class="card-head"><h3>İçeri sinyalleri</h3><span class="pill red dot">${activeSignals().length + reminders().length}</span></div>
      ${reminders().map(ev => { const pay = ev.kind === 'expense', amt = pay ? payAmt(ev) : 0; return `<div class="signal"><span class="ic" style="background:var(--${pay?'amber':'blue'}-bg);color:var(--${pay?'amber':'blue'})">${ic(pay?'budget':'cal')}</span>
        <div style="flex:1"><h4>${whenTxt(ev.off)}${pay ? '' : ' ' + evTime(ev)} · ${esc(ev.short)}${amt ? ` · <span class="neg">${payStr(ev)}</span>` : ''}</h4><p>${esc(ev.title)}. ${esc(ev.note || '')}</p><a class="link" href="#${pay?'butce':'tarihler'}">${pay?'Ödemeleri aç':'Randevuları aç'} →</a></div></div>`; }).join('')}
      ${activeSignals().map(s => [s, SIGNALS.indexOf(s)]).map(([s, i]) => `<div class="signal"><span class="ic" style="background:var(--${s.tone}-bg);color:var(--${s.tone})">${ic(s.ic)}</span>
        <div style="flex:1"><h4>${sigText(s.t)}</h4><p>${sigText(s.p)}</p><a class="link" href="#${s.go}">${s.a} →</a></div>
        <button class="x" data-act="sig-x" data-i="${i}" aria-label="Kapat">×</button></div>`).join('') || '<p class="muted">Sinyal yok — sakin bir gün.</p>'}
    </div>
  </div>`;
};

PAGES.planlama = () => {
  const d = NOW(), mon = addDays(d, -((d.getDay() + 6) % 7));
  const days = [...Array(7)].map((_, i) => addDays(mon, i));
  const off = dd => Math.round((new Date(dd.toDateString()) - new Date(d.toDateString())) / 864e5);
  const backlog = TASKS.filter(t => !t.done && (t.due < off(days[0]) || t.due > off(days[6])));
  return `
  <div class="page-head"><div><div class="eyebrow">Planlama · ${isoWeek(d)}</div><h1>Haftanı yerleştir<span class="dot">.</span></h1><p class="lede">İşleri sürükleyip günlere bırak. Her günün dolulük çubuğu ~6 saatlik odak kapasitesine göre hesaplanır.</p></div>
    <button class="btn btn-primary" data-act="place">Haftayı otomatik dağıt <span class="arrow">→</span></button></div>
  <div class="week-board">${days.map(dd => {
    const o = off(dd), ts = TASKS.filter(t => !t.done && t.due === o), load = ts.reduce((s, t) => s + (t.est || 1), 0);
    return `<div class="day ${o === 0 ? 'today' : ''} col" data-drop="day" data-off="${o}"><h4><span>${DS[dd.getDay()]} ${dd.getDate()}</span><span class="muted">${load.toFixed(1).replace('.0','')} sa</span></h4>
      <div class="bar ${load > 6 ? '' : 'lime'} load"><span style="width:${Math.min(100, load/6*100)}%;${load>6?'background:var(--red)':''}"></span></div>
      ${ts.map(kcardTask).join('')}</div>`;
  }).join('')}</div>
  <div class="card-head mt2"><h2>Backlog & bu hafta dışı</h2><span class="pill">${backlog.length}</span></div>
  <div class="col" data-drop="day" data-off="99" style="min-height:120px;display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:8px">${backlog.sort(byPri).map(kcardTask).join('')}</div>
  <div class="card-head mt2"><div><div class="eyebrow">Her hafta içi otomatik</div><h2 style="margin-top:4px">Rutinler</h2></div><span class="pill green">${ic('repeat',12)} Pzt–Cum</span></div>
  <div class="card"><div class="table-wrap"><table><thead><tr><th>Saat</th><th>Rutin</th><th>Marka / proje</th><th>Tür</th><th>Günler</th></tr></thead><tbody>
    ${RECURRING.map(r => `<tr><td class="mono">${r.s}–${r.e}</td><td><strong>${esc(r.title)}</strong>${r.subs ? `<small>${r.subs.map(esc).join(' · ')}</small>` : ''}</td><td><span class="pill">${gdot(r.group)} ${esc(r.project)}</span></td><td><span class="pill ${r.type==='meeting'?'blue':'green'}">${r.type==='meeting'?'Toplantı':'Görev'}</span></td><td>Pzt–Cum</td></tr>`).join('')}
  </tbody></table></div></div>`;
};
const kcardTask = t => `<div class="kcard" draggable="true" data-drag="task" data-id="${t.id}"><b>${esc(t.title)}</b><div class="meta row" style="margin-top:6px;gap:5px">${priPill(t.pri)}<span class="pill">${gdot(t.group)} ${esc(t.project)}</span>${t.due<0?`<span class="pill red">${-t.due}g</span>`:''}</div></div>`;

PAGES.odak = () => {
  const f = S.focus, t = TASKS.find(x => x.id === f.taskId);
  const pct = 1 - f.left / (f.len * 60), C = 2 * Math.PI * 130;
  return `
  <div class="page-head"><div><div class="eyebrow">Odak</div><h1>Tek iş, tek zaman<span class="dot">.</span></h1></div><span class="pill lime lg">Bugün ${f.sessions} oturum</span></div>
  <div class="grid split">
    <div class="card" style="text-align:center;padding:36px">
      <select class="input" id="focusTask" style="max-width:100%;margin-bottom:22px">${openTasks().sort(byPri).map(x => `<option value="${x.id}" ${x.id===f.taskId?'selected':''}>${esc(x.title)}</option>`).join('')}</select>
      <div class="ring"><svg viewBox="0 0 280 280"><circle cx="140" cy="140" r="130" fill="none" stroke="var(--surface-2)" stroke-width="10"/><circle id="ringArc" cx="140" cy="140" r="130" fill="none" stroke="var(--olive)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C*(1-pct)}"/></svg>
        <div><div class="timer" id="timerTxt">${String(Math.floor(f.left/60)).padStart(2,'0')}:${String(f.left%60).padStart(2,'0')}</div><small class="muted">${t ? esc(t.project) : ''}</small></div></div>
      <div class="chips" data-chips="focusLen" style="justify-content:center;margin:24px 0 18px">${[25,50,90].map(m => `<button class="chip ${f.len===m?'active':''}" data-v="${m}">${m} dk</button>`).join('')}</div>
      <div class="row" style="justify-content:center"><button class="btn btn-primary" data-act="focus-toggle">${f.running ? ic('pause',16)+' Duraklat' : ic('play',16)+' Başla'}</button><button class="btn btn-outline" data-act="focus-reset">Sıfırla</button><button class="btn btn-lime" data-act="focus-done">${ic('check',16)} Bitti</button></div>
    </div>
    <div>
      <div class="card"><h3>Odak kuralları</h3>
        <div class="setting"><div>Bildirimleri sustur<small>Oturum boyunca</small></div><label class="toggle"><input type="checkbox" checked><span></span></label></div>
        <div class="setting"><div>Bitince 5 dk mola<small>Otomatik hatırlat</small></div><label class="toggle"><input type="checkbox" checked><span></span></label></div>
        <div class="setting"><div>Dikkat dağıtıcıyı not et<small>Aklına geleni yakala, sonra bak</small></div><label class="toggle"><input type="checkbox"><span></span></label></div></div>
      <div class="card mt"><h3>Aklına gelen (park et)</h3><p class="muted" style="font-size:14px;margin:4px 0 12px">Odaktayken gelen fikirleri buraya at — Görevler'e backlog olarak düşer.</p>${quickCapture(false)}</div>
    </div>
  </div>`;
};

PAGES.gorevler = () => {
  const f = S.tf, all = TASKS.length, doneN = TASKS.filter(t => t.done).length;
  const chipRow = (key, label, items, colors) => `<div class="fr"><span class="fl">${label}</span><div class="chips" data-chips="tf.${key}">${['Tümü', ...items].map(x => `<button class="chip ${f[key]===x?'active':''}" data-v="${x}">${x!=='Tümü'&&colors?`<span class="cdot" style="background:${colors[x]};border-radius:50%"></span>`:''}${x}</button>`).join('')}</div></div>`;
  return `
  <div class="page-head"><div><div class="eyebrow">Ana liste · tüm yapılacaklar</div><h1>Görevler<span class="dot">.</span></h1>
    <p class="lede">Her iş ayrı bir görev: varsayılan tek öncelik sırası, istersen proje › alt projeye göre. Her görevde öncelik, tarih, checklist; erteleme akışı duygusal engelleri yakalar.</p></div>
    <button class="btn btn-primary" data-act="new-task">+ Görev ekle</button></div>
  <div class="seg" data-seg="tf.tab"><button class="${f.tab==='all'?'active':''}" data-v="all">Tüm görevler</button><button class="${f.tab==='follow'?'active':''}" data-v="follow">Takip <span class="n">${TASKS.filter(t=>t.follow&&!t.done).length}</span></button></div>
  <div class="toolbar mt">
    <label class="search">${ic('search',16)}<input id="taskSearch" placeholder="Görev ara…" value="${esc(f.q)}"></label>
    <span class="spacer"></span>
    <button class="chip ${f.hideDone?'active':''}" data-act="tf-toggle" data-k="hideDone">${ic('eye',15)} Tamamlananlar ${f.hideDone?'gizli':'görünür'}</button>
    <button class="chip warn ${f.overdue?'on':''}" data-act="tf-toggle" data-k="overdue">${ic('alarm',15)} ${overdueTasks().length} gecikmiş</button>
    <button class="chip ${f.essential?'on':''}" data-act="tf-toggle" data-k="essential">${ic('focus',15)} Sadece esas</button>
    <button class="chip ${f.mine?'on':''}" data-act="tf-toggle" data-k="mine">${ic('user',15)} Bana ait</button>
    <select class="input" id="personSel"><option value="herkes">Kişi: herkes</option>${PEOPLE.map(p => `<option ${f.person===p?'selected':''}>${p}</option>`).join('')}</select>
    <span class="mono muted" id="taskCount"></span>
  </div>
  <div class="filters mt">
    ${chipRow('group','Grup',Object.keys(GROUPS),GROUPS)}
    ${chipRow('cat','Kategori',Object.keys(CATS),CATS)}
    ${chipRow('pri','Öncelik',PRI_ORDER,{Kesin:'var(--red)',Yüksek:'var(--amber)',Orta:'var(--olive)',Düşük:'var(--muted)'})}
  </div>
  <div class="row mt2"><small class="muted">Her iş ayrı · öncelik sırasıyla</small><span class="spacer"></span><div class="seg" data-seg="tf.view"><button class="${f.view==='single'?'active':''}" data-v="single">Tek tek</button><button class="${f.view==='project'?'active':''}" data-v="project">Projeye göre</button></div></div>
  <div class="mt" id="taskList"></div>`;
};
function filteredTasks() {
  const f = S.tf, q = f.q.toLocaleLowerCase('tr');
  return TASKS.filter(t =>
    (f.tab !== 'follow' || t.follow) && (!f.hideDone || !t.done) && (!f.overdue || (t.due < 0 && !t.done)) &&
    (!f.essential || t.pri === 'Kesin') && (!f.mine || t.owner === ME) && (f.person === 'herkes' || t.owner === f.person) &&
    (f.group === 'Tümü' || t.group === f.group) && (f.cat === 'Tümü' || t.cat === f.cat) && (f.pri === 'Tümü' || t.pri === f.pri) &&
    (!q || (t.title + ' ' + t.project).toLocaleLowerCase('tr').includes(q))
  ).sort((a, b) => a.done - b.done || byPri(a, b));
}
function renderTaskList() {
  const el = $('#taskList'); if (!el) return;
  const l = filteredTasks();
  el.innerHTML = taskList(l, S.tf.view);
  $('#taskCount').textContent = `${l.filter(t=>t.done).length}/${l.length}`;
}

PAGES.projeler = () => `
  <div class="page-head"><div><div class="eyebrow">İş yönetimi</div><h1>Projeler<span class="dot">.</span></h1><p class="lede">Grup › proje › alt proje. Her kartta ilerleme, sağlık ve sıradaki adım.</p></div><button class="btn btn-primary" data-act="draft">+ Proje ekle</button></div>
  ${Object.keys(GROUPS).filter(g => PROJECTS.some(p => p.group === g)).map(g => `
    <div class="group-h" style="margin-top:26px">${gdot(g)} ${g}</div>
    <div class="grid g3">${PROJECTS.filter(p => p.group === g).map(p => {
      const ts = TASKS.filter(t => t.project === p.name && !t.done);
      return `<div class="card">${projCard(p).replace(/^<div class="card proj-card">|<\/div>$/g,'')}
        <div class="mt" style="border-top:1px solid var(--line);padding-top:12px"><div class="eyebrow" style="margin-bottom:6px">Alt projeler</div>
        ${p.subs.map(s => `<div class="qitem">↳ ${esc(s)}</div>`).join('')}${PROJECTS.filter(c => c.parent === p.name).map(c => `<div class="qitem">↳ <b>${esc(c.name)}</b> <span class="pill">bağlı marka</span></div>`).join('')}</div>
        ${notesFor(p.name)}
        <div class="row mt"><small class="muted">${ic('user',13)} ${p.owner}</small><span class="spacer"></span><a class="link" href="#gorevler" data-act="proj-filter" data-g="${p.group}">${ts.length} görev →</a></div></div>`;
    }).join('')}</div>`).join('')}`;

PAGES.oncelik = () => {
  const o = openTasks();
  const q = [
    ['q1','Şimdi yap','Önemli + acil', o.filter(t => t.pri === 'Kesin' || (t.pri === 'Yüksek' && t.due <= 0))],
    ['q2','Planla','Önemli, acil değil', o.filter(t => t.pri === 'Yüksek' && t.due > 0)],
    ['q3','Devret / küçült','Acil, daha az önemli', o.filter(t => t.pri === 'Orta')],
    ['q4','Bırak / park et','Ne acil ne önemli', o.filter(t => t.pri === 'Düşük')]
  ];
  return `
  <div class="page-head"><div><div class="eyebrow">İş yönetimi</div><h1>Öncelik<span class="dot">.</span></h1><p class="lede">Önce matrise bak, sonra gözden geçirilmeyi bekleyenleri tek tek tart: yap, küçült, devret ya da bilinçle bırak.</p></div></div>
  <div class="matrix">${q.map(([c, t, h, ts]) => `<div class="quad ${c}"><h3>${t} <span class="pill">${ts.length}</span></h3><p class="hint">${h}</p>
    ${ts.sort(byPri).map(x => `<div class="qitem">${priPill(x.pri)}<span style="flex:1">${esc(x.title)}</span>${x.due<0?`<span class="pill red">${-x.due}g</span>`:''}</div>`).join('') || '<p class="muted">Boş</p>'}</div>`).join('')}</div>
  <div class="card mt2"><div class="card-head"><h3>Gözden geçirilmeyi bekleyen (14+ gün)</h3><span class="pill red">${reviewTasks().length}</span></div>
    <div class="table-wrap"><table><thead><tr><th>İş</th><th>Gecikme</th><th>Proje</th><th style="text-align:right">Karar</th></tr></thead><tbody>
    ${reviewTasks().map(t => `<tr><td><strong>${esc(t.title)}</strong><small>${t.pri} · ${t.owner}</small></td><td><span class="pill red-o">${-t.due} gün</span></td><td>${esc(t.project)}</td>
      <td style="text-align:right;white-space:nowrap"><button class="btn btn-primary btn-sm" data-act="r-do" data-id="${t.id}">Yap</button> <button class="btn btn-outline btn-sm" data-act="r-small" data-id="${t.id}">Küçült</button> <button class="btn btn-outline btn-sm" data-act="r-del" data-id="${t.id}">Devret</button> <button class="btn btn-ghost btn-sm" data-act="drop" data-id="${t.id}">Bırak</button></td></tr>`).join('') || '<tr><td colspan="4" class="muted">Hepsi tartıldı 👏</td></tr>'}
    </tbody></table></div></div>`;
};

PAGES.tarihler = () => {
  const o = openTasks();
  const sec = [['Gecikmiş', o.filter(t => t.due < 0), 'red'], ['Bugün', o.filter(t => t.due === 0), 'lime'], ['Bu hafta', o.filter(t => t.due > 0 && t.due <= 7), 'blue'], ['Daha sonra', o.filter(t => t.due > 7), '']];
  const imp = [];
  return `
  <div class="page-head"><div><div class="eyebrow">İş yönetimi</div><h1>Tarihler<span class="dot">.</span></h1><p class="lede">Teslim tarihlerine göre tüm açık işler ve takvimdeki önemli günler.</p></div></div>
  <div class="grid split"><div>${sec.map(([n, ts, c]) => `<div class="card mt" style="padding:20px"><div class="card-head"><h3>${n}</h3><span class="pill ${c}">${ts.length}</span></div>
    ${ts.sort((a,b)=>a.due-b.due).map(t => `<div class="qitem"><span class="mono" style="width:64px;color:var(--muted)">${dLabel(t.due)}</span>${gdot(t.group)}<span style="flex:1">${esc(t.title)}</span>${priPill(t.pri)}</div>`).join('') || '<p class="muted">Yok</p>'}</div>`).join('')}</div>
  <div style="align-self:start"><div class="card mt"><h3>Randevular & ödemeler</h3><p class="muted" style="font-size:14px;margin-bottom:10px">Tarihli görüşmeler, maaş ve ödeme günleri</p>
    ${EVENTS.filter(ev => !ev.hideInList).map(ev => ({ ...ev, off:dayOff(ev.date) })).sort((a,b)=>a.off-b.off).map(ev => `<div class="qitem"><span class="pill ${ev.off<0?'':ev.off<=1?'red':'blue'}">${dLabel(ev.off)} ${evTime(ev)}</span><span style="flex:1">${esc(ev.title)}<br><small class="muted">${esc(ev.note||'')}</small></span><small class="muted">${ev.off<0?'geçti':ev.off===0?'bugün':ev.off+' gün'}</small></div>`).join('')}</div>
  <div class="card mt"><h3>Önemli tarihler</h3><p class="muted" style="font-size:14px;margin-bottom:10px">Sözleşmeler, vergiler, lansmanlar</p>
    ${imp.map(([o, t]) => `<div class="qitem"><span class="pill ${o<=7?'amber':''}">${dLabel(o)}</span><span style="flex:1">${t}</span><small class="muted">${o} gün</small></div>`).join('') || '<p class="muted">Henüz önemli tarih yok (sözleşme, vergi, lansman…).</p>'}
    <button class="btn btn-outline btn-sm mt" data-act="draft">+ Tarih ekle</button></div></div></div>`;
};

PAGES.ekip = () => {
  const d = NOW(), mon = addDays(d, -((d.getDay() + 6) % 7));
  const days = [...Array(7)].map((_, i) => addDays(mon, i));
  const ti = (d.getDay() + 6) % 7;
  return `
  <div class="page-head"><div><div class="eyebrow">İş yönetimi · ${isoWeek(d)}</div><h1>Ekip Takvimi<span class="dot">.</span></h1><p class="lede">Kim bu hafta nerede — toplantılar, saha işleri ve izinler tek ekranda.</p></div>
    <div class="row"><span class="pill blue">Toplantı</span><span class="pill green">İş</span><span class="pill">İzin</span></div></div>
  <div class="table-wrap"><div class="cal" style="min-width:900px">
    <div class="ch">Kişi</div>${days.map((dd, i) => `<div class="ch ${i===ti?'today':''}">${DS[dd.getDay()]} ${dd.getDate()}</div>`).join('')}
    ${PEOPLE.map(p => `<div><b style="color:var(--ink)">${p}</b><br><small class="muted">${TASKS.filter(t=>t.owner===p&&!t.done).length} açık iş</small></div>${days.map((dd, i) => `<div>${[...(p === ME && i < 5 ? RECURRING.map(r => [i, `${r.s} ${r.short}`, r.type === 'meeting' ? 'm' : 't']) : []), ...(p === ME ? EVENTS.filter(ev => ev.date === `${dd.getFullYear()}-${String(dd.getMonth()+1).padStart(2,'0')}-${String(dd.getDate()).padStart(2,'0')}`).map(ev => [i, `★ ${ev.allDay ? '' : ev.s + ' '}${ev.short}`, 'm']) : []), ...(TEAM_EVENTS[p]||[])].filter(e => e[0] === i).map(e => `<span class="ev ${e[2]==='o'?'off':e[2]==='t'?'task':''}">${e[1]}</span>`).join('')}</div>`).join('')}`).join('')}
  </div></div>`;
};

PAGES.portfoy = () => {
  const rev = { ...PRIV_REV };
  return `
  <div class="page-head"><div><div class="eyebrow">İş yönetimi</div><h1>Portföy<span class="dot">.</span></h1><p class="lede">Markalar ve girişimler: sağlık, gelir ve odak payı. Hangisine bu ay daha çok zaman vermelisin?</p></div></div>
  <div class="grid g4">
    <div class="card kpi"><div class="eyebrow">Aktif girişim</div><div class="value">${PROJECTS.length}</div></div>
    <div class="card kpi"><div class="eyebrow">Sağlıklı</div><div class="value" style="color:var(--green)">${PROJECTS.filter(p=>p.health==='green').length}</div></div>
    <div class="card kpi"><div class="eyebrow">Dikkat</div><div class="value" style="color:var(--amber)">${PROJECTS.filter(p=>p.health==='amber').length}</div></div>
    <div class="card kpi"><div class="eyebrow">Risk</div><div class="value" style="color:var(--red)">${PROJECTS.filter(p=>p.health==='red').length}</div></div>
  </div>
  <div class="card mt"><div class="table-wrap"><table><thead><tr><th>Girişim</th><th>Grup</th><th>Sağlık</th><th>İlerleme</th><th>Açık / gecikmiş</th><th class="num">Gelir · 30g</th><th>Sorumlu</th></tr></thead><tbody>
  ${PROJECTS.map(p => { const o = TASKS.filter(t=>t.project===p.name&&!t.done); return `<tr><td><strong>${esc(p.name)}</strong><small>${esc(p.next)}</small></td><td><span class="pill">${gdot(p.group)} ${p.group}</span></td>
    <td><span class="pill ${p.health==='green'?'green':p.health==='amber'?'amber':'red'} dot">${{green:'İyi',amber:'Dikkat',red:'Risk'}[p.health] || '—'}</span></td>
    <td style="min-width:120px">${p.progress != null ? `<div class="bar"><span style="width:${p.progress}%"></span></div>` : '<span class="muted">—</span>'}</td><td>${o.length} / <span class="${o.some(t=>t.due<0)?'neg':''}">${o.filter(t=>t.due<0).length}</span></td><td class="num">${money(rev[p.name]||0)}</td><td>${p.owner}</td></tr>`; }).join('')}
  </tbody></table></div></div>`;
};

PAGES.crm = () => `
  <div class="page-head"><div><div class="eyebrow">İş yönetimi</div><h1>CRM<span class="dot">.</span></h1><p class="lede">Fırsatları aşamalar arasında sürükle. Web sitesindeki “Book a Call” ve “Enquire” formları bağlandığında yeni leadler otomatik düşecek.</p></div><button class="btn btn-primary" data-act="draft">+ Fırsat ekle</button></div>
  <div class="grid g4">
    <div class="card kpi"><div class="eyebrow">Açık hat</div><div class="value">${money(DEALS.filter(d=>tl(d)&&!['Kazanıldı','Kayıp'].includes(d.stage)).reduce((s,d)=>s+d.value,0))}</div>${DEALS.some(d=>d.cur&&d.value&&!['Kazanıldı','Kayıp'].includes(d.stage))?`<div class="delta">+ ${DEALS.filter(d=>d.cur&&d.value&&!['Kazanıldı','Kayıp'].includes(d.stage)).map(dealVal).join(' + ')}</div>`:''}</div>
    <div class="card kpi"><div class="eyebrow">Kazanılan</div><div class="value" style="color:var(--green)">${money(DEALS.filter(d=>d.stage==='Kazanıldı').reduce((s,d)=>s+d.value,0))}</div></div>
    <div class="card kpi"><div class="eyebrow">Yeni lead</div><div class="value">${DEALS.filter(d=>d.stage==='Yeni lead').length}</div></div>
    <div class="card kpi"><div class="eyebrow">Kazanma oranı</div><div class="value">${Math.round(DEALS.filter(d=>d.stage==='Kazanıldı').length / Math.max(1, DEALS.filter(d=>['Kazanıldı','Kayıp'].includes(d.stage)).length) * 100)}%</div></div>
  </div>
  <div class="kanban mt">${STAGES.map(st => { const ds = DEALS.filter(d => d.stage === st); return `<div class="col" data-drop="stage" data-stage="${st}"><div class="col-h"><span>${st} <span class="pill">${ds.length}</span></span><small class="mono muted">${money(ds.filter(tl).reduce((s,d)=>s+d.value,0))}</small></div>
    ${ds.map(d => `<div class="kcard" draggable="true" data-drag="deal" data-id="${d.id}"><b>${esc(d.name)}</b><div class="row" style="margin-top:6px;font-size:13px"><span class="muted">${esc(d.co)}</span><span class="spacer"></span><span class="mono">${dealVal(d)}</span></div><span class="pill" style="margin-top:8px">${d.src}</span>${d.note ? `<small class="muted" style="display:block;margin-top:6px">${esc(d.note)}</small>` : ''}</div>`).join('')}</div>`; }).join('')}</div>`;

PAGES.butce = () => {
  const inc = BUDGET.filter(b => !b.cur && b.amt > 0).reduce((s, b) => s + b.amt, 0), exp = -BUDGET.filter(b => !b.cur && b.amt < 0).reduce((s, b) => s + b.amt, 0);
  const cats = {}; BUDGET.filter(b => !b.cur && b.amt < 0).forEach(b => cats[b.cat] = (cats[b.cat] || 0) - b.amt);
  const mx = Math.max(...Object.values(cats));
  return `
  <div class="page-head"><div><div class="eyebrow">İş yönetimi · son 30 gün</div><h1>Bütçe<span class="dot">.</span></h1><p class="lede">Tüm girişimlerin gelir-gider akışı tek yerde. Banka/fatura bağlantısı sonraki adımda.</p></div><button class="btn btn-primary" data-act="draft">+ Hareket ekle</button></div>
  <div class="grid g4">
    <div class="card kpi"><div class="eyebrow">Gelir</div><div class="value pos">${money(inc)}</div></div>
    <div class="card kpi"><div class="eyebrow">Gider</div><div class="value neg">${money(exp)}</div></div>
    <div class="card kpi"><div class="eyebrow">Net</div><div class="value">${money(inc-exp)}</div><div class="delta">${inc ? 'Marj %' + Math.round((inc-exp)/inc*100) : '—'}</div></div>
    <div class="card kpi"><div class="eyebrow">Aylık hedef</div><div class="value">${money(150000)}</div><div class="bar lime" style="margin-top:10px"><span style="width:${Math.min(100,inc/150000*100)}%"></span></div></div>
  </div>
  ${INCOME.length ? `<div class="card mt"><div class="card-head"><h3>${ic('repeat',16)} Düzenli gelirler</h3><span class="pill green">${INCOME.map(i => (i.cur||'₺') + Math.round(i.amt).toLocaleString('tr-TR')).join(' + ')} / ay</span></div>
    <div class="table-wrap"><table><thead><tr><th>Kaynak</th><th>Rol / açıklama</th><th>Ödeme günü</th><th>Sıradaki</th><th class="num">Tutar</th></tr></thead><tbody>
    ${INCOME.map(i => { const o = dayOff(nextMonthly({ day:i.day })); return `<tr><td><strong>${esc(i.src)}</strong></td><td>${esc(i.role||'')}</td><td>Her ayın ${i.day}’i</td><td><span class="pill ${o<=3?'lime':''}">${whenTxt(o)}</span></td><td class="num pos">+${i.cur||'₺'}${Math.round(i.amt).toLocaleString('tr-TR')}/${i.per||'ay'}</td></tr>`; }).join('')}
    </tbody></table></div></div>` : ''}
  ${REC_EXP.length || PAYMENTS.length ? (() => {
    const fixed = REC_EXP.reduce((s, r) => s + r.amt, 0), incM = INCOME.filter(i => (i.cur||'₺') === '₺').reduce((s, i) => s + i.amt, 0);
    const up = [...REC_EXP.flatMap(r => occurrences(r.day, 0, 30).map(o => ({ off:o.off, desc:r.desc, cat:r.cat, amt:r.amt, rec:`her ayın ${r.day}’i` }))),
                ...PAYMENTS.filter(p => dayOff(p.date) >= 0 && dayOff(p.date) <= 30).map(p => ({ off:dayOff(p.date), desc:p.desc, cat:p.cat, amt:p.amt, cur:p.cur }))].sort((a, b) => a.off - b.off);
    const upT = up.filter(x => !x.cur).reduce((s, x) => s + x.amt, 0), upFx = up.filter(x => x.cur);
    return `<div class="grid g2 mt">
      <div class="card"><div class="card-head"><h3>${ic('repeat',16)} Düzenli giderler</h3><span class="pill red">${moneyD(fixed)} / ay</span></div>
        ${REC_EXP.map(r => { const o = occurrences(r.day, 0, 31)[0]; return `<div class="qitem"><span style="flex:1"><b>${esc(r.desc)}</b><br><small class="muted">Her ayın ${r.day}’i · sıradaki: ${o ? whenTxt(o.off) : '—'}</small></span><span class="mono neg">−${moneyD(r.amt)}</span></div>`; }).join('')}
        ${incM ? `<div class="qitem"><span style="flex:1"><b>Düzenli gelir − sabit gider</b><br><small class="muted">aylık, sadece ₺</small></span><span class="mono ${incM-fixed>=0?'pos':'neg'}">${moneyD(incM - fixed)}</span></div>` : ''}</div>
      <div class="card"><div class="card-head"><h3>${ic('cal',16)} Yaklaşan ödemeler · 30 gün</h3><span class="pill red">${moneyD(upT)}</span></div>
        ${up.map(x => `<div class="qitem"><span class="pill ${x.off<=3?'amber':''}" style="min-width:92px;justify-content:center">${whenTxt(x.off).replace(/^(\S+) \((.+)\)$/,'$2')}</span><span style="flex:1">${esc(x.desc)}<br><small class="muted">${esc(x.cat)}${x.rec ? ' · ' + x.rec : ''}</small></span><span class="mono neg">−${fmtCur(x.amt, x.cur)}</span></div>`).join('') || '<p class="muted">30 gün içinde ödeme yok.</p>'}${upFx.length ? `<p class="muted" style="font-size:12px;margin-top:8px">Toplama dahil değil (döviz): ${upFx.map(x => fmtCur(x.amt, x.cur)).join(' + ')}</p>` : ''}</div>
    </div>`; })() : ''}
  <div class="grid split mt">
    <div class="card"><h3 style="margin-bottom:10px">Hareketler</h3><div class="table-wrap"><table><thead><tr><th>Tarih</th><th>Açıklama</th><th>Proje</th><th>Kategori</th><th class="num">Tutar</th></tr></thead><tbody>
      ${BUDGET.map(b => `<tr><td class="mono">${dLabel(b.d)}</td><td><strong>${esc(b.desc)}</strong></td><td>${esc(b.proj)}</td><td><span class="pill">${b.cat}</span></td><td class="num ${b.amt>0?'pos':'neg'}">${b.amt>0?'+':'−'}${fmtCur(Math.abs(b.amt), b.cur)}</td></tr>`).join('')}
    </tbody></table></div></div>
    <div class="card" style="align-self:start"><h3 style="margin-bottom:14px">Gider dağılımı</h3>
      ${Object.entries(cats).sort((a,b)=>b[1]-a[1]).map(([c, v]) => `<div style="margin-bottom:12px"><div class="row" style="font-size:14px"><span>${c}</span><span class="spacer"></span><span class="mono">${money(v)}</span></div><div class="bar" style="margin-top:6px"><span style="width:${v/mx*100}%"></span></div></div>`).join('')}</div>
  </div>`;
};

PAGES.hafta = () => {
  const done = TASKS.filter(t => t.done).length, over = overdueTasks().length, meet = AGENDA.filter(a => a.type === 'meeting').reduce((s, a) => s + toMin(a.e) - toMin(a.s), 0) / 60;
  const sl = (id, l, v) => `<div class="field"><label>${l} — <b id="${id}V" style="color:var(--ink)">${v}</b>/10</label><input type="range" min="1" max="10" value="${v}" data-range="${id}"></div>`;
  return `
  <div class="page-head"><div><div class="eyebrow">Ritim & değerlendirme · ${isoWeek(NOW())}</div><h1>Hafta Değerlendirme<span class="dot">.</span></h1><p class="lede">15 dakika: ne iyi gitti, ne takıldı, gelecek hafta neye “evet” diyorsun?</p></div></div>
  <div class="grid g4">
    <div class="card kpi"><div class="eyebrow">Tamamlanan</div><div class="value">${done}</div></div>
    <div class="card kpi"><div class="eyebrow">Gecikmiş</div><div class="value" style="color:var(--red)">${over}</div></div>
    <div class="card kpi"><div class="eyebrow">Toplantı</div><div class="value">${meet.toFixed(1)} sa</div></div>
    <div class="card kpi"><div class="eyebrow">Odak oturumu</div><div class="value">${S.focus.sessions}</div></div>
  </div>
  <div class="grid split mt">
    <div class="card">
      <div class="field"><label>Bu hafta ne iyi gitti?</label><textarea class="input" placeholder="3 kazanım…"></textarea></div>
      <div class="field"><label>Ne takıldı / neyi erteledim?</label><textarea class="input" placeholder="Engeller, duygusal takılmalar…"></textarea></div>
      <div class="field"><label>Gelecek haftanın 3 odağı</label><input class="input" placeholder="1." style="margin-bottom:8px"><input class="input" placeholder="2." style="margin-bottom:8px"><input class="input" placeholder="3."></div>
      <div class="field"><label>Neyi bırakıyorum?</label><input class="input" placeholder="Bilinçle park ettiğim iş(ler)"></div>
      <button class="btn btn-primary" data-act="save-review">Değerlendirmeyi kaydet <span class="arrow">↗</span></button>
    </div>
    <div>
      <div class="card">${sl('energy','Enerji',7)}${sl('focusR','Odak',6)}${sl('stress','Stres',8)}${sl('joy','Keyif',6)}</div>
      <div class="card mt"><h3 style="margin-bottom:8px">Önceki haftalar</h3>
        ${REVIEWS.length ? '' : '<p class="muted">Henüz kayıtlı değerlendirme yok.</p>'}${REVIEWS.map(r => `<div class="qitem"><span class="mono" style="width:80px">${isoWeek(addDays(NOW(), r.w*7))}</span><span class="pill ${r.score>=7?'green':'amber'}">${r.score}/10</span><span style="flex:1;font-size:13px" class="muted">${esc(r.note)}</span></div>`).join('')}</div>
    </div>
  </div>`;
};

PAGES.site = () => `
  <div class="page-head"><div><div class="eyebrow">Site · wealwaysrise.com</div><h1>Site İçeriği<span class="dot">.</span></h1></div><a class="btn btn-outline" href="https://wealwaysrise.com" target="_blank">Siteyi aç ↗</a></div>
  <div class="grid split">
    <div class="card">
      <div class="card-head"><span class="eyebrow">Digital products / coming soon</span><span class="pill lime dot">In development</span></div>
      <h2>AI Daily Assistant &amp; Operations Masterclass</h2>
      <p class="lede">12 practical workflows. Video training. Editable templates. Anonymized case studies.</p>
      <div class="grid g2 mt"><div class="field"><label>Durum</label><select class="input" style="width:100%"><option>In development</option><option>Waitlist open</option><option>Live</option></select></div><div class="field"><label>Fiyat (GBP)</label><input class="input" value="—"></div></div>
      <div class="field"><label>Hero başlık</label><input class="input" value="Make AI part of your working day."></div>
      <div class="field"><label>Ana CTA</label><input class="input" value="Enquire About Launch"></div>
      <button class="btn btn-primary" data-act="draft">Kaydet <span class="arrow">↗</span></button>
    </div>
    <div class="card"><h3>Yayın durumu</h3>
      <div class="setting"><div>“In development” rozeti<small>Digital products sayfası</small></div><label class="toggle"><input type="checkbox" checked><span></span></label></div>
      <div class="setting"><div>Bakım modu<small>Siteyi ziyaretçilerden gizle</small></div><label class="toggle"><input type="checkbox"><span></span></label></div>
      <div class="setting"><div>Insights blog<small>Sitedeki yazılar</small></div><span class="draft-tag">Bağlanacak</span></div>
      <div class="setting"><div>Formlar → CRM<small>Book a Call, Enquire</small></div><span class="draft-tag">Bağlanacak</span></div>
    </div>
  </div>`;

PAGES.ayarlar = () => {
  const card = (icn, t, p, body) => `<div class="card mt"><div class="set-card"><span class="ico-box">${ic(icn)}</span><div class="b"><h3>${t}</h3><p>${p}</p>${body}</div></div></div>`;
  return `
  <div class="eyebrow">Yapılandırma</div><h1>Ayarlar<span class="dot">.</span></h1>
  <p class="lede">Profilin, proje ağacın ve genel parametrelerin — hepsi buradan. Değişiklikler “Kaydet ve uygula” ile tüm panele işler.</p>
  <div style="max-width:940px">
  ${card('user','Hesabım','Oğuz · Sahip. Eklediğin her şey yalnız sana görünür; paylaşmadıkça kimse göremez.',
    `<div class="row"><input class="input" type="password" placeholder="Mevcut şifre" style="flex:1;min-width:180px"><input class="input" type="password" placeholder="Yeni şifre (en az 12)" style="flex:1;min-width:180px"><button class="btn btn-outline" data-act="pw">${ic('check',15)} Şifreyi değiştir</button></div>
     <div class="row mt"><button class="btn btn-ghost btn-sm" data-act="logout-all">${ic('ban',15)} Diğer cihazlarda oturumu kapat</button><button class="btn btn-ghost btn-sm" data-act="draft">${ic('sparkle',15)} Tanıtımı yeniden göster</button></div>`)}
  ${card('bell','WhatsApp bildirimleri','Sana talep ya da görev atandığında şirket numarasından kısa bir WhatsApp mesajı gelir.',
    `<div class="row"><input class="input" placeholder="Cep numarası (ör. 0532 123 45 67)" style="flex:1;min-width:220px"><button class="btn btn-lime" data-act="draft">${ic('check',15)} Doğrula</button></div>`)}
  ${card('link','MCP bağlantısı (Claude)','Claude’a kendi anahtarınla bağlan: araçlar yalnız SENİN Werrise verini görür ve değiştirir. Salt-okunur anahtarda ekleme/değiştirme kapalıdır.',
    `<div class="row"><select class="input"><option>Salt-okunur</option><option>Okuma + yazma</option></select><button class="btn btn-outline" data-act="draft">Anahtar oluştur</button><span class="draft-tag">Taslak</span></div>`)}
  ${card('proj','Gruplar & kategoriler','Görevleri ve projeleri sınıflandıran etiketler.',
    `<div class="chips">${Object.keys(GROUPS).map(g => `<span class="chip">${gdot(g)}${g}</span>`).join('')}<button class="chip" data-act="draft">+ Grup</button></div>
     <div class="chips mt">${Object.keys(CATS).map(c => `<span class="chip">${c}</span>`).join('')}<button class="chip" data-act="draft">+ Kategori</button></div>`)}
  ${card('moon','Görünüm','Tema ve menü tercihlerin bu tarayıcıda saklanır.',
    `<div class="setting"><div>Koyu tema</div><label class="toggle"><input type="checkbox" id="darkToggle" ${document.documentElement.dataset.theme==='dark'?'checked':''}><span></span></label></div>
     <div class="setting"><div>Menüyü daralt</div><label class="toggle"><input type="checkbox" id="collapseToggle" ${document.body.classList.contains('collapsed')?'checked':''}><span></span></label></div>`)}
  <div class="savebar"><span>Değişiklikler kaydedilince panel yenilenir.</span><button class="btn btn-primary" data-act="save-settings">${ic('check',15)} Kaydet ve uygula</button></div>
  </div>`;
};

/* ================= RENDER ================= */
function render() {
  const r = route();
  $('#tbTitle').textContent = r.title;
  $('#tbSub').textContent = r.sub;
  document.title = `${r.title} — Werrise`;
  renderNav(); renderNowbar();
  const v = $('#view');
  v.innerHTML = `<div class="fade">${PAGES[r.id]()}</div>`;
  if (r.id === 'gorevler') renderTaskList();
  $('#sidebar').classList.remove('open');
}
const rerender = () => { const y = scrollY; render(); scrollTo(0, y); };

/* ================= ACTIONS ================= */
const byId = id => TASKS.find(t => t.id === +id);
function addTask(title, today) {
  if (!title.trim()) { toast('Önce bir şey yaz'); return; }
  const g = $('#qcGroup') ? $('#qcGroup').value : 'Kişisel';
  TASKS.unshift(T(title.trim(), { group:g, cat: g === 'Kişisel' ? 'Kişisel' : 'Operasyon', project: PROJECTS.find(p => p.group === g)?.name || 'Genel', today, due: today ? 0 : 7 }));
  toast(today ? 'Bugüne eklendi' : "Backlog'a eklendi");
  rerender();
}

document.addEventListener('click', e => {
  const seg = e.target.closest('[data-seg] [data-v], [data-chips] [data-v]');
  if (seg) {
    const key = (seg.parentElement.dataset.seg || seg.parentElement.dataset.chips);
    let v = seg.dataset.v;
    if (key === 'focusLen') { S.focus.len = +v; S.focus.left = +v * 60; S.focus.running = false; }
    else if (key.startsWith('tf.')) S.tf[key.slice(3)] = v;
    else S[key] = v;
    return rerender();
  }
  const el = e.target.closest('[data-act]'); if (!el) return;
  const a = el.dataset.act, t = el.dataset.id && byId(el.dataset.id);
  switch (a) {
    case 'done': t.done = !t.done; if (t.done) toast('Tamamlandı ✓'); return rerender();
    case 'sub': t.subs[+el.dataset.i].done = !t.subs[+el.dataset.i].done; return rerender();
    case 'expand': S.open.has(t.id) ? S.open.delete(t.id) : S.open.add(t.id); return rerender();
    case 'start': S.nowId = t.id; S.focus.taskId = t.id; S.focus.left = S.focus.len * 60; S.focus.running = true; location.hash = 'odak'; return toast('Odak başladı: ' + t.title.slice(0, 40));
    case 'timer': S.focus.taskId = t.id; location.hash = 'odak'; return;
    case 'up': { const i = PRI_ORDER.indexOf(t.pri); if (i > 0) t.pri = PRI_ORDER[i - 1]; toast('Öncelik: ' + t.pri); return rerender(); }
    case 'snooze': t.due = Math.max(t.due, 0) + 1; t.today = false; toast('Yarına ertelendi'); return rerender();
    case 'follow': t.follow = !t.follow; toast(t.follow ? 'Takibe alındı' : 'Takipten çıkarıldı'); return rerender();
    case 'drop': TASKS.splice(TASKS.indexOf(t), 1); toast('Bilinçle bırakıldı'); return rerender();
    case 'r-do': t.today = true; t.due = 0; toast('Bugüne çekildi'); return rerender();
    case 'r-small': t.title = '(Küçük adım) ' + t.title; t.est = .5; t.due = 1; toast('Küçültüldü, yarına planlandı'); return rerender();
    case 'r-del': t.owner = 'Devredildi'; t.follow = true; t.due = 3; toast('Devredildi olarak işaretlendi — takibe alındı'); return rerender();
    case 'tf-toggle': S.tf[el.dataset.k] = !S.tf[el.dataset.k]; return rerender();
    case 'proj-filter': S.tf.group = el.dataset.g; return;
    case 'new-task': { const v = prompt('Yeni görev:'); if (v) addTask(v, false); return; }
    case 'qc-today': return addTask($('#qcInput').value, true);
    case 'qc-backlog': return addTask($('#qcInput').value, false);
    case 'sig-x': SIGNALS.splice(+el.dataset.i, 1); return rerender();
    case 'focus-toggle': S.focus.running = !S.focus.running; return rerender();
    case 'focus-reset': S.focus.running = false; S.focus.left = S.focus.len * 60; return rerender();
    case 'focus-done': { const ft = byId(S.focus.taskId); S.focus.running = false; S.focus.sessions++; S.focus.left = S.focus.len * 60; if (ft) ft.done = true; toast('Oturum tamamlandı 🎯'); return rerender(); }
    case 'replan': toast('Kalan bloklar şimdiden itibaren yeniden sıralanacak (taslak)'); return;
    case 'place': toast('Açık işler boş saatlere yerleştirilecek (taslak)'); return;
    case 'save-review': toast('Hafta değerlendirmesi kaydedildi'); return;
    case 'save-settings': toast('Ayarlar uygulandı'); return;
    case 'pw': toast('Şifre değişimi sunucu bağlantısıyla gelecek — şimdilik Claude’a yaz'); return;
    case 'logout-all': toast('Sunucu bağlantısı gerektiriyor (taslak)'); return;
    case 'draft': toast('Taslak — veri bağlantısı sonraki adımda'); return;
  }
});

document.addEventListener('input', e => {
  if (e.target.id === 'taskSearch') { S.tf.q = e.target.value; renderTaskList(); }
  if (e.target.dataset.range) $('#' + e.target.dataset.range + 'V').textContent = e.target.value;
});
document.addEventListener('change', e => {
  const id = e.target.id;
  if (id === 'personSel') { S.tf.person = e.target.value; renderTaskList(); }
  if (id === 'gearSel') { S.gear = e.target.value; rerender(); }
  if (id === 'focusTask') { S.focus.taskId = +e.target.value; rerender(); }
  if (id === 'darkToggle') setTheme(e.target.checked ? 'dark' : 'light');
  if (id === 'collapseToggle') setCollapsed(e.target.checked);
});
document.addEventListener('keydown', e => {
  const inField = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
  if (e.key === 'Enter' && (e.target.id === 'qcInput')) addTask(e.target.value, true);
  if (e.key === 'Enter' && e.target.id === 'quickDash') { const v = e.target.value; addTask(v, true); }
  if ((e.key === 'n' || e.key === 'N') && !inField && !e.metaKey && !e.ctrlKey && !document.documentElement.classList.contains('locked')) {
    e.preventDefault();
    const f = $('#quickDash') || $('#qcInput');
    if (f) f.focus(); else { location.hash = 'dashboard'; setTimeout(() => $('#quickDash')?.focus(), 50); }
  }
});

/* Drag & drop (Planlama + CRM) */
let drag = null;
document.addEventListener('dragstart', e => { const k = e.target.closest('[data-drag]'); if (!k) return; drag = { type:k.dataset.drag, id:+k.dataset.id }; k.classList.add('dragging'); });
document.addEventListener('dragend', e => { e.target.classList?.remove('dragging'); document.querySelectorAll('.over').forEach(x => x.classList.remove('over')); });
document.addEventListener('dragover', e => { const c = e.target.closest('[data-drop]'); if (c && drag) { e.preventDefault(); c.classList.add('over'); } });
document.addEventListener('dragleave', e => { const c = e.target.closest('[data-drop]'); if (c && !c.contains(e.relatedTarget)) c.classList.remove('over'); });
document.addEventListener('drop', e => {
  const c = e.target.closest('[data-drop]'); if (!c || !drag) return; e.preventDefault();
  if (drag.type === 'task' && c.dataset.drop === 'day') { const t = byId(drag.id), o = +c.dataset.off; t.due = o === 99 ? 14 : o; t.today = o === 0; toast(o === 99 ? "Backlog'a taşındı" : 'Planlandı: ' + dLabel(o)); }
  if (drag.type === 'deal' && c.dataset.drop === 'stage') { const d = DEALS.find(x => x.id === drag.id); d.stage = c.dataset.stage; toast(d.co + ' → ' + d.stage); }
  drag = null; rerender();
});

/* ================= THEME / COLLAPSE / CLOCK ================= */
const root = document.documentElement;
function setTheme(t) { root.dataset.theme = t; try { localStorage.setItem('wr-admin-theme', t); } catch (e) {} }
function setCollapsed(on) { document.body.classList.toggle('collapsed', on); try { localStorage.setItem('wr-admin-collapsed', on ? '1' : ''); } catch (e) {} }
try { const t = localStorage.getItem('wr-admin-theme'); if (t) root.dataset.theme = t; if (localStorage.getItem('wr-admin-collapsed')) document.body.classList.add('collapsed'); } catch (e) {}
$('#themeBtn').onclick = () => { const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme:dark)').matches; setTheme(dark ? 'light' : 'dark'); };
$('#collapseBtn').onclick = () => setCollapsed(!document.body.classList.contains('collapsed'));
$('#menuBtn').onclick = () => $('#sidebar').classList.toggle('open');

function tick() {
  const d = NOW();
  $('#clock').innerHTML = `${hm(d)} <span style="color:var(--muted)">${d.getHours() < 12 ? 'ÖÖ' : 'ÖS'}</span>`;
  $('#isoWeek').textContent = isoWeek(d);
  const hc = $('#heroClock'); if (hc) hc.textContent = hm(d);
}
setInterval(() => {
  tick();
  const f = S.focus;
  if (f.running && f.left > 0) {
    f.left--;
    const tt = $('#timerTxt'), arc = $('#ringArc');
    if (tt) tt.textContent = `${String(Math.floor(f.left/60)).padStart(2,'0')}:${String(f.left%60).padStart(2,'0')}`;
    if (arc) { const C = 2 * Math.PI * 130; arc.setAttribute('stroke-dashoffset', C * (f.left / (f.len * 60))); }
    if (f.left === 0) { f.running = false; f.sessions++; toast('Süre doldu — 5 dk mola 🌿'); if (route().id === 'odak') rerender(); }
  }
}, 1000);

window.addEventListener('hashchange', () => {
  if (location.hash.includes('?overdue')) { S.tf.overdue = true; S.tf.hideDone = true; }
  render(); scrollTo(0, 0);
});
if (location.hash.includes('?overdue')) S.tf.overdue = true;
tick(); render();
})();
