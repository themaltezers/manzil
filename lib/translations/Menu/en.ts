// lib/translations/fr.ts

const fr = {
    header: {
        title: "Manzil",
        subtitle: "BRUNCH MENU",
    },
    sections: {
        setMenus: {
            title: "SET MENUS",
            menus: [
                {
                    name: "PRIMO",
                    description:
                        "1 msemen, 2 baghrirs, one hot drink and one cold drink",
                    price: "10,90",
                },
                {
                    name: "MANZIL",
                    description:
                        "1 msemen, 1 baghrir, 1 harcha, two fried or scrambled eggs, slice of chicken breast, cheese, one hot and cold drink. honey, amlou, olives and olive oil",
                    price: "16,90",
                },
                {
                    name: "ORIENT",
                    description:
                        "1 msemen, 1 baghrir, 1 harcha, 1 slice of homemade cake, 1 amlou or pistachio tiramisu, one hot and cold drink",
                    price: "21,90",
                },
                {
                    name: "HEALTHY",
                    description:
                        "A plate with two fried or scrambled eggs, half an avocado, salad, slice of chicken breast, cheese, one hot and cold drink",
                    price: "14,90",
                },
                {
                    name: "DUO",
                    description:
                        "2 soups, 2 msemens, 2 baghrirs, 2 harchas, 2 egg plates, 2 hot and cold drinks",
                    price: "39,90",
                },
            ],
        },

        saltyDishes: {
            title: "OUR SAVORY DISHES",
            items: [
                {
                    name: "AVOCADO TOAST",
                    description:
                        "avocado guacamole, fresh cheese, poached egg, paprika, lime",
                    price: "13,90",
                },
                {
                    name: "STUFFED MSEMEN",
                    description:
                        "fresh msemens, stuffed with spice-marinated chicken and a melting layer of cheddar",
                    price: "13,90",
                },
                {
                    name: "MANZIL ADDICT",
                    description:
                        "on a msemen base, 1 sliced avocado, shredded beef, 2 poached eggs with hollandaise sauce",
                    price: "14,90",
                },
                {
                    name: "SOUP & BRICK",
                    description:
                        "soup of the day, square brick with potato, chicken and cheddar",
                    price: "12,90",
                },
                {
                    name: "THE CLUB",
                    description:
                        "toasted country bread, pesto layer, garlic cherry tomato sauté, stracciatella, pastrami with fig balsamic vinegar",
                    price: "14,90",
                },
            ],
        },

        sweetDishes: {
            title: "OUR SWEETS",
            items: [
                {
                    name: "PANCAKE TRIO",
                    description:
                        "Trio of pancakes served with Nutella or Amlou and fresh red berries",
                    price: "12,90",
                },
                {
                    name: "HOMEMADE TIRAMISU",
                    description: "Pistachio or Amlou tiramisu",
                    price: "8,00",
                },
                {
                    name: "SFENDJ",
                    description: "2 donuts coated in sugar",
                    price: "7,00",
                },
                {
                    name: "GOURMET MSEMEN",
                    description:
                        "Gourmet msemen with Nutella, seasonal fruits, whipped cream and caramelized hazelnuts",
                    price: "5,90",
                },
                {
                    name: "GOURMET BAGHRIR",
                    description:
                        "3 baghrirs with honey and melted butter, caramelized hazelnuts",
                    price: "5,90",
                },
                {
                    name: "THE BOWL",
                    description:
                        "Greek yogurt, fresh seasonal fruits, honey, oats and almonds",
                    price: "7,90",
                },
            ],
        },

        asAsked: {
            title: "À LA CARTE",
            items: [
                {
                    name: "ORIENTAL ASSORTMENT",
                    lines: ["msemen", "baghrir", "harcha"],
                    price: "2,50",
                },
                {
                    name: "SUPPLEMENTS",
                    lines: ["cheese msemen", "cheese harcha", "homemade cake"],
                    price: "3,50",
                },
                {
                    name: "",
                    lines: ["Amlou"],
                    price: "2,00",
                },
                {
                    name: "",
                    lines: ["Nutella", "Jam", "Cheese", "Honey"],
                    price: "1,00",
                },
            ],
        },

        hotDrinks: {
            title: "HOT DRINKS",
            items: [
                { name: "ESPRESSO", price: "2,50" },
                { name: "MINT TEA", price: "2,00" },
                { name: "LATTE", price: "4,50" },
                { name: "CAPPUCCINO", price: "4,50" },
                { name: "HOT CHOCOLATE", price: "4,50" },
                { name: "DOUBLE ESPRESSO", price: "4,00" },
                { name: "AMERICANO", price: "3,00" },
            ],
        },

        coldDrinks: {
            title: "COLD DRINKS",
            items: [
                {
                    name: "MANZIL",
                    description: "Avocado juice, almonds, dates and milk",
                    price: "6,00",
                },
                {
                    name: "FRUITY DUO",
                    description: "Fresh strawberry & banana smoothie",
                    price: "6,00",
                },
                {
                    name: "DETOX",
                    description:
                        "booster with lime, cucumber, green apple, celery, mint & ginger",
                    price: "6,00",
                },
                {
                    name: "FRESH LEMONADE",
                    price: "6,90",
                },
                {
                    name: "TROPICAL",
                    description:
                        "strawberry, mango, pineapple smoothie and fresh orange juice",
                    price: "6,90",
                },
                {
                    name: "MANGO PINEAPPLE FUSION",
                    price: "6,90",
                },
                {
                    name: "FRESH ORANGE JUICE",
                    price: "4,50",
                },
            ],
        },

        sodas: {
            title: "SODAS",
            items: [
                {
                    name: "HAMOUD",
                    price: "2,50",
                },
                {
                    name: "SELECTO",
                    price: "2,50",
                },
                {
                    name: "CRYSTAL WATER",
                    price: "2,00",
                },
            ],
        },

        iceAndLatte: {
            title: "ICED COFFEE & TEA",
            items: [
                {
                    name: "SPANISH LATTE",
                    price: "4,90",
                },
                {
                    name: "ICED LATTE",
                    description: "caramel or pistachio +2€",
                    price: "4,90",
                },
                {
                    name: "ICED PEACH MINT TEA",
                    price: "5,90",
                },
                {
                    name: "ICED ROSE TEA",
                    price: "5,90",
                },
            ],
        },
    },
};

export default fr;
