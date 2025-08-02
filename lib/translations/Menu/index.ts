import fr from "@/lib/translations/Menu/fr";
import it from "@/lib/translations/Menu/it";
import en from "@/lib/translations/Menu/en";
import es from "@/lib/translations/Menu/es";

export const translations = {
    fr,
    it,
    es,
    en,
};

export type Language = keyof typeof translations;

export function t<T = string>(path: string, lang: Language): T {
    const keys = path.split(".");
    let value: unknown = translations[lang];

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
