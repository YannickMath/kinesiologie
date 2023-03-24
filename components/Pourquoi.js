import Menu from "./Menu";
import Image from "next/image";
import Rosace from "./Rosace";

export default function Pourquoi() {
  return (
    <div>
      {/* <Menu /> */}
      <div className="h-screen  font-raleway italic overflow-hidden z-auto">
        <div className="opacity-70">
          <Image
            src="/fondpourquoi.jpg"
            alt="Image de fond"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <Rosace />
      </div>
    </div>
  );
}
