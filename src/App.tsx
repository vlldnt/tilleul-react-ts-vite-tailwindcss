import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RestaurantsPage from './pages/RestaurantsPage';
import AlentoursPage from './pages/AlentoursPage';
import ContactPage from './pages/ContactPage';
import ReservationPage from './pages/ReservationPage';

type PageType = 'accueil' | 'ou-manger' | 'alentours' | 'contact' | 'reserver';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('accueil');

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <HomePage />;
      case 'ou-manger':
        return <RestaurantsPage />;
      case 'alentours':
        return <AlentoursPage />;
      case 'contact':
        return <ContactPage />;
      case 'reserver':
        return <ReservationPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
