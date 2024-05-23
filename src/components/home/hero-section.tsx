import { CaretDown } from '@phosphor-icons/react'

import { Button } from '../ui/button'
import { Navigation } from './navigation'

export function HeroSection() {
  return (
    <div className="h-[752px]">
      <figure className="bg-hero absolute" />
      <figure className="bg-decorator-home absolute">
        <div className="mt-9 px-20">
          <Navigation />
          <section className="mt-32 flex flex-col items-center justify-center ">
            <div className="flex items-end justify-center">
              <div className="font-title text-center text-4xl font-semibold text-white">
                <span className="text-[#FF9C66]">Integrando</span> soluções{' '}
                <br /> Logisticas para o seu negócio
              </div>
              <figure className="mb-2 ml-2 h-3 w-3 rounded-sm bg-primary" />
            </div>
            <Button className="font-title mt-11 px-6 py-5 font-semibold">
              Nossos serviços
            </Button>
          </section>
        </div>
        <div className="absolute bottom-0 flex w-full items-center justify-center">
          <CaretDown className="mb-5 h-8 w-8 text-zinc-400/55" />
        </div>
      </figure>
    </div>
  )
}
