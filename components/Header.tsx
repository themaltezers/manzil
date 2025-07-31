"use client";

import Link from "next/link";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Header = () => {
    const lang = useLanguageStore((s) => s.lang);
    const setLang = useLanguageStore((s) => s.setLang);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLang = e.target.value as "fr" | "en" | "es" | "it";
        setLang(selectedLang);
    };

    return (
        <header className="w-full flex justify-around">
            <Link href="/" className="image">
                logo
            </Link>

            <Link href="/menu" className="image">
                Menu
            </Link>

            <select
                name="language"
                id="language-select"
                value={lang}
                onChange={handleChange}
            >
                <option value="fr">FRA</option>
                <option value="en">ENG</option>
                <option value="it">ITA</option>
                <option value="es">ESP</option>
            </select>
        </header>
    );
};

export default Header;
