// lib/translations/fr.ts

const fr = {
    header: {
        title: "Manzil",
        subtitle: "MENÙ BRUNCH",
    },
    sections: {
        setMenus: {
            title: "MENÙ",
            menus: [
                {
                    name: "PRIMO",
                    description:
                        "1 msemen, 2 baghrir, una bevanda calda e una fredda",
                    price: "10,90",
                },
                {
                    name: "MANZIL",
                    description:
                        "1 msemen, 1 baghrir, 1 harcha, due uova al tegamino o strapazzate, fetta di petto di pollo, formaggio, una bevanda calda e fredda, miele, amlou, olive e olio d'oliva",
                    price: "16,90",
                },
                {
                    name: "ORIENTE",
                    description:
                        "1 msemen, 1 baghrir, 1 harcha, 1 fetta di torta fatta in casa, 1 tiramisù amlou o pistacchio, una bevanda calda e una fredda",
                    price: "21,90",
                },
                {
                    name: "SALUTARE",
                    description:
                        "Un piatto composto da due uova al tegamino o strapazzate, mezzo avocado, un'insalata, una fetta di petto di pollo, formaggio, una bevanda calda e una fredda",
                    price: "14,90",
                },
                {
                    name: "DUO",
                    description:
                        "2 zuppe, 2 msemen, 2 baghrir, 2 harcha, 2 piatti di uova, 2 bevande calde e fredde",
                    price: "39,90",
                },
            ],
        },

        saltyDishes: {
            title: "I NOSTRI PIATTI SALATI",
            items: [
                {
                    name: "AVOCADO TOAST",
                    description:
                        "guacamole di avocado, formaggio fresco, uovo in camicia, paprika, lime",
                    price: "13,90",
                },
                {
                    name: "MSEMEN GARNI",
                    description:
                        "msemens freschi, farciti con pollo marinato alle spezie e uno strato fuso di cheddar",
                    price: "13,90",
                },
                {
                    name: "MANZIL ADDICT",
                    description:
                        "su una base di msemen, 1 avocado a fette, manzo sfilacciato, 2 uova in camicia con salsa olandese",
                    price: "14,90",
                },
                {
                    name: "SOUPE & BRICK",
                    description:
                        "zuppa del giorno, brick quadrato con patate, pollo e cheddar",
                    price: "12,90",
                },
                {
                    name: "LE CLUB",
                    description:
                        "pane rustico tostato, strato di pesto, pomodorini saltati all’aglio, stracciatella, pastrami, aceto balsamico ai fichi",
                    price: "14,90",
                },
            ],
        },

        sweetDishes: {
            title: "I NOSTRI DOLCI",
            items: [
                {
                    name: "TRIS DI PANCAKE",
                    description:
                        "Tris di pancake serviti con Nutella o Amlou e frutti di bosco freschi",
                    price: "12,90",
                },
                {
                    name: "TIRAMISÙ DELLA CASA",
                    description: "Tiramisù al pistacchio o Amlou",
                    price: "8,00",
                },
                {
                    name: "SFENJ",
                    description: "2 ciambelle ricoperte di zucchero",
                    price: "7,00",
                },
                {
                    name: "MSEMEN GOLOSO",
                    description:
                        "Msemen goloso con Nutella, frutta di stagione, panna montata e nocciole caramellate",
                    price: "5,90",
                },
                {
                    name: "BAGHRIR GOLOSO",
                    description:
                        "3 baghrir con miele e burro fuso, nocciole caramellate",
                    price: "5,90",
                },
                {
                    name: "IL BOWL",
                    description:
                        "Yogurt greco, frutta fresca di stagione, miele, avena e mandorle",
                    price: "7,90",
                },
            ],
        },

        asAsked: {
            title: "ALLA CARTA",
            items: [
                {
                    name: "ASSORTIMENTO ORIENTALE",
                    lines: ["msemen", "baghrir", "harcha"],
                    price: "2,50",
                },
                {
                    name: "SUPPLEMENTI",
                    lines: [
                        "msemen formaggio",
                        "harcha formaggio",
                        "torta fatta in casa",
                    ],
                    price: "3,50",
                },
                {
                    name: null,
                    lines: ["Amlou"],
                    price: "2,00",
                },
                {
                    name: null,
                    lines: ["Nutella", "Marmellata", "Formaggio", "Miele"],
                    price: "1,00",
                },
            ],
        },

        hotDrinks: {
            title: "BEVANDE CALDE",
            items: [
                { name: "ESPRESSO", price: "2,50" },
                { name: "TÈ ALLA MENTA", price: "2,00" },
                { name: "LATTE", price: "4,50" },
                { name: "CAPPUCCINO", price: "4,50" },
                { name: "CIOCCOLATA CALDA", price: "4,50" },
                { name: "DOPPIO ESPRESSO", price: "4,00" },
                { name: "AMERICANO", price: "3,00" },
            ],
        },

        coldDrinks: {
            title: "BEVANDE FREDDE",
            items: [
                {
                    name: "MANZIL",
                    description: "Succo di avocado, mandorle, datteri e latte",
                    price: "6,00",
                },
                {
                    name: "DUO FRUTTATO",
                    description: "Smoothie fresco fragola e banana",
                    price: "6,00",
                },
                {
                    name: "DETOX",
                    description:
                        "Energizzante a base di lime, cetriolo, mela verde, sedano, menta e zenzero",
                    price: "6,00",
                },
                {
                    name: "LIMONATA FRESCA",
                    price: "6,90",
                },
                {
                    name: "TROPICALE",
                    description:
                        "Smoothie fragola, mango, ananas e succo d'arancia fresco",
                    price: "6,90",
                },
                {
                    name: "FUSIONE MANGO ANANAS",
                    price: "6,90",
                },
                {
                    name: "SPREMUTA D'ARANCIA",
                    price: "4,50",
                },
            ],
        },

        sodas: {
            title: "BIBITE",
            items: [
                { name: "HAMOUD", price: "2,50" },
                { name: "SELECTO", price: "2,50" },
                { name: "ACQUA CRISTALLINA", price: "2,00" },
            ],
        },

        iceAndLatte: {
            title: "CAFFÈ E TÈ FREDDO",
            items: [
                {
                    name: "LATTE SPAGNOLO",
                    price: "4,90",
                },
                {
                    name: "LATTE FREDDO",
                    description: "caramello o pistacchio +2€",
                    price: "4,90",
                },
                {
                    name: "TÈ FREDDO PESCA MENTA",
                    price: "5,90",
                },
                {
                    name: "TÈ FREDDO ALLA ROSA",
                    price: "5,90",
                },
            ],
        },
    },
};

export default fr;
