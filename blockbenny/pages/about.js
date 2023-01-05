import React from "react";
import AppContext from "../helper";
import Image from "next/image";
import pfp from "../public/pfp.png";
import about1 from "../public/about1.png";
import about2 from "../public/about2.JPG";
import about3 from "../public/about3.png";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import parse from "html-react-parser";

export default function About() {
  const { language, setLanguage } = React.useContext(AppContext);

  return (
    <>
      <section id="about" className="min-h-screen">
        <div className="lg:grid lg:grid-cols-2 lg:gap-2 p-10 min-h-screen">
          <div className="hidden lg:flex justify-center items-center">
            <div className="lg:collage0HD 4k:collage0 absolute z-40">
              <Image alt="First of 4 Pics" src={pfp} />
            </div>
            <div className="lg:collage1HD 4k:collage1  absolute z-50">
              <Image alt="Second of 4 Pics" src={about1} />
            </div>
            <div className="lg:collage2HD 4k:collage2  absolute z-20">
              <Image alt="Third of 4 Pics" src={about2} />
            </div>
            <div className="lg:collage3HD 4k:collage3  absolute z-30">
              <Image alt="Fourth of 4 Pics" src={about3} />
            </div>
          </div>
          <div className="mt-24 4k:mt-48 fullHd:mt-32 lg:mt-20 4k:text-2xl fullHd:text-md 4k:pr-48 fullHd:pr-24">
            {parse(language.about.description)}
            <p className="mt-10 4k:text-2xl fullHd:text-lg">Contact me @</p>
            <p className="mt-2">benjamin.arand@web.de</p>
            <p className="mt-5 4k:text-2xl fullHd:text-lg">Or @</p>
            <div className="mt-2">
              <ul className="flex items-center">
                <li>
                  <CiTwitter onClick={() => window.open("https://twitter.com/Wen_Alpha", "_blank")} className="cursor-pointer 4K:h-10 4K:w-10 fullHd:w-6 fullHd:h-6" />
                </li>
                <li>
                  <CiLinkedin onClick={() => window.open("https://www.linkedin.com/in/bennyblock/", "_blank")} className="cursor-pointer 4K:h-10 4K:w-10 fullHd:w-6 fullHd:h-6 ml-8" />
                </li>
                <li>
                  <AiFillGithub onClick={() => window.open("https://github.com/BlockBenny", "_blank")} className="cursor-pointer 4K:h-10 4K:w-10 fullHd:w-6 fullHd:h-6 ml-8" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
