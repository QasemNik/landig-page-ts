import { useState } from 'react';
import { Container } from '../shared/Container';
import logo from '../../assets/icon.svg';
import NavItems from '../shared/NavItems';
import BtnLink from '../shared/BtnLink';
import { useThemeStore } from '../../store/ThemeStore';
import { navItems } from '../../utils/helper';
import { MoonSvg, SunSvg, SvgBurger, SvgX } from '../../svg/svgs';

function Navbar() {
  const { toggleTheme, theme } = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='absolute inset-x-0 top-0 z-50 py-6'>
      <Container>
        <nav className='w-full flex justify-between gap-6 relative'>
          
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className='relative flex items-center gap-3'>
              <img src={logo} alt="EdgeAI Logo" className='w-10 h-10' />
              <div className={`inline-flex text-lg font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-heading-1'
              }`}>
                EdgeAi
              </div>
            </a>
          </div>

          {/* Menu */}
          <div
            className={`flex flex-col lg:flex-row w-full lg:justify-between lg:items-center
              lg:static lg:top-0 absolute top-full left-0
              ${
                theme === 'dark' 
                  ? 'bg-body border-gray-700' 
                  : 'bg-white border-none'
              }
              lg:bg-transparent
              border-x lg:border-x-0
              ${
                isMenuOpen 
                  ? 'h-auto visible opacity-100 mt-3' 
                  : 'h-0 invisible opacity-0 lg:visible lg:opacity-100 lg:h-auto'
              }
              transition-all duration-300
              overflow-hidden lg:overflow-visible`}
          >
            <ul className={`border-t ${
              theme === 'dark' ? 'border-gray-700' : 'border-none'
            } lg:border-t-0 px-6 lg:px-0 flex flex-col lg:flex-row gap-3 pb-4 pt-3 lg:py-0 text-lg ${
              theme === 'dark' ? 'text-white' : 'text-heading-2'
            } w-full lg:justify-evenly lg:items-center`}>
              {navItems.map((item, key) => (
                <NavItems
                  href={item.href}
                  text={item.text}
                  key={key}
                  className={theme === 'dark' ? 'text-white' : 'text-heading-2'}
                  onClick={handleLinkClick}
                />
              ))}
            </ul>
            <div className={`lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b ${
              theme === 'dark' ? 'border-gray-700' : 'border-none'
            } lg:border-b-0 px-6 lg:px-0`}>
              <BtnLink
                text="Get Started"
                href="#cta"
                className={theme === 'dark' ? 'text-white' : 'text-heading-2'}
                onClick={handleLinkClick}
              />
            </div>
          </div>

          {/* Right Buttons */}
          <div className="min-w-max flex items-center gap-x-3">
            {/* Hamburger Button */}
            <button
              onClick={handleMenuToggle}
              className={`lg:hidden p-2 rounded-full ${
                theme === 'dark' 
                  ? 'border-gray-700 text-white border' 
                  : 'border-none text-heading-2'
              }`}
            >
              {isMenuOpen ? (
                <SvgBurger />
              ) : (
                  
               <SvgX />
               
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex rounded-full p-3 lg:p-3 ${
                theme === 'dark' 
                  ? 'border-gray-800 text-white border' 
                  : 'border-none text-heading-2'
              }`}
            >
              {theme === "dark" ? (
               <MoonSvg />
              ) : (
                <SunSvg/>
              )}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;