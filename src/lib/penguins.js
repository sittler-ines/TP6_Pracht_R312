// Jeu de donnees brut du depot de base (sexes : MALE / FEMALE / null).
import penguins from "../assets/penguins.json";

// On retire les manchots sans mesures, inutilisables dans les graphiques.
export const validPenguins = penguins.filter(
  (p) =>
    p.culmen_length_mm != null &&
    p.culmen_depth_mm != null &&
    p.flipper_length_mm != null &&
    p.body_mass_g != null,
);

export const speciesList = ["Adelie", "Chinstrap", "Gentoo"];

// Memes couleurs que la palette par defaut de Plot (tableau10), dans l'ordre
// alphabetique des especes : les graphiques de l'accueil et des pages especes concordent.
/** @type {Record<string, string>} */
export const speciesColors = {
  Adelie: "#4e79a7",
  Chinstrap: "#f28e2b",
  Gentoo: "#e15759",
};

/** @type {Record<string, { name: string, text: string }>} */
export const speciesInfos = {
  Adelie: {
    name: "Manchot Adelie",
    text: "Le plus petit des trois. Present sur les trois iles de l'archipel, avec un bec court et epais.",
  },
  Chinstrap: {
    name: "Manchot a jugulaire",
    text: "Reconnaissable a la fine bande noire sous le menton. Observe uniquement sur l'ile Dream.",
  },
  Gentoo: {
    name: "Manchot papou",
    text: "Le plus grand et le plus lourd, avec de longues nageoires. Observe uniquement sur l'ile Biscoe.",
  },
};

/** @param {number[]} values */
const mean = (values) => values.reduce((sum, v) => sum + v, 0) / values.length;

/** @param {string} species */
export function speciesStats(species) {
  const list = validPenguins.filter((p) => p.species === species);
  return {
    count: list.length,
    islands: [...new Set(list.map((p) => p.island))],
    bodyMass: Math.round(mean(list.map((p) => p.body_mass_g))),
    flipper: Math.round(mean(list.map((p) => p.flipper_length_mm))),
    culmen: mean(list.map((p) => p.culmen_length_mm)).toFixed(1),
  };
}
