import { CaretDown } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

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
                <h1 className="mb-4">
                  Keepers sempre <br />
                </h1>
                <span className="text-[#FFC9AB]">
                  <Typewriter
                    words={[
                      'Evoluindo negócios !',
                      'Otimizando processos !',
                      'Enviando pedidos !',
                      'Integrando pedidos !',
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </div>
              {/* <figure className="mb-2 ml-2 h-3 w-3 rounded-sm bg-primary" /> */}
            </div>
            <motion.div whileTap={{ scale: 0.85 }}>
              <Button className="font-title mt-11 px-6 py-5 font-semibold">
                Nossos serviços
              </Button>
            </motion.div>
          </section>
        </div>
        <div className="absolute bottom-0 flex w-full items-center justify-center">
          <CaretDown className="mb-5 h-8 w-8 text-zinc-400/55" />
        </div>
      </figure>
    </div>
  )
}
