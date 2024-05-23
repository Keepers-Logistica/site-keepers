import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import {
  BoxArrowDown,
  Car,
  CheckSquare,
  CirclesThreePlus,
  Clipboard,
  Graph,
  Truck,
  UsersThree,
} from '@phosphor-icons/react'
import { ReactNode, useState } from 'react'

import { Button } from '../ui/button'

interface ButtonCarousel {
  id: number
  icon: ReactNode
  label: string
  active: boolean
}

export function SoluctionSection() {
  const [buttons, setButtons] = useState<ButtonCarousel[]>([
    {
      id: 1,
      icon: <Car className="mr-4 h-10 w-10" />,
      label: 'Recebimento',
      active: true,
    },
    {
      id: 2,
      icon: <Clipboard className="mr-4 h-10 w-10" />,
      label: 'Conferência',
      active: false,
    },
    {
      id: 3,
      icon: <CheckSquare className="mr-4 h-10 w-10" />,
      label: 'Armazenagem',
      active: false,
    },
    {
      id: 4,
      icon: <UsersThree className="mr-4 h-10 w-10" />,
      label: 'Manuseio',
      active: false,
    },
    {
      id: 5,
      icon: <BoxArrowDown className="mr-4 h-10 w-10" />,
      label: 'Separação',
      active: false,
    },
    {
      id: 6,
      icon: <CirclesThreePlus className="mr-4 h-10 w-10" />,
      label: 'Expedição',
      active: false,
    },
    {
      id: 7,
      icon: <Truck className="mr-4 h-10 w-10" />,
      label: 'Distribuição',
      active: false,
    },
    {
      id: 8,
      icon: <Graph className="mr-4 h-10 w-10" />,
      label: 'Gestão',
      active: false,
    },
  ])

  function handleSetItem(id: number) {
    setButtons((prevButtons) =>
      prevButtons.map((button) =>
        button.id === id
          ? { ...button, active: true }
          : { ...button, active: false },
      ),
    )
  }
  return (
    <div className="mb-16">
      <div className="mb-16 flex flex-col items-center justify-center">
        <h1 className="font-title text-5xl font-semibold text-[#391805]">
          Serviços & Soluções
        </h1>
        <figure className="mt-4 h-2 w-52 rounded-sm bg-primary" />
      </div>

      <section className="grid grid-cols-4 gap-8 px-20">
        {buttons.map((button) => (
          <Button
            key={button.id}
            variant={button.active ? 'default' : 'outline'}
            className="font-title h-28 text-base"
            onClick={() => handleSetItem(button.id)}
          >
            {button.icon}
            {button.label}
          </Button>
        ))}
      </section>
    </div>
  )
}
