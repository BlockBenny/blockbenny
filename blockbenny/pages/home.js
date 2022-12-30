import { CiTwitter, CiLinkedin } from 'react-icons/ci';
import { AiFillGithub, AiOutlineDownCircle  } from 'react-icons/ai'; 
import Image from 'next/image';
import pfp from '../public/pfp.png';
import enUS from '../locales/en-US.json';
import parse from 'html-react-parser'


export default function Home() {

    const nextSection = () => {
        document.getElementById("techstack").scrollIntoView({ behavior: 'smooth', block: 'start' });
    }


    return (
      <>
        <section className=" px-32 min-h-screen">
            <div className="grid grid-cols-2 gap-4 min-h-screen">
                <div className="relative flex text-center min-w-full min-h-full place-content-center items-center">
                    <Image className="z-10 ml-32 rounded-3xl absolute w-2/5 drop-shadow-2xl bb-box-shadow" src={pfp} />
                </div>
                <div className="self-center flex">
                    {/* <div className="h-96 w-2 bg-bgWH ml-48" /> */}
                    <div className="h-96 w-full bb-text-shadow">
                        {/* <div className="mt-14 text-2xl">Hey, my name is</div>
                        <div className="mt-1 text-4xl text-textPink font-playB">Benjamin Arand</div>
                        <div className="mt-10 text-2xl">and I am a</div>
                        <div className="mt-1 text-4xl text-textPink font-playB">Full Stack & Blockchain Developer</div> */}
                        {parse(enUS.home.title)}
                        <div className="mt-10">
                            <ul className="flex items-center">
                                <li><CiTwitter className="h-10 w-10" /></li>
                                <li><CiLinkedin className="h-10 w-10 ml-8" /></li>
                                <li><AiFillGithub className="h-10 w-10 ml-8" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full b-5 flex justify-center">
                <div className="z-20 absolute bottom-24 text-xl">
                    Tech Stack
                </div>
                <AiOutlineDownCircle onClick={ nextSection } className="z-20 cursor-pointer absolute bottom-12 h-10 w-10" />
            </div>
            <div className="area" >
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
    )
  }