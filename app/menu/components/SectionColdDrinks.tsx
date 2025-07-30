const SectionColdDrinks = () => {
  return (
    <section id="cold-drinks" className="bg-[#fcfbf8] p-8">
      <h2 className="text-4xl text-center text-[#bc8158] mb-8">BOISSONS FROIDES</h2>

      <div className="grid grid-cols-4 gap-y-4 mb-4">
        <div className="col-span-3">
            <span className="text-black block">MANZIL</span>
            <small className="text-gray-600 text-sm italic">Jus d&apos;avocat, amandes, dattes et lait</small>
        </div>
        <div className="col-span-1 text-black text-right">
            <span>6,00</span>
        </div>

        <div className="col-span-3">
            <span className="text-black block">DUO FRUITE</span>
            <small className="text-gray-600 text-sm italic">Smoothie fraicheur fraise & banane</small>
        </div>
        <div className="col-span-1 text-black text-right">
            <span>6,00</span>
        </div>

        <div className="col-span-3">
            <span className="text-black block">DETOX</span>
            <small className="text-gray-600 text-sm italic">booster à base de citron vert, concombre, pomme verte, céleri, menthe & gingembre</small>
        </div>
        <div className="col-span-1 text-black text-right">
            <span>6,00</span>
        </div>

        <div className="col-span-3">
            <span className="text-black block">FRESH CITRONNADE</span>
        </div>
        <div className="col-span-1 text-black text-right">
            <span>6,90</span>
        </div>

        <div className="col-span-3">
            <span className="text-black block">TROPICAL</span>
            <small className="text-gray-600 text-sm italic">smoothie fraise, mangue, ananas et jus d&apos;orange pressé</small>
        </div>
        <div className="col-span-1 text-black text-right">
            <span>6,90</span>
        </div>

        <div className="col-span-3">
            <span className="text-black block">MANGUE ANANAS FUSION</span>
        </div>
        <div className="col-span-1 text-black text-right">
            <span>6,90</span>
        </div>

        <div className="col-span-3">
            <span className="text-black block">ORANGE PRESSE</span>
        </div>
        <div className="col-span-1 text-black text-right">
            <span>4,50</span>
        </div>

      </div>

    </section>
  );
};

export default SectionColdDrinks;
