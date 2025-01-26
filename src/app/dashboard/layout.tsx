import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,
  faHistory,
  faHeart,
  faUser,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

const sidebarMenu = [
  { 
    name: 'Dashboard', 
    href: '/dashboard', 
    icon: faHome 
  },
  { 
    name: 'Riwayat Donasi', 
    href: '/dashboard/history', 
    icon: faHistory 
  },
  { 
    name: 'Campaign Favorit', 
    href: '/dashboard/favorites', 
    icon: faHeart 
  },
  { 
    name: 'Profil', 
    href: '/dashboard/profile', 
    icon: faUser 
  },
  { 
    name: 'Pengaturan', 
    href: '/dashboard/settings', 
    icon: faGear 
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white min-h-screen shadow-sm fixed">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-emerald-500">DonasiKita</h1>
          </div>
          <nav className="mt-4">
            {sidebarMenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-emerald-50 hover:text-emerald-500"
              >
                <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          {children}
        </main>
      </div>
    </div>
  );
} 