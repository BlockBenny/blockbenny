import React from "react";
import AppContext from "./helper";
import AliceCarousel from "react-alice-carousel";
import { FcPrevious, FcNext } from "react-icons/fc";
import enUS from "../locales/en-US.json";
import parse from "html-react-parser";

export default function Resume() {
  const { language, setLanguage } = React.useContext(AppContext);

  return (
    <>
      <section id="resume" className="min-h-screen flex">
        <AliceCarousel
          duration={400}
          startIndex={0}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          renderPrevButton={() => {
            return (
              <FcPrevious className=" cursor-pointer w-20 h-20 p-4 absolute left-32 mt-96 top-0"></FcPrevious>
            );
          }}
          renderNextButton={() => {
            return (
              <FcNext className="cursor-pointer w-20 h-20 p-4 absolute right-32 mt-96 top-0"></FcNext>
            );
          }}
          className="m-auto"
        >
          <div className="z-40 flex justify-between pr-64 pl-64">
            {language.resume.pageOne.map((card, index) => (
              <>
                <div className="z-40 m-10 resumeCard rounded-3xl overflow-hidden bg-bgTo bg-opacity-30 shadow-3xl">
                  <div class="grid grid-cols-2 gap-2 p-5">
                    <div class="text-3xl font-playB h-1 font-bold text-center p-10 rounded-lg col-span-2 flex flex-col justify-center items-center">
                      <p className="align-middle">{card.topic}</p>
                    </div>
                    <div className=" h-1 font-bold p-10 rounded-lg flex flex-col justify-center ">
                      {card.firstTitle}
                    </div>
                    <div className=" h-1 font-playB font-bold  p-10 rounded-lg flex flex-col justify-center">
                      {card.firstValue}
                    </div>
                    <div className=" h-1   font-bold  p-10 rounded-lg flex flex-col justify-center ">
                      {card.secondTitle}
                    </div>
                    <div className=" h-1 font-playB  font-bold  p-10 rounded-lg flex flex-col justify-center ">
                      <p className="align-middle">{card.secondValue}</p>
                    </div>
                    <div className=" h-1  font-bold p-10 rounded-lg flex flex-col justify-center ">
                      {card.thirdTitle}
                    </div>
                    <div className=" h-1 font-playB  font-bold p-10 rounded-lg flex flex-col justify-center">
                      {card.thirdValue}{" "}
                    </div>
                    <div className=" h-96 font-bold p-10 rounded-lg col-span-2 row-span-2 flex flex-col justify-center">
                      {parse(card.description)}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="flex justify-between pr-64 pl-64">
            {enUS.resume.pageTwo.map((card, index) => (
              <>
                <div className="m-10 resumeCard rounded-3xl overflow-hidden bg-bgTo bg-opacity-30 shadow-3xl">
                  <div class="grid grid-cols-2 gap-2 p-5">
                    <div class="text-3xl font-playB h-1 font-bold text-center p-10 rounded-lg col-span-2 flex flex-col justify-center items-center">
                      <p className="align-middle">{card.topic}</p>
                    </div>
                    <div className=" h-1 font-bold p-10 rounded-lg flex flex-col justify-center ">
                      {card.firstTitle}
                    </div>
                    <div className=" h-1 font-playB font-bold  p-10 rounded-lg flex flex-col justify-center">
                      {card.firstValue}
                    </div>
                    <div className=" h-1   font-bold  p-10 rounded-lg flex flex-col justify-center ">
                      {card.secondTitle}
                    </div>
                    <div className=" h-1 font-playB  font-bold  p-10 rounded-lg flex flex-col justify-center ">
                      <p className="align-middle">{card.secondValue}</p>
                    </div>
                    <div className=" h-1  font-bold p-10 rounded-lg flex flex-col justify-center ">
                      {card.thirdTitle}
                    </div>
                    <div className=" h-1 font-playB  font-bold p-10 rounded-lg flex flex-col justify-center">
                      {card.thirdValue}{" "}
                    </div>
                    <div className=" h-96 font-bold p-10 rounded-lg col-span-2 row-span-2 flex flex-col justify-center">
                      {parse(card.description)}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="flex justify-between pr-64 pl-64">
            {enUS.resume.pageThree.map((card, index) => (
              <>
                <div className="m-10 resumeCard rounded-3xl overflow-hidden bg-bgTo bg-opacity-30 shadow-3xl">
                  <div class="grid grid-cols-2 gap-2 p-5">
                    <div class="text-3xl font-playB h-1 font-bold text-center p-10 rounded-lg col-span-2 flex flex-col justify-center items-center">
                      <p className="align-middle">{card.topic}</p>
                    </div>
                    <div className=" h-1 font-bold p-10 rounded-lg flex flex-col justify-center ">
                      {card.firstTitle}
                    </div>
                    <div className=" h-1 font-playB font-bold  p-10 rounded-lg flex flex-col justify-center">
                      {card.firstValue}
                    </div>
                    <div className=" h-1   font-bold  p-10 rounded-lg flex flex-col justify-center ">
                      {card.secondTitle}
                    </div>
                    <div className=" h-1 font-playB  font-bold  p-10 rounded-lg flex flex-col justify-center ">
                      <p className="align-middle">{card.secondValue}</p>
                    </div>
                    <div className=" h-1  font-bold p-10 rounded-lg flex flex-col justify-center ">
                      {card.thirdTitle}
                    </div>
                    <div className=" h-1 font-playB  font-bold p-10 rounded-lg flex flex-col justify-center">
                      {card.thirdValue}{" "}
                    </div>
                    <div className=" h-96 font-bold p-10 rounded-lg col-span-2 row-span-2 flex flex-col justify-center">
                      {parse(card.description)}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </AliceCarousel>
      </section>
    </>
  );
}
