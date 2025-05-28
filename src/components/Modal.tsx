import React from "react";
import Image from "next/image";

interface ModalProps {
  image: string;
  onClose: () => void;
}

export default function Modal({ image, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative">
        <Image
          src={image}
          alt="Preview"
          width={800}
          height={600}
          className="max-w-full max-h-[90vh] rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-60 px-2 rounded"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
