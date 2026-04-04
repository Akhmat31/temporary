import React from "react";

let Navbar: React.FC = function () {
  return (
    <div className="flex gap-10 text-sm text-gray-300">
      <a>Profil Perusahaan</a>
      <a>Produk</a>
      <a>Cara Kerja</a>
      <a>Artikel</a>
    </div>
  );
};

export { Navbar };