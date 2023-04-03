import Image from "next/image";

export default function Acceuil() {
  const welcome = {
    item1: `"Libérez-vous des blocages conscients ou inconscients grâce à la mémoire du corps"`,
    item2: `"Reprenez votre pouvoir personnel et accédez à votre grandeur et à votre plein potentiel"`,
    item3: `"Je vous accompagne dans le processus de libération de tensions intérieures pour aller vers un mieux-être physique, mental, émotionnel et énergétique. Retrouvez ainsi votre vitalité, votre équilibre et mobilisez vos propres ressources pour continuer sur le chemin de la vie, paisiblement, en étant libre de vos choix."`,
    item4: "Muriel",
  };

  return (
    <div className="h-screen font-carattere relative flex flex-col sm:mt-6 ">
      <div className="h-full ">
        <Image
          src="/fond-pc.WebP"
          alt="Image de fond"
          layout="fill"
          objectFit="cover"
          quality={100}
          className=" opacity-80"
          style={{ filter: "brightness(60%)" }}
        />
      </div>
      <div className=" h-full sm:space-y-2 md:space-y-4">
        <p className="phrase ">{welcome.item1}</p>
        <p className="phrase ">{welcome.item2}</p>
        <p className="phrase ">{welcome.item3}</p>
        <p className="phrase ">
          <span className="signature  ">Muriel</span>
        </p>
      </div>
    </div>
  );
}
