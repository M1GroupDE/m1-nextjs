const data = [
  { name: "Fahrsimulator DEGENER 360°" },
  {
    name: "Moderne Fahrzeugflotte",
  },
  {
    name: "Mehrsprachiger Unterricht",
  },
  {
    name: "Über 30 Fahrlehrer/-innen",
  },
  {
    name: "Strukturierter Lehrplan",
  },
  {
    name: "Intensiv- und Ferienkurse",
  },
  {
    name: "Eigener Übungsplatz",
  },
  {
    name: "Digitale Lernmethoden",
  },
  {
    name: "Du stehst im Mittelpunkt",
  },
  {
    name: "Events & Aktionen",
  },
  {
    name: "Führerschein-Finanzierung",
  },
  {
    name: "Persönliche Beratung & Organisation",
  },
];

const Besonderheiten = () => {
  return (
    <section className="besonderheiten">
      <div className="wrapper">
        <h2>Angebote und Besonderheiten</h2>

        <div className="list">
          {data.map((item, index) => (
            <div className="item flex-row" key={index}>
              <small className="no">{index + 1 < 10 ? `0${index + 1}` : index + 1}</small>
              <strong className="name">{item.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Besonderheiten;
