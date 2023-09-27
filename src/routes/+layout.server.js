import { locales, loadTranslations, translations, defaultLocale } from "$lib/translations";

export async function load({ locals, url, cookies, request }) {
    const { pathname } = url;

    let locale;
    if (locals.client?.user) {
        locale = locals.client.user.lang.toLowerCase();
    } else {
        locale = (cookies.get("lang") || "").toLowerCase();

        if (!locale) {
            locale = `${`${request.headers.get("accept-language")}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();
        }
    }

    const supportedLocales = locales.get().map((l) => l.toLowerCase());

    if (!supportedLocales.includes(locale)) {
        locale = defaultLocale;
    }

    await loadTranslations(locale, pathname);

    return {
        i18n: { locale, route: pathname },
        translations: translations.get(),
        ...(locals.client?.user ? locals.client : {})
    };
}
