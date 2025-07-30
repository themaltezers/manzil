const SectionSetMenus = () => {
  return (
    <section id="set-menus" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">MENÚS</h2>

      <div className="grid grid-cols-2 gap-y-4 mb-4">
        <div>
            <span className="text-black block">PRIMO</span>
            <small className="text-gray-600 text-sm italic">1 msemen, 2 baghrirs, una bebida caliente y una fría</small>
        </div>
        <div className="text-black text-right">
            <span>10,90</span>
        </div>

        <div>
            <span className="text-black block">MANZIL</span>
            <small className="text-gray-600 text-sm italic">1 msemen, 1 baghrir, 1 harcha, dos huevos fritos o revueltos, lonchas de pechuga de pollo, queso, una bebida caliente y fría. miel, amlou, aceitunas y aceite de oliva</small>
        </div>
        <div className="text-black text-right">
            <span>16,90</span>
        </div>

        <div>
            <span className="text-black block">ORIENT</span>
            <small className="text-gray-600 text-sm italic">1 msemen, 1 baghrir, 1 harcha, 1 rebanada de pastel casero, 1 tiramisú de amlou o pistacho, una bebida caliente y fría</small>
        </div>
        <div className="text-black text-right">
            <span>21,90</span>
        </div>

        <div>
          <span className="text-black block">HEALTHY</span>
          <small className="text-gray-600 text-sm italic">
            un plato con dos huevos fritos o revueltos, medio aguacate, ensalada, lonchas de pechuga de pollo, queso, una bebida caliente y fría
          </small>
        </div>
        <div className="text-black text-right">
          <span>14,90</span>
        </div>

        <div>
            <span className="text-black block">DÚO</span>
            <small className="text-gray-600 text-sm italic">2 sopas, 2 msemens, 2 baghrirs, 2 harchas, 2 platos de huevos, 2 bebidas calientes y frías</small>
        </div>
        <div className="text-black text-right">
            <span>39,90</span>
        </div>
        
      </div>

    </section>
  );
};

export default SectionSetMenus;