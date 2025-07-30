"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
    const router = useRouter();
    const [lang, setLang] = useState("fr");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLang = e.target.value;
        setLang(selectedLang);

        if (selectedLang === "fr") {
            router.push("/menu");
        } else {
            router.push(`/menu-${selectedLang}`);
        }
    };

    return (
        <header className="w-full flex justify-around">
            <Link href={"/"} className="image">
                logo
            </Link>
            <button
                onClick={() =>
                    router.push(lang === "fr" ? "/menu" : `/menu-${lang}`)
                }
            >
                Menu
            </button>
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
