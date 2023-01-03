import React from "react";
import AppContext from "./helper";
import Image from "next/image";
import pfp from "../public/pfp.png";
import about1 from "../public/about1.png";
import about2 from "../public/about2.JPG";
import about3 from "../public/about3.JPG";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { AiFillGithub, AiOutlineDownCircle } from "react-icons/ai";
import parse from "html-react-parser";

export default function About() {
  const { language, setLanguage } = React.useContext(AppContext);

  return (
    <>
      <section id="about" className="min-h-screen">
        <div className="grid grid-cols-2 gap-2 p-10 min-h-screen">
          <div className="flex justify-center items-center">
            <Image
              alt="First of 4 Pics"
              src={pfp}
              className="aboutPFP absolute z-40"
            />
            <Image
              alt="Second of 4 Pics"
              src={about1}
              className="about1 absolute z-50"
            />
            <Image
              alt="Third of 4 Pics"
              src={about2}
              className="about2 absolute z-20"
            />
            <Image
              alt="Fourth of 4 Pics"
              src={about3}
              className="about3 absolute z-30"
            />
          </div>
          <div className="items-center mt-48 text-2xl pr-48">
            {parse(language.about.description)}
            <p className="mt-10 text-3xl">Contact me @</p>
            <p className="mt-2">benjamin.arand@web.de</p>
            <p className="mt-5 text-3xl">Or @</p>
            <div className="mt-2">
              <ul className="flex items-center">
                <li>
                  <CiTwitter
                    onClick={() =>
                      window.open("https://twitter.com/Wen_Alpha", "_blank")
                    }
                    className="cursor-pointer h-10 w-10"
                  />
                </li>
                <li>
                  <CiLinkedin
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/bennyblock/",
                        "_blank"
                      )
                    }
                    className="cursor-pointer h-10 w-10 ml-8"
                  />
                </li>
                <li>
                  <AiFillGithub
                    onClick={() =>
                      window.open("https://github.com/BlockBenny", "_blank")
                    }
                    className="cursor-pointer h-10 w-10 ml-8"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
