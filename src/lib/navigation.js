// Pages du site regroupees par jeu de donnees.
// "match" : debut d'URL qui rend le lien actif ("/species/Gentoo/" active "Par espece").

/** @typedef {{ href: string, label: string, match?: string }} NavLink */
/** @typedef {{ title: string, links: NavLink[] }} NavSection */
/** @typedef {{ label: string, sections: NavSection[] }} NavGroup */

/** @type {NavGroup[]} */
export const navGroups = [
  {
    label: "Manchots",
    sections: [
      {
        title: "Rendu serveur (TP3)",
        links: [
          { href: "/species/Adelie/", match: "/species/", label: "Par espece" },
          { href: "/ancres/", label: "Slider" },
          { href: "/tabs/", label: "Onglets" },
          { href: "/iframe/", label: "Iframe" },
        ],
      },
      {
        title: "Rendu client (TP4)",
        links: [
          { href: "/plot/penguin/", label: "Simple Penguin" },
          { href: "/plot/penguin-filtre/", label: "Penguin avec filtre" },
          { href: "/plot/penguin-filtres/", label: "Penguin avec plusieurs filtres" },
        ],
      },
      {
        title: "Routes parametriques (TP6)",
        links: [
          { href: "/penguins/slider/", label: "Slider" },
          { href: "/penguins/specie/", label: "Par espece" },
          { href: "/penguins/island/", label: "Par ile" },
          { href: "/penguins/sex/", label: "Par sexe" },
        ],
      },
    ],
  },
  {
    label: "Voitures",
    sections: [
      { title: "Rendu client (TP4)", links: [{ href: "/plot/cars/", label: "Voitures" }] },
    ],
  },
  {
    label: "Athletes",
    sections: [
      { title: "Rendu client (TP4)", links: [{ href: "/plot/olympians/", label: "Athletes" }] },
    ],
  },
  {
    label: "Simple",
    sections: [
      { title: "Rendu client (TP4)", links: [{ href: "/plot/simple/", label: "Simple" }] },
    ],
  },
];

/** @param {NavGroup} group */
export const groupLinks = (group) => group.sections.flatMap((section) => section.links);

/**
 * @param {NavLink} link
 * @param {string} path URL de la page courante, avec "/" final
 */
export const isActive = (link, path) => path.startsWith(link.match ?? link.href);

/** @param {URL} url */
export const currentPath = (url) => (url.pathname.endsWith("/") ? url.pathname : url.pathname + "/");
