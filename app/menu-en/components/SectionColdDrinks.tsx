const SectionColdDrinks = () => {
  return (
    <section id="cold-drinks" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">COLD DRINKS</h2>

      <div className="grid grid-cols-2 gap-y-4 mb-4">
        <div>
            <span className="text-black block">MANZIL</span>
            <small className="text-gray-600 text-sm italic">Avocado juice, almonds, dates and milk</small>
        </div>
        <div className="text-black text-right">
            <span>6,00</span>
        </div>

        <div>
            <span className="text-black block">FRUITY DUO</span>
            <small className="text-gray-600 text-sm italic">Fresh strawberry & banana smoothie</small>
        </div>
        <div className="text-black text-right">
            <span>6,00</span>
        </div>

        <div>
            <span className="text-black block">DETOX</span>
            <small className="text-gray-600 text-sm italic">booster with lime, cucumber, green apple, celery, mint & ginger</small>
        </div>
        <div className="text-black text-right">
            <span>6,00</span>
        </div>

        <div>
            <span className="text-black block">FRESH LEMONADE</span>
        </div>
        <div className="text-black text-right">
            <span>6,90</span>
        </div>

        <div>
            <span className="text-black block">TROPICAL</span>
            <small className="text-gray-600 text-sm italic">strawberry, mango, pineapple smoothie and fresh orange juice</small>
        </div>
        <div className="text-black text-right">
            <span>6,90</span>
        </div>

        <div>
            <span className="text-black block">MANGO PINEAPPLE FUSION</span>
        </div>
        <div className="text-black text-right">
            <span>6,90</span>
        </div>

        <div>
            <span className="text-black block">FRESH ORANGE JUICE</span>
        </div>
        <div className="text-black text-right">
            <span>4,50</span>
        </div>
        
      </div>

    </section>
  );
};

export default SectionColdDrinks;