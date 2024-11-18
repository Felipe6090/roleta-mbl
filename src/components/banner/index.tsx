/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Tag from "../tag";

interface BannerProps {
  backgroundImage: string | null;
  title: string | null;
  onClick: () => void;
  tags?: any;
}

const Banner: React.FC<BannerProps> = ({
  backgroundImage,
  title,
  onClick,
  tags,
}) => {
  return (
    <div
      className="relative w-full h-40 sm:h-64 lg:h-72 flex items-end p-4 cursor-pointer rounded-lg overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onClick}
    >
      <div className="absolute top-4 left-2">
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
      <h3 className="text-white text-sm sm:text-base md:text-lg font-bold bg-black bg-opacity-60 p-2 rounded">
        {title}
      </h3>
    </div>
  );
};

export default Banner;
