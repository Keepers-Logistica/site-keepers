import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import LogoKeepers from '@/assets/images/logo-keepers.svg'
import { cn } from '@/lib/utils'

import { Button } from './ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu'

interface ListItemProps {
  children: ReactNode
  title: string
}

const solutions: { title: string; description: string }[] = [
  {
    title: 'Recebimento',
    description:
      'Toda atividade de recebimento é realizado com agilidade e excelência.',
  },
  {
    title: 'Conferência',
    description:
      'Um controle rígido através de conferências ao longo da movimentação do material.',
  },
  {
    title: 'Armazenagem',
    description:
      'Armazenagem com eficiência e tecnologia de ponta garantindo a qualidade operacional.',
  },
  {
    title: 'Manuseio',
    description:
      'Estamos preparados para diferentes demandas sazonais, podendo desenvolver linhas de montagem específicas de acordo com as necessidades de cada cliente.',
  },
  {
    title: 'Separação',
    description:
      'Separação e preparação de pedidos (picking) de modo diferenciado.',
  },
  {
    title: 'Expedição',
    description:
      'Expedição com comprometimento, seu produto no local e momento exato.',
  },
  {
    title: 'Distribuição',
    description: 'Temos um grande know-how na distribuição de pedidos.',
  },
  {
    title: 'Gestão',
    description:
      'Com uma moderna ferramenta que permite realizar um controle amplo',
  },
]

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
  return (
    <div className="mt-20 flex items-center justify-between">
      <img src={LogoKeepers} alt="logo keepers" />

      <nav className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white">
                Soluções
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {solutions.map((solution) => (
                    <ListItem key={solution.title} title={solution.title}>
                      {solution.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white">
                Nosso sistema
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
                          Integrador
                        </div>
                        <p className="text-sm leading-tight text-zinc-400">
                          Nosso sistema de integração de pedidos em tempo real
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem title="Interface intuitiva">
                    Interface amigavel rápida e facil de utilizar.
                  </ListItem>
                  <ListItem title="Monitoramento">
                    Monitore e acompanhe todos seus pedidos.
                  </ListItem>
                  <ListItem title="Atualizações">
                    Atualizações semanais com novas ferramentas.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger noChevron className="text-white">
                Segmentos
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger noChevron className="text-white">
                Contato
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger noChevron className="text-white">
                Conheça nos
              </NavigationMenuTrigger>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="font-title ml-2 h-7 rounded-full bg-primary px-5 text-xs font-bold text-[#391805]">
          <Link to="https://integrador.keepers.com.br" target="_blank">
            ACESSAR SISTEMA
          </Link>
        </Button>
      </nav>
    </div>
  )
}
