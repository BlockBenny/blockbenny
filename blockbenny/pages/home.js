import React from "react";
import AppContext from "./helper";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { AiFillGithub, AiOutlineDownCircle } from "react-icons/ai";
import Image from "next/image";
import pfp from "../public/pfp.png";
import enUS from "../locales/en-US.json";
import parse from "html-react-parser";

export default function Home() {
  const { language, setLanguage } = React.useContext(AppContext);

  return (
    <>
      <section id="home" className=" px-32 min-h-screen">
        <div className="grid grid-cols-2 gap-4 min-h-screen">
          <div className="relative flex text-center min-w-full min-h-full place-content-center items-center">
            <Image
              alt="Profile Picture of Benny"
              className="z-30 ml-32 rounded-3xl absolute w-2/5 drop-shadow-2xl bb-box-shadow"
              src={pfp}
            />
          </div>
          <div className="self-center flex">
            <div className="h-96 w-full bb-text-shadow">
              {parse(language.home.title)}
              <div className="mt-10">
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
        </div>
      </section>
    </>
  );
}
