// import Image from "next/image";
import Link from "next/link";
import { RiInstagramFill,RiFacebookCircleFill, RiLinkedinBoxFill } from "react-icons/ri";
import { HiPhone, HiOfficeBuilding} from "react-icons/hi";

export default function Footer() {
    return (
      <footer className="bg-redcoop text-white py-8 px-6 md:py-12 mx-6 md:mx-20 my-6 md:my-12 rounded-xl" id="contact">
        <div className="container mx-auto px-2 md:px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="mb-2 max-w-md space-y-4">
              <div className="mb-4">
                <Link href="/">
                    <div className="flex flex-col">
                        <h1 className='text-md'>Koperasi Desa Merah Putih</h1>
                        <h6 className='font-medium text-2xl'>Sijunjung Kec. Sijunjung</h6>
                    </div>
                </Link>
              </div>
              <Link href="/" className="flex flex-row items-center gap-3">
                <HiPhone size={35} className="bg-white rounded-full text-redcoop p-2"/>
                <p className="text-md text-gray-200">
                  (021) 8299273
                </p>
              </Link>
              <Link href="https://g.co/kgs/MiKYfvZ" className="flex items-start justify-center gap-3" target="_blank">
                <HiOfficeBuilding fontSize={35} className="bg-white rounded-full text-redcoop p-2"/>
                <p className="-mt-0.5 flex-1 not-italic text-gray-100">
                    Galeri Sepuluh Jorong/jorong Kampung Baru,
                    Sijunjung, Sijunjung, Kab. Sijunjung, Sumatera Barat, 27553
                </p>
              </Link>
            
            </div>
            
            <div className="grid grid-rows md:grid-cols-3 gap-8">
                <div>
                <h3 className="font-bold text-xl mb-4">Koperasi</h3>
                  <ul className="space-y-2 text-md md:text-lg">
                      <li><Link href="/" className="text-gray-200 hover:text-white">Tentang Kami</Link></li>
                      <li><Link href="/" className="text-gray-200 hover:text-white">Struktur Pengurus</Link></li>
                      <li><Link href="/" className="text-gray-200 hover:text-white">Download Laporan Keuangan </Link></li>
                      {/* <li><Link href="/news-events" className="text-gray-200 hover:text-white">News & Events</Link></li> */}
                  </ul>
                </div>

                <div>
                <h3 className="font-bold text-xl mb-4">Unit Bisnis</h3>
                <ul className="space-y-2 text-md md:text-lg">
                    <li><Link href="/businesses" className="text-gray-200 hover:text-white">Gerai Simpan Pinjam</Link></li>
                    <li><Link href="/businesses" className="text-gray-200 hover:text-white">Gerai Sembako</Link></li>
                    <li><Link href="/businesses" className="text-gray-200 hover:text-white">Apotek Desa</Link></li>
                </ul>
                </div>

                <div>
                <h3 className="font-bold text-xl mb-4">Layanan</h3>
                <ul className="space-y-2 text-md md:text-lg">
                    <li><Link href="/partner" className="text-gray-200 hover:text-white">Daftar Keanggotaan</Link></li>
                    <li><Link href="/partner" className="text-gray-200 hover:text-white">Daftar Mitra Koperasi</Link></li>
                </ul>
                </div>
            </div>
          </div>

          <div className="flex flex-row mb-6 gap-2">
            <Link aria-label="facebook" href="www.facebook.com">
              <RiFacebookCircleFill size={40} className="hover:text-white text-gray-200" />
            </Link>
            <Link aria-label="instagram" href="https://www.instagram.com/">
              <RiInstagramFill size={40} className="hover:text-white text-gray-200" />
            </Link>
            <Link aria-label="linkedin" href="https://www.linkedin.com/">
              <RiLinkedinBoxFill size={40} className="hover:text-white text-gray-200" />
            </Link>
          </div>
  
          <div className="border-t border-white mt-6 md:mt-2 pt-8 text-center text-sm md:text-md">
            <p>© 2025 Koperasi Desa Merah Putih Sijunjung Kecamatan Sijunjung.</p>
          </div>
        </div>
      </footer>
    );
  }