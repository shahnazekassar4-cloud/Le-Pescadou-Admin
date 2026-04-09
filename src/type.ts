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
  image: { id: number; url: string } | null;
  categorie: {
    documentId: string;
    nom: string;
  };
};
