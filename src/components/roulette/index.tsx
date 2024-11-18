/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Banner from "../banner";
import Modal from "../modal";
import { Prisma } from "@prisma/client";
import "./style.css";

const ContentWithTags = Prisma.validator<Prisma.ContentDefaultArgs>()({
  include: {
    tags: true,
  },
});

type ContentWithTags = Prisma.ContentGetPayload<typeof ContentWithTags>;

export default function Roulette({ slides }: { slides: ContentWithTags[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    image: "",
    description: "",
    tags: [],
  });
  const [activeIndex, setActiveIndex] = useState(0); // Índice do banner ativo

  const openModal = (
    title: string,
    image: string,
    description: string,
    tags: any
  ) => {
    setModalContent({ title, image, description, tags });
    setIsModalOpen(true);
  };

  const playSound = () => {
    const audio = new Audio("/folha.mp3"); // Caminho para o arquivo de áudio
    audio.play();
    return audio.duration;
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    dotsClass: "slick-dots",
    beforeChange: (current: number, next: number) => {
      const duration = playSound(); // Tocar som antes de mudar o slide
      setTimeout(() => setActiveIndex(next), duration);
      // setActiveIndex(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="slider-container relative w-full px-10 max-w-screen-xl mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => {
          const rotation =
            index === activeIndex
              ? "rotate-0 scale-110 z-10"
              : index === (activeIndex + 1) % slides.length
              ? "rotate-[40deg] translate-x-20 translate-y-20" // Aumenta a inclinação
              : index === (activeIndex - 1 + slides.length) % slides.length
              ? "-rotate-[40deg] -translate-x-20 translate-y-20" // Aumenta a inclinação
              : "opacity-70 translate-y-80";

          return (
            <div
              key={slide.id}
              className={`transform transition-transform duration-500 ${rotation}`}
            >
              <Banner
                backgroundImage={slide.imageUrl!}
                title={slide.title!}
                tags={slide.tags}
                onClick={() =>
                  openModal(
                    slide.title ? slide.title : "",
                    slide.imageUrl ? slide.imageUrl : "",
                    slide.description ? slide.description : "",
                    slide.tags
                  )
                }
              />
            </div>
          );
        })}
      </Slider>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        image={modalContent.image}
        description={modalContent.description}
        tags={modalContent.tags}
      />
    </div>
  );
}
