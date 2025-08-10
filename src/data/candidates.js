import andronicoImg from '../assets/candidates/andronico.jpg';
import andronicoViceImg from '../assets/candidates/mariana-prado.jpg';
import andronicoLogoImg from '../assets/logo/alianza_popular.jpeg';

import pavelImg from '../assets/candidates/pavel-aracena.jpg';
import pavelViceImg from '../assets/candidates/vice-pavel.png';
import pavelLogoImg from '../assets/logo/adn.png';

const candidates = [
    {
      id: 1,
      name: "Andrónico Rodríguez Ledezma",
      party: "Alianza Popular",
      puesto: "Presidente",
      image: andronicoImg,
      videoEmbed: "https://youtu.be/JrwWqxCCAHw?si=dTFqyzrgesqgTjgs",
      logoImg: andronicoLogoImg,
      bgColor: "#00b1e2",
      textColor: "#FFFFFF",

      vicepresidente: {
        name: "Mariana Prado",
        party: "Alianza Popular",
        puesto: "Vicepresidente",
        image: andronicoViceImg
      }
    },
    {
        id: 2,
        name: "Pavel Aracena",
        party: "ADN",
        puesto: "Presidente",
        image: pavelImg,
        videoEmbed: "https://youtu.be/JrwWqxCCAHw?si=dTFqyzrgesqgTjgs",
        logoImg: pavelLogoImg,
        bgColor: "#FFF",
        textColor: "#000",
  
        vicepresidente: {
          name: "Víctor Hugo Sergio Núñez del Prado",
          party: "Alianza Popular",
          puesto: "Vicepresidente",
          image: pavelViceImg
        }
      }
  ];
  
  export default candidates;
  