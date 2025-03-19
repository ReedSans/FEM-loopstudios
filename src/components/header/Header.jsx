import { useState } from 'react'
import Logo from './Logo'
import NavMenu from './NavMenu'
import MobileMenu from './MobileMenu'
import HeroSection from './HeroSection'

const Header = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggleNavMenu = () => {
    setIsOpen(prevValue => !prevValue)
  }

  return (
    <header className="  bg-[url('../images/desktop/image-hero.jpg')] bg-cover bg-center text-white min-h-[80vh] pb-36">
      <nav className="container mx-auto max-w-6xl flex justify-between py-12">
        <Logo />
        <NavMenu />
        <MobileMenu isOpen={isOpen} toggle={toggleNavMenu} />
      </nav>
      <HeroSection />
    </header>
  )
}

export default Header