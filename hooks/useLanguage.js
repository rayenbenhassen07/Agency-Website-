// useModelAdmin.js
import { create } from 'zustand'

const useLanguage = create((set) => ({
  valeur: "en",
  toArabic: () => set({ valeur: "ar" }),
  toEnglish: () => set({ valeur: "en" }),
  toFrensh: () => set({ valeur: "fr" }),
}));

export default useLanguage;