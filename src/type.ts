export type typeCategorie = {
  documentId: number;
  nom: string;
  description: string;
};

export type typeProduit = {
  documentId: string;
  nom: string;
  description: string;
  prix: string;
  image: string;
  categorie: {
    documentId: string;
    nom: string;
  };
};
