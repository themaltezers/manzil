const SectionSweatDishes = () => {
    return (
        <section id="sweet-dishes" className="bg-[#fcfbf8] p-8">
            <h2 className="text-4xl text-center text-[#bc8158] mb-8">I NOSTRI DOLCI</h2>

            <div className="grid grid-cols-2 gap-y-4 mb-4">
                <div>
                    <span className="text-black block">TRIS DI PANCAKE</span>
                    <small className="text-gray-600 text-sm italic">
                        Tris di pancake serviti con Nutella o Amlou e frutti di bosco freschi
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>12,90</span>
                </div>

                <div>
                    <span className="text-black block">TIRAMISÙ DELLA CASA</span>
                    <small className="text-gray-600 text-sm italic">
                        Tiramisù al pistacchio o Amlou
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>8,00</span>
                </div>

                <div>
                    <span className="text-black block">SFENJ</span>
                    <small className="text-gray-600 text-sm italic">
                        2 ciambelle ricoperte di zucchero
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>7,00</span>
                </div>

                <div>
                    <span className="text-black block">MSEMEN GOLOSO</span>
                    <small className="text-gray-600 text-sm italic">
                        Msemen goloso con Nutella, frutta di stagione, panna montata e nocciole caramellate
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>5,90</span>
                </div>

                <div>
                    <span className="text-black block">BAGHRIR GOLOSO</span>
                    <small className="text-gray-600 text-sm italic">
                        3 baghrir con miele e burro fuso, nocciole caramellate
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>5,90</span>
                </div>

                <div>
                    <span className="text-black block">IL BOWL</span>
                    <small className="text-gray-600 text-sm italic">
                        Yogurt greco, frutta fresca di stagione, miele, avena e mandorle
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
