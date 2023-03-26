import { useState } from "react";
import { GrValidate } from"react-icons/gr";

export default function Form() {
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    nom: "",
    soin: "",
    email: "",
    objet: "",
    message: "",
    // access_key: "e5ce6e8e-4711-4e88-b42e-e693d5cb2041",
    access_key: "2ed19dd2-3e07-41da-aac0-4762468c6554",


  });

  const [selectedOption, setSelectedOption] = useState("option0");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setFormData({
      ...formData,
      soin: event.target.value,
    });
  };
  console.log("FORMDATA.SOIN",formData.soin)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
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
          message: "",
        });
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="md:ml-4 flex-col space-y-4">
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
        <button className="border-2 w-2/3 bg-green-50 rounded-full" onClick={handleSubmit}>
          {success ? "Message Sent" : "Send Message"}
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
