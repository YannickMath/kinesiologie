import Image from "next/image";

export default function Reflexologie({ isSmallScreen }) {
  const reflexo = {
    item1:
      "La réflexologie cranio-sacrée est une technique douce issue de l’ostéopathie, simple et complète, totalement dédiée à l’écoute du corps.",
    item2:
      "Elle permet de réduire, voir de supprimer les douleurs ou les inconforts physiques en fluidifiant les blocages énergétiques dans le corps pour retrouver ou prolonger votre vitalité et votre bien être.",
    item3:
      "Cela se passe par une étape d’écoute du crane, puis une ré harmonisation par de légères pulsions au niveau du sacrum et/ou des membres concernés en passant par les vertèbres.",
    item4:
      "Elle redonne au corps la possibilité de s’adapter et procure une relaxation complète au travers de l’axe crane/vertèbre/sacrum.",
  };

  return (
    <div className="h-screen flex flex-col md:flex-row font-roboto">
      <div className="w-full md:w-1/3 h-full relative opacity-70">
        <Image
          src="/fondreflexo.WebP"
          alt="Image de fond"
          layout={isSmallScreen ? "fit" : "fill"}
          objectFit={isSmallScreen ? "contain" : "cover"}
          quality={50}
          className="opacity-70 mt-40 md:mt-0"
          loading="lazy"
        />
      </div>
      <div className="flex bg-gray-100 mt-40 md:mt-28 lg:mt-0 flex-col p-5  justify-center w-full md:w-2/3  font-roboto space-y-4 lg:space-y-6  md:text-base text-[#333333]  ">
        <p className="">{reflexo.item1}</p>
        <p className="">{reflexo.item2}</p>
        <p className="">{reflexo.item3}</p>
        <p className="">{reflexo.item4}</p>
      </div>
    </div>
  );
}
