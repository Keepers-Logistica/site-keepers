import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

import { env } from '@/env'
import { useFormatter } from '@/hooks/formatter'
import { article } from '@/store/articles/artcile-slice'

import { Card } from '../ui/card'

interface BlogCardProps {
  title: string
  subtitle?: string
  thumbnail: string
  id: number
  long?: boolean
}

export function ArticleCard({
  title,
  subtitle,
  thumbnail,
  id,
  long,
}: BlogCardProps) {
  const { formatEllipsis } = useFormatter()
  const { ref, inView } = useInView()

  return (
    <motion.div
      ref={ref}
      className={clsx(
        'group w-full cursor-pointer transition-colors duration-500',
        {
          'col-span-12 lg:col-span-12': long,
          'col-span-12 lg:col-span-6': !long,
        },
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
    >
      <Link to={`/article/${id}`}>
        <Card className="bg-trasparent h-[436px] w-full rounded-lg shadow-lg ">
          <img
            src={env.VITE_CMS_API + thumbnail}
            alt="article image"
            className="center h-full w-full rounded-lg object-cover transition-all duration-500 group-hover:opacity-85"
          />
        </Card>
        <section className="mt-4">
          <motion.h4
            className="font-title text-dark font-semibold group-hover:text-orange-500"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
          >
            {formatEllipsis(title, 100)}
          </motion.h4>
          <motion.span
            className="mt-2 text-zinc-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
          >
            {formatEllipsis(subtitle, 100)}
          </motion.span>
        </section>
      </Link>
    </motion.div>
  )
}
