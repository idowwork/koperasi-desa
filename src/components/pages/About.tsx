import Image from "next/image"

export default function About() {
    return (
        <section className="flex justify-center items-center my-32 px-6" id="tentang">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                    <div className="md:px-12 md:mt-[-40px]">
                        <Image src="/cooperative.png" width={800} height={800} alt="about lawfirm" />
                    </div>
                    <div className="text-black flex flex-col max-w-4xl mb-8 md:px-24">
                        {/* <h6 className="text-brown text-sm tracking-widest md:text-md mb-4 uppercase">
                            Tentang Koperasi Desa Sijunjung
                        </h6> */}
                        <div className="">
                            <h1 className="text-3xl font-style leading-[1.4] md:text-4xl text-maroon font-medium mb-6">
                                Tentang Koperasi Desa Merah Putih Sijunjung Kecamatan Sijunjung
                            </h1>
                            <p className="leading-[1.6] text-justify text-md mb-4">
                                Koperasi Desa Merah Putih Sijunjung merupakan koperasi modern yang berdiri untuk memberdayakan ekonomi 
                                masyakarat desa melalui sistem yang efisien, transparan,inklusif dan kolaboratif. Kami berkomitmen menjadi 
                                solusi keuangan dan usaha yang berbasis pada gotong royong serta didukung digitalisasi tata kelola koperasi.
                            </p>
                        </div>
                        <div className="bg-redcoop text-white p-6 mt-8 rounded-md">
                            <div className="text-xl">Nomor Induk Koperasi: 1304070170049</div>
                            <div className="">SK AHU: AHU-0013295.AH.01.29.TAHUN 2025</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}