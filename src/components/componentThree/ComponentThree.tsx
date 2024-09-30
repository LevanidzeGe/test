"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./ComponentThree.module.css";
import EachService from "./EachService/EachService";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { heroMenu } from "@/public/image";
import {
  cehf,
  catering,
  contact,
  menu,
  reservation,
  story,
} from "./EachService/icons/importIcons";

export default function ComponentThree({ image }: { image: StaticImageData }) {
  const { isIntersecting, ref } = useIntersectionObserver({});

  return (
    <section className="section">
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.textWrapper}>
            <h2 ref={ref} className="heading4 gray7">
              WE ARE EXPERT IN
            </h2>
            <h3 className="heading3 ">What we love to do</h3>
          </div>
          <div className={styles.threeSectionWrapper}>
            <div
              className={`${styles.sideSection} ${
                isIntersecting ? "moveRight" : null
              }`}
            >
              <EachService icon={cehf} title="Chef's Specials" url="/" />
              <EachService icon={story} title="Our Story" url="/about" />
              <EachService icon={menu} title="Menu" url="/menu" />
            </div>
            <Image
              className={styles.image}
              src={image}
              width={800}
              height={1500}
              alt="construction guy"
            />
            <div
              className={`${styles.sideSection} ${
                isIntersecting ? "moveLeft" : null
              }`}
            >
              <EachService
                icon={reservation}
                title="Reservations"
                url="/reservation"
              />
              <EachService
                icon={catering}
                title="Catering Services"
                url="/menu"
              />
              <EachService icon={contact} title="Contact Us" url="/contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
