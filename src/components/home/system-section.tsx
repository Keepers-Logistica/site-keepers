import { Devices } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import systemImg from '@/assets/images/system.svg'

export function SystemSection() {
  const { ref, inView } = useInView()

  return (
    <section
      ref={ref}
      className="mt-16 flex flex-col justify-center space-y-10 lg:flex-row lg:gap-16 lg:space-y-0"
    >
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.img
          src={systemImg}
          className="w-[300px] lg:w-[500px]"
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
            Sistema próprio
          </h4>
        </motion.div>
        <motion.p
          className=" mt-4 text-lg leading-8 text-zinc-800 lg:w-[500px]"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Um sistema próprio de integração de pedidos oferece personalização
          total, maior eficiência, e controle completo dos dados, garantindo
          segurança e confiabilidade. Com suporte técnico especializado, você
          obtém soluções feitas sob medida para o sucesso do seu negócio.
        </motion.p>
      </motion.div>
    </section>
  )
}
