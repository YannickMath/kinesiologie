import Image from "next/image";
import Rosace from "./Rosace";

export default function Pourquoi() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-roboto ">
      <div className="fixed top-0 left-0 w-full h-full z-0  ">
        <Image
          src="/fondpourquoi.WebP"
          alt="Image de fond"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-50"
          loading="lazy"
          // style={{ filter: "brightness(80%)" }}

        />
      </div>
      <div className="relative z-10 ">
        <Rosace />
      </div>
    </div>
  );
  
  
}
