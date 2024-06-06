import { MagnifyingGlass } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Button } from '../ui/button'
import { Input } from '../ui/input'

export function ArticlesSearch() {
  const { ref, inView } = useInView()

  return (
    <div className="px-10 py-5 lg:px-40 lg:py-10" ref={ref}>
      <div className="mt-4 flex flex-col items-start justify-start">
        <div className="flex">
          <figure className="mr-4 h-12 w-3 rounded-sm bg-orange-500" />
          <motion.h1
            className="font-title text-5xl font-semibold text-[#391805]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Artigos
          </motion.h1>
        </div>
        <motion.h4
          className="font-title mt-4 text-xl text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Pesquise os artigos do seu interrese ou veja as ultimas noticias !
        </motion.h4>
      </div>
      <form className="mt-6 grid grid-cols-12 items-center justify-between">
        <div className="col-span-12 lg:col-span-10 lg:pr-6">
          <Input className="h-12" placeholder="Pesquise o artigo aqui..." />
        </div>

        <div className="col-span-12  mt-6 h-full  lg:col-span-2 lg:mt-0">
          <Button className="font-title h-12 w-full bg-[#FF5D04] font-semibold lg:h-full">
            Pesquisar <MagnifyingGlass className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  )
}
