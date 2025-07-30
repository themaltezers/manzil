const SectionSalty = () => {
  return (
    <section id="salty-menu" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">NOS SALÉS</h2>

      <div className="grid grid-cols-4 gap-y-4 mb-4">
        <div className="col-span-3">
          <span className="text-black block">AVOCADO TOAST</span>
          <small className="text-gray-600 text-sm italic">
            guacamole d&apos;avocat, fromage frais, oeuf poché, paprika, citron vert
          </small>
        </div>
        <div className="text-black text-right col-span-1">
          <span>13,90</span>
        </div>

        <div className="col-span-3">
          <span className="text-black block">MSEMEN GARNI</span>
          <small className="text-gray-600 text-sm italic">
            msemens frais, garni de poulet mariné aux épices savoureuse et d&apos;une couche fondante de cheddar
          </small>
        </div>
        <div className="text-black text-right col-span-1">
          <span>13,90</span>
        </div>

        <div className="col-span-3">
          <span className="text-black block">MANZIL ADDICT</span>
          <small className="text-gray-600 text-sm italic">
            sur une base de msemen, 1 avocat tranché, boeuf effiloché, 2 oeufs pochés accompagnés d&apos;une sauce hollandaise
          </small>
        </div>
        <div className="text-black text-right col-span-1">
          <span>14,90</span>
        </div>

        <div className="col-span-3">
          <span className="text-black block">SOUPE & BRICK</span>
          <small className="text-gray-600 text-sm italic">
            soupe du jour, brick carré à la pomme de terre, poulet et cheddar
          </small>
        </div>
        <div className="text-black text-right col-span-1">
          <span>12,90</span>
        </div>

        <div className="col-span-3">
          <span className="text-black block">LE CLUB</span>
          <small className="text-gray-600 text-sm italic">
            pain de campagne toasté, couche de pesto, poelée de tomate cerise à l&apos;ail, strachiatella, pastrami vinaigre balsamique aux figues
          </small>
        </div>
        <div className="text-black text-right col-span-1">
          <span>14,90</span>
        </div>
      </div>
    </section>
  );
};

export default SectionSalty;
