const SectionSetMenus = () => {
  return (
    <section id="set-menus" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">MENÙ</h2>

      <div className="grid grid-cols-2 gap-y-4 mb-4">
        <div>
          <span className="text-black block">PRIMO</span>
          <small className="text-gray-600 text-sm italic">
            1 msemen, 2 baghrir, una bevanda calda e una fredda
          </small>
        </div>
        <div className="text-black text-right">
          <span>10,90</span>
        </div>

        <div>
          <span className="text-black block">MANZIL</span>
          <small className="text-gray-600 text-sm italic">
            1 msemen, 1 baghrir, 1 harcha, due uova al tegamino o strapazzate, fetta di petto di pollo, formaggio, una bevanda calda e fredda, miele, amlou, olive e olio d'oliva
          </small>
        </div>
        <div className="text-black text-right">
          <span>16,90</span>
        </div>

        <div>
          <span className="text-black block">ORIENTE</span>
          <small className="text-gray-600 text-sm italic">
            1 msemen, 1 baghrir, 1 harcha, 1 fetta di torta fatta in casa, 1 tiramisù amlou o pistacchio, una bevanda calda e una fredda
          </small>
        </div>
        <div className="text-black text-right">
          <span>21,90</span>
        </div>

        <div>
          <span className="text-black block">SALUTARE</span>
          <small className="text-gray-600 text-sm italic">
            un piatto composto da due uova al tegamino o strapazzate, mezzo avocado, un'insalata, una fetta di petto di pollo, formaggio, una bevanda calda e una fredda
          </small>
        </div>
        <div className="text-black text-right">
          <span>14,90</span>
        </div>

        <div>
          <span className="text-black block">DUO</span>
          <small className="text-gray-600 text-sm italic">
            2 zuppe, 2 msemen, 2 baghrir, 2 harcha, 2 piatti di uova, 2 bevande calde e fredde
          </small>
        </div>
        <div className="text-black text-right">
          <span>39,90</span>
        </div>
      </div>
    </section>
  );
};

export default SectionSetMenus;