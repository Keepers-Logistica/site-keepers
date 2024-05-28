import { Truck, WhatsappLogo } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Element } from 'react-scroll'

import pointsDecoratorImg from '@/assets/decorators/points.svg'

import { Button } from '../ui/button'

export function ContactMe() {
  const { ref, inView } = useInView()

  return (
    <Element name="contact">
      <motion.div
        ref={ref}
        className="relative flex h-[575px] w-full items-center justify-center bg-gradient-to-b from-[#FF5D04] to-[#993802]"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="z-10 flex flex-col items-center justify-center">
          <h4 className="font-title text-5xl font-bold text-white">
            Ficou interessado ?
          </h4>
          <span className="font-title mt-8 text-4xl text-white">
            Entre em contato conosco para{' '}
            <strong className="text-[#8F3C00]">EVOLUIR</strong> seu negócio
          </span>

          <Button className="font-title mt-12 gap-4 bg-white p-10 text-xl font-bold text-[#FF5D04] hover:bg-orange-200">
            <span>Entrar em contato</span>
            <WhatsappLogo className="h-7 w-7" />
          </Button>
        </div>
        <motion.img
          src={pointsDecoratorImg}
          className="absolute bottom-6 left-6"
          alt="pontos cinza"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.div
          className="absolute right-6 z-0 text-[700px] text-white opacity-5"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Truck className=" opacity-10" />
        </motion.div>
      </motion.div>
    </Element>
  )
}
