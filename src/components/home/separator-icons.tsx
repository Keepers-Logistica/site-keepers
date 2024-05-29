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
      <div className="flex items-center justify-center ">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mr-3 flex h-[40px] w-[40px] items-center justify-center rounded-xl bg-primary lg:h-[60px] lg:w-[60px]"
        >
          <Upload className="h-6 w-6 text-[#FDCAAE] lg:h-8 lg:w-8" />
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
          className="mr-3 flex h-[40px] w-[40px] items-center justify-center rounded-xl bg-primary lg:h-[60px] lg:w-[60px]"
        >
          <Gear className="h-6 w-6 text-[#FDCAAE] lg:h-8 lg:w-8" />
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
          className="mr-3 flex h-[40px] w-[40px] items-center justify-center rounded-xl bg-primary lg:h-[60px] lg:w-[60px]"
        >
          <Package className="h-6 w-6 text-[#FDCAAE] lg:h-8 lg:w-8" />
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
          className="flex h-[40px] w-[40px] items-center justify-center rounded-xl bg-primary lg:h-[60px] lg:w-[60px]"
        >
          <Truck className="h-6 w-6 text-[#FDCAAE] lg:h-8 lg:w-8" />
        </motion.div>
      </div>
    </section>
  )
}
