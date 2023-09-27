/* eslint-disable new-cap */
import i18n from "sveltekit-i18n";
import lang from "./lang.json";

export const defaultLocale = "fr";

export const config = {
    log: {
        level: "warn",
    },
    translations: {
        en: { lang },
        fr: { lang },
    },
    loaders: [
        {
            locale: "en",
            key: "menu",
            loader: async() => (await import("./en/menu.json")).default
        },
        {
            locale: "en",
            key: "buttons",
            loader: async() => (await import("./en/buttons.json")).default
        },
        {
            locale: "en",
            key: "login",
            routes: ["/login/"],
            loader: async() => (await import("./en/login.json")).default
        },
        {
            locale: "en",
            key: "spaces",
            routes: ["/spaces/"],
            loader: async() => (await import("./en/spaces.json")).default
        },
        {
            locale: "fr",
            key: "menu",
            loader: async() => (await import("./fr/menu.json")).default
        },
        {
            locale: "fr",
            key: "login",
            routes: ["/login/"],
            loader: async() => (await import("./fr/login.json")).default
        },
        {
            locale: "fr",
            key: "buttons",
            loader: async() => (await import("./fr/buttons.json")).default
        },
        {
            locale: "fr",
            key: "spaces",
            routes: ["/spaces/"],
            loader: async() => (await import("./fr/spaces.json")).default
        },
    ]
};

export const { t, loading, locales, locale, translations, loadTranslations, addTranslations, setLocale, setRoute } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log("Loading translations..."));
