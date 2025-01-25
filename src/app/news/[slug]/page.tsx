import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt,
  faUser,
  faTag,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar';

// Data berita (pindahkan ke file terpisah nantinya)
const newsDetail = {
  id: 1,
  title: "DonasiKita Salurkan Bantuan untuk Korban Bencana",
  slug: "donasikita-salurkan-bantuan-bencana",
  content: `
    <p>Tim DonasiKita bersama relawan telah menyalurkan bantuan kepada korban bencana di berbagai wilayah Indonesia. Bantuan yang disalurkan meliputi kebutuhan pokok, obat-obatan, dan perlengkapan darurat.</p>
    
    <p>Program penyaluran bantuan ini merupakan hasil dari donasi masyarakat yang telah terkumpul melalui platform DonasiKita. Bantuan telah tersalurkan ke beberapa titik pengungsian dan daerah terdampak.</p>
    
    <h3>Distribusi Bantuan</h3>
    <p>Proses distribusi bantuan dilakukan secara bertahap dan terkoordinasi dengan pihak setempat untuk memastikan bantuan tepat sasaran. Tim relawan juga melakukan assessment kebutuhan di lapangan untuk mengoptimalkan bantuan yang diberikan.</p>
    
    <h3>Dampak Program</h3>
    <p>Melalui program ini, lebih dari 1.000 keluarga telah menerima bantuan. Bantuan yang diberikan diharapkan dapat meringankan beban para korban bencana dan membantu proses pemulihan pasca bencana.</p>
  `,
  image: "https://donasionline.id/storage/80127/conversions/Cover-Campaign-Bersama-Indra-Priawan-thumbnail.jpg",
  date: "22 Mar 2024",
  category: "program",
  author: "Tim DonasiKita",
  relatedNews: [
    // ... data berita terkait
  ]
};

export default function NewsDetail() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex text-sm text-gray-500">
              <Link href="/news" className="hover:text-emerald-500">
                Berita
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{newsDetail.title}</span>
            </nav>
          </div>

          {/* Article Header */}
          <article className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
              {newsDetail.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
                {newsDetail.date}
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
                {newsDetail.author}
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faTag} className="w-4 h-4" />
                {newsDetail.category}
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
              <Image
                src={newsDetail.image}
                alt={newsDetail.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: newsDetail.content }}
            />

            {/* Share Buttons */}
            <div className="border-t border-gray-200 mt-8 pt-8">
              <h3 className="text-lg font-semibold mb-4">Bagikan Artikel</h3>
              <div className="flex gap-4">
                {/* Add social share buttons */}
              </div>
            </div>
          </article>

          {/* Related News */}
          <div className="max-w-3xl mx-auto mt-12">
            <h2 className="text-2xl font-bold mb-6">Berita Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Add related news cards */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 