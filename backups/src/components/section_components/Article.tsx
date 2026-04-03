let Article = function () {
  return (
    <section className="bg-white" style={{ width: "100%", margin: "0 auto", padding: "64px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "32px" }}>
        <div>
          <h2 className="font-extrabold" style={{ fontSize: "28px", color: "#4D4D4D", margin: "0 0 8px 0", lineHeight: 1.2 }}>Artikel</h2>
          <p className="font-bold mb-4" style={{ fontSize: "24px", color: "#4D4D4D", margin: 0, lineHeight: 1.6 }}>
            Eksplorasi insight eksklusif seputar pengelolaan aset bernilai<br />
            tinggi, strategi likuidasi, dan tren finansial terkini.
          </p>
        </div>
        <a href="#" className="lihat-selengkapnya font-bold" style={{ marginTop: "6px" }}>
          Lihat Selengkapnya
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "70px" }}>
        <div style={{ background: "#fff", borderRadius: "14px", overflow: "hidden" }}>
          <div>
            <img style={{ borderRadius: "20px" }} className="shadow-lg" src="/assets/img/2f8ce0a75950052231c9315f9bd2b8d6594d1dba.png" />
          </div>
          <div style={{ padding: "14px 16px 16px" }}>
            <div className="date-badge">
              <i className="fa-solid fa-clock -mt-0.5"></i>
              27 Mei 2025
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#111", margin: "0 0 6px 0", lineHeight: 1.4 }}>
              Panduan Dokumentasi Likuidasi Emas
            </h3>
            <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: 1.55 }}>
              Panduan lengkap dokumentasi likuidasi emas untuk menjamin proses yang tepat dan terdokumentasi.
            </p>
            <a href="#" className="read-more text-[#008774]">
              Read More
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: "14px", overflow: "hidden"}}>
          <div>
            <img style={{ borderRadius: "20px" }} className="shadow-lg" src="/assets/img/92c8aa6998c62eabe96f963a303ca3c56ec79355.png" />
          </div>
          <div style={{ padding: "14px 16px 16px" }}>
            <div className="date-badge">
              <i className="fa-solid fa-clock -mt-0.5"></i>
              27 Mei 2025
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#111", margin: "0 0 6px 0", lineHeight: 1.4 }}>
              Mengoptimalkan Nilai Jam Tangan
            </h3>
            <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: 1.55 }}>
              Mengoptimalkan nilai jam tangan mewah. Kapan dan Ke mana Penjual Rolex, Patek Philippe, dan lain-lain.
            </p>
            <a href="#" className="read-more">
              Read More
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: "14px", overflow: "hidden"}}>
          <div>
            <img style={{ borderRadius: "20px" }} className="shadow-lg" src="/assets/img/af9e52cfbb6f272cdf8e1f93d9f47e5a0db6fe8e.png" />
          </div>
          <div style={{ padding: "14px 16px 16px" }}>
            <div className="date-badge">
              <i className="fa-solid fa-clock -mt-0.5"></i>
              10 Mei 2021
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#111", margin: "0 0 6px 0", lineHeight: 1.4 }}>
              Aset Premium untuk Dilikuidasi
            </h3>
            <p style={{ fontSize: "12px", color: "#666", margin: 0, lineHeight: 1.55 }}>
              Jam tangan, tas branded, koleksi wine dan lain-lain adalah aset bernilai. Ketahui kapan harga terbaiknya agar saat dilikuidasi kamu akan mendapatkan nilai terbaik.
            </p>
            <a href="#" className="read-more">
              Read More
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
export {Article}