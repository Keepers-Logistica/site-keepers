import { ChatTeardropText } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import suportImg from '@/assets/images/suport.svg'

export function SuportSection() {
  const { ref, inView } = useInView()

  return (
    <motion.section
      ref={ref}
      className="mt-16 flex flex-col justify-center space-y-10 lg:flex-row lg:gap-16 lg:space-y-0"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="flex items-center justify-end gap-4">
          <motion.h4
            className="font-title text-4xl font-semibold text-[#FF6C1B]"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Suporte
          </motion.h4>
          <ChatTeardropText className="h-10 w-10 text-[#FDCAAE]" />
        </div>
        <motion.p
          className="mt-4 text-right text-lg leading-8 text-zinc-800 lg:w-[500px]"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Disponível pelos canais de atendimento <br /> (Email, Telefone, Chat),
          Ficou com alguma dúvida? Basta entrar em contato com nossa{' '}
          <span className="text-[#FF9C66]">equipe de atendimento</span>
        </motion.p>
      </div>
      <div className="">
        <motion.img
          src={suportImg}
          className="w-[300px] lg:w-[500px]"
          alt="responsive image"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>
    </motion.section>
  )
}
