"use client"
import Link from "next/link";

export default function Registration() {
  return (
    <section className="relative h-full overflow-hidden mx-6 md:mx-20 md:py-20 bg-gray-200 flex rounded-xl">
        <div className="container mx-auto">
            <div className="flex flex-col">
                <div className="p-6 text-center text-black">
                    <h1 className="text-2xl md:text-4xl font-text mb-2 font-bold">
                        Formulir Online Pendaftaran Anggota
                    </h1>
                    <h1 className="text-lg md:text-3xl font-style mb-4">
                        Koperasi Desa Merah Putih Sijunjung Kec. Sijunung
                    </h1>
                    {/* <p className="text-md md:text-lg mb-4">
                        Bersama, kita membangun ekonomi desa yang mandiri dan sejahtera melalui koperasi berbasis 
                        gotong royong dan digitalisasi.
                    </p> */}
                    <div className="flex flex-col md:flex-row mx-auto mt-8 justify-center gap-2 md:gap-4">
                        <Link href="/#tentang" scroll className="bg-redcoop text-white px-6 py-3 rounded-md">
                            Daftar menjadi Anggota
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
