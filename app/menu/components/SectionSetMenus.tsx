const SectionSetMenus = () => {
  return (
    <section id="set-menus" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">FORMULES</h2>

      <div className="grid grid-cols-4 gap-y-4 mb-4">
        <div className="col-span-3">
            <span className="text-black block">PRIMO</span>
            <small className="text-gray-600 text-sm italic">1 msemen, 2 baghrirs, une boisson chaude et une froide</small>
        </div>
        <div className="text-black text-right col-span-1">
            <span>10,90</span>
        </div>

        <div className="col-span-3">
            <span className="text-black block">MANZIL</span>
            <small className="text-gray-600 text-sm italic">1 msemen, 1 baghrir, 1 harcha,deux oeufs au plat ou brouillés, tranche de blanc de poulet, un fromage, une boisson chaude et froide. miel,amlou,olives et huile d&apos;olive</small>
        </div>
        <div className="text-black text-right col-span-1">
            <span>16,90</span>
        </div>

        <div className="col-span-3">
            <span className="text-black block">ORIENT</span>
            <small className="text-gray-600 text-sm italic">1 msemen, 1 baghrir, 1 harcha, 1 part de cake maison, 1 tiramisu amlou ou pistache, une boisson chaude et froide</small>
        </div>
        <div className="text-black text-right col-span-1">
            <span>21,90</span>
        </div>

        <div className="col-span-3">
          <span className="text-black block">HEALTHY</span>
          <small className="text-gray-600 text-sm italic">
            une assiette composée de deux oeufs au plat ou brouillés, un demi avocat, une salade, une tranche de blanc de poulet, un fromage, une boisson chaude et froide
          </small>
        </div>
        <div className="text-black text-right col-span-1">
          <span>14,90</span>
        </div>

        <div className="col-span-3">
            <span className="text-black block">DUO</span>
            <small className="text-gray-600 text-sm italic">2 soupes, 2 msemens, 2 baghrirs, 2 harchas, 2 assiettes d&apos;oeufs, 2 boissons chaudes et froides</small>
        </div>
        <div className="text-black text-right col-span-1">
            <span>39,90</span>
        </div>

      </div>

    </section>
  );
};

export default SectionSetMenus;
