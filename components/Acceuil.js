import Menu from "./Menu";
import styles from "../styles/Accueil.module.css";

export default function Acceuil() {
  const welcome = {
    item1: `"Libérez-vous des blocages conscients ou inconscients grâce à la mémoire du corps"`,
    item2: `"Reprenez votre pouvoir personnel et accéder à votre grandeur et à votre plein potentiel"`,
    item3: `"Je vous accompagne dans le processus de libération de tensions intérieures pour aller vers un mieux-être physique, mental, émotionnel et énergétique et retrouver ainsi votre vitalité, votre équilibre, et mobiliser vos propres ressources pour continuer sur le chemin de la vie, paisiblement, en étant libre de vos choix."`,
    item4: "Murielle",
  };
  return (
    <div className="h-screen font-tangerine text-5xl  overflow-hidden">
      <Menu className="fixed top-0 left-0 right-0 z-10" />
      <div
        className="h-full "
        style={{
          backgroundImage: "url(/fond.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ul>
          <li className={styles.phrase}>{welcome.item1}</li>
          <li className={styles.phrase}>{welcome.item2}</li>
          <li className={styles.phrase}>{welcome.item3}</li>
          <li className={styles.phrase}>
            <span className={styles.signature}>Murielle</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
