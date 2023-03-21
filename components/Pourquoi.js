import Menu from "./Menu";
import { Image } from "react-image";
import Rosace from "./Rosace";


export default function Pourquoi() {
  return (
    <div>
      <Menu />
      <div className="h-screen  font-raleway italic overflow-hidden  "
      style={{
        backgroundImage: "url(/fondpourquoi.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      >
      <Rosace />

    </div>
    </div>
  );
}
