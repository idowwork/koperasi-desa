import Image from "next/image"
import Link from "next/link"
import { SERVICES } from "@/lib/data"

export default function Services() {
    return (
        <section className="flex justify-center bg-redcoop text-white items-center px-6 py-20 my-32" id="layanan">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center rounded-xl md:px-28 mb-8">
                    <div className="md:w-[65%] px-2 mx-auto text-center flex flex-col justify-center mb-16">
                        <h1 className="text-3xl font-style md:text-4xl lg:text-4xl text-maroon font-medium mb-6">
                            Layanan Khusus untuk Anggota Koperasi
                        </h1>
                        <p className="md:w-[70%] mx-auto leading-[1.6] text-md">
                            Kami menyediakan berbagai fasilitas yang memudahkan anggota untuk 
                            aktif, aman, dan terlibat dalam kegiatan koperasi.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 md:max-w-6xl gap-8  mx-auto">
                        {
                            SERVICES.map((item, idx) =>(
                                <div className="flex flex-col justify-center bg-white text-gray-700 rounded-md p-6 gap-2" key={idx}>
                                    <Image src={item.image} width={140} height={140} alt={item.name} />
                                    <p className="text-md text-redcoop font-bold ">{item.name}</p>
                                    <p className="text-sm ">{item.text}</p>
                                    <ul>
                                        {
                                            item.list.map((txt, idx) => (
                                                <li key={idx} className="list-disc text-xs ml-4">{txt}</li>
                                            ))
                                        }
                                    </ul>
                                    <Link href={item.linkCta} scroll className="bg-redcoop px-4 py-2 mt-8 text-white text-sm text-center rounded-md">
                                        {item.cta}
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}