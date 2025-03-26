"use client";
// npm install @types/swiper
//npm i swiper
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "./AlbumSlider.module.css";

//projects array with props
// import { projects } from "../../WholeProjects/Donabygg/DoneProjects/TwoProjects/projects";
// import { ProjectDetProps } from "../../WholeProjects/Donabygg/DoneProjects/TwoProjects/projects";

interface AlbumProps {
  images: string[];
  title: string;
}
export default function AlbumSlider({ images, title }: AlbumProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="container2">
      <section>
        <div className={styles.mainWrapper}>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.someMainImageDi}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className={styles.someMainDiv2}>
                <div className={styles.mainImage}>
                  <Image
                    src={image}
                    alt={title}
                    width={1300}
                    height={1000}
                    className="block h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail */}
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={12}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.navWrapper}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <button className={styles.navImagesWrapper}>
                  <Image src={image} alt={title} width={100} height={100} />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
