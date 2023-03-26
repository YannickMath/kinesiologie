import React from 'react';
import { HiUserCircle, HiLocationMarker} from"react-icons/hi";
import { BiHealth } from"react-icons/bi";
import { AiFillMail } from"react-icons/ai";
import { BsFillTelephoneFill } from"react-icons/bs";

export default function ContactInfo() {
  const infoPersonnel = {
    nom: "Muriel MATHIEU",
    adresse: "45 Boulevard Général de Gaulle, Oullins 69600",
    activité: "Kinésiologie, Réflexologie cranio-sacrée, Nettoyage energétique",
    email: "contact@murielmathieu.fr",
    téléphone: "06 59 98 32 08 ",
  }

  return (
    <div>
      <p>N'hésitez pas à me contacter pour de plus informations, je serais ravi de vous renseigner.</p>
      <p className='flex items-center'><HiUserCircle/>{infoPersonnel.nom}</p>
      <p className='flex items-center'><BiHealth/>{infoPersonnel.activité}</p>
      <p className='flex items-center'><HiLocationMarker/>{infoPersonnel.adresse}</p>
      <p className='flex items-center'><AiFillMail/>{infoPersonnel.email}</p>
      <p className='flex items-center'><BsFillTelephoneFill/>{infoPersonnel.téléphone}</p>
    </div>
  );
};

