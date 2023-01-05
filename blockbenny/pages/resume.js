import React from "react";
import AppContext from "../helper";
import AliceCarousel from "react-alice-carousel";
import { FcPrevious, FcNext } from "react-icons/fc";
import { useState, useEffect } from "react";
import parse from "html-react-parser";

export default function Resume() {
  const { language, setLanguage } = React.useContext(AppContext);

  const responsive = {
    1900: {
      items: 3,
      itemsFit: "contain",
    },
    1000: {
      items: 3,
      itemsFit: "contain",
    },
    0: {
      items: 3,
      itemsFit: "contain",
    },
  };

  return (
    <>
      <section id="resume" className="min-h-screen flex">
        <AliceCarousel
          responsive={responsive}
          duration={400}
          startIndex={0}
          autoWidth={true}
          autoHeight={true}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          renderPrevButton={() => {
            return <FcPrevious className="hidden lg:flex cursor-pointer w-20 h-20 p-4 absolute lg:top-1/3 left-1/4 fullHd:top-2/4"></FcPrevious>;
          }}
          renderNextButton={() => {
            return <FcNext className="hidden lg:flex cursor-pointer w-20 h-20 p-4 absolute right-1/4 lg:top-1/3 fullHd:top-2/4"></FcNext>;
          }}
          className="m-auto"
        >
          {language.resumes.map((card, index) => (
            <div key={index} className="w-auto h-full flex items-center justify-center p-10">
              <div className="z-30 4k:resumeCard lg:resumeCardFullHD fullHd:mt-48 rounded-3xl overflow-hidden bg-gradient-to-br from-cardTL  to-cardBR shadow-3xl">
                <div className="grid grid-cols-6 4k:gap-2 4k:p-5">
                  <div className="4k:text-3xl fullHd:text-xl font-playB font-bold text-center p-10 4k:p-10 lg:py-10 fullHd:py-10 fullHd:px-10 rounded-lg col-span-6 flex flex-col justify-center items-center">
                    <p className="align-middle">{card.topic}</p>
                  </div>
                  <div className="fullHd:text-md h-1 col-span-2 font-bold pl-5 4k:p-10 fullHd:py-5 lg:px-10 rounded-lg flex flex-col justify-center ">{card.firstTitle}</div>
                  <div className="fullHd:text-sm h-1 col-span-4 font-playB pr-5 font-bold pb-10  4k:p-10 fullHd:py-5 lg:px-10 rounded-lg flex flex-col justify-center">{card.firstValue}</div>
                  <div className="fullHd:text-md h-1  col-span-2  font-bold pl-5 pt-10  4k:p-10 lg:pt-10 fullHd:py-10 lg:px-10  rounded-lg flex flex-col justify-center ">{card.secondTitle}</div>
                  <div className="fullHd:text-sm h-1 col-span-4 font-playB pr-5 pt-10 font-bold  4k:p-10 lg:pt-10 fullHd:py-10 lg:px-10  rounded-lg flex flex-col justify-center ">
                    <p className="align-middle">{card.secondValue}</p>
                  </div>
                  <div className="4k:text-lg fullHd:text-sm  4k:font-bold p-10 rounded-lg col-span-6 row-span-2 flex flex-col justify-center">{parse(card.description)}</div>
                </div>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </section>
    </>
  );
}
