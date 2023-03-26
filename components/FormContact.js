import { useState } from "react";

export default function Form() {
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "",
    message: "",
    access_key: "e5ce6e8e-4711-4e88-b42e-e693d5cb2041",
  });

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
    <div onSubmit={handleSubmit}>
      <h4 className="contentTitle">Envoyez moi un mail directement</h4>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={formData.name}
          id="contactName"
          name="name"
          placeholder="Name"
          required
        />
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
        />
      </div>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={formData.subject}
          id="contactSubject"
          name="subject"
          placeholder="Subject"
          required
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
        ></textarea>
      </div>
      <div className="col-12 formGroup formSubmit">
        <button className="btn">
          {success ? "Message Sent" : "Send Message"}
        </button>
      </div>
    </div>
  );
};


