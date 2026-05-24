import postConstructieImg from "@/assets/service-post-constructie.jpg";
import administrareImg from "@/assets/service-administrare.jpg";
import covoareImg from "@/assets/service-covoare.jpg";
import birouriImg from "@/assets/service-birouri.jpg";
import autoImg from "@/assets/service-auto.jpg";
import generalaImg from "@/assets/service-generala.jpg";

export type Service = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  details: string[];
};

export const services: Service[] = [
  {
    id: "administrare",
    number: "01",
    title: "Administrarea clădirilor",
    tagline: "Management tehnic complet",
    description:
      "Curățenie, întreținere, inspecție și aprovizionare astfel încât activitatea dumneavoastră să se desfășoare în cele mai bune condiții, fără întreruperi.",
    image: administrareImg,
    details: [
      "Plan personalizat de mentenanță preventivă și corectivă",
      "Manager de cont dedicat și raportare lunară transparentă",
      "Aprovizionare cu consumabile sanitare și produse de curățenie",
      "Inspecții periodice ale instalațiilor și suprafețelor",
    ],
  },
  {
    id: "post-constructie",
    number: "02",
    title: "Curățenie post-construcție",
    tagline: "Civilă și industrială",
    description:
      "Economisiți timp și energie lăsând în grija noastră această operațiune complexă. Acceptăm orice provocare, de la apartamente la hale industriale.",
    image: postConstructieImg,
    details: [
      "Eliminarea molozului fin, prafului de ciment și a reziduurilor de șantier",
      "Curățarea ferestrelor, ramelor și suprafețelor vitrate la standarde de recepție",
      "Decapare, polișare și protejare pardoseli (gresie, marmură, beton, parchet)",
      "Echipamente industriale: aspiratoare HEPA, mașini auto-propulsate, polisoare",
    ],
  },
  {
    id: "covoare",
    number: "03",
    title: "Curățare și spălare covoare",
    tagline: "Tratament profesional în atelier",
    description:
      "Pas cu pas redăm strălucirea de la bun început prin curățarea mecanizată, șamponarea și lustruirea covoarelor — indiferent de fibră sau dimensiune.",
    image: covoareImg,
    details: [
      "Preluare și livrare gratuită în Brașov și zonele limitrofe",
      "Detratare pete dificile: vin, cafea, urină animale, grăsimi",
      "Spălare cu echipamente automate, soluții bio-degradabile",
      "Uscare controlată în spațiu dedicat, periere și împachetare",
    ],
  },
  {
    id: "birouri",
    number: "04",
    title: "Întreținere zilnică firme & birouri",
    tagline: "Mediu de lucru care inspiră",
    description:
      "Un mediu de lucru curat și ordonat este mai mult decât unul sănătos — este un mediu care inspiră și motivează echipa dumneavoastră.",
    image: birouriImg,
    details: [
      "Program flexibil: dimineața devreme, seara sau în weekend",
      "Personal instruit, verificat și echipat uniform",
      "Igienizarea grupurilor sanitare, kitchenetelor și sălilor de ședință",
      "Contracte adaptate dimensiunii și frecvenței necesare",
    ],
  },
  {
    id: "auto",
    number: "05",
    title: "Curățarea tapițeriilor auto",
    tagline: "Detailing interior premium",
    description:
      "Folosim produse și echipamente adaptate tapițeriilor din piele sau material textil, care curăță și protejează suprafețele fără să le degradeze.",
    image: autoImg,
    details: [
      "Aspirare profundă, extracție cu injecție/extracție",
      "Tratamente specifice pentru piele naturală și ecologică",
      "Decontaminare și ozonificare pentru eliminarea mirosurilor",
      "Servicii pentru autoturisme, SUV, vans și flote corporate",
    ],
  },
  {
    id: "generala",
    number: "06",
    title: "Curățenie generală",
    tagline: "De la A la Z",
    description:
      "Vă puteți baza pe o echipă de profesioniști care vă stă la dispoziție cu soluții personalizate pentru orice tip de spațiu rezidențial sau comercial.",
    image: generalaImg,
    details: [
      "Curățenie de profunzime în apartamente, vile, spații comerciale",
      "Spălare geamuri, jaluzele, draperii și mobilier tapițat",
      "Igienizare bucătării profesionale, hote, electrocasnice",
      "Pachete one-time sau abonamente periodice",
    ],
  },
];