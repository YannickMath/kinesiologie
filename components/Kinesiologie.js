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
  };

  const Carousel = ({ items }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
      dots: true,
      // dotsClass: 'custom-dots',
      customPaging: (i) => (
        <div
          className="text-bold text-black"
          style={{color: activeSlide === i ? 'white' : 'black', fontSize: activeSlide === i ? '25px' : '18px', textDecoration: activeSlide === i ? 'underline' : 'none'}}
        >
          {i+1}
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
      <div className="h-screen text-gray-700 font-raleway italic overflow-hidden  ">
        <div className="h-full flex flex-col justify-center ml-10 mr-10">
          <Slider {...settings}>
            <div className={activeSlide === 0 ? "" : "hidden"}>
              <div className="h-full flex flex-col justify-center space-y-10 py-10 mt-10">
                <p style={{ marginLeft: "30%" }}>{items.item1}</p>
                <p>{items.item2}</p>
                <p>{items.item3}</p>
                <p>{items.item4}</p>
                <p>{items.item5}</p>
              </div>
            </div>
            <div className={activeSlide === 1 ? "" : "hidden"}>
              <div className="h-full flex flex-col justify-center space-y-12 py-10 mt-10">
                <p className="text-center text-xl">{items.item6}</p>
                <p>
                  <img
                    className="mx-auto opacity-60"
                    src={items.item7}
                    alt="Test musculaire"
                    style={{ borderRadius: "50% / 50%" }}
                  />
                </p>
                <div className="flex justify-around">
                  <p className="text-center text-white font-tangerine text-5xl">
                    {items.item8}
                  </p>
                  <p className="text-center text-white font-tangerine text-5xl">
                    {items.item9}
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen overflow-hidden">
      <Menu />
      <div className="opacity-40">
        <Image
          src="/fondkinesio.jpg"
          alt="Image de fond"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <Carousel items={wikipedia} />
    </div>
  );
}
