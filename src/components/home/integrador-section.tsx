import { Desktop, Gear, PlayCircle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ReactPlayer from 'react-player/lazy'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'

import IntegradorImg from '@/assets/images/integrador.png'
import videoKeepers from '@/assets/videos/integrador.mp4'

import { TitleHeader } from '../title-header'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

export function IntegradorSection() {
  const { ref, inView } = useInView()
  return (
    <Element name="integrador">
      <section
        ref={ref}
        className="m-auto mb-52 max-w-[1440px] overflow-visible"
      >
        <TitleHeader title="Um Sistema 100% Online" className="mb-20" />
        <div className="mx-20 grid grid-cols-12">
          <motion.div
            className="col-span-6"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Gear className="h-10 w-10 text-[#FDCAAE]" />
              <h3 className="font-title text-5xl font-semibold text-[#391805]">
                Integrador
              </h3>
            </div>
            <motion.h4
              className="font-title mt-4 text-xl text-zinc-400"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sistema de integração
            </motion.h4>

            <motion.p
              className="mt-4 text-lg leading-8 text-zinc-800"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Nosso sistema de integração de pedidos e notas fiscais otimiza
              suas operações logísticas com eficiência e precisão.
              <br /> <br />
              Acompanhe pedidos em <strong>tempo real</strong>, emita notas
              fiscais, gere relatórios detalhados, crie novos pedidos, visualize
              o estoque atualizado e importe e acompanhe todas as notas fiscais.
              Tudo isso em uma plataforma integrada com interface intuitiva.
              Além disso, você pode falar diretamente com nossos atendentes pelo
              chat para obter suporte imediato.
            </motion.p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="font-title mt-11 bg-[#FF5D04] px-14 py-5 font-semibold">
                  Ver vídeo <PlayCircle className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="m-0 flex w-fit items-center justify-center border-none bg-transparent p-0">
                <ReactPlayer
                  url={videoKeepers}
                  height={695}
                  width={1230}
                  playing
                  style={{
                    overflow: 'hidden',
                    borderRadius: '20px',
                    boxShadow: '0px 0px 20px 10px rgba(255, 99, 71, 0.5)',
                  }}
                  controls={true}
                />
              </DialogContent>
            </Dialog>
            <Link to="https://integrador.keepers.com.br">
              <Button
                variant="outline"
                className="font-title ml-3 mt-11 border-[#FF5D04] px-14 py-5 font-semibold text-[#FF5D04] hover:text-orange-400"
              >
                Acessar <Desktop className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
          <div className="col-span-6 ml-8">
            <motion.img
              initial={{ opacity: 0, x: '100vw' }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              src={IntegradorImg}
              className="absolute w-[1000px]"
              alt="system image"
            />
          </div>
        </div>
      </section>
    </Element>
  )
}
