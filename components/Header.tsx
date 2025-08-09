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

        <header className="w-full flex justify-around fixed z-20">

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
                className="rounded border-terracotta shadow-sm sm:text-sm my-4"
            >
                <option value="fr">FR</option>
                <option value="en">EN</option>
                <option value="it">IT</option>
                <option value="es">ES</option>
            </select>
        </header>
    );
};

export default Header;
