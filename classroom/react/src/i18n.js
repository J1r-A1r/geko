import i18next, { init } from "i18next";
import { initReactI18next } from "react-i18next";

i18next
.use(initReactI18next)
.init({
    resource: {
        en: {
            translation: en
        }
        de: {
            translation: de
        }
        hy: {
            translation: hy
        }
    }
    lng: localStorage.getItem("language")
    fallbackLng: "en"
})

export default i18next