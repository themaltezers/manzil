// app/components/Storytelling.tsx
"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

type Props = {
  src: string;          // "/story.jpg"
  alt?: string;         // "Cuisine Manzil"
  ratio?: number;       // intensité du parallax (0.2–0.8). défaut 0.5
  title?: string;
  children?: React.ReactNode; // ton texte storytelling
};

const Storytelling = ({
  src = "/facade-brunch.jpg",
  alt = "",
  ratio = 0.5,
  title = "Une maison, des histoires et des saveurs",
  children = "Chez Manzil, chaque recette commence par un souvenir : un plat partagé en famille, une odeur d'épices qui flotte dans l'air, un geste transmis de génération en génération. Nous avons voulu créer un lieu où la cuisine marocaine se réinvente, où l'on marie tradition et modernité pour surprendre les papilles tout en gardant l'âme de nos origines. Poussez la porte : ici, on vous accueille comme à la maison, avec chaleur, sourire et générosité.",
}: Props) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const el = sectionRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculer le pourcentage de scroll de la section (0 à 1)
        const viewportTop = windowHeight - rect.top;
        const sectionHeight = rect.height;
        const totalScrollDistance = windowHeight + sectionHeight;

        // Progression normalisée (0 à 1) quand la section traverse le viewport
        const scrollProgress = Math.min(Math.max(viewportTop / totalScrollDistance, 0), 1);

        // Effet parallax - l'image bouge plus lentement que le scroll
        // On centre l'effet autour de 0.5 (milieu du passage)
        const parallaxOffset = (scrollProgress - 0.5) * 150 * ratio;

        // Application de la transformation avec un léger zoom pour éviter les bords blancs
        img.style.transform = `translateY(${parallaxOffset}px) scale(1.1)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ratio]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] w-full overflow-hidden"
      aria-label={alt}
    >
      {/* Image "background" avec effet parallax */}
      <Image
        ref={imgRef}
        src={src}
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="object-cover will-change-transform"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      />

      {/* Overlay pour lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* Texte centré */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-3xl text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 drop-shadow-lg">
            {title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-95 drop-shadow">
            {children}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
