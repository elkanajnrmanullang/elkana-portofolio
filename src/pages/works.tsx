// src/pages/works.tsx
import React, { useState } from "react";
import { FaSearchPlus, FaLink } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";
import Image from "next/image";

interface Project {
  title: string;
  category: "Web" | "System" | "Design" | "Other";
  mediaType: "image" | "video";
  image: string;
  link: string;
  status: "Done" | "On Progress";
  privateRepo?: boolean;
}

const allProjects: Project[] = [
  {
    title: "The Celestern Times",
    category: "Web",
    mediaType: "image",
    image: "/assets/images/tct.png",
    link: "#",
    status: "On Progress",
    privateRepo: true,
  },
  {
    title: "Web Profile Personal Portfolio",
    category: "Web",
    mediaType: "video",
    image: "/assets/videos/web-profile.mp4",
    link: "https://github.com/elkanajnrmanullang/elkana-portofolio",
    status: "Done",
  },
  {
    title: "Game Hand Sign - Edukasi Tunanetra SLBPKK",
    category: "Other",
    mediaType: "image",
    image: "/assets/images/hand-sign.png",
    link: "#",
    status: "Done",
    privateRepo: true,
  },
  {
    title: "Web Informasi Wisata Bandung",
    category: "Web",
    mediaType: "video",
    image: "/assets/videos/web-bandung.mp4",
    link: "https://github.com/elkanajnrmanullang/web-wisata-bandung", // ganti sesuai URL jika ada
    status: "Done",
  },
  {
    title: "Elkanajnr Portfolio v1 (Legacy)",
    category: "Web",
    mediaType: "image",
    image: "/assets/images/web-profile-old.png",
    link: "https://elkanajnrmanullang.github.io/portofolio-elkanajnr/",
    status: "Done",
  },
  {
    title: "Desain UI/UX - Aplikasi SEGAR",
    category: "Design",
    mediaType: "image",
    image: "/assets/images/segar.png",
    link: "#",
    status: "Done",
    privateRepo: true,
  },
  {
    title: "Game Balap Kelereng - Tugas PBO",
    category: "Other",
    mediaType: "image",
    image: "/assets/images/balap-kelereng.png",
    link: "https://github.com/elkanajnrmanullang/Tubes-PBO-Balap-Kelereng",
    status: "Done",
  },
];

const categories = ["All", "Web", "System", "Design", "Other"];

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalImage, setModalImage] = useState<string | null>(null);

  const filteredProjects = (
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory)
  ).sort((a, b) => {
    if (a.status === "On Progress" && b.status === "Done") return -1;
    if (a.status === "Done" && b.status === "On Progress") return 1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-white text-black pb-20">
      <Navbar />
      <div className="text-center pt-20">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <div className="flex justify-center space-x-6 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-semibold hover:text-neutral-400 transition ${
                selectedCategory === cat ? "underline" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20 ">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden border shadow-md flex justify-center items-center"
            >
              {project.status === "On Progress" && (
                <span className="absolute top-2 left-2 px-3 py-1 text-xs font-semibold rounded-full z-10 bg-[#e5e5e5] text-black">
                  {project.status}
                </span>
              )}

              {project.mediaType === "image" ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-[300px] object-contain transition-transform duration-500 group-hover:scale-105 bg-white"
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[300px] object-contain transition-transform duration-500 group-hover:scale-105 bg-white"
                >
                  <source src={project.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center px-4">
                <p className="text-white text-lg font-semibold mb-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {project.title}
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setModalImage(project.image)}
                    className="bg-white p-3 rounded-full hover:bg-neutral-400 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200"
                  >
                    <FaSearchPlus className="text-black" />
                  </button>
                  {project.privateRepo ? (
                    <span className="text-xs text-neutral-300 italic translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                      Private Repository
                    </span>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full hover:bg-neutral-400 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300"
                    >
                      <FaLink className="text-black" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <Modal image={modalImage} onClose={() => setModalImage(null)} />
      )}
    </div>
  );
}
