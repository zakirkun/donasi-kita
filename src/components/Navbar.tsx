"use client"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-emerald-500">
            DonasiKita
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/campaign"
              className="text-gray-600 hover:text-emerald-500 transition-colors"
            >
              Campaign
            </Link>
            <Link 
              href="/about"
              className="text-gray-600 hover:text-emerald-500 transition-colors"
            >
              Tentang Kami
            </Link>
            <Link 
              href="/contact"
              className="text-gray-600 hover:text-emerald-500 transition-colors"
            >
              Kontak
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/auth/login"
              className="text-gray-600 hover:text-emerald-500 transition-colors"
            >
              Masuk
            </Link>
            <Link 
              href="/auth/register"
              className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Daftar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon 
              icon={isMenuOpen ? faXmark : faBars} 
              className="w-6 h-6 text-gray-600"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link 
                href="/campaign"
                className="text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Campaign
              </Link>
              <Link 
                href="/about"
                className="text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Tentang Kami
              </Link>
              <Link 
                href="/contact"
                className="text-gray-600 hover:text-emerald-500 transition-colors"
              >
                Kontak
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Link 
                  href="/auth/login"
                  className="text-center text-gray-600 hover:text-emerald-500 transition-colors"
                >
                  Masuk
                </Link>
                <Link 
                  href="/auth/register"
                  className="text-center bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 