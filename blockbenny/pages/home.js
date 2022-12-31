import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { AiFillGithub, AiOutlineDownCircle } from "react-icons/ai";
import Image from "next/image";
import pfp from "../public/pfp.png";
import enUS from "../locales/en-US.json";
import parse from "html-react-parser";

export default function Home() {
  const nextSection = () => {
    console.log("nextsection");
    document
      .getElementById("techstack")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section id="home" className=" px-32 min-h-screen">
        <div className="grid grid-cols-2 gap-4 min-h-screen">
          <div className="relative flex text-center min-w-full min-h-full place-content-center items-center">
            <Image
              alt="Profile Picture of Benny"
              className="z-10 ml-32 rounded-3xl absolute w-2/5 drop-shadow-2xl bb-box-shadow"
              src={pfp}
            />
          </div>
          <div className="self-center flex">
            <div className="h-96 w-full bb-text-shadow">
              {parse(enUS.home.title)}
              <div className="mt-10">
                <ul className="flex items-center">
                  <li>
                    <CiTwitter className="h-10 w-10" />
                  </li>
                  <li>
                    <CiLinkedin className="h-10 w-10 ml-8" />
                  </li>
                  <li>
                    <AiFillGithub className="h-10 w-10 ml-8" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full b-5 flex justify-center">
          <div className="z-20 absolute bottom-24 text-xl">Tech Stack</div>
          <AiOutlineDownCircle
            onClick={nextSection}
            className="z-20 cursor-pointer absolute bottom-12 h-10 w-10"
          />
        </div>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </>
  );
}
