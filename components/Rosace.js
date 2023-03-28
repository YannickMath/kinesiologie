import styles from "../styles/Rosace.module.css";

export default function Rosace() {

  const words = [
    "Manque de confiance en soi",
    "Blocages émotionels",
    `Difficulté d'apprenttissage`,
    "Découragement, burn out",
    "Insomnies",
    "Mauxx du corps, douleurs chroniques",
    "Angoisses, peurs, stress profond",
    "Chocs affectifs, solitude",
  ];

  // const title = "Pourquoi se tourner vers la kinésiologie";
  
  return (
    <div className={styles.container}>
      {/* <div className={styles.title} >
        {title.split(" ").map((word, index, array) => (
          <>
            {word}
            {index === 0 && <><br /></>}
            {index < array.length - 1 && ' '}
          </>
        ))} */}
      {/* </div> */}
      <div className={styles.circleContainer}>
        {words.map((word, index) => (
          <div key={index} className={styles.circle} >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
  
  
}
