export type typeCategorie = {
  id: number;
  nomCategorie: string;
  descriptionCategorie: string;
};

export const listeCategories: typeCategorie[] = [
  {
    id: 2,
    nomCategorie: "Produits Mer",
    descriptionCategorie: "Produits frais et préparations de la mer",
  },
  {
    id: 9,
    nomCategorie: "Volaille",
    descriptionCategorie: "Produits de volaille",
  },
  {
    id: 10,
    nomCategorie: "Porc",
    descriptionCategorie: "Produits de porc et charcuterie",
  },

  {
    id: 6,
    nomCategorie: "Rillettes",
    descriptionCategorie: "Bocaux de 220gr.",
  },
  {
    id: 7,
    nomCategorie: "Tartinothèque",
    descriptionCategorie: "Tartinables et crèmes apéritives. Bocaux de 220gr.",
  },
  {
    id: 8,
    nomCategorie: "Kif-Apéro",
    descriptionCategorie: "Produits pour l'apéritif",
  },

  {
    id: 3,
    nomCategorie: "Plateaux",
    descriptionCategorie:
      "Plateaux charcuterie, fromage et fruits de mer. Contactez-nous pour avoir une estimation prix",
  },
  {
    id: 4,
    nomCategorie: "Plats Cuisinés",
    descriptionCategorie:
      "Plats cuisinés en bocaux ou traiteur. Contactez-nous pour avoir une estimation prix",
  },
  {
    id: 5,
    nomCategorie: "Soupes",
    descriptionCategorie:
      "Soupes artisanales longue conservation en bouteille de 1L.",
  },
  {
    id: 1,
    nomCategorie: "Sauces",
    descriptionCategorie: "Sauces artisanales en bocaux",
  },
];
