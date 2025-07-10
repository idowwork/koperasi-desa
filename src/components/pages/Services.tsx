// import Image from "next/image"
import { SERVICES } from "@/lib/data"

export default function Services() {
    return (
        <section className="flex justify-center bg-blue-900 text-white items-center px-6 py-20 my-32" id="layanan">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center rounded-xl p-6 md:px-28 mb-8">
                    <div className="md:w-[60%] px-2 mx-auto text-center flex flex-col justify-center mb-16">
                        <h1 className="text-3xl font-style md:text-4xl lg:text-4xl text-maroon font-medium mb-6">
                            Layanan Khusus untuk Anggota Kami
                        </h1>
                        <p className="leading-[1.6] text-md">
                            Kami menyediakan berbagai fasilitas yang memudahkan anggota untuk 
                            aktif, aman, dan terlibat dalam kegiatan koperasi.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-5xl gap-12 mx-auto">
                        {
                            SERVICES.map((item, idx) =>(
                                <div className="flex flex-col bg-white text-blue-900 rounded-md px-4 py-6 gap-2" key={idx}>
                                    <p className="text-md font-bold ">{item.name}</p>
                                    <p className="text-sm">{item.text}</p>
                                    <ul>
                                        {
                                            item.list.map((txt, idx) => (
                                                <li key={idx} className="list-disc text-xs ml-4">{txt}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}