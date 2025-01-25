import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/Navbar';

// Data statis untuk contoh
const campaignDetail = {
  id: 1,
  title: 'Bantu Anak-anak Penderita Kanker',
  description: `
    Mari bantu biaya pengobatan anak-anak penderita kanker dari keluarga kurang mampu. 
    Setiap donasi Anda akan membantu mereka mendapatkan pengobatan yang layak dan 
    memberikan harapan untuk masa depan yang lebih baik.
  `,
  images: [
    'https://www.blorakab.go.id/resource/doc/post/221101062106IMG-20221101-WA0006.jpg',
    'https://www.blorakab.go.id/resource/doc/post/221101062106IMG-20221101-WA0006.jpg',
  ],
  collected: 50000000,
  target: 100000000,
  donorCount: 250,
  daysLeft: 15,
  endDate: '2024-04-15',
  statistics: {
    lastWeek: 15000000,
    lastMonth: 35000000,
    average: 200000,
  }
};

const donors = [
  {
    id: 1,
    name: 'Ahmad Syaiful',
    amount: 500000,
    message: 'Semoga lekas sembuh adik-adik...',
    date: '2024-03-22',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Siti Aminah',
    amount: 1000000,
    message: 'Semoga bantuan ini bermanfaat 🤲',
    date: '2024-03-21',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Budi Santoso',
    amount: 250000,
    message: 'Mari bantu sesama yang membutuhkan',
    date: '2024-03-21',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    name: 'Dewi Lestari',
    amount: 750000,
    message: 'Semoga cepat sembuh ya dek',
    date: '2024-03-20',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 5,
    name: 'Rudi Hermawan',
    amount: 300000,
    date: '2024-03-20',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 6,
    name: 'Nina Safitri',
    amount: 200000,
    message: 'Get well soon! 🙏',
    date: '2024-03-19',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: 7,
    name: 'Hendra Wijaya',
    amount: 1500000,
    message: 'Semoga bisa membantu meringankan beban',
    date: '2024-03-19',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: 8,
    name: 'Maya Putri',
    amount: 100000,
    date: '2024-03-18',
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    id: 9,
    name: 'Dimas Prayoga',
    amount: 400000,
    message: 'Semoga cepat terkumpul targetnya',
    date: '2024-03-18',
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    id: 10,
    name: 'Rina Wulandari',
    amount: 500000,
    message: 'Bismillah, semoga berkah 🤲',
    date: '2024-03-17',
    avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
];

// Tambahkan data payment methods
const paymentMethods = [
  { id: 'bca', name: 'BCA Virtual Account', icon: '🏦' },
  { id: 'mandiri', name: 'Mandiri Virtual Account', icon: '🏦' },
  { id: 'bni', name: 'BNI Virtual Account', icon: '🏦' },
  { id: 'gopay', name: 'GoPay', icon: '📱' },
  { id: 'ovo', name: 'OVO', icon: '📱' },
  { id: 'dana', name: 'DANA', icon: '📱' },
];

export default function CampaignDetail() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          {/* Image Slider */}
          <div className="relative mb-8">
            <div className="aspect-video relative rounded-xl overflow-hidden">
              <Image
                src={campaignDetail.images[0]}
                alt={campaignDetail.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Thumbnail Images */}
            <div className="flex gap-2 mt-4">
              {campaignDetail.images.map((image, index) => (
                <button
                  key={index}
                  className="relative w-24 h-16 rounded-lg overflow-hidden border-2 border-emerald-500"
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Navigation Buttons */}
            <button className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 p-2 rounded-full">
              <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6" />
            </button>
            <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 p-2 rounded-full">
              <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Campaign Info */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{campaignDetail.title}</h1>
              <p className="text-gray-600 mb-6">{campaignDetail.description}</p>

              {/* Campaign Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-emerald-50 p-4 rounded-xl">
                  <div className="text-emerald-500 font-bold text-xl">
                    Rp {campaignDetail.collected.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">Terkumpul</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-xl">
                  <div className="text-emerald-500 font-bold text-xl">
                    {campaignDetail.daysLeft} Hari
                  </div>
                  <div className="text-sm text-gray-600">Tersisa</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-xl">
                  <div className="text-emerald-500 font-bold text-xl">
                    {campaignDetail.donorCount}
                  </div>
                  <div className="text-sm text-gray-600">Donatur</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-xl">
                  <div className="text-emerald-500 font-bold text-xl">
                    {Math.round((campaignDetail.collected / campaignDetail.target) * 100)}%
                  </div>
                  <div className="text-sm text-gray-600">Tercapai</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-emerald-500 h-4 rounded-full"
                    style={{ width: `${(campaignDetail.collected / campaignDetail.target) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-emerald-500 font-semibold">
                    Rp {campaignDetail.collected.toLocaleString()}
                  </span>
                  <span className="text-gray-500">
                    dari Rp {campaignDetail.target.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Statistik Donasi */}
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h2 className="text-xl font-bold mb-4">Statistik Donasi</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-lg font-semibold">
                      Rp {campaignDetail.statistics.lastWeek.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">7 Hari Terakhir</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">
                      Rp {campaignDetail.statistics.lastMonth.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">30 Hari Terakhir</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">
                      Rp {campaignDetail.statistics.average.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Rata-rata Donasi</div>
                  </div>
                </div>
              </div>

              {/* Daftar Donatur */}
              <div>
                <h2 className="text-xl font-bold mb-6">Daftar Donatur ({donors.length})</h2>
                <div className="space-y-4">
                  {donors.map((donor) => (
                    <div key={donor.id} className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={donor.avatar}
                            alt={donor.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{donor.name}</h3>
                              <p className="text-emerald-500 font-semibold">
                                Rp {donor.amount.toLocaleString()}
                              </p>
                            </div>
                            <span className="text-sm text-gray-500">{donor.date}</span>
                          </div>
                          {donor.message && (
                            <p className="text-gray-600 mt-2">{donor.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Donation Box - Updated */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Donasi Sekarang</h2>
                <form className="space-y-6">
                  {/* Personal Info */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        placeholder="Masukkan nama lengkap"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Nominal Donasi */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nominal Donasi
                    </label>
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 gap-2">
                        {[50000, 100000, 200000].map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            className="px-4 py-2 border border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-50 transition-colors"
                          >
                            Rp {amount.toLocaleString()}
                          </button>
                        ))}
                      </div>
                      <div className="relative">
                        <input
                          type="number"
                          placeholder="Nominal lainnya"
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Metode Pembayaran */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Metode Pembayaran
                    </label>
                    <div className="space-y-2">
                      {paymentMethods.map((method) => (
                        <label
                          key={method.id}
                          className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-emerald-500 transition-colors"
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            className="mr-3 text-emerald-500 focus:ring-emerald-500"
                          />
                          <span className="mr-2">{method.icon}</span>
                          {method.name}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Pesan (Opsional) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pesan (Opsional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tulis doa atau pesan untuk campaign ini"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
                  >
                    Lanjutkan Pembayaran
                  </button>

                  {/* Disclaimer */}
                  <p className="text-xs text-gray-500 text-center">
                    Dengan menekan tombol di atas, Anda menyetujui syarat dan ketentuan yang berlaku
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 