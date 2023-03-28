import Menu from "./Menu";
import Image from "next/image";
import Rosace from "./Rosace";

export default function Pourquoi() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-raleway">
      <div className="fixed top-0 left-0 w-full h-full z-0 ">
        <Image
          src="/fondpourquoi.jpg"
          alt="Image de fond"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="opacity-70"
        />
      </div>
      <div className="relative z-10">
        <Rosace />
      </div>
    </div>
  );
  
  
}
