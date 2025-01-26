"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGoogle,
  faFacebook,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import Footer from '@/components/Footer';

interface RegisterProps {
    children: React.ReactNode;
}

const Register: React.FC<RegisterProps> = () => {
  const [step, setStep] = useState<'register' | 'otp'>('register');
  const [email, setEmail] = useState('');
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);

  const handleSocialRegister = (provider: string) => {
    // Implementasi social register
    console.log(`Register with ${provider}`);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Kirim OTP ke email
    setStep('otp');
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validasi OTP
    console.log('OTP submitted:', otpCode.join(''));
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // Hanya terima 1 karakter

    const newOtp = [...otpCode];
    newOtp[index] = value;
    setOtpCode(newOtp);

    // Auto focus ke input berikutnya
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otpCode[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  if (step === 'otp') {
    return (
    <>
      <main className="min-h-screen flex items-center justify-center py-10 bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Verifikasi Email</h1>
            <p className="text-gray-600">
              Masukkan kode OTP yang telah kami kirim ke<br />
              <span className="font-medium">{email}</span>
            </p>
          </div>

          <form onSubmit={handleOtpSubmit} className="space-y-6">
            <div className="flex justify-center gap-2">
              {otpCode.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl font-semibold border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-2.5 rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
            >
              Verifikasi
            </button>

            <p className="text-center text-sm text-gray-600">
              Tidak menerima kode?{' '}
              <button
                type="button"
                className="text-emerald-500 hover:text-emerald-600 font-semibold"
              >
                Kirim ulang
              </button>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
    );
  }

  return (
    <>
    <main className="min-h-screen flex items-center justify-center py-10 bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Daftar DonasiKita</h1>
          <p className="text-gray-600">
            Bergabung dengan komunitas peduli sesama
          </p>
        </div>

        <form onSubmit={handleRegisterSubmit} className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-emerald-500 border-gray-300 rounded focus:ring-emerald-500"
              />
              <span className="ml-2 text-sm text-gray-600">
                Saya setuju dengan{' '}
                <Link href="/terms" className="text-emerald-500 hover:text-emerald-600">
                  Syarat & Ketentuan
                </Link>
                {' '}dan{' '}
                <Link href="/privacy" className="text-emerald-500 hover:text-emerald-600">
                  Kebijakan Privasi
                </Link>
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2.5 rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
          >
            Daftar
          </button>
        </form>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">atau daftar dengan</span>
          </div>
        </div>

        {/* Social Register Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => handleSocialRegister('google')}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 text-[#4285F4]" />
            <span>Google</span>
          </button>
          <button
            onClick={() => handleSocialRegister('facebook')}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 text-[#1877F2]" />
            <span>Facebook</span>
          </button>
          <button
            onClick={() => handleSocialRegister('apple')}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FontAwesomeIcon icon={faApple} className="w-5 h-5" />
            <span>Apple</span>
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Sudah punya akun?{' '}
          <Link href="/auth/login" className="text-emerald-500 hover:text-emerald-600 font-semibold">
            Masuk
          </Link>
        </p>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default Register; 