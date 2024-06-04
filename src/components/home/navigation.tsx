import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'react-scroll'

import LogoKeepers from '@/assets/images/logo-keepers.svg'
import { cn } from '@/lib/utils'

import { Button } from '../ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'

interface ListItemProps {
  children: ReactNode
  title: string
}

export function ListItem({ children, title }: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

export function Navigation() {
  const { t } = useTranslation()

  const solutions: { title: string; description: string }[] = [
    {
      title: t('solutions.receiving.title'),
      description: t('solutions.receiving.description'),
    },
    {
      title: t('solutions.inspection.title'),
      description: t('solutions.inspection.description'),
    },
    {
      title: t('solutions.storage.title'),
      description: t('solutions.storage.description'),
    },
    {
      title: t('solutions.handling.title'),
      description: t('solutions.handling.description'),
    },
    {
      title: t('solutions.picking.title'),
      description: t('solutions.picking.description'),
    },
    {
      title: t('solutions.shipping.title'),
      description: t('solutions.shipping.description'),
    },
    {
      title: t('solutions.distribution.title'),
      description: t('solutions.distribution.description'),
    },
    {
      title: t('solutions.management.title'),
      description: t('solutions.management.description'),
    },
  ]

  return (
    <div className="mt-20 flex items-center justify-center lg:justify-between">
      <img src={LogoKeepers} alt="logo keepers" />

      <nav className="hidden items-center lg:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white">
                <Link to="solutions" spy={true} smooth={true} duration={500}>
                  {t('navigation.solutions')}
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link to="solutions" spy={true} smooth={true} duration={500}>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {solutions.map((solution) => (
                      <ListItem key={solution.title} title={solution.title}>
                        {solution.description}
                      </ListItem>
                    ))}
                  </ul>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white">
                <Link to="integrador" spy={true} smooth={true} duration={500}>
                  {t('navigation.ourSystem')}
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="bg-integrador flex h-full w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="font-title text-md mb-2 mt-4 font-semibold text-white">
                          {t('ourSystem.title')}
                        </div>
                        <p className="text-sm leading-tight text-zinc-400">
                          {t('ourSystem.description')}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    title={t('ourSystem.features.intuitiveInterface.title')}
                  >
                    {t('ourSystem.features.intuitiveInterface.description')}
                  </ListItem>
                  <ListItem title={t('ourSystem.features.monitoring.title')}>
                    {t('ourSystem.features.monitoring.description')}
                  </ListItem>
                  <ListItem title={t('ourSystem.features.updates.title')}>
                    {t('ourSystem.features.updates.description')}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger noChevron className="text-white">
                <Link to="segments" spy={true} smooth={true} duration={500}>
                  {t('navigation.segments')}
                </Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger noChevron className="text-white">
                <Link to="contact" spy={true} smooth={true} duration={500}>
                  {t('navigation.contact')}
                </Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger noChevron className="text-white">
                <Link to="about-me" spy={true} smooth={true} duration={500}>
                  {t('navigation.aboutUs')}
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="font-title ml-2 h-7 rounded-full bg-primary px-5 text-xs font-bold text-[#391805]">
          <RouterLink to="https://integrador.keepers.com.br" target="_blank">
            {t('navigation.accessSystem')}
          </RouterLink>
        </Button>
      </nav>
    </div>
  )
}
