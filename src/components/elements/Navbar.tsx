import { useState } from 'react';
import { Container } from '../shared/Container';
import logo from '../../assets/icon.svg';
import NavItems from '../shared/NavItems';
import BtnLink from '../shared/BtnLink';
import { useThemeStore } from '../../store/ThemeStore';
import { navItems } from '../../utils/helper';

function Navbar() {
  const { toggleTheme, theme } = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <ul className={`
                border-t ${
                  theme === 'dark' ? 'border-gray-700' : 'border-none'
                }
                lg:border-t-0 px-6 lg:px-0
                flex flex-col lg:flex-row gap-3
                pb-4 pt-3 lg:py-0
                text-lg ${
                  theme === 'dark' ? 'text-white' : 'text-heading-2'
                }
                w-full lg:justify-evenly lg:items-center`
              }>
              {navItems.map((item, key) => (
                <NavItems
                  href={item.href}
                  text={item.text}
                  key={key}
                  className={theme === 'dark' ? 'text-white' : 'text-heading-2'}
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}
            </ul>
            <div className={`
                lg:min-w-max flex items-center sm:w-max w-full
                pb-6 lg:pb-0
                border-b ${
                  theme === 'dark' ? 'border-gray-700' : 'border-none'
                }
                lg:border-b-0 px-6 lg:px-0`
              }>
              <BtnLink
                text="Get Started"
                href="#cta"
                className={theme === 'dark' ? 'text-white' : 'text-heading-2'}
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          </div>

          {/* Right Buttons */}
          <div className="min-w-max flex items-center gap-x-3">
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`
                lg:hidden p-2 rounded-full
                ${
                  theme === 'dark' 
                    ? 'border-gray-700 text-white border' 
                    : 'border-none text-heading-2'
                }`
              }
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex rounded-full p-2 lg:p-3 ${
                theme === 'dark' 
                  ? 'border-gray-700 text-white border' 
                  : 'border-none text-heading-2'
              }`}
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;