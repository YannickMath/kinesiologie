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
    <div className="relative min-h-screen lg:flex ">
      <div className="opacity-40">
        <Image
          src="/fondnettoyage.WebP"
          alt="Image de fond"
          layout="fill"
          objectFit="cover"
          quality={100}
          // style={{ filter: "brightness(80%)" }}
          className="opacity-80"
          loading="lazy"

        />
      </div>
      <div className=" mt-40 lg:mt-[-64px] sm:mt-16  flex flex-col justify-center text-[#050202] lg:h-full h-full font-roboto space-y-4 lg:space-y-6  lg:text-base p-5 lg:p-0">
        <p className=" lg:mr-10 lg:ml-10 sm:mt-10 md:mt-20 mt-10 ">{nettoyage.item1}</p>
        <p className=" lg:mr-10 lg:ml-10 ">{nettoyage.item2}</p>
        <p className="  lg:mr-10 lg:ml-10 ">{nettoyage.item3}</p>
      </div>
    </div>
  );
}
