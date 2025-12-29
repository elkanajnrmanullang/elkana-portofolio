import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaClock,
  FaStar,
  FaShieldAlt,
  FaServer,
  FaLock,
  FaFileContract,
  FaHandshake,
//   FaTools,
} from "react-icons/fa";

const packages = [
  {
    name: "Basic",
    price: "Rp900.000",
    target: "UMKM, Portofolio, Landing Page",
    features: [
      "1–2 Halaman (Home & Kontak)",
      "Desain Responsif (Mobile Friendly)",
      "Keamanan Dasar SSL (HTTPS)",
      "Revisi 1x",
    ],
    bonus: [
      "Domain (.COM / .ID / .CO.ID) 1 Thn",
      "Hosting Premium 1 Thn",
      "Maintenance 2 Bulan",
      "Konsultasi Gratis",
    ],
    time: "3–5 Hari",
    color: "border-blue-500",
    btnColor: "bg-blue-600 hover:bg-blue-700",
    badge: false,
  },
  {
    name: "Standard",
    price: "Rp1.750.000",
    target: "Website Bisnis, Toko Online Kecil",
    features: [
      "4–6 Halaman",
      "Integrasi WhatsApp & Form Order",
      "SEO-Ready Structure",
      "SSL Aktif & Enkripsi Data",
      "Revisi 2x",
    ],
    bonus: [
      "Domain (.COM / .ID / .CO.ID) 1 Thn",
      "Hosting Business 1 Thn",
      "Maintenance 2 Bulan",
      "Konsultasi Gratis",
    ],
    time: "7–10 Hari",
    color: "border-emerald-500",
    btnColor: "bg-emerald-600 hover:bg-emerald-700",
    badge: true, // Recommended
  },
  {
    name: "Advanced",
    price: "Rp2.900.000",
    target: "Sistem Custom, Web App, E-commerce",
    features: [
      "Dashboard Admin Panel",
      "Database & Login System",
      "Proteksi Server & Backup Harian",
      "Standar Keamanan OWASP",
      "Maintenance 1 Bulan",
    ],
    bonus: [
      "Domain (.COM / .ID / .CO.ID) 1 Thn",
      "Cloud Hosting 1 Thn",
      "Maintenance 2 Bulan",
      "Konsultasi Prioritas",
    ],
    time: "2–3 Minggu",
    color: "border-purple-600",
    btnColor: "bg-purple-600 hover:bg-purple-700",
    badge: false,
  },
];

// const addons = [
//   { title: "Integrasi Payment Gateway", price: "+Rp300.000" },
//   { title: "Domain Tambahan", price: "+Rp200.000" },
//   { title: "Maintenance Bulanan Lanjutan", price: "+Rp200.000" },
//   { title: "Fitur API, Login, Upload", price: "+Rp250rb – Rp500rb" },
// ];

