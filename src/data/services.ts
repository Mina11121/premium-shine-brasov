import covoareImg from "@/assets/service-covoare.jpg";
import atelierImg from "@/assets/atelier.jpg";
import processDetailImg from "@/assets/process-detail.jpg";

export type CarpetType = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  details: string[];
};

export const carpetTypes: CarpetType[] = [
  {
    id: "persane",
    number: "01",
    title: "Covoare persane & orientale",
    tagline: "Tabriz, Isfahan, Heriz, Kashan",
    description:
      "Piese de patrimoniu spălate manual, cu apă rece și șampon neutru. Niciun detergent agresiv, niciun risc pentru vopsea sau urzeală.",
    image: atelierImg,
    details: [
      "Test de migrare a culorilor înainte de spălare",
      "Spălare manuală pe ambele fețe, periere cu peri naturali",
      "Tratament dedicat franjurilor — albire blândă, fără înălbitor",
      "Uscare suspendată pe verticală pentru a păstra forma",
    ],
  },
  {
    id: "lana",
    number: "02",
    title: "Covoare din lână",
    tagline: "Bucureștene, moderne, kilim",
    description:
      "Lâna este o fibră vie. O tratăm cu produse pH-neutre care îndepărtează praful, acarienii și petele fără să o usuce.",
    image: covoareImg,
    details: [
      "Praf-out mecanizat pentru extragerea prafului adânc",
      "Detratare specifică pentru păr de animale și acarieni",
      "Spălare cu injecție-extracție și uscare controlată",
      "Periere finală care reactivează textura naturală",
    ],
  },
  {
    id: "delicate",
    number: "03",
    title: "Mătase, viscoză & fibre delicate",
    tagline: "Tratament cu mănuși",
    description:
      "Fibrele fine cer altă chimie și altă răbdare. Spălare la rece, fără frecare mecanică, cu uscare lentă în mediu controlat.",
    image: processDetailImg,
    details: [
      "Soluții cu pH neutru, fără solvenți agresivi",
      "Spălare exclusiv manuală, fără mașină rotativă",
      "Uscare orizontală pe grătare, ferită de soare direct",
      "Garanție: zero deformări, zero pierderi de luciu",
    ],
  },
  {
    id: "blana",
    number: "04",
    title: "Blănuri & covoare cu păr lung",
    tagline: "Shaggy, miel, vacă, capră",
    description:
      "Părul lung ascunde praf, păr de animale și miros. Procesul nostru îl scoate complet și redă moliciunea de prima zi.",
    image: atelierImg,
    details: [
      "Pre-tratament cu agent antibacterian și deodorizant",
      "Spălare cu pieptănare profundă fibră cu fibră",
      "Ozonificare pentru eliminarea completă a mirosurilor",
      "Uscare cu jet de aer rece — fără degradarea pielicelei",
    ],
  },
];