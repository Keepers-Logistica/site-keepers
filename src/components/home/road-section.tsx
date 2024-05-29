import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import linesDecorator from '@/assets/decorators/lines.svg'
import triangulesDecorator from '@/assets/decorators/triangules.svg'
import emailImg from '@/assets/images/email.svg'
import firstRoad from '@/assets/images/first-road.svg'
import firstRoadMobile from '@/assets/images/first-road-mobile.svg'
import secondRoad from '@/assets/images/second-road.svg'
import secondRoadMobile from '@/assets/images/second-road-mobile.svg'
import thirdRoad from '@/assets/images/third-road.svg'
import thirdRoadMobile from '@/assets/images/third-road-mobile.svg'
import { useResponsive } from '@/hooks/responisve'

import { TitleHeader } from '../title-header'
import { SuportSection } from './suport-section'
import { SystemSection } from './system-section'

export function RoadSection() {
  const { ref, inView } = useInView()

  const { Desktop, Mobile } = useResponsive()

  return (
    <div ref={ref} className="m-auto max-w-[1440px]">
      <div className="mx-10 lg:mx-20">
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
          <Desktop>
            <img
              src={firstRoad}
              alt="linha com um caminhão em cima"
              className="ml-[450px] mt-10"
            />
          </Desktop>
          <Mobile>
            <img
              src={firstRoadMobile}
              alt="linha com um caminhão em cima"
              className="mt-10"
            />
          </Mobile>
          <Desktop>
            <motion.img
              src={triangulesDecorator}
              alt="triangulos"
              className="absolute bottom-24 left-24"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </Desktop>
        </div>
        <SystemSection />
        <div className="relative">
          <motion.img
            src={linesDecorator}
            alt="linha"
            className="absolute left-0 top-24 -ml-20 scale-x-[-1]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <Desktop>
            <img
              src={secondRoad}
              alt="linha com um caminhão em cima"
              className="ml-[200px] mt-10"
            />
          </Desktop>
          <Mobile>
            <img
              src={secondRoadMobile}
              alt="linha com um caminhão em cima"
              className="m-auto my-10"
            />
          </Mobile>
          <Desktop>
            <motion.img
              src={triangulesDecorator}
              alt="triangulos"
              className="absolute bottom-24 right-24 -ml-20 scale-x-[-1]"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </Desktop>
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
          <Desktop>
            <img
              src={thirdRoad}
              alt="linha com um caminhão em cima"
              className="mb-20 ml-[200px] mt-10"
            />
          </Desktop>
          <Mobile>
            <img
              src={thirdRoadMobile}
              alt="linha com um caminhão em cima"
              className="m-auto my-10"
            />
          </Mobile>
          <Desktop>
            <motion.img
              src={emailImg}
              alt="emai"
              className="absolute bottom-0 "
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
          </Desktop>
        </div>
      </div>
    </div>
  )
}
