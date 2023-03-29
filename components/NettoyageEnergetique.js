import Menu from "./Menu";
import Image from "next/image";

export default function NettoyageEnergetique() {
  const nettoyage = {
    item1:
      "Le nettoyage énergétique permet de supprimer les énergies négatives qui ont envahi nos propres énergies et qui sont dans l’aura, les corps subtils, les chakras et le corps physique.",
    item2:
      "Grâce au magnétisme présent dans mes mains, je peux ressentir le négatif dans ces endroits et le supprimer, recentrer et réaligner vos énergies pour vous permettre une meilleure connexion avec vous-même, vous sentir mieux rapidement et retrouver la forme.",
    item3:
      "C’est une sorte de dépollution énergétique car malheureusement nous sommes, de par notre environnement, soumis à de nombreuses énergies nuisibles. ",
  };

  return (
    <div className="relative h-screen  lg:flex ">
    
      <div className="opacity-40">
        <Image
          src="/fondnettoyage.jpg"
          alt="Image de fond"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="mt-32 md:mt-0 flex bg-gray-100 flex-col font-semibold justify-center h-2/3  lg:mt-0 lg:h-full font-roboto space-y-2 lg:space-y-6 text-sm lg:text-base ">
        <p className="mr-2 ml-2 text-center lg:mr-10 lg:ml-10 lg:text-justify">{nettoyage.item1}</p>
        <p className="mr-2 ml-2 text-center lg:mr-10 lg:ml-10 lg:text-justify">{nettoyage.item2}</p>
        <p className="mr-2 ml-2 text-center lg:mr-10 lg:ml-10 lg:text-justify">{nettoyage.item3}</p>
      </div>
    </div>
  );
}
