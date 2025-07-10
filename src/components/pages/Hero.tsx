"use client"
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[40rem] overflow-hidden md:mx-20 bg-blue-900 flex items-center rounded-xl">
        <div className="container mx-auto">
            {/* <Image
                src="https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="background"
                fill={true}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-[#652126]/80" /> */}

            <div className="relative text-left text-white px-6 md:px-20">
                <div className="w-[55%]">
                    <h1 className="text-3xl leading-[1.4] font-style md:text-4xl mb-4 font-bold">
                       Selamat Datang di Website Resmi <br/>
                       Koperasi Desa Sijunjung
                    </h1>
                     <p className="text-md md:text-lg mb-4">
                        Bersama, kita membangun ekonomi desa yang mandiri dan sejahtera melalui koperasi berbasis 
                        gotong royong dan digitalisasi.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row mx-auto mt-8 justify-start gap-2 md:gap-4">
                    <Link href="/#about" scroll className="border border-white px-6 py-3 rounded-md">
                        Lihat Profil Koperasi
                    </Link>
                    <Link href="/#about" scroll className="px-6 py-3 rounded-md">
                        Gabung menjadi anggota
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}
