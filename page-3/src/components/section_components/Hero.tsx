import React from "react";
import { Navbar } from "../__global/Navbar";

let Hero: React.FC = () => {
  return (
    <section className="z-[9999] relative w-full h-[520px]">
      <div className="relative h-[620px] shadow-lg overflow-hidden" style={{
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px"
      }}>
        <img
          src="/assets/img/467d94ec24d57b6909f5a3b71d6c34242dbff12c.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black"></div>
        <div className="absolute top-0 left-0 w-full z-20 px-16 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/assets/img/logo-pui.png" className="w-[90px]" />
          </div>
          <Navbar />
          <div className="border border-gray-400 px-4 py-2 rounded-full text-sm text-white flex items-center gap-2">
            <i className="fab z-50 fa-whatsapp text-white"></i> 0822 77777 911
          </div>
        </div>
        <div className="absolute left-32 top-[220px] z-20">
          <h3 className="text-2xl text-white mb-2">Cara Kerja</h3>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Pelajari & Mulai Prosesnya
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            Ikuti langkah mudah dan dapatkan solusi finansial Anda hari ini.
          </p>
          <div className="flex gap-4">
          <button className="mt-4 flex items-center gap-3 px-3 py-3 bg-gradient-to-r from-[#12472B] to-[#0A917E] text-white text-sm rounded-lg">
            <span>Gratis Konsultasi Via WhatsApp</span>
          </button>
          </div>
        </div>
        <div className="absolute -mb-32 bottom-[5px] z-20">
          <div className="flex justify-end items-end gap-2">
            <img src="/assets/img/b9a7ba4f124bce19449bb1ac060f6ff5edbdb775.png" />
          </div>
        </div>
      </div>
    </section>
  );
};
export { Hero };