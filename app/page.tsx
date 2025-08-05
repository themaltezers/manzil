"use client";

import { useLanguageStore } from "@/stores/useLanguageStore";
import { tHome } from "@/lib/translations/Home";
import Carousel from "@/components/Carousel";

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
                className="relative bg-[url('/banner.png')] bg-center bg-cover w-[100dvw] h-[80dvh] flex justify-center items-center"
                aria-label={hero.alt}
            >
                <div className="absolute inset-0 bg-black/20 z-0" />
                <h1 className="text-white text-5xl font-bold z-10">MANZIL</h1>
            </section>

            <section className="m-4 mb-8 lg:flex flex-row">
                <div className="">
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
                    </div>
                </div>
                <div
                    className="bg-[url('/facade-brunch.jpg')] bg-center bg-cover w-full h-[40dvh] lg:h-auto"
                    aria-label={philosophy.imageAlt}
                ></div>
            </section>

            <section className=" mb-8 flex flex-col gap-4 bg-(--primary) py-[100px]">
                <div className="flex flex-col gap-2 text-center text-(--grey) px-8 mb-8">
                    <h3 className="text-(--grey)">{guests.subtitle}</h3>
                    <h2>{guests.title}</h2>

                    {guests.paragraphs.map((p, i) => (
                        <p key={i} className="text-center">
                            {p}
                        </p>
                    ))}
                </div>
                <Carousel />
            </section>

            <section className="m-4 mb-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h3>{global.subtitle}</h3>
                    <h2>{global.title}</h2>
                </div>
                <p>{global.paragraph}</p>
                <div
                    className="bg-[url('/voyage.jpg')] bg-center bg-cover w-full h-[60dvh]"
                    aria-label={global.imageAlt}
                ></div>
            </section>
            <section className="flex flex-col gap-4 justify-center items-center my-8">
                <div className="bg-black w-full h-[450px]"></div>
                <div className="text-center">
                    <h2 className="text-(--primary)">Horaires d'ouverture</h2>
                    <p>Du lundi au dimanche : 10:00–16:00</p>
                    <p>Fermé le vendredi</p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.8309789175673!2d5.3662750760230935!3d43.29686117540518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c185a6a85275%3A0x7b59e7b720ee326a!2sManzil%20oriental%20brunch%20and%20the!5e0!3m2!1sfr!2sfr!4v1754393498060!5m2!1sfr!2sfr"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </main>
    );
}
