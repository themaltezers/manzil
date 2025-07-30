const SectionSetMenus = () => {
  return (
    <section id="set-menus" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">SET MENUS</h2>

      <div className="grid grid-cols-2 gap-y-4 mb-4">
        <div>
            <span className="text-black block">PRIMO</span>
            <small className="text-gray-600 text-sm italic">1 msemen, 2 baghrirs, one hot drink and one cold drink</small>
        </div>
        <div className="text-black text-right">
            <span>10,90</span>
        </div>

        <div>
            <span className="text-black block">MANZIL</span>
            <small className="text-gray-600 text-sm italic">1 msemen, 1 baghrir, 1 harcha, two fried or scrambled eggs, slice of chicken breast, cheese, one hot and cold drink. honey, amlou, olives and olive oil</small>
        </div>
        <div className="text-black text-right">
            <span>16,90</span>
        </div>

        <div>
            <span className="text-black block">ORIENT</span>
            <small className="text-gray-600 text-sm italic">1 msemen, 1 baghrir, 1 harcha, 1 slice of homemade cake, 1 amlou or pistachio tiramisu, one hot and cold drink</small>
        </div>
        <div className="text-black text-right">
            <span>21,90</span>
        </div>

        <div>
          <span className="text-black block">HEALTHY</span>
          <small className="text-gray-600 text-sm italic">
            a plate with two fried or scrambled eggs, half an avocado, salad, slice of chicken breast, cheese, one hot and cold drink
          </small>
        </div>
        <div className="text-black text-right">
          <span>14,90</span>
        </div>

        <div>
            <span className="text-black block">DUO</span>
            <small className="text-gray-600 text-sm italic">2 soups, 2 msemens, 2 baghrirs, 2 harchas, 2 egg plates, 2 hot and cold drinks</small>
        </div>
        <div className="text-black text-right">
            <span>39,90</span>
        </div>
        
      </div>

    </section>
  );
};

export default SectionSetMenus;