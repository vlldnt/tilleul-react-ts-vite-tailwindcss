const RestaurantsPage = () => {
  const restaurants = [
    {
      name: "Le Gourmet du Terroir",
      type: "Cuisine traditionnelle",
      distance: "2 km",
      description: "Restaurant familial proposant une cuisine du terroir avec des produits locaux.",
      specialites: ["Cassoulet", "Confit de canard", "Tarte aux pommes"],
      prix: "€€",
      telephone: "05 61 XX XX XX"
    },
    {
      name: "La Table de Marie",
      type: "Bistrot moderne",
      distance: "1.5 km",
      description: "Bistrot chaleureux avec une carte qui change selon les saisons.",
      specialites: ["Tartares", "Salades composées", "Plats du jour"],
      prix: "€€",
      telephone: "05 61 XX XX XX"
    },
    {
      name: "Chez Pierre",
      type: "Brasserie",
      distance: "3 km",
      description: "Brasserie conviviale avec une ambiance décontractée.",
      specialites: ["Grillades", "Fruits de mer", "Pizzas"],
      prix: "€",
      telephone: "05 61 XX XX XX"
    },
    {
      name: "L'Auberge du Tilleul",
      type: "Gastronomique",
      distance: "5 km",
      description: "Restaurant gastronomique avec vue sur la campagne.",
      specialites: ["Menu dégustation", "Foie gras", "Vins de la région"],
      prix: "€€€",
      telephone: "05 61 XX XX XX"
    },
    {
      name: "La Pizzeria del Sole",
      type: "Italien",
      distance: "2.5 km",
      description: "Authentique pizzeria italienne avec four à bois.",
      specialites: ["Pizzas au feu de bois", "Pâtes fraîches", "Tiramisu"],
      prix: "€",
      telephone: "05 61 XX XX XX"
    },
    {
      name: "Le Petit Café",
      type: "Café-restaurant",
      distance: "1 km",
      description: "Petit café sympathique pour un déjeuner rapide ou un café.",
      specialites: ["Sandwichs", "Salades", "Pâtisseries maison"],
      prix: "€",
      telephone: "05 61 XX XX XX"
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-lime-700 mb-4">
            Où manger ?
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez notre sélection de restaurants locaux pour tous les goûts et tous les budgets
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold text-lime-700 mb-2">
                      {restaurant.name}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span className="bg-lime-100 text-lime-700 px-3 py-1 rounded-full">
                        {restaurant.type}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {restaurant.distance}
                      </span>
                      <span className="text-yellow-500 font-semibold">
                        {restaurant.prix}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <a 
                      href={`tel:${restaurant.telephone}`}
                      className="inline-flex items-center bg-lime-600 text-white px-4 py-2 rounded-lg hover:bg-lime-700 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {restaurant.telephone}
                    </a>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {restaurant.description}
                </p>

                <div>
                  <h3 className="font-semibold text-lime-700 mb-2">Spécialités :</h3>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialites.map((specialite, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {specialite}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            * Les prix sont indicatifs : € (moins de 20€), €€ (20-40€), €€€ (plus de 40€)
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsPage;
