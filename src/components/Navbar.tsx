import { useState } from 'react';

type PageType = 'accueil' | 'ou-manger' | 'alentours' | 'contact' | 'reserver';

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
    { label: 'Réserver', page: 'reserver' as PageType }
  ];

  const handleMenuClick = (page: PageType) => {
    onPageChange(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => handleMenuClick('accueil')} className="hover:opacity-80 transition-opacity duration-200">
              <img src="/src/assets/images/tilleul-de-canac-color.png" alt="Tilleul de Canac" 
                className="p-4 h-28 w-auto"/>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item.page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.page
                      ? 'bg-lime-600 text-white'
                      : 'text-lime-600 hover:bg-lime-100 hover:text-lime-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-lime-600 hover:bg-lime-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-600"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-lime-700">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleMenuClick(item.page)}
              className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                currentPage === item.page
                  ? 'bg-lime-800 text-white'
                  : 'text-white hover:bg-lime-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
