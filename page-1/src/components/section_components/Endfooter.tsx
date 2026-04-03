let Endfooter = function () {
    return (
        <footer className="w-full mx-auto p-20 bg-white">

            {/* TOP SECTION */}
            <div
                style={{
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                    background:
                        "linear-gradient(135deg,#003a30 0%,#001d18 50%,#000504 100%)"
                }}
                className="w-full py-16 text-white"
            >

                {/* TITLE */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl mb-4 font-extrabold">
                        Didukung Standar Keamanan Tinggi
                    </h1>

                    <p className="text-white/80 leading-relaxed">
                        Menghadirkan perlindungan aset kelas premium
                        dengan standar keamanan tinggi,
                        <br />
                        didukung sistem profesional dan
                        pengelolaan yang terpercaya.
                    </p>
                </div>

                {/* CARD LOGO */}
                <div className="flex justify-center gap-8">

                    {/* CARD 1 */}
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

                    {/* CARD 2 */}
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
                <div className="w-full">
                    <img src="/assets/img/b1f2109c3a1758ec231d48590ba9d6dc545b51b6.png" />
                </div>
            </div>
            <div
                style={{
                    borderBottomLeftRadius: "30px",
                    borderBottomRightRadius: "30px",
                    background:
                        "linear-gradient(135deg,#003a30 0%,#001d18 50%,#000504 100%)"
                }}
                className="w-full text-white pt-16 pb-8 px-12"
            >

                {/* GRID */}
                <div className="grid grid-cols-4 gap-12 mb-12">

                    {/* LOGO + ALAMAT */}
                    <div>

                        {/* Dummy Logo */}
                        <img src="/assets/img/logo-pui.png" className="w-[160px]"/>
                        {/* Alamat */}
                        <div className="flex-col mt-10 gap-3 mb-4">

                            <i className="fa-solid fa-location-dot mt-1 pr-2 text-white/80"></i>
                            <span className="font-bold">Alamat</span>
                            <p className="text-white/70 mt-2 text-sm leading-relaxed">
                                The Darmawangsa Square Lt.2 No.263-264,
                                Jalan Darmawangsa VI,
                                Kebayoran Baru, Jakarta Selatan 12160
                            </p>

                        </div>

                        {/* Jam */}
                        <div className="flex-col gap-3">

                            <i className="fa-solid fa-clock mt-1 pr-2 text-white/80"></i>

                            <span className="font-bold">Jam buka: </span>

                            <p className="text-white/70 mt-2 text-sm">
                                Senin–Jumat : 10.00 s/d 17.30
                                <br />
                                Sabtu–Minggu : By Appointment
                            </p>

                        </div>

                    </div>


                    {/* PAGE */}
                    <div>

                        <h3 className="font-semibold mb-5">
                            Page
                        </h3>

                        <ul className="space-y-3 text-white/70 text-sm">

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


                    {/* PRODUK */}
                    <div>

                        <h3 className="font-semibold mb-5">
                            Produk
                        </h3>

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


                    {/* KONTAK */}
                    <div>

                        <h3 className="font-semibold mb-5">
                            Kontak
                        </h3>

                        <div className="space-y-4">

                            {/* Phone */}
                            <div className="flex items-center gap-3 
                                bg-white/10 px-4 py-3 rounded-lg 
                                hover:bg-white/20 transition">

                                <i className="fa-solid fa-phone"></i>

                                <span className="text-sm">
                                    Telepon
                                </span>

                            </div>


                            {/* WhatsApp */}
                            <div className="flex items-center gap-3 
                                bg-white/10 px-4 py-3 rounded-lg 
                                hover:bg-white/20 transition">

                                <i className="fa-brands fa-whatsapp"></i>

                                <span className="text-sm">
                                    WhatsApp
                                </span>

                            </div>

                        </div>


                        {/* SOCIAL */}
                        <div className="flex gap-4 mt-6">

                            <div className="w-9 h-9 flex items-center justify-center 
                                bg-white/10 rounded hover:bg-white/20 cursor-pointer">

                                <i className="fa-brands fa-facebook-f"></i>

                            </div>

                            <div className="w-9 h-9 flex items-center justify-center 
                                bg-white/10 rounded hover:bg-white/20 cursor-pointer">

                                <i className="fa-brands fa-instagram"></i>

                            </div>

                            <div className="w-9 h-9 flex items-center justify-center 
                                bg-white/10 rounded hover:bg-white/20 cursor-pointer">

                                <i className="fa-brands fa-linkedin-in"></i>

                            </div>

                        </div>

                    </div>

                </div>


                {/* BADGE */}
                <div className="flex items-center gap-6 mb-8">

                    <div className="flex gap-3 p-2 bg-white/10 rounded">
                        <img width="20" src="/assets/img/logo-ojk.png" />
                        <span className="font-medium">
                            Terdaftar & diawasi OJK
                        </span>
                    </div>
                    <div className="w-[120px] h-[40px] bg-white/10 rounded" />
                </div>


                {/* COPYRIGHT */}
                <div className="flex justify-between items-center 
                    text-white/50 text-sm 
                    border-t border-white/10 
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