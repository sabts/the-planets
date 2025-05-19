export const PLANETS_INFO = {
  mercury: {
    name: "mercury",
    displayName: "Mercury",
    rotationTime: "58.6 days",
    revolutionTime: "87.97 days",
    radius: "2,439.7 km",
    averageTemp: "430°c",
    wikiUrl: "https://es.wikipedia.org/wiki/Mercurio_(planeta)",
    overview: {
      info: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      image: "/assets/planet-mercury.svg"
    },
    internalStructure: {
      info: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
      image: "/assets/planet-mercury-internal.svg"
    },
    surfaceGeology: {
      info: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
      image: {
        planet: "/assets/planet-mercury.svg",
        geology: "/assets/geology-mercury.png"
      }
    }
  },

  venus: {
    name: "venus",
    displayName: "Venus",
    rotationTime: "243 days",
    revolutionTime: "224.7 days",
    radius: "6,051.8 km",
    averageTemp: "471°c",
    wikiUrl: "https://es.wikipedia.org/wiki/Venus_(planeta)",
    overview: {
      info: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
      image: "/assets/planet-venus.svg"
    },
    internalStructure: {
      info: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
      image: "/assets/planet-venus-internal.svg"
    },
    surfaceGeology: {
      info: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
      image: {
        planet: "/assets/planet-venus.svg",
        geology: "/assets/geology-venus.png"
      }
    }
  },

  earth: {
    name: "earth",
    displayName: "Earth",
    rotationTime: "0.99 days",
    revolutionTime: "365.26 days",
    radius: "6,371 km",
    averageTemp: "16°c",
    wikiUrl:"https://es.wikipedia.org/wiki/Tierra",
    overview: {
      info: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
      image: "/assets/planet-earth.svg"
    },
    internalStructure: {
      info: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
      image: "/assets/planet-mercury-internal.svg"
    },
    surfaceGeology: {
      info: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
      image: {
        planet: "/assets/planet-earth.svg",
        geology: "/assets/geology-earth.png" 
      }
    }
  },
  mars: {
    name: "mars",
    displayName: "Mars",
    rotationTime: "1.03 days",
    revolutionTime: "1.88 years",
    radius: "3,389.5 km",
    averageTemp: "−28°c",
    wikiUrl:"https://es.wikipedia.org/wiki/Marte_(planeta)",
    overview: {
      info: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
      image: "/assets/planet-mars.svg"
    },
    internalStructure: {
      info: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
      image: "/assets/planet-mars-internal.svg"
    },
    surfaceGeology: {
      info: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
      image: {
        planet: "/assets/planet-mars.svg",
        geology: "/assets/geology-mars.png"
      }
    }
  },
  jupiter: {
    name: "jupiter",
    displayName: "Jupiter",
    rotationTime: "9.93 hours",
    revolutionTime: "11.86 years",
    radius: "69,911 km",
    averageTemp: "-108°c",
    wikiUrl:"https://es.wikipedia.org/wiki/J%C3%BApiter_(planeta)",
    overview: {
      info: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
      image: "/assets/planet-jupiter.svg"
    },
    internalStructure: {
      info: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
      image: "/assets/planet-mercury-internal.svg"
    },
    surfaceGeology: {
      info: "he best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
      image: {
        planet: "/assets/planet-jupiter.svg",
        geology: "/assets/geology-jupiter.png"
      }
    }
  },
};