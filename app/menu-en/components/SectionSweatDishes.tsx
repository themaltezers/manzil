const SectionSweatDishes = () => {
    return (
        <section id="sweet-dishes" className="bg-[#fcfbf8] p-8">
            <h2 className="text-4xl text-center text-[#bc8158] mb-8">NOS SUCRÉS</h2>

            <div className="grid grid-cols-2 gap-y-4 mb-4">
                <div>
                    <span className="text-black block">TRIO DE PANCAKES</span>
                    <small className="text-gray-600 text-sm italic">
                        Trio de pancakes accompagné de Nutella ou d’Amlou et de fruits rouges frais
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>12,90</span>
                </div>

                <div>
                    <span className="text-black block">TIRAMISU MAISON</span>
                    <small className="text-gray-600 text-sm italic">
                        Tiramisu pistache ou Amlou
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>8,00</span>
                </div>

                <div>
                    <span className="text-black block">SFENDJ</span>
                    <small className="text-gray-600 text-sm italic">
                        2 beignets enrobés de sucre
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>7,00</span>
                </div>

                <div>
                    <span className="text-black block">MSEMEN GOURMAND</span>
                    <small className="text-gray-600 text-sm italic">
                        Msemen gourmand au Nutella, fruits de saison, chantilly et noisettes caramélisées
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>5,90</span>
                </div>

                <div>
                    <span className="text-black block">BAGHRIR GOURMAND</span>
                    <small className="text-gray-600 text-sm italic">
                        3 baghrirs au miel et beurre fondu, noisettes caramélisées
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>5,90</span>
                </div>

                <div>
                    <span className="text-black block">LE BOWL</span>
                    <small className="text-gray-600 text-sm italic">
                        Yaourt grec, fruits frais de saison, miel, avoine et amandes
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>7,90</span>
                </div>
            </div>
        </section>
    );
};

export default SectionSweatDishes;
