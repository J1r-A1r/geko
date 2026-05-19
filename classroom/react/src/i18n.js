import i18next, { init } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json"

i18next
.use(initReactI18next)
.init({
    resource: {
        en: {
            translation: en
        }
    }
})

export default i18next