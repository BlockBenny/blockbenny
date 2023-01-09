import React from "react";
import AppContext from "../helper";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { AiFillGithub, AiOutlineDownCircle } from "react-icons/ai";
import Image from "next/image";
import pfp from "../public/pfp.png";
import parse from "html-react-parser";

export default function Home() {
  const { language, setLanguage } = React.useContext(AppContext);

  return (
    <>
      <section id="home" className="px-24 lg:px-32 min-h-screen">
        <div className="grid lg:grid-cols-2 gap-4 min-h-screen">
          <div className="mt-48 h-2/4 lg:w-2/3 lg:ml-28 fullHd:ml-80 fullHd:w-2/4 lg:mt-16 lg:self-center relative flex text-center place-content-center items-center">
            <Image
              id="test"
              alt="Profile Picture of Benny"
              className="z-30"
              src={pfp}
            />
          </div>
          <div className="self-center flex">
            <div className="h-96 mb-12 lg:mb-0 lg:mt-48 lg:ml-10 w-full bb-text-shadow">
              <div className="mt-3 text-center lg:text-left lg:mt-8 text-base lg:text-2xl">
                {language.home.title}
              </div>
              <div className="mt-1 text-center lg:text-left  text-xl 4k:text-5xl lg:text-3xl text-textPink font-playB  ">
                {language.home.title1}
              </div>
              <div className="mt-7 text-center lg:text-left  lg:mt-10 text-base lg:text-2xl">
                {language.home.title2}
              </div>
              <div className="mt-1 text-center lg:text-left  4k:text-5xl text-xl lg:text-3xl text-textPink font-playB">
                {language.home.title3}
              </div>
              <div className="mt-10 hidden lg:flex">
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
                  {/* <li>
                    <AiFillGithub
                      onClick={() =>
                        window.open("https://github.com/BlockBenny", "_blank")
                      }
                      className="cursor-pointer h-10 w-10 ml-8"
                    />
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
