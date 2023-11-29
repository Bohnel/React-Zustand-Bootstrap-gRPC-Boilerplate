import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import deJSON from "@/assets/translations/de.json";

i18n.use(initReactI18next).init({
  resources: {
    de: { ...deJSON },
  },
  lng: "de",
});
