const PlanetCard = () => {
    return (
      <>
        <img src="/assets/planet-mercury.svg" alt="Mercury" />
  
        <h2>MERCURY</h2>
        <p>
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial planets in
          the Solar System, and is a rocky body like Earth.
        </p>
  
        <a href="https://es.wikipedia.org/wiki/Mercurio_(planeta)" target="_blank" rel="noopener noreferrer">
          Source: Wikipedia
        </a>
  
        <section>
          <div>
            <span>ROTATION TIME</span>
            <span>58.6 days</span>
          </div>
          <div>
            <span>REVOLUTION TIME</span>
            <span>87.97 days</span>
          </div>
          <div>
            <span>RADIUS</span>
            <span>2,439.7 km</span>
          </div>
          <div>
            <span>AVERAGE TEMP.</span>
            <span>430°C</span>
          </div>
        </section>
      </>
    );
  };
  
  export default PlanetCard;