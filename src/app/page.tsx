import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeartPulse, 
  faGraduationCap, 
  faHandHoldingHeart,
  faHouseChimneyCrack,
  faQuoteLeft,
  faNewspaper,
  faChevronLeft,
  faChevronRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

// Tambahkan data promo campaigns
const promoCampaigns = [
  {
    id: 1,
    title: "Bantu Renovasi Sekolah Dasar di Pedalaman",
    description: "Mari bantu renovasi sekolah untuk anak-anak di daerah terpencil agar bisa belajar dengan nyaman",
    image: "https://donasionline.id/storage/80127/conversions/Cover-Campaign-Bersama-Indra-Priawan-thumbnail.jpg",
    collected: 75000000,
    target: 150000000,
    daysLeft: 20,
    verified: true,
  },
  {
    id: 2,
    title: "Program Beasiswa untuk 1000 Anak Yatim",
    description: "Wujudkan mimpi anak yatim untuk melanjutkan pendidikan ke jenjang yang lebih tinggi",
    image: "https://donasionline.id/storage/80127/conversions/Cover-Campaign-Bersama-Indra-Priawan-thumbnail.jpg",
    collected: 250000000,
    target: 500000000,
    daysLeft: 45,
    verified: true,
  },
  {
    id: 3,
    title: "Bangun Pusat Kesehatan di Desa Terpencil",
    description: "Sediakan layanan kesehatan yang layak untuk masyarakat di daerah terpencil",
    image: "https://donasionline.id/storage/80127/conversions/Cover-Campaign-Bersama-Indra-Priawan-thumbnail.jpg",
    collected: 120000000,
    target: 300000000,
    daysLeft: 30,
    verified: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
        <Image
            src="https://yca.or.id/wp-content/uploads/2021/02/1.-DONASI-BUKA-PUASA-SAHUR-web-scaled.jpg"
            alt="Hero Background"
            fill
            className="object-cover brightness-50"
          priority
        />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Berbagi Kebaikan Untuk Sesama
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Platform donasi terpercaya untuk membantu mereka yang membutuhkan
          </p>
          <Link 
            href="/campaign"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Mulai Donasi
          </Link>
        </div>
      </section>

      {/* Promo Campaign Slider - Tambahkan setelah Hero Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Campaign Pilihan</h2>
            <Link 
              href="/campaign?type=featured"
              className="text-emerald-500 hover:text-emerald-600 font-semibold flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
              Lihat Semua
            </Link>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-50">
              <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6 text-emerald-500" />
            </button>
            
            {/* Slider Container */}
            <div className="overflow-hidden mx-4">
              <div className="flex gap-6">
                {promoCampaigns.map((campaign) => (
                  <div 
                    key={campaign.id}
                    className="flex-none w-full md:w-1/2 lg:w-1/3"
                  >
                    <Link
                      href={`/campaign/${campaign.id}`}
                      className="block bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="relative">
                        <div className="relative h-48">
            <Image
                            src={campaign.image}
                            alt={campaign.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Promoted Badge */}
                        <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                          <FontAwesomeIcon icon={faStar} className="w-3 h-3" />
                          Campaign Pilihan
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="font-semibold text-xl mb-2 line-clamp-2">
                          {campaign.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {campaign.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-emerald-500 h-2.5 rounded-full"
                              style={{ width: `${(campaign.collected / campaign.target) * 100}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-2 text-sm">
                            <span className="text-emerald-500 font-semibold">
                              Rp {campaign.collected.toLocaleString()}
                            </span>
                            <span className="text-gray-500">
                              dari Rp {campaign.target.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* Campaign Info */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{Math.round((campaign.collected / campaign.target) * 100)}% Tercapai</span>
                          <span>{campaign.daysLeft} Hari lagi</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-50">
              <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6 text-emerald-500" />
            </button>
          </div>
        </div>
      </section>

      {/* Statistik Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-emerald-500 mb-2">1000+</h3>
              <p className="text-gray-600">Campaign Terdanai</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-emerald-500 mb-2">50.000+</h3>
              <p className="text-gray-600">Donatur Aktif</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-emerald-500 mb-2">10M+</h3>
              <p className="text-gray-600">Total Donasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kategori Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Kategori Donasi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/campaign?category=${category.slug}`}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center text-emerald-500 group-hover:text-emerald-600 transition-colors">
                    <FontAwesomeIcon 
                      icon={category.icon} 
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-emerald-500 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Terbaru */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Campaign Terbaru</h2>
            <Link 
              href="/campaign"
              className="text-emerald-500 hover:text-emerald-600 font-semibold"
            >
              Lihat Semua
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative h-48">
          <Image
                    src={campaign.image}
                    alt={campaign.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{campaign.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{campaign.description}</p>
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-emerald-500 h-2.5 rounded-full"
                        style={{ width: `${(campaign.collected / campaign.target) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-emerald-500 font-semibold">
                        Rp {campaign.collected.toLocaleString()}
                      </span>
                      <span className="text-gray-500">
                        dari Rp {campaign.target.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/campaign/${campaign.slug}`}
                    className="block text-center bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-semibold transition-colors"
                  >
                    Donasi Sekarang
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doa Donatur Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Doa Para Donatur</h2>
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50">
              <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6 text-emerald-500" />
            </button>
            <div className="overflow-hidden px-12">
              <div className="flex gap-6">
                {prayers.map((prayer) => (
                  <div key={prayer.id} className="flex-none w-full md:w-1/3 bg-white p-6 rounded-xl shadow-sm">
                    <FontAwesomeIcon icon={faQuoteLeft} className="w-8 h-8 text-emerald-200 mb-4" />
                    <p className="text-gray-600 mb-4">{prayer.message}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 relative rounded-full overflow-hidden">
          <Image
                          src={prayer.avatar}
                          alt={prayer.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{prayer.name}</p>
                        <p className="text-sm text-gray-500">Donatur {prayer.campaign}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50">
              <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6 text-emerald-500" />
            </button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Berita Terbaru</h2>
            <Link 
              href="/news"
              className="text-emerald-500 hover:text-emerald-600 font-semibold"
            >
              Lihat Semua
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => (
              <Link 
                key={item.id} 
                href={`/news/${item.slug}`}
                className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
          <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <FontAwesomeIcon icon={faNewspaper} className="w-4 h-4" />
                    {item.date}
                  </div>
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-emerald-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
    </div>
      </section>    
    </main>
  );
}

// Data Statis untuk Contoh
const categories = [
  { 
    id: 1, 
    name: 'Kesehatan', 
    slug: 'kesehatan', 
    icon: faHeartPulse 
  },
  { 
    id: 2, 
    name: 'Pendidikan', 
    slug: 'pendidikan', 
    icon: faGraduationCap 
  },
  { 
    id: 3, 
    name: 'Bencana Alam', 
    slug: 'bencana-alam', 
    icon: faHouseChimneyCrack 
  },
  { 
    id: 4, 
    name: 'Sosial', 
    slug: 'sosial', 
    icon: faHandHoldingHeart 
  },
];

const recentCampaigns = [
  {
    id: 1,
    title: 'Bantu Anak-anak Penderita Kanker',
    slug: 'bantu-anak-kanker',
    description: 'Mari bantu biaya pengobatan anak-anak penderita kanker dari keluarga kurang mampu.',
    image: 'https://donasionline.id/storage/80127/conversions/Cover-Campaign-Bersama-Indra-Priawan-thumbnail.jpg',
    collected: 50000000,
    target: 100000000,
  },
  {
    id: 2,
    title: 'Pembangunan Sekolah di Pedalaman',
    slug: 'sekolah-pedalaman',
    description: 'Bantu pembangunan sekolah untuk anak-anak di daerah pedalaman.',
    image: 'https://donasionline.id/storage/80127/conversions/Cover-Campaign-Bersama-Indra-Priawan-thumbnail.jpg',
    collected: 75000000,
    target: 150000000,
  },
  {
    id: 3,
    title: 'Bantuan Korban Banjir',
    slug: 'bantuan-banjir',
    description: 'Salurkan bantuan untuk korban banjir yang membutuhkan bantuan segera.',
    image: 'https://donasionline.id/storage/80127/conversions/Cover-Campaign-Bersama-Indra-Priawan-thumbnail.jpg',
    collected: 25000000,
    target: 50000000,
  },
];

// Data statis untuk doa donatur
const prayers = [
  {
    id: 1,
    message: "Semoga bantuan ini bisa meringankan beban saudara-saudara kita yang membutuhkan. Allah membalas kebaikan semuanya.",
    name: "Ahmad Syaiful",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    campaign: "Bantu Anak Kanker"
  },
  {
    id: 2,
    message: "Semoga bisa membantu adik-adik untuk tetap sekolah. Mari bersama-sama membangun pendidikan Indonesia.",
    name: "Siti Aminah",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    campaign: "Sekolah Pedalaman"
  },
  {
    id: 3,
    message: "Turut berduka untuk saudara-saudara kita. Semoga bantuan ini bermanfaat untuk pemulihan pasca bencana.",
    name: "Budi Santoso",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    campaign: "Bantuan Banjir"
  }
];

// Data statis untuk berita
const news = [
  {
    id: 1,
    title: "DonasiKita Salurkan Bantuan untuk Korban Bencana",
    slug: "donasikita-salurkan-bantuan-bencana",
    excerpt: "Tim DonasiKita bersama relawan telah menyalurkan bantuan kepada korban bencana di berbagai wilayah...",
    image: "https://donasionline.id/storage/80127/conversions/Cover-Campaign-Bersama-Indra-Priawan-thumbnail.jpg",
    date: "22 Mar 2024"
  },
  {
    id: 2,
    title: "Ribuan Anak Mendapat Bantuan Pendidikan",
    slug: "ribuan-anak-dapat-bantuan-pendidikan",
    excerpt: "Program beasiswa DonasiKita telah membantu ribuan anak dari keluarga prasejahtera untuk melanjutkan pendidikan...",
    image: "https://donasionline.id/storage/80127/conversions/Cover-Campaign-Bersama-Indra-Priawan-thumbnail.jpg",
    date: "20 Mar 2024"
  },
  {
    id: 3,
    title: "Laporan Dampak Program Kesehatan 2024",
    slug: "laporan-dampak-program-kesehatan",
    excerpt: "DonasiKita telah membantu ratusan pasien mendapatkan layanan kesehatan yang layak sepanjang tahun 2024...",
    image: "https://donasionline.id/storage/80127/conversions/Cover-Campaign-Bersama-Indra-Priawan-thumbnail.jpg",
    date: "18 Mar 2024"
  }
];
