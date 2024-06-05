import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  List,
  Phone,
  YoutubeLogo,
} from '@phosphor-icons/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from 'react-responsive'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'react-scroll'

import BrazilFlag from '@/assets/flags/brazilian-flag.png'
import ChinaFlag from '@/assets/flags/china-flag.png'
import EuaFlag from '@/assets/flags/eua-flag.png'
import SpainFlag from '@/assets/flags/spain-flag.png'
import KeeperLogoNavImg from '@/assets/images/logo-nav.svg'
import { CountryFlag } from '@/components/country-flag'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useResponsive } from '@/hooks/responisve'

export function Header() {
  const { Desktop } = useResponsive()
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [openNav, setOpenNav] = useState(false)
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(language)
  const [openDrawer, setOpenDrawer] = useState(false)

  function handleChangeLanguage(language: string) {
    setCurrentLanguage(language)
    changeLanguage(language)
    localStorage.setItem('language', language)
  }

  useEffect(() => {
    const language = localStorage.getItem('language')

    if (language) {
      handleChangeLanguage(language)
    }

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
          <div className="z-50 flex h-9 w-full bg-white transition-colors">
            <div className="m-auto flex w-[1440px] items-center justify-between px-20">
              <div className=" flex items-center gap-2 ">
                <RouterLink
                  to="https://www.facebook.com/people/Keepers-Log%C3%ADstica/100057304254890/"
                  target="_blank"
                >
                  <FacebookLogo
                    className="h-5 w-5 transition-colors"
                    color="dark"
                  />
                </RouterLink>
                <RouterLink
                  to="https://www.instagram.com/keepers_logistica/"
                  target="_blank"
                >
                  <InstagramLogo
                    className="h-5 w-5  transition-colors"
                    color="dark"
                  />
                </RouterLink>
                <RouterLink
                  to="https://www.linkedin.com/company/keepers-logistica/mycompany/"
                  target="_blank"
                >
                  <LinkedinLogo
                    className="h-5 w-5  transition-colors"
                    color="dark"
                  />
                </RouterLink>
                <RouterLink
                  to="https://www.youtube.com/watch?v=Rdd6FLXW0bU&ab_channel=FelippiPerez"
                  target="_blank"
                >
                  <YoutubeLogo
                    className="h-5 w-5  transition-colors"
                    color="dark"
                  />
                </RouterLink>
              </div>
              <div className="flex items-center  gap-6">
                <div className="flex items-center gap-2">
                  <Select
                    value={currentLanguage}
                    onValueChange={handleChangeLanguage}
                  >
                    <SelectTrigger className="font-title text-dark border-none font-medium uppercase">
                      <SelectValue>{currentLanguage}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>{t('langs.header')}</SelectLabel>
                        <SelectItem value="pt">
                          <div className="flex items-center justify-center gap-2">
                            <img
                              className="h-[10px] w-[15px] rounded-sm"
                              src={BrazilFlag}
                              alt="brazil flag"
                            />
                            <span>Português</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="en">
                          <div className="flex items-center justify-center gap-2">
                            <img
                              className="h-[10px] w-[15px] rounded-sm"
                              src={EuaFlag}
                              alt="eua flag"
                            />
                            <span>Inglês</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="es">
                          <div className="flex items-center justify-center gap-2">
                            <img
                              className="h-[10px] w-[15px] rounded-sm"
                              src={SpainFlag}
                              alt="spain flag"
                            />
                            <span>Espanhol</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="zh">
                          <div className="flex items-center justify-center gap-2">
                            <img
                              className="h-[10px] w-[15px] rounded-sm"
                              src={ChinaFlag}
                              alt="spain flag"
                            />
                            <span>Chinês</span>
                          </div>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <CountryFlag />
                </div>
                <div className="flex items-center gap-2">
                  <Phone color="dark" className="h-5 w-5" />
                  <span className="text-dark text-xs font-medium">
                    + 55 (11) 4151 - 9030
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <EnvelopeSimple className="h-5 w-5" color="dark" />
                  <span className="text-dark text-xs font-medium">
                    comercial@keepers.com.br
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-0 flex h-16 items-center justify-between bg-[#FF5D04]">
            <div className="m-auto flex w-[1440px] justify-between px-20">
              <Link to="home" spy={true} smooth={true} duration={500}>
                <motion.img
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
                        <RouterLink to="/">
                          {t('navigationBlog.home')}
                        </RouterLink>
                      </NavigationMenuTrigger>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <Button className="font-title ml-2 h-7 rounded-full bg-white px-5 text-xs font-bold text-[#391805] hover:bg-orange-200">
                  <RouterLink
                    to="https://integrador.keepers.com.br"
                    target="_blank"
                  >
                    {t('navigation.accessSystem')}
                  </RouterLink>
                </Button>
              </nav>
            </div>
          </div>
        </header>
      </Desktop>
      {isMobile && (
        <>
          <Drawer onOpenChange={setOpenDrawer} open={openDrawer}>
            <DrawerTrigger className="fixed left-5 top-5 z-50 ">
              <List color="orange" className="h-10 w-10" scale={3} />
            </DrawerTrigger>
            <DrawerContent className="h-[40%]">
              <header className="flex h-full w-full">
                <div className="mt-10 flex w-full flex-col items-center justify-start">
                  <div className="mb-4 flex items-center gap-6">
                    <RouterLink
                      to="https://www.facebook.com/people/Keepers-Log%C3%ADstica/100057304254890/"
                      target="_blank"
                    >
                      <FacebookLogo
                        className="h-8 w-8 transition-colors"
                        color="dark"
                      />
                    </RouterLink>
                    <RouterLink
                      to="https://www.instagram.com/keepers_logistica/"
                      target="_blank"
                    >
                      <InstagramLogo
                        className="h-8 w-8  transition-colors"
                        color="dark"
                      />
                    </RouterLink>
                    <RouterLink
                      to="https://www.linkedin.com/company/keepers-logistica/mycompany/"
                      target="_blank"
                    >
                      <LinkedinLogo
                        className="h-8 w-8  transition-colors"
                        color="dark"
                      />
                    </RouterLink>
                    <RouterLink
                      to="https://www.youtube.com/watch?v=Rdd6FLXW0bU&ab_channel=FelippiPerez"
                      target="_blank"
                    >
                      <YoutubeLogo
                        className="h-8 w-8  transition-colors"
                        color="dark"
                      />
                    </RouterLink>
                  </div>
                  <div className="flex w-full flex-col items-start gap-3">
                    <div className="m-auto flex w-full items-center justify-center">
                      <div className="flex w-full items-center justify-center gap-6">
                        <div className="flex items-center">
                          <Select
                            value={currentLanguage}
                            onValueChange={handleChangeLanguage}
                          >
                            <SelectTrigger className="font-title text-dark border-none font-medium uppercase">
                              <SelectValue>{currentLanguage}</SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>{t('langs.header')}</SelectLabel>
                                <SelectItem value="pt">
                                  <div className="flex items-center justify-center gap-2">
                                    <img
                                      className="h-[10px] w-[15px] rounded-sm"
                                      src={BrazilFlag}
                                      alt="brazil flag"
                                    />
                                    <span>Português</span>
                                  </div>
                                </SelectItem>
                                <SelectItem value="en">
                                  <div className="flex items-center justify-center gap-2">
                                    <img
                                      className="h-[10px] w-[15px] rounded-sm"
                                      src={EuaFlag}
                                      alt="eua flag"
                                    />
                                    <span>Inglês</span>
                                  </div>
                                </SelectItem>
                                <SelectItem value="es">
                                  <div className="flex items-center justify-center gap-2">
                                    <img
                                      className="h-[10px] w-[15px] rounded-sm"
                                      src={SpainFlag}
                                      alt="spain flag"
                                    />
                                    <span>Espanhol</span>
                                  </div>
                                </SelectItem>
                                <SelectItem value="zh">
                                  <div className="flex items-center justify-center gap-2">
                                    <img
                                      className="h-[10px] w-[15px] rounded-sm"
                                      src={ChinaFlag}
                                      alt="spain flag"
                                    />
                                    <span>Chinês</span>
                                  </div>
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <CountryFlag />
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone color="dark" className="h-5 w-5" />
                          <span className="text-dark text-xs font-medium">
                            + 55 (11) 4151 - 9030
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex w-full items-center justify-center gap-2">
                      <EnvelopeSimple className="h-5 w-5" color="dark" />
                      <span className="text-dark  text-sm font-medium">
                        comercial@keepers.com.br
                      </span>
                    </div>

                    <RouterLink
                      to="https://integrador.keepers.com.br"
                      className="mt-6 w-full px-10"
                    >
                      <Button className="h-14 w-full">
                        {t('integradorSection.access')}
                      </Button>
                    </RouterLink>
                  </div>
                </div>
              </header>
            </DrawerContent>
          </Drawer>

          <div
            onClick={() => setOpenDrawer(true)}
            className="absolute right-7 top-7 z-10 cursor-pointer"
          >
            <CountryFlag />
          </div>
        </>
      )}
    </>
  )
}
