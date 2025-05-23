import { COLORS } from "../styles/colors";

const MERCURY = {
  images:{
    0: "/assets/planet-mercury.svg",
  }


}

export const PLANETS_INFO = [
  {
    name: "mercury",
    displayName: "Mercury",
    rotationTime: "58.6 days",
    revolutionTime: "87.97 days",
    radius: "2,439.7 km",
    averageTemp: "430°c",
    size: "111px",
    color: COLORS.mercury,
    wikiUrl: "https://es.wikipedia.org/wiki/Mercurio_(planeta)",
    overview: {
      info: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      image: "/assets/planet-mercury.svg",
    },
    internalStructure: {
      info: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
      image: "/assets/planet-mercury-internal.svg",
    },
    surfaceGeology: {
      info: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
      image: {
        planet: "/assets/planet-mercury.svg",
        geology: "/assets/geology-mercury.png",
      },
    },
  },

  {
    name: "venus",
    displayName: "Venus",
    rotationTime: "243 days",
    revolutionTime: "224.7 days",
    radius: "6,051.8 km",
    averageTemp: "471°c",
    size: "154px",
    color: COLORS.venus,
    wikiUrl: "https://es.wikipedia.org/wiki/Venus_(planeta)",
    overview: {
      info: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
      image: "/assets/planet-venus.svg",
    },
    internalStructure: {
      info: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
      image: "/assets/planet-venus-internal.svg",
    },
    surfaceGeology: {
      info: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
      image: {
        planet: "/assets/planet-venus.svg",
        geology: "/assets/geology-venus.png",
      },
    },
  },

  {
    name: "earth",
    displayName: "Earth",
    rotationTime: "0.99 days",
    revolutionTime: "365.26 days",
    radius: "6,371 km",
    averageTemp: "16°c",
    size: "173px",
    color: COLORS.earth,
    wikiUrl: "https://es.wikipedia.org/wiki/Tierra",
    overview: {
      info: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
      image: "/assets/planet-earth.svg",
    },
    internalStructure: {
      info: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
      image: "/assets/planet-mercury-internal.svg",
    },
    surfaceGeology: {
      info: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
      image: {
        planet: "/assets/planet-earth.svg",
        geology: "/assets/geology-earth.png",
      },
    },
  },
  {
    name: "mars",
    displayName: "Mars",
    rotationTime: "1.03 days",
    revolutionTime: "1.88 years",
    radius: "3,389.5 km",
    averageTemp: "−28°c",
    size: "129px",
    color: COLORS.mars,
    wikiUrl: "https://es.wikipedia.org/wiki/Marte_(planeta)",
    overview: {
      info: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
      image: "/assets/planet-mars.svg",
    },
    internalStructure: {
      info: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
      image: "/assets/planet-mars-internal.svg",
    },
    surfaceGeology: {
      info: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
      image: {
        planet: "/assets/planet-mars.svg",
        geology: "/assets/geology-mars.png",
      },
    },
  },
  {
    name: "jupiter",
    displayName: "Jupiter",
    rotationTime: "9.93 hours",
    revolutionTime: "11.86 years",
    radius: "69,911 km",
    averageTemp: "-108°c",
    size: "224px",
    color: COLORS.jupiter,
    wikiUrl: "https://es.wikipedia.org/wiki/J%C3%BApiter_(planeta)",
    overview: {
      info: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
      image: "/assets/planet-jupiter.svg",
    },
    internalStructure: {
      info: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
      image: "/assets/planet-mercury-internal.svg",
    },
    surfaceGeology: {
      info: "he best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
      image: {
        planet: "/assets/planet-jupiter.svg",
        geology: "/assets/geology-jupiter.png",
      },
    },
  },
  {
    name: "saturn",
    displayName: "Saturn",
    rotationTime: "10.8 hours",
    revolutionTime: "29.46 years",
    radius: "58,232 km",
    averageTemp: "-138°c",
    size: " 256px",
    color: COLORS.saturn,
    wikiUrl: "https://es.wikipedia.org/wiki/Saturno_(planeta)",
    overview: {
      info: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
      image: "/assets/planet-saturn.svg",
    },
    internalStructure: {
      info: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
      image: "/assets/planet-saturn-internal.svg",
    },
    surfaceGeology: {
      info: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
      image: {
        planet: "/assets/planet-saturn.svg",
        geology: "/assets/geology-saturn.png",
      },
    },
  },
  {
    name: "uranus",
    displayName: "Uranus",
    rotationTime: "17.2 hours",
    revolutionTime: "84 years",
    radius: "25,362 km",
    averageTemp: "-195°c",
    size: "176px",
    color: COLORS.uranus,
    wikiUrl: "https://es.wikipedia.org/wiki/Urano_(planeta)",
    overview: {
      info: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
      image: "/assets/planet-uranus.svg",
    },
    internalStructure: {
      info: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
      image: "/assets/planet-uranus-internal.svg",
    },
    surfaceGeology: {
      info: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
      image: {
        planet: "/assets/planet-uranus.svg",
        geology: "/assets/geology-uranus.png",
      },
    },
  },
  {
    name: "neptune",
    displayName: "Neptune",
    rotationTime: "16.08 hours",
    revolutionTime: "164.79 years",
    radius: "24,622 km",
    averageTemp: "-195°c",
    size: "-201°c",
    color: COLORS.neptune,
    wikiUrl: "https://es.wikipedia.org/wiki/Neptuno_(planeta)",
    overview: {
      info: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
      image: "/assets/planet-neptune.svg",
    },
    internalStructure: {
      info: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
      image: "/assets/planet-neptune-internal.svg",
    },
    surfaceGeology: {
      info: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
      image: {
        planet: "/assets/planet-neptune.svg",
        geology: "/assets/geology-neptune.png",
      },
    },
  },
];
