const data = [
  { icon: "/img/Strukturierter Lehrplan.png", title: "Strukturierter Lehrplan" },
  {
    icon: "/img/Fahrstunden auch in Englisch.png",
    title: "Fahrstunden auch in Englisch",
  },
  {
    icon: "/img/Deine Fahrstunde gehört dir allein.png",
    title: "Deine Fahrstunde gehört dir allein",
  },
  { icon: "/img/Wir sind jung und digital.png", title: "Wir sind jung und digital" },
  {
    icon: "/img/Deine Fahrstunde gehört dir allein.png",
    title: "Deine Fahrstunde gehört dir allein",
  },
  { icon: "/img/Spezialist für Umschreiber.png", title: "Spezialist für Umschreiber" },
  { icon: "/img/Strukturierter Lehrplan2.png", title: "Strukturierter Lehrplan" },
  { icon: "/img/Du stehst im Mittelpunkt.png", title: "Du stehst im Mittelpunkt" },
  {
    icon: "/img/Was zählt, ist deine Selbsteinschätzung.png",
    title: "Was zählt, ist deine Selbsteinschätzung",
  },
];

const Zertifikats = () => {
  return (
    <section className="zertifikats flex-col wrapper">
      <h2>Schritte zum Erhalt des Zertifikats</h2>
      <div className="list">
        {data.map((item, index) => (
          <div className="box flex-col" key={index}>
            <img src={item.icon} alt="" />
            {item.title}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Zertifikats;
