import React from "react";
import { Navbar } from "../__global/Navbar";

let Hero: React.FC = () => {
  return (
    <section className="z-[9999] relative w-full h-[720px] overflow-hidden">
      <div className="relative h-[720px] rounded-b-[50px] shadow-lg overflow-hidden">
        <img src="/assets/img/hero-bg.png" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0"></div>
        <div className="absolute top-0 left-0 w-full z-20 px-16 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/assets/img/logo-pui.png" className="w-[90px]" />
          </div>
          <Navbar />
          <div className="border border-gray-400 px-4 py-2 rounded-full text-sm text-white flex items-center gap-2">
            <i className="fab z-50 fa-whatsapp text-white"></i> 0822 77777 911
          </div>
        </div>
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 text-center z-20">
          <h1 className="text-3xl font-bold leading-snug max-w-3xl text-white">
            Dapatkan Solusi
            <span className="text-[#B8945F]"> Gadai Terpercaya </span>
            untuk<br/> Aset Mewah Anda Dengan PUI
          </h1>
        </div>
        <div className="absolute left-20 top-[300px] z-20 max-w-xs">
          <h3 className="font-bold mb-2 text-white">
            Pergadaian Utama Indonesia
          </h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Pergadaian Utama Indonesia (PUI) adalah mitra terpercaya
            untuk solusi likuiditas aset mewah Anda, dengan layanan
            profesional, proses cepat, serta keamanan terjamin.
          </p>
          <button className="mt-4 bg-[#003D35] px-4 py-2 rounded-full text-xs text-white">
            Tentang PUI
          </button>
        </div>
        <div className="absolute right-24 top-[260px] z-20 flex flex-col gap-4">
          <div
            className="flex items-center gap-2 bg-[#243F29] border-2 rounded-[10px] border-[#5C5E3D] px-4 py-2 text-xs shadow text-white">
            <img className="w-[60px]" src="/assets/img/logo-ojk.png" />
            Terdaftar & diawasi OJK
          </div>
          <div className="-ml-20">
            <div
              className="inline-flex mt-10 items-center gap-2 bg-[#243F29] border-2 rounded-[10px] border-[#5C5E3D] px-4 py-2 text-xs shadow text-white">
              <img className="w-[30px]" src="/assets/img/icon-chart.png" />
              Valuasi Aset Tinggi
            </div>
          </div>
          <div
            className="flex items-center mt-14 gap-2 bg-[#243F29] border-2 rounded-[10px] border-[#5C5E3D] px-4 py-2 text-xs shadow text-white">
            <img className="w-[30px]" src="/assets/img/icon-clock.png" />
            Pencairan Dana Cepat
          </div>
        </div>
        <div className="absolute -mb-10 bottom-[110px] left-1/2 -translate-x-1/2 z-20">
          <button className="bg-[#D4AA6A] text-black px-8 py-3 rounded-md text-sm font-semibold shadow-xl flex items-center gap-2">
            <i className="fab fa-whatsapp"></i>
            Kirim Foto Aset Anda
          </button>
        </div>
      </div>
    </section>
  );
};
export {Hero};