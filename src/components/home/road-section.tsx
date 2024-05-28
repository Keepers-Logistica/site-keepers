import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import linesDecorator from '@/assets/decorators/lines.svg'
import triangulesDecorator from '@/assets/decorators/triangules.svg'
import emailImg from '@/assets/images/email.svg'
import firstRoad from '@/assets/images/first-road.svg'
import secondRoad from '@/assets/images/second-road.svg'
import thirdRoad from '@/assets/images/third-road.svg'

import { TitleHeader } from '../title-header'
import { ResponsiveSection } from './responsive-section'
import { SuportSection } from './suport-section'

export function RoadSection() {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className="m-auto max-w-[1440px]">
      <div className=" mx-20 ">
        <TitleHeader title="Nossos Diferenciais" />
        <div className="relative flex grid-cols-12 items-center justify-center">
          <motion.img
            src={linesDecorator}
            alt="linha"
            className="absolute right-0 top-24 -mr-20"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <img
            src={firstRoad}
            alt="linha com um caminhão em cima"
            className="ml-[450px] mt-10"
          />
          <motion.img
            src={triangulesDecorator}
            alt="triangulos"
            className="absolute bottom-24 left-24"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
        <ResponsiveSection />
        <div className="relative">
          <motion.img
            src={linesDecorator}
            alt="linha"
            className="absolute left-0 top-24 -ml-20 scale-x-[-1]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <img
            src={secondRoad}
            alt="linha com caminhão em cima"
            className="ml-48 mt-10"
          />
          <motion.img
            src={triangulesDecorator}
            alt="triangulos"
            className="absolute bottom-24 right-24 -ml-20 scale-x-[-1]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
        <SuportSection />
        <div className="relative ">
          <motion.img
            src={linesDecorator}
            alt="linha"
            className="absolute right-0 top-52 -mr-20"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <img
            src={thirdRoad}
            alt="linha com caminhão em cima"
            className="mb-20 ml-48 mt-10"
          />
          <motion.img
            src={emailImg}
            alt="emai"
            className="absolute bottom-0 "
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  )
}
