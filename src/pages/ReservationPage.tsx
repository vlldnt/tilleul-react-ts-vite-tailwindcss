import { useState } from 'react';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateArrivee: '',
    dateDepart: '',
    nombrePersonnes: '2',
    chambre: '',
    petitDejeuner: false,
    demandes: ''
  });

  const chambres = [
    { id: 'tilleul', nom: 'Chambre Tilleul', prix: 85, description: 'Chambre double avec vue sur jardin' },
    { id: 'chene', nom: 'Chambre Chêne', prix: 95, description: 'Suite avec salon privatif' },
    { id: 'olivier', nom: 'Chambre Olivier', prix: 75, description: 'Chambre cosy pour 2 personnes' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Réservation soumise:', formData);
    alert('Votre demande de réservation a été envoyée ! Nous vous confirmerons la disponibilité sous 24h.');
  };

  const calculerNuits = () => {
    if (formData.dateArrivee && formData.dateDepart) {
      const arrivee = new Date(formData.dateArrivee);
      const depart = new Date(formData.dateDepart);
      const diffTime = Math.abs(depart.getTime() - arrivee.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  const calculerTotal = () => {
    const nuits = calculerNuits();
    const chambreSelectionnee = chambres.find(c => c.id === formData.chambre);
    const prixChambre = chambreSelectionnee ? chambreSelectionnee.prix * nuits : 0;
    const prixPetitDej = formData.petitDejeuner ? 12 * parseInt(formData.nombrePersonnes) * nuits : 0;
    return prixChambre + prixPetitDej;
  };

  return (
    <div className="min-h-screen bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-lime-700 mb-4">
            Réservation
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Réservez dès maintenant votre séjour au Tilleul de Canac
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire de réservation */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-lime-700 mb-6">Formulaire de réservation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informations personnelles */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations personnelles</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        required
                        value={formData.prenom}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Détails du séjour */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Détails du séjour</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="dateArrivee" className="block text-sm font-medium text-gray-700 mb-2">
                        Date d'arrivée *
                      </label>
                      <input
                        type="date"
                        id="dateArrivee"
                        name="dateArrivee"
                        required
                        value={formData.dateArrivee}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="dateDepart" className="block text-sm font-medium text-gray-700 mb-2">
                        Date de départ *
                      </label>
                      <input
                        type="date"
                        id="dateDepart"
                        name="dateDepart"
                        required
                        value={formData.dateDepart}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="nombrePersonnes" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre de personnes
                      </label>
                      <select
                        id="nombrePersonnes"
                        name="nombrePersonnes"
                        value={formData.nombrePersonnes}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                      >
                        <option value="1">1 personne</option>
                        <option value="2">2 personnes</option>
                        <option value="3">3 personnes</option>
                        <option value="4">4 personnes</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Choix de la chambre */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Choix de la chambre *</h3>
                  <div className="space-y-3">
                    {chambres.map((chambre) => (
                      <label key={chambre.id} className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="chambre"
                          value={chambre.id}
                          checked={formData.chambre === chambre.id}
                          onChange={handleChange}
                          className="mr-4 text-lime-600 focus:ring-lime-600"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-gray-900">{chambre.nom}</h4>
                            <span className="text-lg font-bold text-lime-600">{chambre.prix}€/nuit</span>
                          </div>
                          <p className="text-gray-600 text-sm">{chambre.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Options */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Options</h3>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="petitDejeuner"
                      checked={formData.petitDejeuner}
                      onChange={handleChange}
                      className="mr-3 text-lime-600 focus:ring-lime-600"
                    />
                    <span className="text-gray-700">Petit-déjeuner (+12€/personne/nuit)</span>
                  </label>
                </div>

                {/* Demandes spéciales */}
                <div>
                  <label htmlFor="demandes" className="block text-sm font-medium text-gray-700 mb-2">
                    Demandes spéciales
                  </label>
                  <textarea
                    id="demandes"
                    name="demandes"
                    rows={4}
                    value={formData.demandes}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                    placeholder="Allergies, préférences, heure d'arrivée..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-lime-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-lime-700 transition-colors duration-200 focus:ring-2 focus:ring-lime-600 focus:ring-offset-2"
                >
                  Envoyer la demande de réservation
                </button>
              </form>
            </div>
          </div>

          {/* Récapitulatif */}
          <div className="space-y-6">
            {/* Récapitulatif de la réservation */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-lime-700 mb-4">Récapitulatif</h3>
              
              {formData.dateArrivee && formData.dateDepart && formData.chambre ? (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dates:</span>
                    <span className="font-medium">
                      {new Date(formData.dateArrivee).toLocaleDateString()} - {new Date(formData.dateDepart).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nuits:</span>
                    <span className="font-medium">{calculerNuits()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Personnes:</span>
                    <span className="font-medium">{formData.nombrePersonnes}</span>
                  </div>
                  
                  {formData.chambre && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Chambre:</span>
                      <span className="font-medium">
                        {chambres.find(c => c.id === formData.chambre)?.nom}
                      </span>
                    </div>
                  )}
                  
                  {formData.petitDejeuner && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Petit-déjeuner:</span>
                      <span className="font-medium">Inclus</span>
                    </div>
                  )}
                  
                  <hr className="my-4" />
                  
                  <div className="flex justify-between text-lg font-bold text-lime-700">
                    <span>Total estimé:</span>
                    <span>{calculerTotal()}€</span>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  Remplissez le formulaire pour voir le récapitulatif
                </p>
              )}
            </div>

            {/* Informations importantes */}
            <div className="bg-lime-50 rounded-lg p-6 border border-lime-200">
              <h3 className="text-lg font-bold text-lime-700 mb-3">Informations importantes</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Check-in: 15h00 - 20h00</li>
                <li>• Check-out: 8h00 - 11h00</li>
                <li>• Annulation gratuite 48h avant</li>
                <li>• Confirmation sous 24h</li>
                <li>• Paiement sur place</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
