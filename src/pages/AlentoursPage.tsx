const AlentoursPage = () => {
  const attractions = [
    {
      nom: "Château de Canac",
      type: "Monument historique",
      distance: "2 km",
      description: "Magnifique château du XVe siècle avec ses jardins à la française.",
      horaires: "9h-18h (avril-octobre)",
      prix: "8€/adulte"
    },
    {
      nom: "Marché de Canac",
      type: "Marché local",
      distance: "1.5 km",
      description: "Marché traditionnel avec produits du terroir tous les jeudis matin.",
      horaires: "Jeudi 8h-13h",
      prix: "Gratuit"
    },
    {
      nom: "Lac de Fontmerle",
      type: "Nature",
      distance: "5 km",
      description: "Lac naturel idéal pour la pêche, les pique-niques et les promenades.",
      horaires: "Libre accès",
      prix: "Gratuit"
    },
    {
      nom: "Vignobles de la Vallée",
      type: "Œnotourisme",
      distance: "7 km",
      description: "Découverte des vignobles locaux avec dégustation de vins.",
      horaires: "Sur rendez-vous",
      prix: "15€/personne"
    },
    {
      nom: "Sentier de randonnée GR65",
      type: "Randonnée",
      distance: "3 km",
      description: "Portion du chemin de Saint-Jacques-de-Compostelle.",
      horaires: "Libre accès",
      prix: "Gratuit"
    },
    {
      nom: "Musée du Patrimoine Rural",
      type: "Musée",
      distance: "4 km",
      description: "Découverte de l'histoire et des traditions de la région.",
      horaires: "14h-18h (fermé lundi)",
      prix: "6€/adulte"
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-lime-700 mb-4">
            Découvrez les alentours
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Notre région regorge de trésors à découvrir. Voici nos recommandations pour enrichir votre séjour.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Liste des attractions */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-lime-700 mb-6">À voir et à faire</h2>
            
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-xl font-bold text-lime-700 mb-2">
                      {attraction.nom}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="bg-lime-100 text-lime-700 px-3 py-1 rounded-full">
                        {attraction.type}
                      </span>
                      <span className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {attraction.distance}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-lg font-semibold text-lime-600">
                      {attraction.prix}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {attraction.description}
                </p>

                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {attraction.horaires}
                </div>
              </div>
            ))}
          </div>

          {/* Carte et informations pratiques */}
          <div className="space-y-6">
            {/* Carte placeholder */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-lime-700 mb-4">Carte de la région</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p>Carte interactive</p>
                  <p className="text-sm">(À intégrer avec Google Maps)</p>
                </div>
              </div>
            </div>

            {/* Informations pratiques */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-lime-700 mb-4">Informations pratiques</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Transports</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Location de vélos disponible</li>
                    <li>• Gare SNCF à 10 km</li>
                    <li>• Parking gratuit sur place</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Services</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Office de tourisme : 1 km</li>
                    <li>• Pharmacie : 1.5 km</li>
                    <li>• Supermarché : 2 km</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Météo conseillée</h4>
                  <p className="text-sm text-gray-600">
                    Meilleure période : avril à octobre pour les activités extérieures.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact rapide */}
            <div className="bg-lime-50 rounded-lg p-6 border border-lime-200">
              <h3 className="text-lg font-bold text-lime-700 mb-3">Besoin de conseils ?</h3>
              <p className="text-sm text-gray-700 mb-4">
                Nous connaissons bien la région et serons ravis de vous donner nos meilleures recommandations !
              </p>
              <div className="inline-flex items-center bg-lime-600 text-white px-4 py-2 rounded-lg text-sm">
                Contactez-nous via la page Contact
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlentoursPage;
