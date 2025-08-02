"use client";

import { useLanguageStore } from "@/stores/useLanguageStore";
import { tHome } from "@/lib/translations/Home";

export default function Home() {
    const lang = useLanguageStore((state) => state.lang); // 👈 Récupère la langue depuis le store

    const hero = tHome<{ alt: string }>("hero", lang);
    const intro = tHome<{
        subtitle: string;
        title: string;
        paragraphs: string[];
    }>("intro", lang);
    const philosophy = tHome<{
        title: string;
        paragraphs: string[];
        imageAlt: string;
    }>("philosophy", lang);
    const guests = tHome<{
        subtitle: string;
        title: string;
        paragraphs: string[];
        imageAlt: string;
    }>("guests", lang);
    const global = tHome<{
        subtitle: string;
        title: string;
        paragraph: string;
        imageAlt: string;
    }>("global", lang);

    return (
        <main>
            <section
                className="bg-[url('/banner.png')] bg-center bg-cover w-[100dvw] h-[80dvh]"
                aria-label={hero.alt}
            ></section>

            <section className="m-4 mb-8">
                <div className="flex flex-col gap-4 mb-4">
                    <div className="flex flex-col gap-2">
                        <h3>{intro.subtitle}</h3>
                        <h2>{intro.title}</h2>
                    </div>
                    {intro.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>

                <div className="flex flex-col gap-4 mb-4">
                    <h2>{philosophy.title}</h2>
                    {philosophy.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                    <div
                        className="bg-[url('/facade-brunch.png')] bg-center bg-cover w-full h-[40dvh]"
                        aria-label={philosophy.imageAlt}
                    ></div>
                </div>
            </section>

            <section className="m-4 mb-8 flex flex-col gap-4 bg-[--primary]">
                <div className="flex flex-col gap-2">
                    <h3>{guests.subtitle}</h3>
                    <h2>{guests.title}</h2>
                </div>
                {guests.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
                <div
                    className="bg-[url('/banner.png')] bg-center bg-cover w-full h-[50dvh]"
                    aria-label={guests.imageAlt}
                ></div>
            </section>

            <section className="m-4 mb-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h3>{global.subtitle}</h3>
                    <h2>{global.title}</h2>
                </div>
                <p>{global.paragraph}</p>
                <div
                    className="bg-[url('/banner.png')] bg-center bg-cover w-full h-[60dvh]"
                    aria-label={global.imageAlt}
                ></div>
            </section>
        </main>
    );
}
