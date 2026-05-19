export default function LagomTerraceWebsite() {
  const menuCategories = [
    {
      title: 'Appetizers',
      items: [
        'Mozzarella Sticks — $17',
        'Fried Dumplings — $16',
        'Shrimp Cocktail — $19',
        'Nachos — Chicken $21 / Beef $21',
        'Cheesy Fries — Chicken $21 / Beef $21',
        'Chicken Botanas — 5pc $13 / 10pc $20',
      ],
    },
    {
      title: 'Burgers',
      items: [
        'Grilled Burger — $16',
        'Bacon Cheese Burger — $18',
        'Fish Burger — $19',
        'Teriyaki Hawaiian Burger — $21',
        'Lagom Double Pattie Burger — $30',
      ],
    },
    {
      title: 'Cocktails',
      items: [
        'Panty Rippers',
        'Rum Punch',
        'Jolly Rancher',
        'Electric Lemonade',
        'Mojitos',
        'Piña Colada',
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-widest text-amber-400">
              Lagom Terrace
            </h1>
            <p className="text-xs text-teal-300 tracking-[0.3em] uppercase">
              Rooftop Lounge
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            <a href="#home" className="hover:text-amber-400 transition">Home</a>
            <a href="#menu" className="hover:text-amber-400 transition">Menu</a>
            <a href="#specials" className="hover:text-amber-400 transition">Specials</a>
            <a href="#drinks" className="hover:text-amber-400 transition">Drinks</a>
            <a href="#reserve" className="hover:text-amber-400 transition">Reserve</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-teal-400/10" />

        <div className="relative z-10 max-w-4xl text-center">
          <div className="inline-block px-4 py-2 rounded-full border border-amber-500/30 bg-white/5 backdrop-blur-xl mb-6">
            <span className="text-amber-300 uppercase text-xs tracking-[0.3em]">
              Premium Rooftop Dining
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 bg-gradient-to-r from-amber-300 via-yellow-100 to-teal-300 bg-clip-text text-transparent">
            Lagom Terrace
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Luxury rooftop dining, handcrafted cocktails, tropical nightlife energy,
            and unforgettable flavors in the heart of Belize.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold hover:scale-105 transition duration-300 shadow-2xl shadow-amber-500/30"
            >
              Explore Menu
            </a>

            <a
              href="https://jose1234-design.github.io/Lagomterrace/?name=Jose+Menjivar&phone=622-2264&guests=2&date=2026-05-19&time=17%3A51&message=#reserve"
              className="px-8 py-4 rounded-2xl border border-teal-400/50 bg-teal-400/10 text-teal-200 backdrop-blur-xl hover:bg-teal-400/20 transition"
            >
              Reserve Table
            </a>
          </div>
        </div>
      </section>

      {/* SPECIALS */}
      <section id="specials" className="py-24 px-6 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-amber-400 text-sm mb-4">
              Chef Recommendations
            </p>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Tonight's Specials
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Signature rooftop dishes crafted for unforgettable evenings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Grilled Arrachera',
                price: '$35',
                image:
                  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1974&auto=format&fit=crop',
              },
              {
                title: 'Coconut Curry Shrimp',
                price: '$25',
                image:
                  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop',
              },
              {
                title: 'Piña Colada',
                price: '$18',
                image:
                  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1974&auto=format&fit=crop',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl hover:-translate-y-2 transition duration-500"
              >
                <div
                  className="h-80 bg-cover bg-center group-hover:scale-110 transition duration-700"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-bold mb-4">
                    Popular
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-amber-300 text-xl font-semibold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-teal-300 text-sm mb-4">
              Digital Menu
            </p>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Crafted Flavors
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Browse signature dishes, handcrafted cocktails, and elevated rooftop cuisine.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {menuCategories.map((category, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-2xl p-8 hover:border-amber-500/30 transition"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-amber-300">
                    {category.title}
                  </h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    Featured
                  </span>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-between border-b border-white/5 pb-4 hover:translate-x-2 transition"
                    >
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRINKS */}
      <section id="drinks" className="py-24 px-6 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-amber-400 text-sm mb-4">
              Signature Cocktails
            </p>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Lagom Favorites
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Panty Rippers',
              'Rum Punch',
              'Electric Lemonade',
              'Blue Monkey Wrench',
            ].map((drink, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden h-[420px] border border-white/10"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-700"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1974&auto=format&fit=crop')",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 p-6">
                  <div className="inline-flex mb-3 px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-bold">
                    Cocktail
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{drink}</h3>
                  <p className="text-gray-300 text-sm">
                    Tropical rooftop mixology with premium ingredients.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVE */}
      <section id="reserve" className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center rounded-[40px] border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-white/5 to-teal-500/10 backdrop-blur-3xl p-12">
          <p className="uppercase tracking-[0.3em] text-amber-300 text-sm mb-4">
            Reserve Your Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Book Your Rooftop Night
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Reserve your table now and enjoy elevated cuisine, handcrafted cocktails,
            and unforgettable rooftop vibes.
          </p>

          <a
            href="https://jose1234-design.github.io/Lagomterrace/?name=Jose+Menjivar&phone=622-2264&guests=2&date=2026-05-19&time=17%3A51&message=#reserve"
            className="inline-flex px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 text-black text-lg font-bold shadow-2xl shadow-amber-500/30 hover:scale-105 transition"
          >
            Reserve Now
          </a>
        </div>
      </section>

      {/* FLOATING ACTIONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a
          href="https://wa.me/5016222264"
          className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:scale-110 transition"
        >
          💬
        </a>

        <a
          href="tel:+5016222264"
          className="w-14 h-14 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-2xl hover:scale-110 transition"
        >
          📞
        </a>
      </div>

      {/* MOBILE NAV */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 backdrop-blur-2xl bg-black/70 border-t border-white/10">
        <div className="grid grid-cols-5 text-center py-3 text-xs uppercase tracking-wide">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#specials">Specials</a>
          <a href="#drinks">Drinks</a>
          <a href="#reserve">Reserve</a>
        </div>
      </div>
    </div>
  );
}
