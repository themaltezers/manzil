"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Review from "./Review";

const PAGE_SIZE = 3;
const INTERVAL = 4000; // 4s entre chaque groupe
const SLIDE_MS = 300; // durée du slide in/out

export default function ReviewsAll() {
  const reviews = useMemo(
    () => [
      {
        reviewContent:
          "Super découverte sur Marseille ! Un brunch très copieux avec un excellent rapport qualité prix, des produits frais et des jus qui vont vous raffiner. Vraiment le petit déjeuner est très très bon, le personnel est très gentil. Le seul petit bémol c’est l’attente Mais qui vaut vraiment le coup. Voulez vous évader allez y les yeux fermés.",
        reviewerName: "R B",
      },
      {
        reviewContent:
          "J’ai déjeuné au Manzil à Marseille et j’ai passé un moment absolument parfait ! L’accueil était chaleureux, le service attentionné, et surtout… la cuisine est délicieuse. On sent que tout est fait maison, avec des produits frais et beaucoup de générosité.❤️",
        reviewerName: "Sofia",
      },
      {
        reviewContent:
          "Brunch délicieux, les saveurs sont au rendez-vous. Les plats sont servis en bonne quantité. Nous recommandons, l’ambiance est chaleureuse",
        reviewerName: "Romane",
      },
      {
        reviewContent:
          "Alors par où commencer… Brunch qualitatif et quantitatif, service au top, brunch de qualité avec des produits frais ! Serveuse au top à l’écoute et super sympa ! Merci on reviendra sans hésiter !!",
        reviewerName: "Ambrine",
      },
      {
        reviewContent:
          "✨ Une merveilleuse découverte ! ✨ J’ai testé un brunch marocain à Marseille pour la première fois, et c’était un véritable délice ! Chaque plat était savoureux, bien présenté, et les saveurs m’ont totalement fait voyager! Le service a été rapide, attentionné et souriant, ce qui a rendu l’expérience encore plus agréable ! Une adresse que je recommande les yeux fermés pour un moment gourmand et chaleureux. J’y reviendrai sans hésiter !",
        reviewerName: "Mégane",
      },
      {
        reviewContent:
          "De passage à Marseille. Très bonne découverte. Les plats sont excellents ni trop gras ni trop sucrée. Petit clin d’œil au msemen salé au poulet cheddar et au service sympathique",
        reviewerName: "Alvine",
      },
      {
        reviewContent:
          "Ambiance conviviale, cuisine excellente et accueil parfait ! Une adresse à ne pas manquer si vous venez sur Marseille !",
        reviewerName: "Mailis",
      },
      {
        reviewContent:
          "Parking vieux port, sortie lacydon et nous voilà devant! Petit brunch en famille bien bon et bien sympathique. Ce jour là, peu d attente donc nous étions ravis",
        reviewerName: "Cédric",
      },
      {
        reviewContent:
          "Un brunch marocain tout simplement excellent ! Des saveurs authentiques, des produits frais et un large choix de spécialités généreusement servies. L’ambiance est chaleureuse et l’accueil parfait. Un vrai moment de plaisir, je recommande sans hésiter !",
        reviewerName: "Meriem",
      },
    ],
    []
  );

  const [cursor, setCursor] = useState(0);
  const [anim, setAnim] = useState<"enter" | "leave">("enter");
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const tick = () => {
      setAnim("leave"); // slide-out gauche + fade-out
      setTimeout(() => {
        setCursor((c) => (c + PAGE_SIZE) % reviews.length);
        setAnim("enter"); // slide-in depuis la droite + fade-in
      }, SLIDE_MS);
    };
    timer.current = setInterval(tick, INTERVAL);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [reviews.length]);

  const page = useMemo(() => {
    const slice = reviews.slice(cursor, cursor + PAGE_SIZE);
    if (slice.length < PAGE_SIZE) {
      slice.push(...reviews.slice(0, PAGE_SIZE - slice.length));
    }
    return slice;
  }, [cursor, reviews]);

  // ——— Rendu ———
  return (
    <>
      <h2 className="text-2xl text-center text-terracotta mb-4">
        Ils se sont régalés
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>

        <svg className="size-6 inline" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.001 16.31c0-1.15-.095-1.99-.301-2.861H16.287v5.195h7.873c-.159 1.291-1.016 3.236-2.92 4.542l-.027.174 4.24 3.22.294.029c2.699-2.443 4.254-6.036 4.254-10.298" fill="#4285F4"/><path d="M16.286 30c3.857 0 7.095-1.245 9.46-3.391l-4.507-3.423c-1.207.825-2.826 1.4-4.953 1.4A8.58 8.58 0 0 1 8.16 18.77l-.167.014-4.41 3.344-.058.157C5.874 26.857 10.7 30 16.286 30" fill="#34A853"/><path d="M8.16 18.769A8.5 8.5 0 0 1 7.684 16c0-.964.174-1.898.46-2.769l-.008-.185L3.67 9.647l-.146.069A13.8 13.8 0 0 0 2 16c0 2.256.556 4.387 1.524 6.285z" fill="#FBBC05"/><path d="M16.286 7.413c2.683 0 4.492 1.136 5.524 2.085l4.032-3.858C23.366 3.384 20.144 2 16.286 2 10.7 2 5.874 5.142 3.524 9.715l4.62 3.516c1.158-3.375 4.365-5.818 8.142-5.818" fill="#EB4335"/></svg>
      </h2>

      {/* Wrapper avec spacer invisible pour fixer la hauteur (Option 2) */}
      <div className="relative">
        {/* Spacer invisible : 3 reviews les plus longues pour définir la hauteur min */}
        <div className="invisible" aria-hidden="true">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {/* Choisis ici 3 reviews longues (ajuste si besoin) */}
            <Review
              reviewContent="Super découverte sur Marseille ! Un brunch très copieux avec un excellent rapport qualité prix, des produits frais et des jus qui vont vous raffiner. Vraiment le petit déjeuner est très très bon, le personnel est très gentil. Le seul petit bémol c’est l’attente Mais qui vaut vraiment le coup. Voulez vous évader allez y les yeux fermés."
              reviewerName="R B"
            />
            <Review
              reviewContent="Alors par où commencer… Brunch qualitatif et quantitatif, service au top, brunch de qualité avec des produits frais ! Serveuse au top à l’écoute et super sympa ! Merci on reviendra sans hésiter !!"
              reviewerName="Ambrine"
            />
            <Review
              reviewContent="✨ Une merveilleuse découverte ! ✨ J’ai testé un brunch marocain à Marseille pour la première fois, et c’était un véritable délice ! Chaque plat était savoureux, bien présenté, et les saveurs m’ont totalement fait voyager! Le service a été rapide, attentionné et souriant, ce qui a rendu l’expérience encore plus agréable ! Une adresse que je recommande les yeux fermés pour un moment gourmand et chaleureux. J’y reviendrai sans hésiter !"
              reviewerName="Mégane"
            />
          </div>
        </div>

        {/* Grid animée superposée : slide/fade groupé */}
        <div
          className={[
            "absolute inset-0",
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2",
            "transition-all duration-300 ease-out",
            anim === "leave" ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0",
          ].join(" ")}
        >
          {page.map((r, i) => (
            <div key={`${cursor}-${i}`} className="will-change-transform">
              <Review reviewContent={r.reviewContent} reviewerName={r.reviewerName} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
