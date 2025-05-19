const PlanetCard = ({ name, image, description, rotationTime, revolutionTime, radius, averageTemp,wikiUrl }) => {
  return (
    <div className="planet-card">
      <img src={image} alt={name} />

      <h2>{name.toUpperCase()}</h2>
      <p>{description}</p>

      <a href={wikiUrl}>
        Source: Wikipedia
      </a>

      <section>
        <div>
          <span>ROTATION TIME</span>
          <span>{rotationTime}</span>
        </div>
        <div>
          <span>REVOLUTION TIME</span>
          <span>{revolutionTime}</span>
        </div>
        <div>
          <span>RADIUS</span>
          <span>{radius}</span>
        </div>
        <div>
          <span>AVERAGE TEMP.</span>
          <span>{averageTemp}</span>
        </div>
      </section>
    </div>
  );
};

export default PlanetCard;