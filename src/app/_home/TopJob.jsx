const TopJob = () => {
  return (
    <section className="topjob flex-row wrapper">
      <img src="/img/topjob.png" alt="" />
      <div className="content flex-col">
        <h2>Wir sind stolz darauf, das TOPJOB Siegel zu tragen!</h2>
        <ul className="flex-col">
          <li>
            Bei den Academy Fahrschulen steht deine Zufriedenheit und dein Erfolg an
            erster Stelle. Das TOPJOB Siegel bestätigt unsere Hingabe und unser
            Engagement, dir die beste Ausbildung und Unterstützung auf deinem Weg zum
            Führerschein zu bieten. 
          </li>
          <strong>Warum wir?</strong>
          <li>
            Erlebe den Unterschied! Komm zu uns und spür, warum so viele Fahrschüler uns
            ihr Vertrauen schenken. Gemeinsam machen wir deinen Traum vom Führerschein
            wahr. 
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TopJob;
