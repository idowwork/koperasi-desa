import Image from "next/image"
import { ANGGOTA } from "@/lib/data"


export default function Team() {
    return (
        <section className="flex justify-center items-center px-6 my-32" id="team">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center rounded-xl p-6 md:px-28 mb-8">
                    <div className="md:w-[60%] px-2 mx-auto text-center text-black flex flex-col justify-center mb-16">
                        <h1 className="text-3xl font-style md:text-4xl lg:text-4xl text-maroon font-medium mb-6">
                            Struktur Pengurus & Pengawas <br /> Koperasi Desa Merah Putih Sijunjung
                        </h1>
                        <p className="leading-[1.6] text-md">
                            Dipimpin oleh warga desa sendiri, koperasi kami dikelola secara kolektif oleh pengurus 
                            dan diawasi secara terbuka demi menjaga kepercayaan dan akuntabilitas.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 place-items-center">
                        {
                            ANGGOTA.map((item, idx) =>(
                                <div className="relative overflow-hidden w-60 h-60 rounded-xl" key={idx}>
                                    <Image
                                        src={item.image}
                                        alt="background"
                                        fill={true}
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute w-50 flex flex-col bottom-4 bg-blue-900 gap-1 rounded-r-lg px-4 py-2">
                                        <p className="text-sm font-medium text-white">{item.name}</p>
                                        <p className="text-xs text-white">{item.jabatan}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}