import React from "react";
import { Navbar } from "../__global/Navbar";
import { FaWhatsapp, FaCamera, FaGem, FaRegClock } from "react-icons/fa";
import ScrollProgress from "./ScrollProgress";

let Hero: React.FC = () => {
  const words = ["EMAS", "BERLIAN", "ROLEX", "TAS MEWAH"];
  const [index, setIndex] = React.useState(0);
  const [prevIndex, setPrevIndex] = React.useState(-1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="z-[9999] relative w-full h-[720px] overflow-hidden">
      <div className="relative h-[720px] rounded-b-[50px] shadow-lg overflow-hidden">
        <img src="/assets/img/hero-bg.png" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0"></div>
        <div className="fixed top-0 left-0 w-full z-[100] px-16 py-6 flex items-center justify-between backdrop-blur-md bg-black">
          <ScrollProgress />
          <div className="flex items-center gap-2 flex-1">
            <img src="/assets/img/logo-pui.png" className="w-[110px]" />
          </div>
          <div className="flex justify-center flex-1">
            <Navbar />
          </div>
          <div className="flex justify-end flex-1">
            <div className="border border-gray-400 px-4 py-2 rounded-full text-sm text-white flex items-center gap-2 animate-pulse-whatsapp hover:scale-105 transition-transform duration-300 cursor-pointer">
              <FaWhatsapp className="z-50 text-white" /> 0822 77777 911
            </div>
          </div>
        </div>
        <div className="absolute top-[120px] w-full flex justify-center z-20 gsap-reveal">
          <h1 className="text-3xl font-bold leading-snug max-w-3xl text-center text-white">
            Dapatkan Solusi Gadai
            <div className="text-switcher-container">
              {words.map((word, i) => {
                const isActive = i === index;
                const isExiting = i === prevIndex;
                if (!isActive && !isExiting) return null;
                return (
                  <span
                    key={word}
                    className={`text-switcher-item ${isActive ? "enter" : "exit"}`}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
            untuk<br /> Aset Mewah Anda Dengan PUI
          </h1>
        </div>
        <div className="absolute left-20 top-[300px] z-20 max-w-xs gsap-reveal">
          <h3 className="font-bold mb-2 text-white">
            Pergadaian Utama Indonesia
          </h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Pergadaian Utama Indonesia (PUI) adalah mitra terpercaya
            untuk solusi likuiditas aset mewah Anda, dengan layanan
            profesional, proses cepat, serta keamanan terjamin.
          </p>
          <button className="mt-4 bg-[#003D35] px-4 py-2 rounded-full text-xs text-white hover:bg-[#005D51] hover:scale-105 transition-all duration-300">
            Tentang PUI
          </button>
        </div>
        <div className="absolute right-24 top-[260px] z-20 flex flex-col gap-4 gsap-reveal">
          <div
            className="animate-floating flex items-center gap-2 bg-[#243F29] border-2 rounded-[10px] border-[#5C5E3D] px-4 py-2 text-xs shadow text-white"
            style={{ animationDelay: '0s' }}>
            <img className="w-[60px]" src="/assets/img/logo-ojk.png" />
            Terdaftar & diawasi OJK
          </div>
          <div className="-ml-20">
            <div
              className="animate-floating inline-flex mt-10 items-center gap-2 bg-[#243F29] border-2 rounded-[10px] border-[#5C5E3D] px-4 py-2 text-xs shadow text-white"
              style={{ animationDelay: '0.4s' }}>
              <img className="w-[30px]" src="/assets/img/icon-chart.png" />
              Valuasi Aset Tinggi
            </div>
          </div>
          <div
            className="animate-floating flex items-center mt-14 gap-2 bg-[#243F29] border-2 rounded-[10px] border-[#5C5E3D] px-4 py-2 text-xs shadow text-white"
            style={{ animationDelay: '0.8s' }}>
            <img className="w-[30px]" src="/assets/img/icon-clock.png" />
            Pencairan Dana Cepat
          </div>
        </div>
        <div className="absolute bottom-[110px] w-full flex justify-center z-20 gsap-reveal">
          <button className="group relative bg-[#D4AA6A] text-black px-8 py-3 rounded-md text-sm font-semibold shadow-xl flex items-center gap-2 animate-pulse-whatsapp hover:scale-105 transition-all duration-300">
            <FaWhatsapp className="relative z-10" />
            <span className="relative z-10">Kirim Foto Aset Anda</span>
            
            {/* Surprise Icons */}
            <FaCamera className="absolute -top-10 left-4 text-[#D4AA6A] text-2xl opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-6 group-hover:-translate-x-6 transition-all duration-500 ease-[0.175,0.885,0.32,1.275]" />
            <FaGem className="absolute -top-12 left-1/2 -translate-x-1/2 text-[#D4AA6A] text-2xl opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-8 transition-all duration-500 ease-[0.175,0.885,0.32,1.275] delay-75" />
            <FaRegClock className="absolute -top-10 right-4 text-[#D4AA6A] text-2xl opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-6 group-hover:translate-x-6 transition-all duration-500 ease-[0.175,0.885,0.32,1.275] delay-150" />
          </button>
        </div>
      </div>
    </section>
  );
};
export { Hero };