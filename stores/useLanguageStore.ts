// stores/useLanguageStore.ts
import { create } from "zustand";

export type Language = "fr" | "en" | "es" | "it";

type Store = {
    lang: Language;
    setLang: (lang: Language) => void;
};

export const useLanguageStore = create<Store>((set) => ({
    lang: "fr", // défaut
    setLang: (lang) => set({ lang }),
}));
