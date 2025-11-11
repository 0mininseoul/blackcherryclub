'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="max-w-[1200px] mx-auto px-6 py-4 md:px-12 md:py-6">
        <nav className="flex items-center justify-between">
          {/* Logo / Band Name */}
          <Link href="/" className="text-2xl md:text-3xl font-bold text-white no-underline text-over-prism hover:text-red-300 transition-colors">
            블랙체리클럽
          </Link>

          {/* Navigation Tabs */}
          <div className="flex gap-2 md:gap-4">
            <Link
              href="/"
              className={`liquid-glass-toggle px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-semibold text-white no-underline ${
                pathname === '/' ? 'active' : ''
              }`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`liquid-glass-toggle px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-semibold text-white no-underline ${
                pathname === '/about' ? 'active' : ''
              }`}
            >
              ABOUT
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
