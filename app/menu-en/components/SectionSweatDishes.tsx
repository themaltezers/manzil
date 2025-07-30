const SectionSweatDishes = () => {
    return (
        <section id="sweet-dishes" className="bg-[#fcfbf8] p-8">
            <h2 className="text-4xl text-center text-[#bc8158] mb-8">OUR SWEETS</h2>

            <div className="grid grid-cols-2 gap-y-4 mb-4">
                <div>
                    <span className="text-black block">PANCAKE TRIO</span>
                    <small className="text-gray-600 text-sm italic">
                        Trio of pancakes served with Nutella or Amlou and fresh red berries
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>12,90</span>
                </div>

                <div>
                    <span className="text-black block">HOMEMADE TIRAMISU</span>
                    <small className="text-gray-600 text-sm italic">
                        Pistachio or Amlou tiramisu
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>8,00</span>
                </div>

                <div>
                    <span className="text-black block">SFENDJ</span>
                    <small className="text-gray-600 text-sm italic">
                        2 donuts coated in sugar
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>7,00</span>
                </div>

                <div>
                    <span className="text-black block">GOURMET MSEMEN</span>
                    <small className="text-gray-600 text-sm italic">
                        Gourmet msemen with Nutella, seasonal fruits, whipped cream and caramelized hazelnuts
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>5,90</span>
                </div>

                <div>
                    <span className="text-black block">GOURMET BAGHRIR</span>
                    <small className="text-gray-600 text-sm italic">
                        3 baghrirs with honey and melted butter, caramelized hazelnuts
                    </small>
                </div>
                <div className="text-black text-right">
                    <span>5,90</span>
                </div>

                <div>
                    <span className="text-black block">THE BOWL</span>
                    <small className="text-gray-600 text-sm italic">
                        Greek yogurt, fresh seasonal fruits, honey, oats and almonds
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
