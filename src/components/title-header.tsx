import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface TitleHeaderProps {
  title: string
  className?: string
  inView?: boolean
}

export function TitleHeader({ title, className, inView }: TitleHeaderProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center text-center',
        className,
      )}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="font-title text-3xl font-semibold text-[#391805] lg:text-5xl"
      >
        {title}
      </motion.h1>
      <motion.figure
        initial={{ opacity: 0, width: 0 }}
        animate={inView ? { opacity: 1, width: '158px' } : {}}
        transition={{ duration: 1 }}
        className="mt-4 h-2 rounded-sm bg-primary lg:w-52"
      />
    </div>
  )
}
