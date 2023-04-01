import Image from "next/image";

export default function AproposDeMoi({isSmallScreen}) {
  const apropos = {
    item: "Bienvenue sur mon site ! Laissez-moi me présenter.",
    item1:
      "Je m'appelle Muriel et je suis kinésiologue certifiée, réflexologue cranio-sacrée et magnétiseuse.",
    item2:
      "Mais dans ma première vie comme j’aime à le dire, j’ai travaillé dans la comptabilité gestion, seulement je sentais depuis de longues années que ce métier ne me correspondait plus. Au fil du temps, j’ai perdu ma flamme intérieure et mon corps s’est mis à me faire de plus en plus mal jusqu’au jour où il s’est arrêté de bouger et là j’ai expérimenté le burn out. Mon corps et ma tête me lâchaient. Il m’a fallu quelques semaines pour m’autoriser à prendre soin de moi, le temps était venu des changements profonds.",
    item3:
      "J’ai toujours été intéressée par le développement personnel, l’énergétique car, cela a été prouvé scientifiquement, l’être humain est fait d’énergie, tout est fait d’énergie. J’ai essayé différentes médecines alternatives pour prendre soin de moi, pour me comprendre, pour me sortir de fonctionnements inadaptés, lâcher l’ancien pour créer du nouveau.",
    item4:
      "Je suis vraiment passionnée par la recherche du bien-être, de la spiritualité. J’ai d'abord fait une formation de magnétisme puis une formation de kinésiologue et de réflexologue cranio sacrée à l’école EKTC pendant 1 an et demi.",
    item5:
      "Mon objectif est d'accompagner les personnes afin qu’elles retrouvent leur chemin de vie de manière paisible, prêtes à faire de nouveaux choix et poser de nouvelles actions pour aller vers la vie qui leur ressemble.",
  };
  return (
    <div className=" min-h-screen relative flex flex-col md:flex-row font-roboto text-[#333333]">
      <div className="bg-gray-100 p-5 justify-center mt-44 md:mt-0  space-y-2 md:space-y-4 lg:space-y-6  w-full md:w-4/5 h-full md:h-auto ">
        <p className="font-bold md:text-center sm:ml-0 md:mt-32 underline">{apropos.item}</p>
        <p className="md:pt-5">{apropos.item1}</p>
        <p>{apropos.item2}</p>
        <p>{apropos.item3}</p>
        <p>{apropos.item4}</p>
        <p>{apropos.item5}</p>
      </div>
      {!isSmallScreen && (
        <div className=" w-full md:w-1/5 relative">
          <div className="opacity-70 h-full">
            <Image
              src="/moi.WebP"
              alt="Image de fond"
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
  
  

}
