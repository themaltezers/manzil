// lib/translations/fr.ts

const fr = {
    header: {
        title: "Manzil",
        subtitle: "MENU BRUNCH",
    },
    sections: {
        setMenus: {
            title: "FORMULES",
            menus: [
                {
                    name: "PRIMO",
                    description:
                        "1 msemen, 2 baghrirs, une boisson chaude et une froide",
                    price: "10,90",
                },
                {
                    name: "MANZIL",
                    description:
                        "1 msemen, 1 baghrir, 1 harcha, deux oeufs au plat ou brouillés, tranche de blanc de poulet, un fromage, une boisson chaude et froide. miel, amlou, olives et huile d'olive",
                    price: "16,90",
                },
                {
                    name: "ORIENT",
                    description:
                        "1 msemen, 1 baghrir, 1 harcha, 1 part de cake maison, 1 tiramisu amlou ou pistache, une boisson chaude et froide",
                    price: "21,90",
                },
                {
                    name: "HEALTHY",
                    description:
                        "Une assiette composée de deux oeufs au plat ou brouillés, un demi avocat, une salade, une tranche de blanc de poulet, un fromage, une boisson chaude et froide",
                    price: "14,90",
                },
                {
                    name: "DUO",
                    description:
                        "2 soupes, 2 msemens, 2 baghrirs, 2 harchas, 2 assiettes d'oeufs, 2 boissons chaudes et froides",
                    price: "39,90",
                },
            ],
        },
        saltyDishes: {
            title: "NOS SALÉS",
            items: [
                {
                    name: "AVOCADO TOAST",
                    description:
                        "guacamole d'avocat, fromage frais, oeuf poché, paprika, citron vert",
                    price: "13,90",
                },
                {
                    name: "MSEMEN GARNI",
                    description:
                        "msemens frais, garni de poulet mariné aux épices savoureuses et d'une couche fondante de cheddar",
                    price: "13,90",
                },
                {
                    name: "MANZIL ADDICT",
                    description:
                        "sur une base de msemen, 1 avocat tranché, boeuf effiloché, 2 oeufs pochés accompagnés d'une sauce hollandaise",
                    price: "14,90",
                },
                {
                    name: "SOUPE & BRICK",
                    description:
                        "soupe du jour, brick carré à la pomme de terre, poulet et cheddar",
                    price: "12,90",
                },
                {
                    name: "LE CLUB",
                    description:
                        "pain de campagne toasté, couche de pesto, poêlée de tomate cerise à l'ail, stracciatella, pastrami, vinaigre balsamique aux figues",
                    price: "14,90",
                },
            ],
        },

        sweetDishes: {
            title: "NOS SUCRÉS",
            items: [
                {
                    name: "TRIO DE PANCAKES",
                    description:
                        "Trio de pancakes accompagné de Nutella ou d’Amlou et de fruits rouges frais",
                    price: "12,90",
                },
                {
                    name: "TIRAMISU MAISON",
                    description: "Tiramisu pistache ou Amlou",
                    price: "8,00",
                },
                {
                    name: "SFENDJ",
                    description: "2 beignets enrobés de sucre",
                    price: "7,00",
                },
                {
                    name: "MSEMEN GOURMAND",
                    description:
                        "Msemen gourmand au Nutella, fruits de saison, chantilly et noisettes caramélisées",
                    price: "5,90",
                },
                {
                    name: "BAGHRIR GOURMAND",
                    description:
                        "3 baghrirs au miel et beurre fondu, noisettes caramélisées",
                    price: "5,90",
                },
                {
                    name: "LE BOWL",
                    description:
                        "Yaourt grec, fruits frais de saison, miel, avoine et amandes",
                    price: "7,90",
                },
            ],
        },

        asAsked: {
            title: "À LA CARTE",
            items: [
                {
                    name: "ASSORTIMENT ORIENTAL",
                    lines: ["msemen", "baghrir", "harcha"],
                    price: "2,50",
                },
                {
                    name: "SUPPLÉMENTS",
                    lines: ["msemen fromage", "harcha fromage", "cake maison"],
                    price: "3,50",
                },
                {
                    name: null,
                    lines: ["Amlou"],
                    price: "2,00",
                },
                {
                    name: null,
                    lines: ["Nutella", "Confiture", "Fromage", "Miel"],
                    price: "1,00",
                },
            ],
        },

        hotDrinks: {
            title: "BOISSONS CHAUDES",
            items: [
                { name: "EXPRESSO", price: "2,50" },
                { name: "THÉ À LA MENTHE", price: "2,00" },
                { name: "LATTE", price: "4,50" },
                { name: "CAPPUCCINO", price: "4,50" },
                { name: "CHOCOLAT CHAUD", price: "4,50" },
                { name: "DOUBLE EXPRESSO", price: "4,00" },
                { name: "AMERICANO", price: "3,00" },
            ],
        },
        coldDrinks: {
            title: "BOISSONS FROIDES",
            items: [
                {
                    name: "MANZIL",
                    description: "Jus d'avocat, amandes, dattes et lait",
                    price: "6,00",
                },
                {
                    name: "DUO FRUITÉ",
                    description: "Smoothie fraicheur fraise & banane",
                    price: "6,00",
                },
                {
                    name: "DETOX",
                    description:
                        "Booster à base de citron vert, concombre, pomme verte, céleri, menthe & gingembre",
                    price: "6,00",
                },
                {
                    name: "FRESH CITRONNADE",
                    price: "6,90",
                },
                {
                    name: "TROPICAL",
                    description:
                        "Smoothie fraise, mangue, ananas et jus d'orange pressé",
                    price: "6,90",
                },
                {
                    name: "MANGUE ANANAS FUSION",
                    price: "6,90",
                },
                {
                    name: "ORANGE PRESSÉE",
                    price: "4,50",
                },
            ],
        },
        sodas: {
            title: "SODAS",
            items: [
                { name: "HAMOUD", price: "2,50" },
                { name: "SELECTO", price: "2,50" },
                { name: "EAU CRISTALINE", price: "2,00" },
            ],
        },
        iceAndLatte: {
            title: "CAFÉ & THÉ GLACÉS",
            items: [
                {
                    name: "SPANISH LATTE",
                    price: "4,90",
                },
                {
                    name: "ICED LATTE",
                    description: "caramel ou pistache +2€",
                    price: "4,90",
                },
                {
                    name: "THÉ GLACÉ PÊCHE MENTHE",
                    price: "5,90",
                },
                {
                    name: "THÉ GLACÉ À LA ROSE",
                    price: "5,90",
                },
            ],
        },
    },
};

export default fr;
