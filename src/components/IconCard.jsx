const IconCard = ({ title, data }) => {
  return (
    <section className="iconcard flex-col wrapper">
      <h2>{title}</h2>
      <div className="list">
        {data.map((item, index) => (
          <div className="box flex-col" key={index}>
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            {item.description && <p>{item.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconCard;
