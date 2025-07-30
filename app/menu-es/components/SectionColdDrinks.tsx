const SectionColdDrinks = () => {
  return (
    <section id="cold-drinks" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">BEBIDAS FRÍAS</h2>

      <div className="grid grid-cols-2 gap-y-4 mb-4">
        <div>
            <span className="text-black block">MANZIL</span>
            <small className="text-gray-600 text-sm italic">Jugo de aguacate, almendras, dátiles y leche</small>
        </div>
        <div className="text-black text-right">
            <span>6,00</span>
        </div>

        <div>
            <span className="text-black block">DÚO AFRUTADO</span>
            <small className="text-gray-600 text-sm italic">Batido fresco de fresa y plátano</small>
        </div>
        <div className="text-black text-right">
            <span>6,00</span>
        </div>

        <div>
            <span className="text-black block">DETOX</span>
            <small className="text-gray-600 text-sm italic">estimulante con lima, pepino, manzana verde, apio, menta y jengibre</small>
        </div>
        <div className="text-black text-right">
            <span>6,00</span>
        </div>

        <div>
            <span className="text-black block">LIMONADA FRESCA</span>
        </div>
        <div className="text-black text-right">
            <span>6,90</span>
        </div>

        <div>
            <span className="text-black block">TROPICAL</span>
            <small className="text-gray-600 text-sm italic">batido de fresa, mango, piña y jugo de naranja fresco</small>
        </div>
        <div className="text-black text-right">
            <span>6,90</span>
        </div>

        <div>
            <span className="text-black block">FUSIÓN MANGO PIÑA</span>
        </div>
        <div className="text-black text-right">
            <span>6,90</span>
        </div>

        <div>
            <span className="text-black block">JUGO DE NARANJA FRESCO</span>
        </div>
        <div className="text-black text-right">
            <span>4,50</span>
        </div>
        
      </div>

    </section>
  );
};

export default SectionColdDrinks;