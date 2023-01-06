import React from "react";
import AppContext from "../helper";
import AliceCarousel from "react-alice-carousel";
import { FcPrevious, FcNext } from "react-icons/fc";
import { useState, useEffect } from "react";
import parse from "html-react-parser";

function InnerCardComponent(index) {
  const { language, setLanguage } = React.useContext(AppContext);

  if (index.index < language.resumes.length) {
    return (
      <div className="w-auto h-full flex items-center justify-center p-10">
        <div className="z-30 4k:resumeCard lg:resumeCardFullHD fullHd:mt-48 rounded-3xl overflow-hidden bg-gradient-to-br from-cardTL  to-cardBR shadow-3xl">
          <div className="grid grid-cols-6 4k:gap-2 4k:p-5">
            <div className="4k:text-3xl lg:text-xl fullHd:text-xl font-playB font-bold text-center p-10 4k:p-10 lg:py-10 fullHd:py-10 fullHd:px-10 rounded-lg col-span-6 flex flex-col justify-center items-center">
              <p className="align-middle">
                {language.resumes[index.index].topic}
              </p>
            </div>
            <div className="text-sm 4k:text-lg lg:text-xs h-1 col-span-2 font-bold pl-5 4k:p-10 fullHd:py-5 lg:px-10 rounded-lg flex flex-col justify-center ">
              {language.resumes[index.index].firstTitle}
            </div>
            <div className="fullHd:text-sm 4k:text-lg lg:text-xs h-1 col-span-4 font-playB pr-5 font-bold pb-10  4k:p-10 fullHd:py-5 lg:px-10 rounded-lg flex flex-col justify-center">
              {language.resumes[index.index].firstValue}
            </div>
            <div className="text-sm 4k:text-lg lg:text-xs h-1  col-span-2  font-bold pl-5 pt-10  4k:p-10 lg:pt-10 fullHd:py-10 lg:px-10  rounded-lg flex flex-col justify-center ">
              {language.resumes[index.index].secondTitle}
            </div>
            <div className="fullHd:text-sm lg:text-xs 4k:text-lg h-1 col-span-4 font-playB pr-5 pt-10 font-bold  4k:p-10 lg:pt-10 fullHd:py-10 lg:px-10  rounded-lg flex flex-col justify-center ">
              <p className="align-middle">
                {language.resumes[index.index].secondValue}
              </p>
            </div>
            <div className="text:xs 4k:text-xl fullHd:text-sm  4k:font-bold p-10 rounded-lg col-span-6 row-span-2 flex flex-col justify-center">
              {parse(language.resumes[index.index].description)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default function Resume() {
  const { language, setLanguage } = React.useContext(AppContext);
  const [width, setWidth] = React.useState(0);
  const [items, setItems] = React.useState([]);

  const breakPoint = 1450;

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 1000) {
        generateItems(2);
      } else {
        generateItems(1);
      }
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    if (window.innerWidth > 1000) {
      generateItems(2);
    } else {
      generateItems(1);
    }

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  function generateItems(count) {
    var tempItems = [];
    if (count === 1) {
      language.resumes.map((card, index) => {
        tempItems.push(
          <div key={index}>
            <InnerCardComponent index={index} />
          </div>
        );
      });
    } else if (count === 2) {
      console.log("it now has 2 items per col");
      language.resumes.map((card, index) => {
        console.log(index % count === 0);
        if (index % count === 0) {
          console.log("it pushes now");
          tempItems.push(
            <div key={index} className="flex justify-center">
              <InnerCardComponent index={index} />
              <InnerCardComponent index={index + 1} />
            </div>
          );
        }
      });
      console.log(tempItems);
    } else if (count === 3) {
    }

    setItems(tempItems);
  }

  return (
    <>
      <section id="resume" className="min-h-screen flex">
        <AliceCarousel
          items={items}
          duration={400}
          startIndex={0}
          autoWidth={true}
          autoHeight={true}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          renderPrevButton={() => {
            return (
              <FcPrevious className="hidden lg:flex cursor-pointer w-20 h-20 p-4 absolute lg:top-1/3 left-1/4 fullHd:left-96 lg:left-24 fullHd:top-2/4"></FcPrevious>
            );
          }}
          renderNextButton={() => {
            return (
              <FcNext className="hidden lg:flex cursor-pointer w-20 h-20 p-4 absolute right-1/4 fullHd:right-96 lg:right-24 lg:top-1/3 fullHd:top-2/4"></FcNext>
            );
          }}
          className="m-auto"
        ></AliceCarousel>
      </section>
    </>
  );
}
