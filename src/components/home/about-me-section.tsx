import { PlayCircle } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import BuildingKeepersImage from '@/assets/images/building-keepers.png'

import { Button } from '../ui/button'

export function AboutMeSection() {
  return (
    <div className="my-16 grid grid-cols-12 justify-between px-20">
      <img
        src={BuildingKeepersImage}
        alt="Prédio da Keepers"
        className="col-span-5"
      />
      <div className="col-span-1" />
      <section className="col-span-5 flex flex-col items-start">
        <div className="mt-4 flex items-center justify-start">
          <figure className="mr-4 h-12 w-3 rounded-sm bg-orange-500" />
          <h1 className="font-title text-5xl font-semibold text-[#391805]">
            Conheça nos
          </h1>
        </div>
        <h4 className="font-title mt-4 text-xl text-zinc-400">
          Um pouco da nossa história
        </h4>

        <p className=" mt-4 text-lg leading-8 text-zinc-800">
          Fundade em 1996, é hoje um dos principais operadores logísticos do
          país.
          <br /> <br />A Keepers Logística através desses anos, adquiriu grande
          Know How na logística de pedidos com grande fracionamento no
          atendimento, utilizando as ferramentas mais modernas em termos de
          tecnologia de gerenciamento de armazéns e desenvolvimento de operações
          <br /> <br />
          Capacidade de entender, planejar e desenvolver, respeitando as
          diversidades e necessidades especificas de cada cliente.
          <br /> <br />a <strong>KEEPERS</strong> oferece a seus clientes um
          nível altíssimo, superior aos padrões nacionais.
        </p>
        <Link to="https://www.youtube.com/watch?v=Rdd6FLXW0bU" target="_blank">
          <Button className="font-title  mt-11 bg-[#FF5D04] px-14 py-5 font-semibold">
            Ver vídeo <PlayCircle className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>
    </div>
  )
}
