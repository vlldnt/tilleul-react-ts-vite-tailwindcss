import Calendar from '../components/Calendar';


const AvailabilityPage = () => {
  return (
    <div className="min-h-screen bg-green-50 py-16" id="disponibilite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-lime-700 mb-4">
            Disponibilité
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Consultez nos disponibilités en temps réel
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default AvailabilityPage;
