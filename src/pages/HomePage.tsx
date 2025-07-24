import Carousel from '../components/Carousel';

const HomePage = () => {
  // Images pour le carrousel (vous pouvez les remplacer par vos vraies images)
  const carouselImages = [
    '/src/assets/images/tilleul-de-canac-color.png',
    '/src/assets/images/icon-tilleul.png',
    '/src/assets/images/favicon-color.png'
  ];

  return (
    <div className="min-h-screen bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section de bienvenue */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-lime-700 mb-6">
            Bienvenue au Tilleul de Canac
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Découvrez notre charmante chambre d'hôte nichée au cœur de la campagne française. 
            Un lieu authentique où tradition et confort se rencontrent pour vous offrir 
            une expérience unique et mémorable.
          </p>
        </div>

        {/* Carrousel d'images */}
        <div className="mb-16">
          <Carousel images={carouselImages} />
        </div>

        {/* Section description */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-lime-700 mb-6">
              Une expérience authentique
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Située dans un cadre idyllique, notre chambre d'hôte vous invite à vivre 
              un séjour inoubliable. Profitez de nos espaces confortables, de notre 
              hospitalité chaleureuse et de la beauté de notre région.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Que vous veniez pour vous détendre, explorer les environs ou découvrir 
              la gastronomie locale, nous vous accueillons avec plaisir dans notre 
              maison où chaque détail a été pensé pour votre bien-être.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-lime-700 mb-4">Nos services</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-600 rounded-full mr-3"></span>
                Petit-déjeuner fait maison
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-600 rounded-full mr-3"></span>
                Jardin privé et terrasse
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-600 rounded-full mr-3"></span>
                Wi-Fi gratuit
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-600 rounded-full mr-3"></span>
                Parking privé
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-lime-600 rounded-full mr-3"></span>
                Conseils et recommandations locales
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
