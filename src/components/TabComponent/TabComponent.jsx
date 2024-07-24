"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./swiper.module.css";
import "swiper/css";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";
export const TabComponent = ({ tabs, fullWidthImg }) => {
  const tabCategories = tabs.map((tab, index) => tab.title);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  function handleSelect(index) {
    setSelectedTab(tabs[index]);
  }
  return (
    <>
      <div className=" hidden tb:flex">
        <div className="text-[var(--accent)] text-2xl font-medium flex flex-col items-start max-w-[400px] *:!text-start *:p-6">
          {tabCategories.map((tab, index) => {
            return (
              <button
                className={`${
                  selectedTab.title === tab ? "bg-black" : ""
                } w-full`}
                onClick={() => handleSelect(index)}
                key={index}
              >
                {tab}
              </button>
            );
          })}
        </div>
        <aside
          className={`bg-black check-list  max-w-[1000px] w-full text-white ${
            fullWidthImg ? "" : "p-10"
          }`}
        >
          <div className={`${fullWidthImg ? "p-10" : ""}`}>
            <p
              className={`max-w-[800px] ${
                selectedTab.descriptionStyle && selectedTab.descriptionStyle
              }`}
            >
              {selectedTab.description && selectedTab.description}
            </p>
            {selectedTab.boldedText?.map((desc, index) => {
              return (
                <p key={index} className="mb-4 font-bold">
                  {desc}
                </p>
              );
            })}

            {selectedTab.bigDescription?.map((desc, index) => {
              return (
                <p key={index} className="mb-4">
                  {desc}
                </p>
              );
            })}
            <ul className="  ">
              {selectedTab.listItems?.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <Image
            className={`${fullWidthImg ? "w-full" : "ml-auto mt-4"}`}
            src={selectedTab.imgUrl}
            alt={selectedTab.title}
            width={400}
            height={200}
          />
        </aside>
      </div>
      <div>
        <Swiper
        autoHeight={true}
          pagination={{
            clickable: true,
            bulletClass: "tabBullet",
          }}
          modules={[Pagination]}
          className={styles.mySwiper}
        >
          {tabs.map((tab, index) => {
            return (
              <SwiperSlide
                clickable={true}
                key={index}
                className={`${styles.swiperTab} check-list`}
              >
                <h3 className="text-[var(--accent)] text-3xl my-6 text-center md:text-5xl px-4">
                  {tab.title}
                </h3>
                <Image
                  className="mb-auto"
                  src={tab.imgUrl}
                  alt={tab.title}
                  width={600}
                  height={200}
                />
                <div className="p-10 text-white">
                  <p
                    className={`max-w-[800px] ${
                      tab.descriptionStyle &&
                      tab.descriptionStyle
                    }`}
                  >
                    {tab.description && tab.description}
                  </p>
                  {tab.boldedText?.map((desc, index) => {
                    return (
                      <p key={index} className="mb-4 font-bold">
                        {desc}
                      </p>
                    );
                  })}

                  {tab.bigDescription?.map((desc, index) => {
                    return (
                      <p key={index} className="mb-4">
                        {desc}
                      </p>
                    );
                  })}
                  <ul className="  ">
                    {tab.listItems?.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
