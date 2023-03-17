import Menu from "./Menu";
import styles from "../styles/Accueil.module.css";

export default function Acceuil() {
  const welcome = {
    item1:
      "'Libérez-vous des blocages conscients ou inconscients grâce à la mémoire du corps'",
    item2:
      "'Reprenez votre pouvoir personnel et accéder à votre grandeur et à votre plein potentiel'",
    item3:
      "Je vous accompagne dans le processus de libération de tensions intérieures pour aller vers un mieux-être physique, mental, émotionnel et énergétique et retrouver ainsi votre vitalité, votre équilibre, et mobiliser vos propres ressources pour continuer sur le chemin de la vie, paisiblement, en étant libre de vos choix. ",
  };
  return (
    <div className="h-screen">
      <Menu />
     <div>

      <ul>
        <li className={styles.phrase}>{welcome.item1}</li>
        <li className={styles.phrase}>{welcome.item2}</li>
        <li className={styles.phrase}>{welcome.item3}</li>
      </ul>
     </div>

     
    </div>
  );
}
