import { MagnifyingGlass } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useInView } from 'react-intersection-observer'
import { z } from 'zod'

import { Button } from '../ui/button'
import { Input } from '../ui/input'

interface ArticlesSearchProps {
  setSearch: (value: string) => void
}

const searchFormSchema = z.object({
  search: z.string(),
})

type SearchFormSchema = z.infer<typeof searchFormSchema>

export function ArticlesSearch({ setSearch }: ArticlesSearchProps) {
  const { ref, inView } = useInView()

  const { register, handleSubmit } = useForm<SearchFormSchema>()

  function handleSearch({ search }: SearchFormSchema) {
    setSearch(search)
  }

  return (
    <div
      className="m-auto max-w-[1440px] px-10 py-5 lg:px-0 lg:py-10"
      ref={ref}
    >
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
      <form
        onSubmit={handleSubmit(handleSearch)}
        className="mt-6 grid grid-cols-12 items-center justify-between"
      >
        <div className="col-span-12 lg:col-span-10 lg:pr-6">
          <Input
            className="h-12"
            placeholder="Pesquise o artigo aqui..."
            {...register('search')}
          />
        </div>

        <div className="col-span-12  mt-6 h-full  lg:col-span-2 lg:mt-0">
          <Button
            type="submit"
            className="font-title h-12 w-full bg-[#FF5D04] font-semibold lg:h-full"
          >
            Pesquisar <MagnifyingGlass className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  )
}
