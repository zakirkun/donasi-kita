import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake,
  faHeart,
  faShieldHeart,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar';

const values = [
  {
    icon: faHandshake,
    title: 'Transparansi',
    description: 'Kami berkomitmen untuk menjaga transparansi dalam setiap program donasi',
  },
  {
    icon: faHeart,
    title: 'Kepedulian',
    description: 'Mengutamakan kepedulian terhadap sesama yang membutuhkan bantuan',
  },
  {
    icon: faShieldHeart,
    title: 'Terpercaya',
    description: 'Platform donasi yang aman dan terpercaya dengan verifikasi ketat',
  },
  {
    icon: faUsers,
    title: 'Kolaborasi',
    description: 'Berkolaborasi dengan berbagai pihak untuk dampak yang lebih besar',
  },
];

const teamMembers = [
  {
    name: 'Ahmad Fauzi',
    position: 'CEO & Founder',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Siti Rahayu',
    position: 'Chief Operating Officer',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Budi Santoso',
    position: 'Chief Technology Officer',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://donasionline.id/storage/80127/conversions/Cover-Campaign-Bersama-Indra-Priawan-thumbnail.jpg"
              alt="About Hero"
              fill
              className="object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tentang DonasiKita
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Platform donasi online yang menghubungkan para donatur dengan mereka yang membutuhkan bantuan
            </p>
          </div>
        </section>

        {/* Visi Misi */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Visi & Misi</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-500 mb-2">Visi</h3>
                  <p className="text-gray-600">
                    Menjadi platform donasi terpercaya yang memudahkan masyarakat untuk berbagi dan membantu sesama
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-500 mb-2">Misi</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Membangun platform donasi yang aman dan transparan</li>
                    <li>• Memfasilitasi berbagai program bantuan sosial</li>
                    <li>• Mengedukasi masyarakat tentang pentingnya berbagi</li>
                    <li>• Memastikan bantuan tersalurkan tepat sasaran</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nilai-nilai */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={value.icon} className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tim Kami */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Tim Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lokasi Kantor */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Lokasi Kantor</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">Kantor Pusat DonasiKita</h3>
                <p className="text-gray-600 mb-6">
                  Jl. Contoh No. 123<br />
                  Jakarta Selatan, 12345<br />
                  Indonesia
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>Email: info@donasikita.com</p>
                  <p>Telepon: (021) 1234-5678</p>
                  <p>Jam Operasional: Senin - Jumat, 09:00 - 17:00 WIB</p>
                </div>
              </div>
              <div className="aspect-video relative rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2904349844674!2d106.82704841476885!3d-6.175392395527934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1647831234567!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 