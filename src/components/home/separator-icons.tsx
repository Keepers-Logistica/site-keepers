import { Gear, Package, Truck, Upload } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import ArrowRight from '@/assets/decorators/arrow-right.svg'

export function SeparatorIcons() {
  const { ref, inView } = useInView()

  return (
    <section
      className="z-50 mb-16 flex h-28 w-full items-center justify-center bg-zinc-200"
      ref={ref}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mr-3 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"
      >
        <Upload className="h-8 w-8 text-[#FDCAAE]" />
      </motion.div>
      <motion.img
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        src={ArrowRight}
        alt="seta para direita"
        className="mr-3"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mr-3 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"
      >
        <Gear className="h-8 w-8 text-[#FDCAAE]" />
      </motion.div>
      <motion.img
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        src={ArrowRight}
        alt="seta para direita"
        className="mr-3"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mr-3 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"
      >
        <Package className="h-8 w-8 text-[#FDCAAE]" />
      </motion.div>
      <motion.img
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.9 }}
        src={ArrowRight}
        alt="seta para direita"
        className="mr-3"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="mr-3 flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-primary"
      >
        <Truck className="h-8 w-8 text-[#FDCAAE]" />
      </motion.div>
    </section>
  )
}
