import { FaWhatsapp } from "react-icons/fa";

let Consult = function () {
  return (
    <div className="w-full flex justify-center bg-white py-10">
      <div className="pui-wrap mt-10">
        <div className="hero">
          <div className="hero-deco"></div>
          <div className="hero-deco2"></div>
          <div className="hero-content relative bottom-10">
            <h1>Punya barang mewah dan ingin dilikuidasi?</h1>
            <p>Konsultasikan sekarang via WhatsApp. Terjamin anonimitas & privasi 100%.</p>
            <button className="btn-wa animate-pulse-whatsapp">
              <FaWhatsapp className="text-xl" />
              Konsultasi Valuasi Sekarang
            </button>
          </div>

          <div className="hero-img-wrap">
            <div className="hero-person-placeholder">
              <img className="-mb-44" src="/assets/img/40d826a68f7b2fe6a3460b18c5d0de6a1118d609.png" />
            </div>
          </div>
        </div>

        <div className="cards-row top-10 mb-24">
          <div className="card">
            <div className="card-icon-wrap">
              <img src="/assets/img/81829e2cbb1d51f007adb0e183c5911e296267be.png" width="24px" />
            </div>
            <h3>Bawa langsung aset mewah ke kantor PUI</h3>
            <p>Anda dapat membawa langsung aset mewah Anda ke kantor PUI <br /> untuk mendapatkan pengalaman layanan yang cepat, aman, dan <br /> transparan. Tim profesional kami akan melakukan proses valuasi <br /> secara detail dan akurat, memastikan Anda mendapatkan nilai <br /> terbaik sesuai kondisi dan pasar terkini.</p>
            <div className="card-link animate-link-arrow">
              Lihat Selengkapnya
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "18px",
                height: "18px",
                background: "#1B4332",
                borderRadius: "50%"
              }}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M2 4.5h5M4.5 2l2.5 2.5L4.5 7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>

          <div className="card ">
            <div className="card-icon-wrap">
              <img src="/assets/img/d8d020e2c5ce16700e20195204cc0d38d6ba12bb.png" width="24px" />
            </div>
            <h3>Layanan Jemput Barang</h3>
            <p>Untuk kenyamanan maksimal, PUI menyediakan layanan jemput <br /> aset langsung ke lokasi Anda. Layanan ini dirancang bagi Anda yang <br /> menginginkan proses praktis tanpa perlu datang ke kantor. <br /> Tim kami akan datang dengan prosedur keamanan ketat dan profesionalisme tinggi dalam menangani setiap aset.</p>
            <div className="card-link animate-link-arrow">
              Lihat Selengkapnya
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "18px",
                height: "18px",
                background: "#1B4332",
                borderRadius: "50%"
              }}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M2 4.5h5M4.5 2l2.5 2.5L4.5 7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Consult };