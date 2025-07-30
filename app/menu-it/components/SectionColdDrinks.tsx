const SectionColdDrinks = () => {
    return (
        <section id="cold-drinks" className="bg-[#fcfbf8] p-8">
            <h2 className="text-4xl text-center text-[#bc8158] mb-8">BEVANDE FREDDE</h2>

            <div className="grid grid-cols-2 gap-y-4 mb-4">
                <div>
                    <span className="text-black block">MANZIL</span>
                    <small className="text-gray-600 text-sm italic">
                        Succo di avocado, mandorle, datteri e latte
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>6,00</span>
                </div>

                <div>
                    <span className="text-black block">DUO FRUTTATO</span>
                    <small className="text-gray-600 text-sm italic">
                        Smoothie fresco fragola e banana
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>6,00</span>
                </div>

                <div>
                    <span className="text-black block">DETOX</span>
                    <small className="text-gray-600 text-sm italic">
                        Energizzante a base di lime, cetriolo, mela verde, sedano, menta e zenzero
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>6,00</span>
                </div>

                <div>
                    <span className="text-black block">LIMONATA FRESCA</span>
                </div>
                <div className="text-black text-right">
                    <span>6,90</span>
                </div>

                <div>
                    <span className="text-black block">TROPICALE</span>
                    <small className="text-gray-600 text-sm italic">
                        Smoothie fragola, mango, ananas e succo d'arancia fresco
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>6,90</span>
                </div>

                <div>
                    <span className="text-black block">FUSIONE MANGO ANANAS</span>
                </div>
                <div className="text-black text-right">
                    <span>6,90</span>
                </div>

                <div>
                    <span className="text-black block">SPREMUTA D'ARANCIA</span>
                </div>
                <div className="text-black text-right">
                    <span>4,50</span>
                </div>
            </div>
        </section>
    );
};

export default SectionColdDrinks;