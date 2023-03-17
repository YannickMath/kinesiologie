import Menu from "./Menu";
import styles from "../styles/Kinesiologie.module.css";
import React from "react";
import { useState } from "react";
import Slide from "./Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Kinesiologie() {
  const wikipedia = {
    item1:
      "La kinésiologie est une approche holistique qui vise à rétablir l'équilibre du corps dans toutes ses composantes : structurelles, psycho, émotionnelles, biochimiques et énergétiques.",
    item2:
      "La spécificité de la kinésiologie c'est l'utilisation du test musculaire qui permet d'interroger le corps, notre inconscient et de faire remonter à la soncience les déséquilibres énéergétiques et les stress émotionnels qui empêchent l'individu d'utiliser toutes ses potentialiités.",
    item3:
      "En effet, le corps a une mémoire dite cellulaire dans laquelle sont enregistrés tous les évènements vécus. Le test musculaire oriente vers les techniques à utiliser pour libérer ces blocages, ces tensions.",
    item4:
      "La kinésiologie permet de vous libérer de la charge émotionnelle négative qui est associée à un évènement du passé et de retrouver équilibre physique, mental et émotionnel. Elle permet donc de changer le regard sur soi et sur les situations qu'on vit et de faire de nouveaux choix en respectant ses besoins, ses émotions et ses aspirations.",
    item5:
      "Faire appel à la kinésiologie c’est utiliser l’intelligence du corps pour remettre l’énergie en mouvement, faire le tri dans le flot émotionnel pour enfin se sentir léger, apaisé.",
    item6: "Le test musculaire",
    item7: "'Ce qui ne s'exprime pas s'imprime'",
    item8: "'Le corps est le reflet de notre inconscient'",
  };

  const imageTestMusculaire = "/testmusc.png";

  const [modal, setModal] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-screen">
      <Menu />
      <div className="flex justify-center items-center">
        {Object.values(wikipedia).map((item, i) => (
          <a
            key={i}
            href={`#${Object.keys(wikipedia)[i]}`}
            // className="w-2 h-2 m-5 rounded bg-gray-700"
          ></a>
        ))}
      </div>
      <Slider {...settings}>
        {Object.values(wikipedia).map((item, i) => (
          <div key={i}>
            <p className={styles.phrase} id={Object.keys(wikipedia)[i]}>
              {item}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
