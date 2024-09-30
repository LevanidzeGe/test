"use client";
import React from "react";
import styles from "./ComponentTwo.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Link from "next/link";

export default function ComponentTwo() {
  const { isIntersecting, ref } = useIntersectionObserver({});

  return (
    <section className="section ">
      <div className="container">
        <div className={styles.TwoTextWrapper}>
          <div className={` ${styles.head}`}>
            <h4
              ref={ref}
              className={`heading6 color2 ${isIntersecting ? "moveUp1" : null}`}
            >
              Discover
            </h4>
            <h2 className={`heading2 ${isIntersecting ? "moveUp2" : null} `}>
              NEW FLAVORS
            </h2>
            <p
              className={` twoLines ${isIntersecting ? "moveUp3" : null} `}
            ></p>
          </div>
          <div className={`paragraph gray7  ${styles.textWrap}`}>
            <div className={` ${isIntersecting ? "moveRight" : null}`}>
              <p>
                Fish is one of the most wholesome foods that man can eat. In
                fact, people have been eating fish throughout human history.
                These days, many cooks yearn to add fish to their repertoire,
                but the whole process of cleaning and
              </p>
            </div>
            <div className={` ${isIntersecting ? "moveLeft" : null}`}>
              <p>
                Filleting fresh fish is a little scary to them. The process of
                cleaning and filleting fresh fish is relatively simple once the
                steps are understood. To begin, you must clean your fresh fish
                properly in order to maintain it’s quality.
              </p>
            </div>
          </div>
          <Link
            href="/about"
            className={` button ${isIntersecting ? "moveUp4" : null} `}
          >
            More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
