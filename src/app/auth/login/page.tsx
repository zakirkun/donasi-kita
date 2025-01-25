"use client"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGoogle,
  faFacebook,
  faApple,
} from '@fortawesome/free-brands-svg-icons';

export default function Login() {
  const handleSocialLogin = (provider: string) => {
    // Implementasi social login
    console.log(`Login with ${provider}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center py-10 bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Masuk ke DonasiKita</h1>
          <p className="text-gray-600">
            Platform donasi online terpercaya
          </p>
        </div>

        <form className="space-y-4 mb-8">
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
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-emerald-500 border-gray-300 rounded focus:ring-emerald-500"
              />
              <span className="ml-2 text-sm text-gray-600">Ingat saya</span>
            </label>
            <Link
              href="/auth/forgot-password"
              className="text-sm text-emerald-500 hover:text-emerald-600"
            >
              Lupa password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2.5 rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
          >
            Masuk
          </button>
        </form>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">atau masuk dengan</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => handleSocialLogin('google')}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 text-[#4285F4]" />
            <span>Google</span>
          </button>
          <button
            onClick={() => handleSocialLogin('facebook')}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 text-[#1877F2]" />
            <span>Facebook</span>
          </button>
          <button
            onClick={() => handleSocialLogin('apple')}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FontAwesomeIcon icon={faApple} className="w-5 h-5" />
            <span>Apple</span>
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Belum punya akun?{' '}
          <Link href="/auth/register" className="text-emerald-500 hover:text-emerald-600 font-semibold">
            Daftar
          </Link>
        </p>
      </div>
    </main>
  );
} 