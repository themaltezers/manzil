"use client";

import Link from "next/link";
import {
    FaSquareInstagram,
    FaSquareFacebook,
    FaLinkedin,
} from "react-icons/fa6";
import { tFooter } from "@/lib/translations/Footer";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Footer = () => {
    const lang = useLanguageStore((state) => state.lang);
    const contactTitle = tFooter("contactTitle", lang);
    const exploreTitle = tFooter("exploreTitle", lang);
    const links = tFooter<{
        about: string;
        menu: string;
        career: string;
    }>("links", lang);
    const copyright = tFooter("copyright", lang);

    return (
        <footer className="flex flex-col gap-4 w-[97%] mx-auto">
            <section className="flex flex-col gap-2">
                <h3>{contactTitle}</h3>
                <ul className="flex gap-2">
                    <li>
                        <Link href="https://www.instagram.com/manzil.brunch/">
                            <FaSquareInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <FaSquareFacebook />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <FaLinkedin />
                        </Link>
                    </li>
                </ul>
            </section>
            <ul className="flex flex-col gap-2 mb-8">
                <h3>{exploreTitle}</h3>
                <li>{links.about}</li>
                <li>{links.menu}</li>
                <li>{links.career}</li>
            </ul>
            <p className="mb-8">
                {copyright} <Link href="https://www.1344.fr/">1344.fr</Link>
            </p>
        </footer>
    );
};

export default Footer;
