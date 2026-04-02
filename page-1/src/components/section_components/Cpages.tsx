import React from "react";

let Cpages: React.FC = function () {
  return (
    <>
      <div className="-z-50 -mt-14 mb-20">
        <section className="px-16 py-32 bg-transparent">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold text-[#C49A6C] leading-snug max-w-md">
              Mitra terpercaya untuk <br />
              likuiditas aset mewah Anda.
            </h2>

            <p className="text-gray-300 text-sm max-w-md leading-relaxed">
              Sebagai mitra terpercaya, kami menjamin keamanan <br />
              tinggi dan penanganan aset dengan integritas untuk <br />
              hasil optimal.
            </p>
          </div>

          <div className="flex justify-center gap-20 mt-16">
            <div className="flex justify-center items-center gap-4 w-1/3">
              <div>
                <img src="/assets/img/icon-privacy.png" width="60" />
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">Privasi 100%</h3>
                <p className="text-xs text-gray-300">
                  Identitas dan seluruh informasi klien dijaga <br />
                  sepenuhnya dengan sistem keamanan <br />
                  berlapis.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 w-1/3">
              <div>
                <img src="/assets/img/icon-document.png" width="60" />
              </div>

              <div>
                <h3 className="font-bold text-sm mb-1">
                  Proses Transparan & Terverifikasi
                </h3>
                <p className="text-xs text-gray-300">
                  Identitas dan seluruh informasi klien dijaga <br />
                  sepenuhnya dengan sistem keamanan <br />
                  berlapis.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 w-1/3">
              <div>
                <img src="/assets/img/icon-shield.png" width="60" />
              </div>

              <div>
                <h3 className="font-bold text-sm mb-1">
                  Perlindungan Aset Maksimal
                </h3>
                <p className="text-xs text-gray-300">
                  Aset Anda disimpan dalam <br />
                  standar keamanan tinggi untuk memastikan <br />
                  kondisi tetap aman.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export {Cpages};