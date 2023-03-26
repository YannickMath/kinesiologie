import Image from "next/image";

export default function AproposDeMoi({isSmallScreen}) {
  const apropos = {
    item: "Bienvenue sur mon site ! Laissez moi me présenter.",
    item1:
      "Je m'appelle Muriel et je suis kinésiologue certifiée, réflexologue cranio-sacrée et magnétiseuse.",
    item2:
      "Mais dans ma première vie comme j’aime à le dire, j’ai travaillé dans la comptabilité gestion, seulement je sentais depuis de longues années que ce métier ne me correspondait pas. Au fil du temps, j’ai perdu ma flamme intérieure et mon corps s’est mis à me faire de plus en plus mal jusqu’au jour où il s’est arrêté de bouger et là j’ai expérimenté le burnout, mon corps et ma tête me lâchaient. Il m’a fallu quelques semaines pour m’autoriser à prendre soin de moi, le temps était venu des changements profonds.",
    item3:
      "J’ai toujours été intéressée par le développement personnel, l’énergétique car oui et cela a été prouvé scientifiquement que l’être humain est fait d’énergie, tout est fait d’énergie. J’ai essayé plein de médecine alternative pour prendre soin de moi, pour me comprendre, pour me sortir de fonctionnements inadaptés, lâcher l’ancien pour créer du nouveau.",
    item4:
      "Je suis vraiment passionnée par la recherche du bien-être, de la spiritualité. J’ai fait une formation de magnétisme que je ressentais beaucoup dans mes mains puis j’ai fait une formation de kinésiologue et de réflexologue cranio sacrée à l’école EKTC pendant 1 an ½. Et maintenant je peux dire que « je kiffe ma life ». J’ai vraiment envie d’accompagner les personnes pour qu’elles retrouvent leur chemin de vie de manière paisible, prêtes à faire de nouveaux choix et poser de nouvelles actions pour aller vers la vie qui leur ressemble.",
  };
  return (
<div className="flex flex-col md:flex-row h-screen md:justify-between font-raleway overflow-hidden">
  <div className="bg-gray-100 h-screen text-gray-600 italic justify-center md:w-2/3 mt-40 md:mt-28 space-y-2 md:space-y-8 text-sm md:text-base p-4">
    <p className="font-bold md:ml-80">{apropos.item}</p>
    <p className="pt-5">{apropos.item1}</p>
    <p>{apropos.item2}</p>
    <p>{apropos.item3}</p>
    <p>{apropos.item4}</p>
  </div>
  {!isSmallScreen && (
    <div className="w-1/3 h-full relative">
      <div className="opacity-40 h-full">
        <Image
          src="/moi.jpg"
          alt="Image de fond"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  )}
 
</div>

  );
}
