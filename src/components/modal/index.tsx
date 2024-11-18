/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import Tag from "../tag";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string | null;
  image: string | null;
  description: string | null;
  tags: any;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  image,
  description,
  tags,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg w-full max-w-lg sm:max-w-lg md:max-w-2xl p-4 sm:p-6 md:p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-600 hover:text-gray-900"
        >
          X
        </button>

        <div className="absolute">
          {tags?.map((tag: any, i: number) => {
            return (
              <Tag
                key={i}
                title={tag?.Tag?.title || "Sem título"} // Verifique se 'title' existe
                backgroundColor={tag?.Tag?.backgroundColor || "transparent"} // Defina um valor padrão para background_color
                textColor={tag?.Tag?.textColor || "white"} // Defina um valor padrão para textColor
              />
            );
          })}
          {/* Exemplo de uso do Tag */}
        </div>

        <img
          src={image ? image : ""}
          alt={title ? title : ""}
          className="w-full object-cover rounded-lg"
        />
        <h2 className="text-lg md:text-xl font-bold mt-4 text-gray-700">
          {title}
        </h2>
        <p className="mt-2 text-sm md:text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Modal;
