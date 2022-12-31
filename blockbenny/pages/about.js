import Image from "next/image";
import pfp from "../public/pfp.png";
import about1 from "../public/about1.png";
import about2 from "../public/about2.JPG";
import about3 from "../public/about3.JPG";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { AiFillGithub, AiOutlineDownCircle } from "react-icons/ai";

export default function About() {
  return (
    <>
      <section id="about" className="min-h-screen">
        <div class="grid grid-cols-2 gap-2 p-10 min-h-screen">
          <div className="flex justify-center items-center">
            <Image src={pfp} className="aboutPFP absolute z-40" />
            <Image src={about1} className="about1 absolute z-50" />
            <Image src={about2} className="about2 absolute z-20" />
            <Image src={about3} className="about3 absolute z-30" />
          </div>
          <div className="items-center mt-48 text-2xl pr-48">
            <p>
              Most importantly, I am a loving husband, stepfather of 4 and proud
              of my life.
            </p>
            <p className="mt-5">
              For the past six years, I have been employed in the
              telecommunications industry, serving primarily B2B clients.
              <br />
              Through this role, I have gained valuable experience in
              communication, product development, and customer acquisition.
              <br />
              Currently, I serve as a Full Stack Developer and Project Manager.
            </p>
            <p className="mt-5">
              In 2018, I became interested in blockchain technology and have
              since been enthusiastic about the potential it holds.
              <br />I have worked for a cryptocurrency project in the customer
              service and development departments.
            </p>
            <p className="mt-5">
              In December of 2021, I founded WenServices, a software company
              that is developing a SaaS solution for crypto business management
              in our spare time. Through this venture, I have gained experience
              in managing start-up challenges, leading a small team, and
              handling various tasks. Due to the dispersed location of our team
              members, I have honed my skills in English communication and
              negotiation.
            </p>
            <p className="mt-5">
              Additionally, I have taken courses in Solidity and have completed
              several projects using the Ethereum blockchain. As a Developer,
              Project Manager, and founder, I have developed a range of hard and
              soft skills.
            </p>
            <p className="mt-5">
              I am proficient in remote work and am committed to delivering
              exceptional results.
            </p>
            <p className="mt-10 text-3xl">Contact me @</p>
            <p className="mt-2">benjamin.arand@web.de</p>
            <p className="mt-5 text-3xl">Or @</p>
            <div className="mt-2">
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
      </section>
    </>
  );
}
