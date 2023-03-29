import { useState } from "react";
import { GrValidate } from"react-icons/gr";

export default function Form() {
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    nom: "",
    soin: "",
    téléphone: "",
    email: "",
    objet: "",
    message: "",
    access_key: process.env.NEXT_PUBLIC_API_KEY,
    
  });

  const [selectedOption, setSelectedOption] = useState("Choisir un soin");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setFormData({
      ...formData,
      soin: event.target.value,
    });
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Vérifie que tous les champs sont remplis
    if (
      !formData.nom ||
      !formData.soin ||
      !formData.téléphone ||
      !formData.email ||
      !formData.objet ||
      !formData.message
    ) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
  
    const data = new FormData();
    data.append("nom", formData.nom);
    data.append("soin", formData.soin);
    data.append("téléphone", formData.téléphone);
    data.append("email", formData.email);
    data.append("objet", formData.objet);
    data.append("message", formData.message);
    data.append("access_key", process.env.NEXT_PUBLIC_API_KEY);
  
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setFormData({
          ...formData,
          nom: "",
          soin: selectedOption,
          email: "",
          objet: "",
          téléphone: "",
          message: "",
        });
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };
  

  return (
    <div className="font-roboto lg:ml-4 flex-col space-y-4">
      <h4>Envoyez moi un mail directement</h4>
      <div className=" rounded-xl relative">
        <input
          type="text"
          onChange={handleChange}
          value={formData.nom}
          id="contactNom"
          name="nom"
          placeholder="Nom"
          required
          className="outline-none border-b-2"
        />
      </div>
      <div>
        <label htmlFor="selectSoin" className="text-gray-400">
          Choisir un soin :
        </label>
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          type="text"
          id="slectSoin"
          name="soin"
          required
          // className="outline-none border-2 "
        >
          <option value="Aucune sélectoin de soin">Choisir le type de soin</option>
          <option value="kinésiologie">Kinésiologie</option>
          <option value="Réflexologie cranio-sacrée">Réflexologie cranio-sacrée</option>
          <option value="Nettoyage energétique">Nettoyage energétique</option>
        </select>
      </div>
      <div>
        <input
          type="email"
          onChange={handleChange}
          value={formData.email}
          id="contactEmail"
          name="email"
          placeholder="Email"
          required
          className="outline-none border-b-2"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={formData.objet}
          id="contactObjet"
          name="objet"
          placeholder="Objet"
          required
          className="outline-none border-b-2"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={formData.téléphone}
          id="contactTéléphone"
          name="téléphone"
          placeholder="Téléphone"
          required
          className="outline-none border-b-2"
        />
      </div>
      <div>
        <textarea
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="contactMessage"
          rows="5"
          placeholder="Message"
          required
          className="w-4/5 border-2 outline-none"
        ></textarea>
      </div>
      <div className="flex items-center">
        <button className="border-2 w-2/3 lg:w-1/5 border-yellow-500 bg-green-200 rounded-full" onClick={handleSubmit}>
          {success ? "Message envoyé" : "Envoyer message"}
        </button>
        {success && (
          <div >
            <GrValidate size={30} />

          </div>
        )}
      </div>
    </div>
  );
}
