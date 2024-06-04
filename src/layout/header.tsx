import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Phone,
  YoutubeLogo,
} from '@phosphor-icons/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'react-scroll'

import BrazilFlag from '@/assets/images/brazilian-flag.png'
import EuaFlag from '@/assets/images/eua-flag.png'
import KeeperLogoNavImg from '@/assets/images/logo-nav.svg'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { useResponsive } from '@/hooks/responisve'

export function Header() {
  const { Desktop } = useResponsive()
  const [openNav, setOpenNav] = useState(false)
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(language)
  function handleChangeLanguage(language: string) {
    setCurrentLanguage(language)
    changeLanguage(language)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setOpenNav(true)
      } else {
        setOpenNav(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Desktop>
        <header
          className={clsx('fixed top-0 z-50 flex w-full flex-col', {
            'shadow-xl': openNav,
          })}
        >
          <div
            className={clsx(
              'z-50 flex h-9 w-full transition-colors duration-500',
              {
                'bg-black/30': !openNav,
                'bg-white': openNav,
              },
            )}
          >
            <div className="m-auto flex w-[1440px] items-center justify-between px-20">
              <div className=" flex items-center gap-2 ">
                <RouterLink
                  to="https://www.facebook.com/people/Keepers-Log%C3%ADstica/100057304254890/"
                  target="_blank"
                >
                  <FacebookLogo
                    className="h-5 w-5 transition-colors"
                    color={openNav ? 'dark' : 'white'}
                  />
                </RouterLink>
                <RouterLink
                  to="https://www.instagram.com/keepers_logistica/"
                  target="_blank"
                >
                  <InstagramLogo
                    className="h-5 w-5  transition-colors"
                    color={openNav ? 'dark' : 'white'}
                  />
                </RouterLink>
                <RouterLink
                  to="https://www.linkedin.com/company/keepers-logistica/mycompany/"
                  target="_blank"
                >
                  <LinkedinLogo
                    className="h-5 w-5  transition-colors"
                    color={openNav ? 'dark' : 'white'}
                  />
                </RouterLink>
                <RouterLink
                  to="https://www.youtube.com/watch?v=Rdd6FLXW0bU&ab_channel=FelippiPerez"
                  target="_blank"
                >
                  <YoutubeLogo
                    className="h-5 w-5  transition-colors"
                    color={openNav ? 'dark' : 'white'}
                  />
                </RouterLink>
              </div>
              <div className="flex items-center  gap-6">
                <div className="flex items-center gap-2">
                  <p
                    className={clsx('font-title font-medium uppercase', {
                      'text-white': !openNav,
                      'text-dark': openNav,
                    })}
                  >
                    {currentLanguage}
                  </p>
                  <img
                    className="mr-1 h-[20px] w-[30px] cursor-pointer rounded-md"
                    src={BrazilFlag}
                    alt="brazil flag"
                    onClick={() => handleChangeLanguage('pt')}
                  />
                  <img
                    className="h-[20px] w-[30px] cursor-pointer rounded-md"
                    src={EuaFlag}
                    alt="eua flag"
                    onClick={() => handleChangeLanguage('en')}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Phone
                    color={openNav ? 'dark' : 'white'}
                    className="h-5 w-5"
                  />
                  <span
                    className={clsx('text-xs font-medium', {
                      'text-white': !openNav,
                      'text-dark': openNav,
                    })}
                  >
                    (11) 4151 - 9030
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <EnvelopeSimple
                    className="h-5 w-5"
                    color={openNav ? 'dark' : 'white'}
                  />
                  <span
                    className={clsx('text-xs font-medium', {
                      'text-white': !openNav,
                      'text-dark': openNav,
                    })}
                  >
                    comercial@keepers.com.br
                  </span>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: '-100px' }}
            animate={openNav ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="z-0 flex h-16 items-center justify-between bg-[#FF5D04]"
          >
            <div className="m-auto flex w-[1440px] justify-between px-20">
              <Link to="home" spy={true} smooth={true} duration={500}>
                <motion.img
                  initial={{ opacity: 0, scale: 0 }}
                  animate={openNav ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                  src={KeeperLogoNavImg}
                  alt="logo keepers K"
                  className="w-[120px] cursor-pointer"
                />
              </Link>
              <nav className="hidden items-center lg:flex">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger noChevron className="text-white">
                        <Link
                          to="solutions"
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          {t('navigation.solutions')}
                        </Link>
                      </NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger noChevron className="text-white">
                        <Link
                          to="integrador"
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          {t('navigation.ourSystem')}
                        </Link>
                      </NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger noChevron className="text-white">
                        <Link
                          to="segments"
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          {t('navigation.segments')}
                        </Link>
                      </NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger noChevron className="text-white">
                        <Link
                          to="contact"
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          {t('navigation.contact')}
                        </Link>
                      </NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger noChevron className="text-white">
                        <Link
                          to="about-me"
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          {t('navigation.aboutUs')}
                        </Link>
                      </NavigationMenuTrigger>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <Button className="font-title ml-2 h-7 rounded-full bg-white px-5 text-xs font-bold text-[#391805]">
                  <RouterLink
                    to="https://integrador.keepers.com.br"
                    target="_blank"
                  >
                    {t('navigation.accessSystem')}
                  </RouterLink>
                </Button>
              </nav>
            </div>
          </motion.div>
        </header>
      </Desktop>
      {/* <Mobile>
        <List
          color="white"
          className="fixed left-0 top-0 z-50 h-6 w-6 text-[50px]"
        />
      </Mobile> */}
    </>
  )
}
