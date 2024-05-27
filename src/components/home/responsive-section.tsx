import { Devices } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import responsiveImg from '@/assets/images/responsive.svg'

export function ResponsiveSection() {
  const { ref, inView } = useInView()

  return (
    <section ref={ref} className="mt-16 flex justify-center gap-16">
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.img
          src={responsiveImg}
          alt="responsive image"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div className="flex items-center gap-4">
          <Devices className="h-10 w-10 text-[#FDCAAE]" />
          <h4 className="font-title text-4xl font-semibold text-[#FF6C1B]">
            Responsividade
          </h4>
        </motion.div>
        <motion.p
          className=" mt-4 w-[500px] text-lg leading-8 text-zinc-800"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Acompanhe pedidos em tempo real em uma plataforma integrada e
          responsiva. Nosso sistema de integração de pedidos foi projetado para
          proporcionar eficiência e precisão nas suas operações logísticas, com
          uma <span className="text-[#FF9C66]">interface intuitiva</span>,
          acessível em qualquer dispositivo.
        </motion.p>
      </motion.div>
    </section>
  )
}
