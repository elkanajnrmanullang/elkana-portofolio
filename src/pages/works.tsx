// src/pages/Works.tsx
import React, { useState } from "react";
import { FaSearchPlus, FaLink } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";
import Image from "next/image";

interface Project {
  title: string;
  category: "Web" | "System" | "Design" | "Other";
  image: string;
  link: string;
}

const allProjects: Project[] = [
  {
    title: "The Celestern Times",
    category: "Web",
    image: "/assets/images/background-home.jpg",
    link: "https://github.com/elkanajnr/celestern-project",
  },
  {
    title: "Sistem Rental Kendaraan",
    category: "System",
    image: "/assets/images/background-home.jpg",
    link: "https://github.com/elkanajnr/rental-system",
  },
  {
    title: "Web Profile Celestara Eterna",
    category: "Web",
    image: "/assets/images/background-home.jpg",
    link: "https://github.com/elkanajnr/celestara-web",
  },
  {
    title: "Sistem Kasir UMKM",
    category: "System",
    image: "/assets/images/background-home.jpg",
    link: "https://github.com/elkanajnr/kasir-system",
  },
];

const categories = ["All", "Web", "System", "Design", "Other"];

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalImage, setModalImage] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-black">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden border shadow-md"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500} 
                height={300}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
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
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full hover:bg-neutral-400 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300"
                  >
                    <FaLink className="text-black" />
                  </a>
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
