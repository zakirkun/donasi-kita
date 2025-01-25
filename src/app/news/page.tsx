import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar';

// Data kategori berita
const newsCategories = [
  { id: 1, name: 'Semua', slug: 'all' },
  { id: 2, name: 'Program', slug: 'program' },
  { id: 3, name: 'Kegiatan', slug: 'kegiatan' },
  { id: 4, name: 'Laporan', slug: 'laporan' },
  { id: 5, name: 'Update', slug: 'update' },
];

// Data berita
const newsItems = [
  {
    id: 1,
    title: "DonasiKita Salurkan Bantuan untuk Korban Bencana",
    slug: "donasikita-salurkan-bantuan-bencana",
    excerpt: "Tim DonasiKita bersama relawan telah menyalurkan bantuan kepada korban bencana di berbagai wilayah Indonesia. Bantuan yang disalurkan meliputi kebutuhan pokok, obat-obatan, dan perlengkapan darurat.",
    content: "Lorem ipsum...", // konten lengkap
    image: "https://donasionline.id/storage/80127/conversions/Cover-Campaign-Bersama-Indra-Priawan-thumbnail.jpg",
    date: "22 Mar 2024",
    category: "program",
    author: "Tim DonasiKita"
  },
  // ... tambahkan 9 berita lainnya dengan variasi kategori
];

export default function NewsList() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Berita & Update</h1>
            <p className="text-gray-600">Ikuti perkembangan terbaru dari program dan kegiatan DonasiKita</p>
          </div>

          {/* Filter Kategori */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {newsCategories.map((category) => (
                <button
                  key={category.id}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    category.slug === 'all'
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'border border-gray-200 hover:border-emerald-500 hover:text-emerald-500'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Featured News */}
          <div className="mb-12">
            <Link 
              href={`/news/${newsItems[0].slug}`}
              className="group block relative rounded-xl overflow-hidden"
            >
              <div className="aspect-[21/9] relative">
                <Image
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-4 mb-2 text-sm">
                  <span className="bg-emerald-500 px-3 py-1 rounded-full">
                    {newsItems[0].category}
                  </span>
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
                    {newsItems[0].date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  {newsItems[0].title}
                </h2>
                <p className="text-gray-200 line-clamp-2">
                  {newsItems[0].excerpt}
                </p>
              </div>
            </Link>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.slice(1).map((item) => (
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
                  <div className="flex items-center gap-4 mb-2 text-sm">
                    <span className="text-emerald-500 font-medium">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-2 text-gray-500">
                      <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-emerald-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex gap-2">
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-emerald-500 hover:text-emerald-500 transition-colors">
                Sebelumnya
              </button>
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-emerald-500 hover:text-emerald-500 transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-emerald-500 hover:text-emerald-500 transition-colors">
                3
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:border-emerald-500 hover:text-emerald-500 transition-colors">
                Selanjutnya
              </button>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
} 