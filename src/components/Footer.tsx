import Link from 'next/link';
import { 
  faHeartPulse, 
  faGraduationCap, 
  faHandHoldingHeart,
  faHouseChimneyCrack,
} from '@fortawesome/free-solid-svg-icons';

const categories = [
  { id: 1, name: 'Kesehatan', slug: 'kesehatan', icon: faHeartPulse },
  { id: 2, name: 'Pendidikan', slug: 'pendidikan', icon: faGraduationCap },
  { id: 3, name: 'Bencana Alam', slug: 'bencana-alam', icon: faHouseChimneyCrack },
  { id: 4, name: 'Sosial', slug: 'sosial', icon: faHandHoldingHeart },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-4">DonasiKita</h3>
            <p className="text-gray-400 mb-4">
              Platform donasi terpercaya untuk membantu mereka yang membutuhkan
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                {/* Add social media icons */}
              </a>
              {/* Add more social media links */}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Tautan</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/campaign" className="text-gray-400 hover:text-white">
                  Campaign
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kategori</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/campaign?category=${category.slug}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@donasikita.com</li>
              <li>Phone: (021) 1234-5678</li>
              <li>
                Jl. Contoh No. 123<br />
                Jakarta Selatan, 12345<br />
                Indonesia
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} DonasiKita. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 