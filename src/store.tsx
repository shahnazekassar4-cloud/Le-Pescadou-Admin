import { create } from "zustand";
import fetchJSON from "./backend/fetchJSON";
import type { typeProduit } from "./type";

type Store = { produits: typeProduit[]; fetchProduit: () => void };

export const useStore = create((set, get) => ({
  produits: [],
  getProduits: async () => {
    const reponse = await fetchJSON({
      url: "produits?populate=image,categorie",
      method: "GET",
    });

    set({ produits: reponse.data });
  },
}));
