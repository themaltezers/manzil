import en from "@/lib/translations/Home/en";
import fr from "@/lib/translations/Home/fr";
import es from "@/lib/translations/Home/es";
import it from "@/lib/translations/Home/it";

export const homeTranslations = {
    en,
    fr,
    es,
    it,
};

export type HomeLanguage = keyof typeof homeTranslations;

export function tHome<T = string>(path: string, lang: HomeLanguage): T {
    const keys = path.split(".");
    let value: unknown = homeTranslations[lang];

    for (const key of keys) {
        if (isRecord(value) && key in value) {
            value = value[key];
        } else {
            return path as unknown as T;
        }
    }

    return value as T;
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null;
}
