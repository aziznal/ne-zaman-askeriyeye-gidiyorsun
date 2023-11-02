import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export enum Locale {
  EN = "en",
  TR = "tr",
  DE = "de",
}

interface LocaleStore {
  locale: Locale;
  setLocale: (locale: Locale) => any;
}

export const useLocaleStore = create<LocaleStore>()(
  persist<LocaleStore>(
    (set, get) => ({
      locale: get()?.locale ?? Locale.EN,
      setLocale: (locale: Locale) => set({ locale: locale }),
    }),
    {
      name: "locale-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
