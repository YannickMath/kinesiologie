import styles from "../styles/Rosace.module.css";

export default function Rosace() {
  const words = [
    "Manque de confiance en soi",
    "Blocages émotionels",
    `Difficulté d'apprentissage`,
    "Découragement, burn out",
    "Insomnies",
    "Maux du corps, douleurs chroniques",
    "Angoisses, peurs, stress profond",
    "Chocs affectifs, solitude",
  ];

  return (
    <div className={styles.container}>
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
