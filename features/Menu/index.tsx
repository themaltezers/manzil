"use client";

import { useLanguageStore } from "@/stores/useLanguageStore";
import AsAsked from "./components/AsAsked";
import ColdDrinks from "./components/ColdDrinks";
import HotDrinks from "./components/HotDrinks";
import MenuHeader from "./components/MenuHeader";
import SaltyDishes from "./components/SaltyDishes";
import SetMenus from "./components/SetMenus";
import SweetDishes from "./components/SweetDishes";
import Sodas from "./components/Sodas";
import IceAndLatte from "./components/IceAndLatte";

const Menu = () => {
    const lang = useLanguageStore((s) => s.lang);

    return (
        <>
            <MenuHeader lang={lang} />
            {/* À manger */}
            <SetMenus lang={lang} />
            <SaltyDishes lang={lang} />
            <SweetDishes lang={lang} />
            <AsAsked lang={lang} />
            {/* Boissons */}
            <HotDrinks lang={lang} />
            <ColdDrinks lang={lang} />
            <Sodas lang={lang} />
            <IceAndLatte lang={lang} />
        </>
    );
};

export default Menu;
