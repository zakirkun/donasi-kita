import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeartPulse, 
  faGraduationCap, 
  faHandHoldingHeart,
  faHouseChimneyCrack,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar';

// Data kategori (bisa dipindahkan ke file terpisah jika digunakan di banyak tempat)
const categories = [
  { id: 1, name: 'Kesehatan', slug: 'kesehatan', icon: faHeartPulse },
  { id: 2, name: 'Pendidikan', slug: 'pendidikan', icon: faGraduationCap },
  { id: 3, name: 'Bencana Alam', slug: 'bencana-alam', icon: faHouseChimneyCrack },
  { id: 4, name: 'Sosial', slug: 'sosial', icon: faHandHoldingHeart },
];

// Data campaign (nanti akan diganti dengan data dari API/database)
const campaigns = [
  {
    id: 1,
    title: 'Bantu Anak-anak Penderita Kanker',
    slug: 'bantu-anak-kanker',
    description: 'Mari bantu biaya pengobatan anak-anak penderita kanker dari keluarga kurang mampu.',
    image: 'https://donasionline.id/storage/80127/conversions/Cover-Campaign-Bersama-Indra-Priawan-thumbnail.jpg',
    collected: 50000000,
    target: 100000000,
    category: 'kesehatan',
    daysLeft: 15,
    donorCount: 250,
  },
  // ... tambahkan lebih banyak campaign
];

export default function CampaignList() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Daftar Campaign</h1>
            <p className="text-gray-600">Pilih campaign yang ingin Anda dukung</p>
          </div>

          {/* Filter Kategori */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              <button
                className="px-6 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
              >
                Semua
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-200 hover:border-emerald-500 hover:text-emerald-500 transition-colors"
                >
                  <FontAwesomeIcon icon={category.icon} className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Campaign Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campaigns.map((campaign) => (
              <Link
                key={campaign.id}
                href={`/campaign/${campaign.slug}`}
                className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-emerald-500 transition-colors">
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
                    <span>{campaign.donorCount} Donatur</span>
                    <span>{campaign.daysLeft} Hari lagi</span>
                  </div>
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