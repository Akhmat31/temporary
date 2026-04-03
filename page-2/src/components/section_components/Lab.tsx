let Lab = function () {
    return (
        <section className="mx-auto flex justify-center">
        <section className="bg-[#004C41] rounded-3xl p-10 flex gap-10 items-center w-[1300px]">
            <div className="text-white w-1/2">
                <h2 className="text-3xl font-semibold mb-4">Laboratorium Gemologi</h2>
                <p className="text-base text-green-100 mb-8 leading-relaxed">
                    Didukung teknologi modern dan tenaga ahli, kami menghadirkan analisis <br /> batu mulia dengan presisi tinggi untuk menjamin nilai terbaik setiap aset Anda.
                </p>

                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#007060] p-4 rounded-lg">
                        <div className="mb-2 text-lg">
                            <div className="p-2 bg-[#0A917E] w-[30px] rounded-lg">
                                <img src="/assets/img/40de27d51bd2640550df1c7800c351a2cb1bd7d4.png" width="20" />
                            </div>
                        </div>
                        <h4 className="text-sm font-semibold">Analisis Akurat</h4>
                        <p className="text-xs text-green-200 mt-1">
                            Pengujian batu mulia dengan hasil presisi tinggi
                        </p>
                    </div>

                    <div className="bg-[#007060] p-4 rounded-lg">
                        <div className="mb-2 text-lg">
                            <div className="p-1 bg-[#0A917E] w-[30px] rounded-lg">
                                <img src="/assets/img/dad167a7449a1e449b4429bc1e36bb2c8a1fb3ee.png" width="30" />
                            </div>
                        </div>
                        <h4 className="text-sm font-semibold">Teknologi Modern</h4>
                        <p className="text-xs text-green-200 mt-1">
                            Menggunakan alat gemologi terkini untuk pemeriksaan detail
                        </p>
                    </div>

                    <div className="bg-[#007060] p-4 rounded-lg">
                        <div className="mb-2 text-lg">
                            <div className="p-1 bg-[#0A917E] w-[30px] rounded-lg">
                                <img src="/assets/img/88087a44b153b2ad9db0fcd2ad840bcc49ac4086.png" width="30" />
                            </div>
                        </div>
                        <h4 className="text-sm font-semibold">Tenaga Ahli Profesional</h4>
                        <p className="text-xs text-green-200 mt-1">
                            Ditangani oleh gemologist berpengalaman dan bersertifikasi
                        </p>
                    </div>

                    <div className="bg-[#007060] p-4 rounded-lg">
                        <div className="mb-2 text-lg">
                            <div className="p-1 bg-[#0A917E] w-[30px] rounded-lg">
                                <img src="/assets/img/ece8eae23236fccd3968c71d14edfa7c96f96f40.png" width="30" />
                            </div>
                        </div>
                        <h4 className="text-sm font-semibold">Validasi Keaslian</h4>
                        <p className="text-xs text-green-200 mt-1">
                            Menjamin identifikasi asli atau sintetis secara terpercaya
                        </p>
                    </div>

                    <div className="bg-[#007060] p-4 rounded-lg">
                        <div className="mb-2 text-lg">
                            <div className="p-1 bg-[#0A917E] w-[30px] rounded-lg">
                                <img src="/assets/img/cab56b7c4bd15aa742130323794c78ae6265ce4c.png" width="30" />
                            </div>
                        </div>
                        <h4 className="text-sm font-semibold">Penilaian Nilai Optimal</h4>
                        <p className="text-xs text-green-200 mt-1">
                            Menentukan kualitas dan nilai batu mulia secara kompetitif
                        </p>
                    </div>

                    <div className="bg-[#007060] p-4 rounded-lg">
                        <div className="mb-2 text-lg">
                            <div className="p-1 bg-[#0A917E] w-[30px] rounded-lg">
                                <img src="/assets/img/83a7d07a6800a4b851117dc6256ae453aecdc06a.png" width="30" />
                            </div>
                        </div>
                        <h4 className="text-sm font-semibold">Standar Keamanan Tinggi</h4>
                        <p className="text-xs text-green-200 mt-1">
                            Proses pengujian aman dengan menjaga aset tetap terlindungi
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-1/2">
                <img
                    src="/assets/img/3f48b06a2025d9ddfb384280d6667a2d6c048b3f.jpg"
                    className="rounded-3xl w-full h-[550px] object-cover"
                    alt="Gemologi"
                />
            </div>
        </section>
        </section>
    )
}
export { Lab }