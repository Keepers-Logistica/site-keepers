import { PlayCircle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer' // Importe o hook
import { Link } from 'react-router-dom'

import BuildingKeepersImage from '@/assets/images/building-keepers.png'

import { Button } from '../ui/button'

export function AboutMeSection() {
  const { ref, inView } = useInView() // Use o hook useInView para detectar quando o componente está visível

  return (
    <motion.div
      className="my-16 grid grid-cols-12 justify-between px-20"
      ref={ref} // Adicione a referência ao componente
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} // Inicie a animação apenas quando estiver na tela
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={BuildingKeepersImage}
        alt="Prédio da Keepers"
        className="col-span-5"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}} // Inicie a animação apenas quando estiver na tela
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <div className="col-span-1" />
      <motion.section
        className="col-span-5 flex flex-col items-start"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}} // Inicie a animação apenas quando estiver na tela
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mt-4 flex items-center justify-start">
          <figure className="mr-4 h-12 w-3 rounded-sm bg-orange-500" />
          <motion.h1
            className="font-title text-5xl font-semibold text-[#391805]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}} // Inicie a animação apenas quando estiver na tela
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Conheça nos
          </motion.h1>
        </div>
        <motion.h4
          className="font-title mt-4 text-xl text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} // Inicie a animação apenas quando estiver na tela
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Um pouco da nossa história
        </motion.h4>

        <motion.p
          className="z-10 mt-4 text-lg leading-8 text-zinc-800"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Fundada em 1996, a Keepers é hoje um dos principais operadores
          logísticos do país. A Keepers Logística, ao longo desses anos,
          adquiriu grande know-how na logística de pedidos com grande
          fracionamento no atendimento, utilizando as ferramentas mais modernas
          em termos de tecnologia de gerenciamento de armazéns e desenvolvimento
          de operações. Capacidade de entender, planejar e desenvolver,
          respeitando as diversidades e necessidades específicas de cada
          cliente. A Keepers oferece a seus clientes um nível altíssimo,
          superior aos padrões nacionais.
        </motion.p>
        <Link to="https://www.youtube.com/watch?v=Rdd6FLXW0bU" target="_blank">
          <Button className="font-title mt-11 bg-[#FF5D04] px-14 py-5 font-semibold">
            Ver vídeo <PlayCircle className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.section>
    </motion.div>
  )
}
