import "@/styles/Home.module.css"
import styles from "../styles/Home.module.css"

export default function Menu() {
  const links = {
    id1: "Acceuil",
    id2: "La kinésiologie",
    id3: "Pour quoi ?",
    id4: "Séance",
    id5: "Contact et tarifs"
  };

  return (
    <div className="bg-red-300 h-1/5 text-slate-900 flex justify-around items-center text-lg font-semibold ">
      <img className="rounded-[40px] w-64 h-64 fs" src="logo favori.png" alt="logo" />
      <p className={styles.link}>{links.id1}</p>
      <p className={styles.link}>{links.id2}</p>
      <p className={styles.link}>{links.id3}</p>
      <p className={styles.link}>{links.id4}</p>
      <p className={styles.link}>{links.id5}</p>
    </div>
  );
}

