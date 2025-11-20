const Courses = ({ data }) => {
  return (
    <section className="courses flex-col wrapper">
      <h2>Kurse</h2>

      <div className="list">
        {data.map((item, index) => (
          <div key={index} className="box flex-col">
            <div className="head flex-row">
              <h3 className="title">{item.title}</h3>
              <small className="length">{item.length}</small>
            </div>
            <p className="level">{item.level}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
