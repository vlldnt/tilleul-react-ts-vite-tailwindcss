import { useState } from 'react';

type PageType = 'accueil' | 'ou-manger' | 'alentours' | 'contact' | 'disponibilite';

interface NavbarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

const Navbar = ({ currentPage, onPageChange }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Accueil', page: 'accueil' as PageType },
    { label: 'Où manger ?', page: 'ou-manger' as PageType },
    { label: 'Alentours', page: 'alentours' as PageType },
    { label: 'Contact', page: 'contact' as PageType },
    { label: 'Disponibilité', page: 'disponibilite' as PageType }
  ];

  const handleMenuClick = (page: PageType) => {
    onPageChange(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        {/* Logo */}
        <button onClick={() => handleMenuClick('accueil')} className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
          <img src="/src/assets/images/tilleul-de-canac-color.png" className="h-20" alt="Tilleul de Canac" />
        </button>

        {/* CTA Button + Mobile menu button */}
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <button 
            onClick={() => handleMenuClick('disponibilite')}
            type="button" 
            className="hidden md:block text-white bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors duration-200"
          >
            Réserver
          </button>
          
          <button 
            onClick={toggleMenu}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
            aria-controls="navbar-sticky" 
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            {menuItems.map((item) => (
              <li key={item.page} className={item.page === 'disponibilite' ? 'md:hidden' : ''}>
                <button
                  onClick={() => handleMenuClick(item.page)}
                  className={`block rounded-md transition-colors duration-200 w-full text-left md:w-auto ${
                    currentPage === item.page
                      ? item.page === 'disponibilite' 
                        ? 'text-white bg-lime-600' 
                        : 'text-white bg-lime-600 md:bg-transparent md:text-lime-600'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-600 md:p-0'
                  }`}
                  aria-current={currentPage === item.page ? 'page' : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
