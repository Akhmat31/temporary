import MapComponent from "./MapComponent.tsx";
import { FaLocationDot, FaClock, FaPhone, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

let Endfooter = function () {
    return (
        <footer className="w-full mx-auto p-12 bg-white">
            <div
                style={{
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                    background:
                        "linear-gradient(135deg, rgb(0, 58, 48) 0%, rgb(0, 29, 24) 50%, rgb(0, 5, 4) 100%)"
                }}
                className="w-full py-8 text-white"
            >
                <div className="text-center mb-12">
                    <h1 className="text-3xl mb-4 font-extrabold">
                        Didukung Standar Keamanan Tinggi
                    </h1>
                    <p className="text-white/80 leading-relaxed text-[12px] max-w-xl mx-auto">
                        Menghadirkan perlindungan aset kelas premium
                        dengan standar keamanan tinggi,
                        <br />
                        didukung sistem profesional dan
                        pengelolaan yang terpercaya.
                    </p>
                </div>
                <div className="flex justify-center gap-8">
                    <div className="flex items-center gap-4 
                        bg-white/10 backdrop-blur-md 
                        px-6 py-4 rounded-xl 
                        w-[320px]">
                        <img
                            src="/assets/img/logo-ojk.png"
                            width="80"
                            alt=""
                        />
                        <span className="font-medium">
                            Terdaftar & diawasi OJK
                        </span>
                    </div>
                    <div className="flex items-center gap-4 
                        bg-white/10 backdrop-blur-md 
                        px-6 py-4 rounded-xl 
                        w-[320px]">
                        <img
                            src="/assets/img/d8a28cc7d63c61e6d01f7699200f9f7a096d9c27.png"
                            width="80"
                            alt=""
                        />
                        <span className="font-medium">
                            Anggota Resmi PPGI
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <MapComponent />
            </div>
            <div
                style={{
                    borderBottomLeftRadius: "30px",
                    borderBottomRightRadius: "30px",
                    background:
                        "linear-gradient(135deg, rgb(0, 58, 48) 0%, rgb(0, 29, 24) 50%, rgb(0, 5, 4) 100%)"
                }}
                className="w-full text-white pt-10 pb-8 px-12"
            >
                <div className="grid grid-cols-4 gap-12 mb-12">
                    <div>
                        <img src="/assets/img/logo-pui.png" className="w-[160px]" />
                        <div className="flex-col mt-10 gap-3 mb-4">
                            <FaLocationDot className="mt-1 pr-2 text-white/80" />
                            <span className="font-bold">Alamat</span>
                            <p className="text-white/70 mt-2 text-sm leading-relaxed">
                                The Darmawangsa Square Lt.2 No.263-264,
                                Jalan Darmawangsa VI,
                                Kebayoran Baru, Jakarta Selatan 12160
                            </p>
                        </div>
                        <div className="flex-col gap-3">
                            <FaClock className="mt-1 pr-2 text-white/80" />
                            <span className="font-bold">Jam buka: </span>
                            <div className="text-white/70 mt-2 text-sm">
                                <li className="ml-5">Senin s/d Jumat : 10.00 s/d 17.30</li>
                                <li className="ml-5">Sabtu-Minggu by Appointment</li>
                            </div>
                        </div>
                    </div>
                    <div className="ml-16 mt-16 pt-2">
                        <h3 className="font-semibold mb-4">
                            Page
                        </h3>
                        <ul className="space-y-1 text-white/70 text-sm">
                            <li className="hover:text-white cursor-pointer">
                                Cara Kerja
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Produk
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Pendaftaran
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Kontak
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Gadai Jam Tangan
                            </li>
                        </ul>
                    </div>
                    <div className="mt-28 pt-2">
                        <ul className="space-y-3 text-white/70 text-sm">
                            <li className="hover:text-white cursor-pointer">
                                Gadai Tas Branded
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Gadai Perhiasan, Emas & Berlian
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                FAQs
                            </li>
                        </ul>
                    </div>
                    <div className="mt-20">
                        <h3 className="font-semibold -mt-2 mb-3">
                            Kontak
                        </h3>
                        <div className="space-y-2">
                            <div className="hover-contact-card flex items-center gap-3 
                                border-2 border-white px-4 py-3 rounded-lg">
                                <FaPhone />
                                <span className="text-sm">
                                    Telepon:
                                    <br />
                                    021-7278-7020
                                </span>
                            </div>
                            <div className="hover-contact-card flex items-center gap-3 
                                border-2 border-white px-4 py-3 rounded-lg">
                                <FaWhatsapp />
                                <span className="text-sm">
                                    WhatsApp:
                                    <br />
                                    0822 77777 911
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <div className="hover-social-icon social-fb w-10 h-10 flex items-center justify-center cursor-pointer rounded-full bg-white/10">
                                <FaFacebookF className="text-xl" />
                            </div>
                            <div className="hover-social-icon social-ig w-10 h-10 flex items-center justify-center cursor-pointer rounded-full bg-white/10">
                                <FaInstagram className="text-xl" />
                            </div>
                            <div className="hover-social-icon social-li w-10 h-10 flex items-center justify-center 
                                bg-white rounded-full cursor-pointer text-black">
                                <FaLinkedinIn className="text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-6 mb-8">
                    <div className="flex gap-3 p-3 bg-white/5 rounded">
                        <img width="60" src="/assets/img/logo-ojk.png" />
                        <span className="font-medium">
                            Terdaftar & diawasi OJK
                        </span>
                    </div>
                    <div className="flex gap-3 p-3 bg-white/5 rounded">
                        <img width="90" src="/assets/img/d8a28cc7d63c61e6d01f7699200f9f7a096d9c27.png" />
                        <span className="font-medium">
                            Anggota Resmi PPGI
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center 
                    text-white/50 text-sm
                    pt-6">
                    <span>
                        Copyright © 2026
                    </span>
                    <div className="flex gap-6">
                        <span className="hover:text-white cursor-pointer">
                            Kebijakan Privasi
                        </span>
                        <span className="hover:text-white cursor-pointer">
                            Syarat & Ketentuan
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export { Endfooter }