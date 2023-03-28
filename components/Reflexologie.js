import Menu from "./Menu";
import Image from "next/image";

export default function Reflexologie() {
  const reflexo = {
    item1:
      "C’est une technique douce issue de l’ostéopathie, simple et complète, totalement dédiée à l’écoute du corps.",
    item2:
      "Elle permet de réduire, voir de supprimer les douleurs ou les inconforts physiques en fluidifiant les blocages énergétiques dans le corps pour retrouver ou prolonger votre vitalité et votre bien être.",
    item3:
      "Cela se passe par une étape d’écoute du crane, puis une ré harmonisation par de légères pulsions au niveau du sacrum et/ou des membres concernés en passant par les vertèbres.",
    item4:
      "Elle redonne au corps la possibilité de s’adapter et procure une relaxation complète au travers de l’axe crane/vertèbre/sacrum.",
  };

  return (
    <div className="h-screen  lg:flex overflow-hidden">
      <div className="h-16 lg:h-screen">
        {/* <Menu /> */}
      </div>
      <div className=" h-1/3 lg:h-full lg:w-1/2  relative opacity-70">
        <Image
          src="/fondreflexo.jpg"
          alt="Image de fond"
          layout="fill"
          quality={50}
          className="bg-contain lg:bg-cover mt-24 lg:mt-0"
        />
      </div>
      <div className="flex bg-gray-100 flex-col  font-semibold justify-center h-2/3 lg:w-1/2 lg:mt-10 lg:h-full font-raleway space-y-2 lg:space-y-8 text-sm lg:text-base ">
        <p className="mr-10 ml-10">{reflexo.item1}</p>
        <p className="mr-10 ml-10">{reflexo.item2}</p>
        <p className="mr-10 ml-10">{reflexo.item3}</p>
        <p className="mr-10 ml-10">{reflexo.item4}</p>
      </div>
    </div>
  );

}
