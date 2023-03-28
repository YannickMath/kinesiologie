import Menu from "./Menu";
import styles from "../styles/Accueil.module.css";
import Image from "next/image";

export default function Acceuil() {

  const welcome = {
    item1: `"Libérez-vous des blocages conscients ou inconscients grâce à la mémoire du corps"`,
    item2: `"Reprenez votre pouvoir personnel et accéder à votre grandeur et à votre plein potentiel"`,
    item3: `"Je vous accompagne dans le processus de libération de tensions intérieures pour aller vers un mieux-être physique, mental, émotionnel et énergétique et retrouver ainsi votre vitalité, votre équilibre, et mobiliser vos propres ressources pour continuer sur le chemin de la vie, paisiblement, en étant libre de vos choix."`,
    item4: "Muriel",
  };

  return (
    <div className="h-screen font-tangerine text-5xl lg:text-3xl relative  flex flex-col ">
      <div className="h-full">
        {/* Image pour les smartphones */}
      <Image
        src="/fond.jpg"
        alt="Image de fond"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="lg:hidden" // Cache l'image sur les écrans larges
      />

      {/* Image pour les ordinateurs */}
      <Image
        src="/fond-pc.jpg"
        alt="Image de fond"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="hidden lg:block" // Affiche l'image uniquement sur les écrans larges
      />
      </div>
      <div className=" h-full">
        <p className={styles.phrase}>{welcome.item1}</p>
        <p className={styles.phrase}>{welcome.item2}</p>
        <p className={styles.phrase}>{welcome.item3}</p>
        <p className={styles.phrase}>
          <span className={styles.signature}>Muriel</span>
        </p>
      </div>
    </div>
  );
  

  
  

}
