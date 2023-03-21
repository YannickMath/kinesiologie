import styles from "../styles/Rosace.module.css";

export default function Rosace() {
  const words = [
    "Manque de confiance en soi",
    "Blocages émotionels",
    `Difficulté d'apprenttissage leture, ecriture`,
    "Découragement, burn out",
    "Insomnies",
    "Mauxx du corps",
    "Angoisses, peurs",
    "Chocs affectifs, solitude",
    "Douleurs chroniques",
    "Stress profond",
  ];
  const title = "Pourquoi se tourner vers la kinésiologie";
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.circleContainer}>
        {words.map((word, index) => (
          <div key={index} className={styles.circle}>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}
