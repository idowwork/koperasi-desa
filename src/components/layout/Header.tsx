'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/#tentang' },
    { name: 'Struktur Pengurus', path: '/#pengurus' },
    { name: 'Unit Bisnis', path: '/#unit-bisnis' },
    { name: 'Layanan', path: '/#layanan' },
    { name: 'Artikel', path: '/#artikel' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router]);

  return (
    <nav className="w-full z-50 transition-all md:px-20 ">
      <div className="lg:container mx-auto p-6 ">
        <div className="flex justify-between items-center">
          <Link href="/" className='flex justify-center items-center gap-2'>
            <Image src="/logo-koperasi.png" alt='logo koperasi' width={50} height={50} />
            <Image src="/logo-nagari.jpeg" alt='logo nagari sijunjung' width={60} height={60} />
            
            <div className="flex flex-col">
                <h1 className='text-xs'>Koperasi Desa Merah Putih</h1>
                <h6 className='text-md md:text-xl'>Sijunjung Kec. Sijunjung</h6>
            </div>
          </Link>


          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  href={item.path}
                  className={`${isScrolled ? 'text-black' : 'text-black'} font-reguler transition-colors hover-underline-animation`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          <div className="hidden md:flex">
            <div className="px-4 py-2 rounded-md border border-redcoop ">
                <p className='text-redcoop'>Masuk Anggota</p>
            </div>
          </div>

          <button 
            className="md:hidden p-2 flex flex-col justify-center items-center"
            aria-label='hamburger'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span 
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }`} >
            </span>
            <span 
              className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} >
            </span>
            <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
              ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
            </span>  
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="flex flex-col px-2 md:hidden my-4 space-y-4 transition-all duration-500 ease-out">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isScrolled ? 'text-black' : 'text-black'} font-medium transition-colors hover-underline-animation`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}