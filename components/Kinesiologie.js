import Menu from "./Menu";
import React from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export default function Kinesiologie() {
  const imageTestMusculaire = "/testmusc.png";
  const wikipedia = {
    item1:
      "La kinésiologie est une approche holistique qui vise à rétablir l'équilibre du corps dans toutes ses composantes : structurelles, psycho, émotionnelles, biochimiques et énergétiques. La spécificité de la kinésiologie c'est l'utilisation du test musculaire qui permet d'interroger le corps, notre inconscient et de faire remonter à la soncience les déséquilibres énéergétiques et les stress émotionnels qui empêchent l'individu d'utiliser toutes ses potentialiités.",
    item2:
      "La spécificité de la kinésiologie c'est l'utilisation du test musculaire qui permet d'interroger le corps, notre inconscient et de faire remonter à la soncience les déséquilibres énéergétiques et les stress émotionnels qui empêchent l'individu d'utiliser toutes ses potentialiités.",
    item3:
      "En effet, le corps a une mémoire dite cellulaire dans laquelle sont enregistrés tous les évènements vécus. Le test musculaire oriente vers les techniques à utiliser pour libérer ces blocages, ces tensions.",
    item4:
      "La kinésiologie permet de vous libérer de la charge émotionnelle négative qui est associée à un évènement du passé et de retrouver équilibre physique, mental et émotionnel. Elle permet donc de changer le regard sur soi et sur les situations qu'on vit et de faire de nouveaux choix en respectant ses besoins, ses émotions et ses aspirations.",
    item5:
      "Faire appel à la kinésiologie c’est utiliser l’intelligence du corps pour remettre l’énergie en mouvement, faire le tri dans le flot émotionnel pour enfin se sentir léger, apaisé.",
    item6: "Le test musculaire",
    item7: imageTestMusculaire,
    item8: `"Ce qui ne s'exprime pas s'imprime"`,
    item9: `"Le corps est le reflet de notre inconscient"`,
    item10: "Une séance débute par un temps d’échange afin de clarifier la raison de votre venue et d’identifier votre objectif de séance. Puis allongé sur une table de massage, le test musculaire permet « d’interroger » votre corps.",
    item11: "Qu’est-ce que le test musculaire ? Il s’agit d’une pression douce et non contraignante qui se pratique le plus souvent sur le muscle du bras. Il nous mène aux causes et aux antidotes du mal être. Il nous permet d’accéder à la mémoire du corps, d’identifier les facteurs contribuant aux blocages et nous amène aux équilibrations afin de retirer la charge émotionnelle négative associée pour rétablir votre mieux être.",
    item12: "Un kinésiologue n’établit ni diagnostic, ni prescription et ne vous demandera jamais d’arrêter un traitement.",
  };

  const Carousel = ({ items }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
      dots: true,
      // dotsClass: 'custom-dots',
      customPaging: (i) => (
        <div
          className=" text-bold text-black"
          style={{
            color: activeSlide === i ? "white" : "black",
            fontSize: activeSlide === i ? "25px" : "18px",
            textDecoration: activeSlide === i ? "underline" : "none",
          }}
        >
          {i + 1}
        </div>
      ),

      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (index) => setActiveSlide(index),
    };

    return (
      <div className=" text-gray-700 font-raleway italic relative ">
        <div className="flex flex-col justify-center  lg:mt-0 lg:ml-10 ml-2 lg:mr-10 mr-2">
        {/* <div className="slider-container"> */}
          <Slider {...settings}>
            <div className={activeSlide === 0 ? "" : "hidden"}>
              <div className="text-sm lg:text-base flex flex-col space-y-2 lg:space-y-8 py-10 mt-32 lg:mt-24">
              <h3 className="text-center bold text-xl "> C'est quoi la kinésiologie</h3>
                <p>{items.item1}</p>
                <p>{items.item2}</p>
                <p>{items.item3}</p>
                <p>{items.item4}</p>
                <p>{items.item5}</p>
              </div>
            </div>
            <div className={activeSlide === 1 ? "" : "hidden"}>
              <div className="h-full flex flex-col justify-center space-y-12 py-10 mt-32">
                <p className="text-center text-bold text-xl ">{items.item6}</p>
                <p>
                  <img
                    className="mx-auto opacity-60"
                    src={items.item7}
                    alt="Test musculaire"
                    style={{ borderRadius: "50% / 50%" }}
                  />
                </p>
                <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-around">
                  <p className="text-center text-white font-tangerine text-4xl lg:text-5xl">
                    {items.item8}
                  </p>
                  <p className="text-center text-white font-tangerine text-4xl lg:text-5xl">
                    {items.item9}
                  </p>
                </div>
              </div>
            </div>
              <div className={activeSlide === 2 ? "" : "hidden"}>
                <div className="text-sm lg:text-base  flex flex-col justify-center space-y-8 lg:space-y-10 py-10 mt-32 lg:mt-30">
                  <h3 className="text-center bold text-xl "> Déroulée d'une séance</h3>
                  <p>{items.item10}</p>
                  <p>{items.item11}</p>
                  <p>{items.item12}</p>
                </div>
              </div>
          </Slider>
          {/* <div className="slider-number">{activeSlide + 1} / {settings.slidesToShow}</div> */}

        {/* </div> */}
        </div>
      </div>
    );
  };
  return (
    <div className="min-h-screen lg:overflow-hidden">
      {/* <Menu /> */}
      <div className="opacity-40" style={{ minHeight: "calc(100% - 100px)" }}>
  <Image
    src="/fondkinesio.jpg"
    alt="Image de fond"
    layout="fill"
    objectFit="cover"
    quality={100}
  />
</div>

      <div style={{height:"100%"}}>
        <Carousel items={wikipedia} />
      </div>
    </div>
  );
}
