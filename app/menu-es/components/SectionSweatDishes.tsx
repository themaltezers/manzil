const SectionSweatDishes = () => {
    return (
        <section id="sweet-dishes" className="bg-[#fcfbf8] p-8">
            <h2 className="text-4xl text-center text-[#bc8158] mb-8">NUESTROS DULCES</h2>

            <div className="grid grid-cols-2 gap-y-4 mb-4">
                <div>
                    <span className="text-black block">TRÍO DE PANQUEQUES</span>
                    <small className="text-gray-600 text-sm italic">
                        Trío de panqueques servidos con Nutella o Amlou y frutos rojos frescos
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>12,90</span>
                </div>

                <div>
                    <span className="text-black block">TIRAMISÚ CASERO</span>
                    <small className="text-gray-600 text-sm italic">
                        Tiramisú de pistacho o Amlou
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>8,00</span>
                </div>

                <div>
                    <span className="text-black block">SFENDJ</span>
                    <small className="text-gray-600 text-sm italic">
                        2 rosquillas cubiertas de azúcar
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>7,00</span>
                </div>

                <div>
                    <span className="text-black block">MSEMEN GOURMET</span>
                    <small className="text-gray-600 text-sm italic">
                        Msemen gourmet con Nutella, frutas de temporada, crema batida y avellanas caramelizadas
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>5,90</span>
                </div>

                <div>
                    <span className="text-black block">BAGHRIR GOURMET</span>
                    <small className="text-gray-600 text-sm italic">
                        3 baghrirs con miel y mantequilla derretida, avellanas caramelizadas
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>5,90</span>
                </div>

                <div>
                    <span className="text-black block">EL BOWL</span>
                    <small className="text-gray-600 text-sm italic">
                        Yogur griego, frutas frescas de temporada, miel, avena y almendras
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
