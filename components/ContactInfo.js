import React from "react";
import { HiUserCircle, HiLocationMarker } from "react-icons/hi";
import { BiHealth } from "react-icons/bi";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function ContactInfo() {
  const infoPersonnel = {
    nom: "Muriel MATHIEU",
    adresse: "45 Boulevard Général de Gaulle, Oullins 69600",
    activité: "Kinésiologie, Réflexologie cranio-sacrée, Nettoyage energétique",
    email: "contact@murielmathieu.fr",
    téléphone: "06 59 98 32 08 ",
  };

  return (
    <div className="md:space-y-4 space-y-1 ">
      <p className="font-tangerine text-3xl mb-4 md:mb-16 text-green-600">
        "N'hésitez pas à me contacter pour de plus informations, je serais ravi
        de vous renseigner".
      </p>
      <p className="flex items-center">
        <HiUserCircle className="md:mr-2   mr-4 justify-items-center" />
        {infoPersonnel.nom}
      </p>
      <p className="flex items-center ">
        <HiLocationMarker className="md:mr-2  mr-4  justify-items-center" />
        {infoPersonnel.adresse}
      </p>
      <p className="flex items-center">
        <AiFillMail className="md:mr-2  mr-4 justify-items-center" />
        <a
          className="md:mb-1 underline text-green-600"
          href={`mailto:${infoPersonnel.email}`}
        >
          {infoPersonnel.email}
        </a>
      </p>
      <p className="flex items-center ">
        <BsFillTelephoneFill className="md:mr-2  mr-4 justify-items-center" />
        {infoPersonnel.téléphone}
      </p>
    </div>
  );
}
