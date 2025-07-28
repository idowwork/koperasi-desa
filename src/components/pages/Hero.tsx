"use client"
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    // <section className="relative h-full md:h-[40rem]  overflow-hidden mx-6 md:mx-20 bg-redcoop flex items-center rounded-xl">
    //     <div className="container mx-auto">
    //         <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
    //             <div className="pt-12 px-6 md:pl-18 text-white">
    //                 <h1 className="text-2xl leading-[1.4] font-style md:text-4xl mb-4 font-bold">
    //                     Selamat Datang di Website <br/>
    //                     Koperasi Desa Merah Putih Sijunjung Kecamatan Sijunjung
    //                 </h1>
    //                 <p className="text-md md:text-lg mb-4">
    //                     Bersama, kita membangun ekonomi desa yang mandiri dan sejahtera melalui koperasi berbasis 
    //                     gotong royong dan digitalisasi.
    //                 </p>
    //                 <div className="flex flex-col md:flex-row mx-auto mt-8 justify-start gap-2 md:gap-4">
    //                     <Link href="/#about" scroll className="border border-white px-6 py-3 rounded-md">
    //                         Lihat Profil Koperasi
    //                     </Link>
    //                     <Link href="/#about" scroll className="px-6 py-3 rounded-md">
    //                         Gabung menjadi anggota
    //                     </Link>
    //                 </div>
    //             </div>
    //             <div className="md:px-12 md:mt-[-30px]">
    //                 <Image src="/dashboard.png" width={600} height={600} alt="Koperasi Desa Merah Putih" />
    //             </div>
    //         </div>
    //     </div>
    // </section>

    <section className="relative h-full md:h-[40rem] overflow-hidden mx-6 md:mx-20 bg-redcoop flex items-center rounded-xl">
        <div className="container mx-auto">
            {/* <Image
                src="/kampung-adat-sjj.jpg"
                alt="background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                priority
                fill
            />
            
            <div className="absolute inset-0 bg-redscoop/60 z-10" /> */}

            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                <div className="pt-18 md:pt-0 px-6 md:pl-18 text-white">
                    <h6 className="text-xl italic">
                        Selamat Datang di Website
                    </h6>
                    <h1 className="text-2xl leading-[1.4] font-style md:text-4xl mb-4 font-bold">
                        Koperasi Desa Merah Putih Sijunjung Kec. Sijunjung
                    </h1>
                    <p className="text-md md:text-lg mb-4">
                        Bersama, kita membangun ekonomi desa yang mandiri dan sejahtera melalui koperasi berbasis 
                        gotong royong dan digitalisasi.
                    </p>
                    <div className="flex flex-col md:flex-row mx-auto mt-8 justify-start gap-2 md:gap-4">
                        <Link href="/#tentang" scroll className="border border-white px-6 py-3 rounded-md">
                            Lihat Profil Koperasi
                        </Link>
                        <Link href="/pendaftaran-anggota" scroll className="px-6 py-3 rounded-md">
                            Gabung menjadi anggota
                        </Link>
                    </div>
                </div>
                <div className="md:px-12">
                    <Image src="/dashboard.png" width={600} height={600} alt="Koperasi Desa Merah Putih" />
                </div>
            </div>
        </div>
    </section>
  );
}
