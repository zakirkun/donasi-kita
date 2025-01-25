import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar';

const contactInfo = [
  {
    icon: faEnvelope,
    title: 'Email',
    details: ['info@donasikita.com', 'support@donasikita.com'],
  },
  {
    icon: faPhone,
    title: 'Telepon',
    details: ['(021) 1234-5678', '0812-3456-7890'],
  },
  {
    icon: faLocationDot,
    title: 'Alamat',
    details: ['Jl. Contoh No. 123', 'Jakarta Selatan, 12345'],
  },
  {
    icon: faClock,
    title: 'Jam Operasional',
    details: ['Senin - Jumat', '09:00 - 17:00 WIB'],
  },
];

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-gray-600">
              Ada pertanyaan atau masukan? Jangan ragu untuk menghubungi kami
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="bg-emerald-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={info.icon} className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">{detail}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Ticket Form */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Buat Tiket Bantuan</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kategori
                </label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  <option value="">Pilih kategori</option>
                  <option value="donation">Masalah Donasi</option>
                  <option value="campaign">Masalah Campaign</option>
                  <option value="payment">Masalah Pembayaran</option>
                  <option value="account">Masalah Akun</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subjek
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Masukkan subjek tiket"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deskripsi Masalah
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Jelaskan masalah Anda secara detail"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Lampiran (opsional)
                </label>
                <input
                  type="file"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  accept="image/*,.pdf"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Format yang didukung: JPG, PNG, PDF (max. 5MB)
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
              >
                Kirim Tiket
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
} 