export default function Pricelist() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pb-20">
      <Head>
        <title>Paket Website & Aplikasi - Elkana Juanro</title>
        <meta
          name="description"
          content="Jasa pembuatan website dan aplikasi aman, cepat, dan profesional. Paket lengkap termasuk domain, hosting, dan SSL gratis."
        />
      </Head>

      {/* Navbar Fixed */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      {/* HEADER SECTION */}
      <section className="pt-32 pb-12 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 leading-tight">
          Paket Pembuatan Website & Aplikasi <br />
          <span className="text-blue-600">Aman, Cepat, dan Profesional</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Solusi digital lengkap untuk UMKM, bisnis, maupun proyek personal.
          Setiap paket sudah termasuk{" "}
          <span className="font-semibold text-black">
            Domain, Hosting, Keamanan (SSL), dan Dukungan Teknis.
          </span>
        </p>
      </section>

      {/* PACKAGES GRID */}
      <section className="px-4 md:px-10 lg:px-20 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border-t-4 ${pkg.color} flex flex-col`}
            >
              {pkg.badge && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg shadow-sm">
                  BEST SELLER
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {pkg.name}
              </h3>
              <p className="text-sm text-gray-500 mb-6 h-10">{pkg.target}</p>

              <div className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
                {pkg.price}
              </div>

              {/* Features */}
              <div className="flex-grow">
                <p className="font-semibold text-gray-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                  Fitur Utama
                </p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 p-4 rounded-xl mb-6 border border-gray-100">
                  <p className="font-semibold text-gray-800 mb-2 text-xs uppercase tracking-wide">
                    🎁 Bonus Gratis:
                  </p>
                  <ul className="space-y-2">
                    {pkg.bonus.map((bon, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-gray-500"
                      >
                        <FaStar className="text-yellow-400" /> {bon}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 justify-center font-medium">
                  <FaClock className="text-gray-400" /> Estimasi: {pkg.time}
                </div>
                <a
                  href={`https://wa.me/6281382394412?text=Halo Elkana, saya tertarik dengan paket website ${pkg.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`block w-full text-center py-3 rounded-xl text-white font-bold transition shadow-lg ${pkg.btnColor}`}
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECURITY & QUALITY SECTION (NEW) */}
      <section className="bg-white py-16 px-6 border-y border-gray-100 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🛡️ Jaminan Keamanan & Kualitas
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Kami tidak hanya membuat website yang bagus, tetapi juga aman,
              cepat, dan handal untuk jangka panjang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 h-12 w-12 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                <FaLock size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  SSL Certificate & HTTPS
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Semua website dilengkapi enkripsi SSL untuk melindungi data
                  pengguna dan meningkatkan kepercayaan pengunjung.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-purple-100 p-3 h-12 w-12 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                <FaServer size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Server Hostinger Resmi
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Menggunakan hosting premium dengan proteksi DDoS, firewall
                  aktif, dan uptime server hingga 99.9%.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-green-100 p-3 h-12 w-12 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                <FaShieldAlt size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Standar Keamanan OWASP
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Kode dikembangkan untuk menangkal celah keamanan umum seperti
                  SQL Injection & XSS.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-orange-100 p-3 h-12 w-12 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                <FaFileContract size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Transparansi Penuh
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Klien mendapatkan akses penuh kontrol domain, hosting, dan
                  source code asli proyek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ONS SECTION */}
      {/* <section className="px-6 max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-center mb-8 flex justify-center items-center gap-2">
          <FaTools className="text-gray-400" /> Tambahan Layanan (Opsional)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {addons.map((addon, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center hover:border-blue-400 transition group"
            >
              <span className="font-medium text-gray-700 group-hover:text-gray-900">
                {addon.title}
              </span>
              <span className="font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">
                {addon.price}
              </span>
            </div>
          ))}
        </div>
      </section> */}

      {/* HOW TO ORDER & ADVANTAGES */}
      <section className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Cara Pemesanan */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                1
              </span>
              Cara Pemesanan
            </h2>
            <ol className="space-y-8 relative border-l-2 border-gray-100 ml-4">
              <li className="ml-8 relative">
                <span className="absolute -left-[41px] top-1 w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></span>
                <h4 className="font-bold text-gray-900 text-lg">Pilih Paket</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Tentukan paket yang sesuai dengan kebutuhan bisnis atau proyek
                  Anda.
                </p>
              </li>
              <li className="ml-8 relative">
                <span className="absolute -left-[41px] top-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-green-200 shadow-lg"></span>
                <h4 className="font-bold text-gray-900 text-lg">
                  Hubungi via WhatsApp
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Klik tombol pesan atau chat ke{" "}
                  <a
                    href="https://wa.me/6281382394412"
                    className="text-green-600 font-bold hover:underline"
                  >
                    0813-8239-4412
                  </a>
                  . Konsultasi gratis untuk penyesuaian fitur.
                </p>
              </li>
              <li className="ml-8 relative">
                <span className="absolute -left-[41px] top-1 w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></span>
                <h4 className="font-bold text-gray-900 text-lg">
                  Pembayaran & Invoice
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Pembayaran aman via Transfer Bank, E-Wallet, atau QRIS dengan
                  invoice resmi.
                </p>
              </li>
            </ol>
          </div>

          {/* Keunggulan Kami */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
                2
              </span>
              Keunggulan Kami
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                  <FaFileContract />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Kontrak Kerja & Progress Report
                  </h4>
                  <p className="text-sm text-gray-600">
                    Setiap proyek dilengkapi dokumen kontrak digital dan laporan
                    perkembangan berkala.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
                <div className="bg-pink-100 p-3 rounded-full text-pink-600">
                  <FaHandshake />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Revisi Fleksibel</h4>
                  <p className="text-sm text-gray-600">
                    Kami bekerja sama dengan Anda hingga hasil sesuai
                    ekspektasi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <FaWhatsapp />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    Dukungan Penuh (Full Support)
                  </h4>
                  <p className="text-sm text-gray-600">
                    Bantuan teknis penuh sampai website Anda online 100% dan
                    berjalan lancar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
