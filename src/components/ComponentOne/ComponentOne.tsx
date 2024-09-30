"use client";
import React from "react";
import styles from "./ComponentOne.module.css";
import Image, { StaticImageData } from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface ComponentOne {
  image: StaticImageData;
  reverse?: boolean;
}

export default function ComponentOne({ image, reverse }: ComponentOne) {
  const { isIntersecting, ref } = useIntersectionObserver({});

  return (
    <section className="section section-medium">
      <div className="container">
        <div ref={ref}></div>
        <div
          className={` ${reverse ? styles.reverse : ""}  ${
            styles.photoTextWrapper
          }`}
        >
          <Image
            src={image}
            height={1500}
            width={1000}
            alt="ss"
            className={isIntersecting && !reverse ? "moveRight" : "moveLeft"}
          />
          <div
            className={`${
              isIntersecting && !reverse ? "moveLeft" : "moveRight"
            } ${styles.textDiv}`}
          >
            <h2 className="color2 heading6">Leader's Word</h2>
            <h2 className="heading3 ">Made for future</h2>
            <p className="twoLines"></p>
            <h3 className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cum
              beatae, sapiente dolorem veniam doloribus eum harum rerum nemo
              pariatur numquam repellat dicta non architecto voluptas quasi
              molestiae! Commodi, molestiae?
            </h3>
            <h4 className=" color2 heading6">Levani Levanidze</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
