export default function Tarifs() {
  const details = {
    item1: "Séance de kinésiologie - durée 1 h 30 : 70 euros.",
    item2: "Séance de réflexologie cranio-sacrée - durée 1 h 30 : 70 euros.",
    item3: "Nettoyage énergétique - durée 1 h : 60 euros.",
    item4: "Paiement par espèces ou par chèque.",
    item5: "Merci de me prévenir au moins 48h en avance pour toute annulation.",
  };

  return (
    <div className="space-y-2 md:mt-10 mt-8 font-roboto p-5 lg:p-0">
      <h3 className="font-semibold underline">Tarifs</h3>
      <p>{details.item1}</p>
      <p>{details.item2}</p>
      <p>{details.item3}</p>
      <p>{details.item4}</p>
      <p>{details.item5}</p>
    </div>
  );
}
