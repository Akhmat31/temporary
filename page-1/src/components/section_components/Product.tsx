let Product = function () {
    const products = [
        {
            title: "Jam Tangan Mewah",
            desc: "PUI menyediakan layanan gadai jaminan mewah dari merek ternama seperti Rolex, Patek Philippe, Audemars Piguet, Omega, dan brand prestisius lainnya.",
            image: "/assets/img/a45fc430aa97c22576e74a861673646bbf66ce9e.png",
        },
        {
            title: "Logam mulia",
            desc: "PUI menghadirkan layanan gadai terpercaya untuk logam mulia seperti emas batangan dari UBS, Galeri 24, serta produk emas bersertifikat lainnya.",
            image: "/assets/img/414cd3630fa9cc6d8251ccb1128f151649ca43e9.png",
        },
        {
            title: "Perhiasan dan batu mulia",
            desc: "PUI menyediakan layanan gadai berbagai jenis perhiasan seperti Tiffany & Co., Cartier, Harry Winston, Bulgari, dan Graff.",
            image: "/assets/img/b66aced856067bdae66be6141bebc57002ffb69a.png",
        },
        {
            title: "Perhiasan Mewah",
            desc: "PUI menghadirkan layanan gadai perhiasan mewah dari merek ternama seperti Cartier, Tiffany & Co., Bulgari, Van Cleef & Arpels, dan lainnya.",
            image: "/assets/img/c0c7e308852f4d42b44a67e0409997954100aea7.png",
        },
        {
            title: "Kendaraan Premium",
            desc: "PUI menghadirkan layanan gadai kendaraan premium seperti Ferrari, Lamborghini, Rolls-Royce, Bentley, Porsche, dan Mercedes-Benz.",
            image: "/assets/img/7c58ab2f499ac33473f3ebb7e780a42adc2b46d3.png",
            image_1: "/assets/img/275d928d0acce97c08200ee8a8246b06a9062207.png"
        },
        {
            title: "Rare Collectibles",
            desc: "PUI menghadirkan layanan gadai koleksi langka seperti kartu koleksi, NFT, dan barang unik lainnya bernilai tinggi.",
            image: "/assets/img/53ced318beb9e9e4041c1594080cf2521fa77f15.png",
            variant: "rare"
        },
    ];
    return (
        <section className="bg-gradient-to-b from-[#052e2b] via-[#063d36] to-[#052e2b] text-white py-20">
            <div className="max-w-5xl mx-auto px-6">
                <p className="text-2xl text-[#9CA3AF] mb-2 italic text-center">Our Product</p>
                <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#C49A6C] mb-3">
                    Layanan Likuiditas Aset Mewah
                </h2>
                <p className="text-center text-gray-300 mb-40">
                    Pergadaian Utama Indonesia (PUI) menyediakan layanan gadai komprehensif
                    untuk berbagai aset mewah, mulai <br /> dari jam tangan premium, tas branded,
                    berlian, hingga emas dan perhiasan eksklusif.
                </p>
                <div className="grid md:grid-cols-3 gap-16">
                    {products.map((item, i) => (
                        <div
                            key={i}
                            className={`product-card mb-16 ${item.variant === "rare" ? "product-card-rare" : ""
                                }`}
                        >
                            <div className="bg-[#0000002d] border-t-[#0000002d] rounded-xl w-full h-44 flex items-center justify-center mb-5" style={{
                                borderBottomLeftRadius: "0px",
                                borderBottomRightRadius: "0px"
                            }}>
                                <div className="image-wrapper">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`product-image ${item.image_1 ? "main" : "single"}`}
                                    />
                                    {item.image_1 && (
                                        <img
                                            src={item.image_1}
                                            alt={item.title}
                                            className="product-image second"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="p-2">
                                <h3 className="text-lg font-semibold mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-300 mb-6 ">
                                    {item.desc}
                                </p>
                                <button className="mt-auto text-sm border-2 border-[#5C5E3D] mb-4 font-bold text-[#C49A6C] px-4 py-2 rounded-[15px] bg-[#C49A6C30]">
                                    Pelajari Selengkapnya
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export {Product};