import Image from "next/image";

export default function Acceuil() {
  const welcome = {
    item1: `"Libérez-vous des blocages conscients ou inconscients grâce à la mémoire du corps"`,
    item2: `"Reprenez votre pouvoir personnel et accéder à votre grandeur et à votre plein potentiel"`,
    item3: `"Je vous accompagne dans le processus de libération de tensions intérieures pour aller vers un mieux-être physique, mental, émotionnel et énergétique et retrouver ainsi votre vitalité, votre équilibre, et mobiliser vos propres ressources pour continuer sur le chemin de la vie, paisiblement, en étant libre de vos choix."`,
    item4: "Muriel",
  };

  return (
    <div className="h-screen font-carattere text-5xl lg:text-3xl relative  flex flex-col  ">
      <div className="h-full">
        {/* Image pour les smartphones */}
        <Image
          src="/fond.jpg"
          alt="Image de fond"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="lg:hidden opacity-80" // Cache l'image sur les écrans larges
          style={{ filter: "brightness(70%)" }}
        />

        {/* Image pour les ordinateurs */}
        <Image
          src="/fond-pc.jpg"
          alt="Image de fond"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="hidden lg:block opacity-80" // Affiche l'image uniquement sur les écrans larges
          style={{ filter: "brightness(70%)" }}
        />
      </div>
      <div className=" h-full">
        <p className="phrase espace">{welcome.item1}</p>
        <p className="phrase espace">{welcome.item2}</p>
        <p className="phrase espace">{welcome.item3}</p>
        <p className="phrase espace">
          <span className="signature ">Muriel</span>
        </p>
      </div>
    </div>
  );
}
