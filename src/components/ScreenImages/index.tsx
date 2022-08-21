import React, { FC, useState } from "react";
import { getImage, ImageDataLike } from 'gatsby-plugin-image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScreenSlide  from "./ScreenSlide";

interface ImagesItems {
    description: string;
    gatsbyImage: ImageDataLike;
}

interface ScreenImagesProps {
    screenImages: ImagesItems[];
    slug: string;
}

export const ScreenImages: FC<ScreenImagesProps> = ({ screenImages, slug }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="py-24 bg-neutral-200 dark:bg-neutral-800">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-col w-full justify-center items-center overflow-hidden">
            <div className="text-3xl text-red-500 font-semibold mb-7 text-center">Some Screens Of The Project</div>
            <Slider
              adaptiveHeight
              centerMode
              centerPadding="0px"
              autoplay
              infinite
              autoplaySpeed={5000}
              swipe
              className="flex justify-center w-full"
              beforeChange={(index) => setSelectedIndex(index)}
            >
              {screenImages.map((screenShot, index) => {
                const pathToImage = getImage(screenShot.gatsbyImage);
                const imageClassName = slug === "project-01" ? "screen-slide__mobile-horizontal" : slug === "eva-gyroscope" ? "screen-slide__mobile-vertical" : "screen-slide__desktop";

                return (
                    <ScreenSlide
                        key={index}
                        index={index}
                        slug={slug}
                        imageClassName={imageClassName}
                        image={pathToImage!}
                        description={screenShot.description}
                    />
                )
              })}
            </Slider>
          </div>
        </div>
        <div className="flex justify-center space-x-1 lg:mt-0 mt-5">
          {screenImages.map((_, index) => {
            return (
              <span
                key={index}
                className={`border border-black dark:border-white rounded-full w-2 h-2 ${selectedIndex === index ? "bg-black dark:bg-white" : ""}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
