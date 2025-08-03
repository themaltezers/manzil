import en from "./en";
import fr from "./fr";
import es from "./es";
import it from "./it";

export const footerTranslations = {
    en,
    fr,
    es,
    it,
};

export type FooterLanguage = keyof typeof footerTranslations;

export function tFooter<T = string>(path: string, lang: FooterLanguage): T {
    const keys = path.split(".");
    let value: unknown = footerTranslations[lang];

    for (const key of keys) {
        if (typeof value === "object" && value !== null && key in value) {
            value = (value as Record<string, unknown>)[key];
        } else {
            return path as unknown as T;
        }
    }

    return value as T;
}
