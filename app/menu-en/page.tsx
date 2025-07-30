import HeaderMenu from './components/HeaderMenu';

import SectionSetMenus from './components/SectionSetMenus';
import SectionSalty from './components/SectionSalty';
import SectionSweatDishes from './components/SectionSweatDishes';
import SectionAsAsked from './components/SectionAsAsked';

import SectionHotDrinks from './components/SectionHotDrinks';
import SectionColdDrinks from './components/SectionColdDrinks';
import SectionSodas from './components/SectionSodas';
import SectionIceAndLatte from './components/SectionIceAndLatte';

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#fcfbf8] py-8 px-4">

        <HeaderMenu />

        {/* A Manger */}
        <SectionSetMenus />
        <SectionSalty />
        <SectionSweatDishes />
        <SectionAsAsked />

        {/* Boissons */}
        <SectionHotDrinks />
        <SectionColdDrinks />
        <SectionSodas />
        <SectionIceAndLatte />

    </main>
  );
}
