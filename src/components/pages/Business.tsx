import Image from "next/image"
import { UNIT_BUSINESS } from "@/lib/data"
export default function Business() {
    return (
        <section className="flex justify-center items-center my-32 px-6" id="business">
            <div className="container mx-auto md:px-24">
                {/* <div className="grid grid-cols-1 md:grid-cols-2 place-items-center px-6"> */}
                <div className="flex flex-col    px-6">
                    <div className="text-black flex flex-col max-w-xl mb-8">
                        <div className="">
                            <h1 className="text-3xl font-style leading-[1.4] md:text-4xl text-maroon font-medium mb-6">
                                Unit Usaha Koperasi Desa Merah Putih Sijunjung
                            </h1>
                            <p className="leading-[1.6] text-md mb-4">
                                Kami mengembangkan usaha berdasarkan potensi desa, demi menciptakan lapangan kerja dan 
                                perputaran ekonomi lokal
                            </p>
                        </div>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        {
                        UNIT_BUSINESS.map((item) => (
                            <div key={item.id} className="group relative w-full overflow-hidden shadow-md rounded-lg transition-all hover:shadow-xl">
                                <div className={`flex flex-col w-[400px] h-[350px] py-8 px-6 bg-black text-2xl text-white`}>
                                    <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill={true}
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-900/30" /> */}
                                    <div className="absolute inset-0 bg-blue-900/70 group-hover:bg-blue-900/20 transition-all" />
                    
                                    <div className="relative flex h-full flex-col items-start justify-end text-left text-white">
                                    <h2 className="text-xl mb-2">{item.name}</h2>
                                    {/* <p className="text-sm">{item.desc}</p> */}
                                    </div>
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